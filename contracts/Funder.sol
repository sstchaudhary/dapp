// SPDX-License-Identifier: MIT
pragma solidity <=0.8.17;

contract Funder{

uint public numOfFunder;
 mapping(uint=>address) private funders;

 receive() external payable{}

function transfer() external payable{

     funders[numOfFunder]=msg.sender;

}

function withdraw (uint withdrawAmount) external{
     require(withdrawAmount<=2,"you cannot withdraw ammount more than 2 ETH");

     payable(msg.sender).transfer(withdrawAmount);
}

}