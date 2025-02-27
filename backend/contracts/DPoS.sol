// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract DPoS {
    struct Delegate {
        address delegateAddress;
        uint stake;
    }

    mapping(address => uint) public stakes;
    Delegate[] public delegates;

    event StakeAdded(address staker, uint amount);
    event DelegateElected(address delegate);

    function stakeTokens(uint _amount) public {
        require(_amount > 0, "Stake amount must be greater than 0");

        stakes[msg.sender] += _amount;
        emit StakeAdded(msg.sender, _amount);
    }

    function electDelegate(address _delegate) public {
        require(stakes[_delegate] > 0, "Delegate must have a stake");

        delegates.push(Delegate(_delegate, stakes[_delegate]));
        emit DelegateElected(_delegate);
    }
}