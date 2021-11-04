pragma solidity ^0.6.7;

//Test contract
contract SecondContract {
    uint number;
    string[] names;
    mapping (string => uint) public phoneNumbers;

    function addMobileNumber(string memory _name, uint _mobileNumber) public {
        phoneNumbers[_name] = _mobileNumber;
    }

    function getMobileNumber(string memory _name) public view returns (uint) {
        return phoneNumbers[_name];
    }

    function addName(string memory _name) public {
        names.push(_name);
    }

    function getName(uint _index) public view returns (string memory) {
        return names[_index];
    }

    function changeNumber(uint _num) public {
        number = _num;
    }

    function getNumber() public view returns (uint) {
        return number;
    }
}
