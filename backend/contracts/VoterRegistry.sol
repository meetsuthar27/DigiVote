// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract VoterRegistry {
    struct Voter {
        string name;
        bool isRegistered;
    }

    mapping(address => Voter) public voters;
    address public admin;

    event VoterRegistered(address voter, string name);

    constructor() {
        admin = msg.sender;
    }

    function registerVoter(string memory _name) public {
        require(!voters[msg.sender].isRegistered, "Voter already registered");

        voters[msg.sender] = Voter(_name, true);
        emit VoterRegistered(msg.sender, _name);
    }

    function isVoterRegistered(address _voter) public view returns (bool) {
        return voters[_voter].isRegistered;
    }
}