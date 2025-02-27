// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./VoterRegistry.sol";
import "./Election.sol";

contract Voting {
    VoterRegistry voterRegistry;
    Election election;

    event VoteCasted(address voter, uint candidateId);

    constructor(address _voterRegistry, address _election) {
        voterRegistry = VoterRegistry(_voterRegistry);
        election = Election(_election);
    }

    function castVote(uint _candidateId) public {
        require(voterRegistry.isVoterRegistered(msg.sender), "Not registered to vote");

        election.vote(_candidateId);
        emit VoteCasted(msg.sender, _candidateId);
    }
}