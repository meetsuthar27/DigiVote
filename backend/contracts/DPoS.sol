// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract DPoS {
    struct Stakeholder {
        uint stake;
        address delegate;
        bool hasDelegated;
    }

    receive() external payable {} // Allows receiving plain ETH transactions
    fallback() external payable {} // Handles incorrect function calls

    mapping(address => Stakeholder) public stakeholders;
    mapping(address => uint) public delegateVotes; // Delegated votes per delegate
    address[] public delegates; // List of delegates
    uint public totalStake;

    event Staked(address indexed voter, uint amount);
    event VoteDelegated(address indexed from, address indexed to);
    event Withdrawn(address indexed voter, uint amount);

    modifier onlyValidStake(uint _amount) {
        require(_amount > 0, "Stake must be greater than zero");
        _;
    }

    function stake() external payable onlyValidStake(msg.value) {
        stakeholders[msg.sender].stake += msg.value;
        totalStake += msg.value;
        emit Staked(msg.sender, msg.value);
    }

    function delegateVote(address _delegate) public {
        require(stakeholders[msg.sender].stake > 0, "Must have stake to delegate");
        require(!stakeholders[msg.sender].hasDelegated, "Already delegated");
        require(_delegate != msg.sender, "Cannot delegate to yourself");

        stakeholders[msg.sender].delegate = _delegate;
        stakeholders[msg.sender].hasDelegated = true;
        delegateVotes[_delegate] += stakeholders[msg.sender].stake;

        // Only add to delegate list if it's a new delegate
        bool isNew = true;
        for (uint i = 0; i < delegates.length; i++) {
            if (delegates[i] == _delegate) {
                isNew = false;
                break;
            }
        }
        if (isNew) {
            delegates.push(_delegate);
        }

        emit VoteDelegated(msg.sender, _delegate);
    }

    function getDelegateVotes(address _delegate) public view returns (uint) {
        return delegateVotes[_delegate];
    }

    function withdrawStake(uint _amount) public {
        require(stakeholders[msg.sender].stake >= _amount, "Insufficient stake");

        stakeholders[msg.sender].stake -= _amount;
        totalStake -= _amount;
        
        // Transfer ETH back to user
        payable(msg.sender).transfer(_amount);

        emit Withdrawn(msg.sender, _amount);
    }

    function getDelegates() public view returns (address[] memory) {
        return delegates;
    }

    function getStake(address _staker) public view returns (uint) {
        return stakeholders[_staker].stake;
    }
}