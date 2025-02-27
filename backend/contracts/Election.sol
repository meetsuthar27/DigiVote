// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Election {
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    mapping(uint => Candidate) public candidates;
    mapping(address => bool) public hasVoted;
    uint public candidatesCount;
    address public electionAdmin;

    event Voted(address indexed voter, uint candidateId);

    constructor() {
        electionAdmin = msg.sender;
    }

    function addCandidate(string memory _name) public {
        require(msg.sender == electionAdmin, "Only admin can add candidates");
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }

    function vote(uint _candidateId) public {
        require(!hasVoted[msg.sender], "Already voted");
        require(_candidateId > 0 && _candidateId <= candidatesCount, "Invalid candidate");

        candidates[_candidateId].voteCount++;
        hasVoted[msg.sender] = true;

        emit Voted(msg.sender, _candidateId);
    }

    function getCandidate(uint _id) public view returns (Candidate memory) {
        return candidates[_id];
    }
}