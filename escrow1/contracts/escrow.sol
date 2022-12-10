pragma solidity >=0.4.21 <0.6.0;

contract SecondHandSmartPhoneMarket {
// Product ID of the smartphone
uint32 public productId = 0;
// Time stamp when the smartphone is posted
uint32 public timeStamp = 0;

// Details of the smart phone
struct SmartPhone {
    uint32 productId;
    string name;
    string model;
    string specs;
    uint32 price;
    address sellerAddress;
    uint32 timeStamp;
}

// List of available smart phones
mapping(uint32 => SmartPhone) public smartPhones;

// Buyer's deposit amount
uint32 public deposit;

// Seller address
address public seller;

// Buyer address
address public buyer;

// Events
event SmartPhoneAdded(uint32 indexed productId, string name, string model, string specs, uint32 price, address sellerAddress, uint32 timeStamp);
event Deposit(address buyer, uint32 deposit);
event Refund(address buyer, uint32 deposit);
event Transfer(address seller, uint32 deposit);

// Adds a smart phone to the market
function addSmartPhone(string memory name, string memory model, string memory specs, uint32 price, address sellerAddress) public {
    productId++;
    timeStamp = uint32(now);

    smartPhones[productId].productId = productId;
    smartPhones[productId].name = name;
    smartPhones[productId].model = model;
    smartPhones[productId].specs = specs;
    smartPhones[productId].price = price;
    smartPhones[productId].sellerAddress = sellerAddress;
    smartPhones[productId].timeStamp = timeStamp;

    emit SmartPhoneAdded(productId, name, model, specs, price, sellerAddress, timeStamp);
}

// Deposits the collateral by the buyer
function deposit(uint32 _productId) public payable {
    require(msg.value == smartPhones[_productId].price, "Incorrect deposit amount");

    deposit = msg.value;
    seller = smartPhones[_productId].sellerAddress;
    buyer = msg.sender;

    emit Deposit(buyer, deposit);
}

// Refunds the collateral to the buyer
function refund() public {
    require(msg.sender == buyer, "Only the buyer can refund the deposit");

    buyer.transfer(deposit);

    emit Refund(buyer, deposit);
}

// Transfers the collateral to the seller
function transfer() public {
    require(msg.sender == seller, "Only the seller can transfer the deposit");

    seller.transfer(deposit);

    emit Transfer(seller, deposit);
}
}