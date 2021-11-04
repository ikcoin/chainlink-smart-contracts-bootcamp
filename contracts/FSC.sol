pragma solidity ^0.6.7;

//Test contract
contract FirstContract {
    uint number;

    function changeNumber(uint _num) public {
        number = _num;
    }

    function getNumber() public view returns (uint) {
        return number;
    }
}
