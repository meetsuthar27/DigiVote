// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract ElectionDPoS {
    
    struct Voter {
        bool isVerified;
        bool hasVoted;
        address delegate;
    }

    struct Candidate {
        string name;
        uint voteCount;
        bool isVerified;
    }

    address public electionOrganizer;
    string public electionName;
    bool public electionOngoing;
    uint public totalVotes;
    
    mapping(address => Voter) public voters;
    mapping(uint => Candidate) public candidates;
    mapping(address => uint) public delegates; // Tracks delegated votes

    uint public candidateCount;

    event VoterVerified(address voter);
    event CandidateVerified(uint candidateId);
    event Voted(address voter, uint candidateId);
    event VoteDelegated(address from, address to);
    event ElectionStarted(string name);
    event ElectionEnded(uint winnerId, string winnerName, uint votes);

    modifier onlyOrganizer() {
        require(msg.sender == electionOrganizer, "Only the election organizer can perform this action");
        _;
    }

    modifier electionOngoingCheck() {
        require(electionOngoing, "Election is not active");
        _;
    }

    constructor(string memory _electionName) {
        electionOrganizer = msg.sender;
        electionName = _electionName;
        electionOngoing = false;
    }

    function startElection() public onlyOrganizer {
        require(!electionOngoing, "Election already started");
        electionOngoing = true;
        emit ElectionStarted(electionName);
    }

    function endElection() public onlyOrganizer {
        require(electionOngoing, "Election is not active");
        electionOngoing = false;
        
        uint winningVoteCount = 0;
        uint winnerId;

        for (uint i = 1; i <= candidateCount; i++) {
            if (candidates[i].voteCount > winningVoteCount) {
                winningVoteCount = candidates[i].voteCount;
                winnerId = i;
            }
        }

        emit ElectionEnded(winnerId, candidates[winnerId].name, winningVoteCount);
    }

    function verifyVoter(address _voter) public onlyOrganizer {
        require(!voters[_voter].isVerified, "Voter is already verified");
        voters[_voter].isVerified = true;
        emit VoterVerified(_voter);
    }

    function addCandidate(string memory _name) public onlyOrganizer {
        candidateCount++;
        candidates[candidateCount] = Candidate(_name, 0, false);
    }

    function verifyCandidate(uint _candidateId) public onlyOrganizer {
        require(_candidateId > 0 && _candidateId <= candidateCount, "Invalid candidate ID");
        require(!candidates[_candidateId].isVerified, "Candidate already verified");

        candidates[_candidateId].isVerified = true;
        emit CandidateVerified(_candidateId);
    }

    function delegateVote(address _delegate) public electionOngoingCheck {
        require(voters[msg.sender].isVerified, "Voter is not verified");
        require(!voters[msg.sender].hasVoted, "Voter has already voted");
        require(_delegate != msg.sender, "Cannot delegate to yourself");
        require(voters[_delegate].isVerified, "Delegate must be a verified voter");

        voters[msg.sender].hasVoted = true;
        voters[msg.sender].delegate = _delegate;
        delegates[_delegate] += 1;

        emit VoteDelegated(msg.sender, _delegate);
    }

    function vote(uint _candidateId) public electionOngoingCheck {
        require(voters[msg.sender].isVerified, "Voter is not verified");
        require(!voters[msg.sender].hasVoted, "Voter has already voted");
        require(_candidateId > 0 && _candidateId <= candidateCount, "Invalid candidate ID");
        require(candidates[_candidateId].isVerified, "Candidate is not verified");

        voters[msg.sender].hasVoted = true;

        if (voters[msg.sender].delegate != address(0)) {
            address delegate = voters[msg.sender].delegate;
            candidates[_candidateId].voteCount += delegates[delegate] + 1;
            delegates[delegate] = 0;
        } else {
            candidates[_candidateId].voteCount++;
        }

        totalVotes++;
        emit Voted(msg.sender, _candidateId);
    }

    function getResults() public view returns (uint winnerId, string memory winnerName, uint winningVoteCount) {
        require(!electionOngoing, "Election is still ongoing");

        uint highestVotes = 0;
        uint winningCandidateId;

        for (uint i = 1; i <= candidateCount; i++) {
            if (candidates[i].voteCount > highestVotes) {
                highestVotes = candidates[i].voteCount;
                winningCandidateId = i;
            }
        }

        return (winningCandidateId, candidates[winningCandidateId].name, highestVotes);
    }
}