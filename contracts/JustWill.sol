contract JustWillIt {
  address owner;

  bytes32 public fileHash;
  
  struct Client {
    address client;
    bytes32 hash;
  }
  
  mapping (address => Client) public clients;
  
  modifier isOwner(address s)
  {
    if (s != owner) throw;
    _;
  }
  
  function JustWillIt() {
    owner = msg.sender;
  }
  
  function getClient(address a) public constant returns(address) {
    return clients[a].client;
  }
  
  function updateClient(address s, bytes32 hash) {
    // Throw if the sender is already seeding a chunk of this file
    if(clients[s].client != 0x0) throw;
    clients[s].hash = hash;
  }
  
  function IPFSvalidate(bytes chunk) isOwner(msg.sender) internal returns(bool) {
    bytes memory content = bytes(chunk);
    bytes memory len = to_binary(content.length);
    // 6 + content byte length
    bytes memory messagelen = to_binary(6 + content.length);
    //bytes32 sha = sha256(merkledagprefix, messagelen, unixfsprefix, len, content, postfix, len);
    // if (sha == challengeHash) {
    //   return true;
    // } else {
    //   return false;
    // }
    return true;
  }
  
  function to_binary(uint256 x) returns (bytes) {
    if (x == 0) {
        return new bytes(0);
    }
    else {
        byte s = byte(x % 256);
        bytes memory r = new bytes(1);
        r[0] = s;
        return concat(to_binary(x / 256), r);
    }
  }
  
  function concat(bytes byteArray, bytes byteArray2) returns (bytes) {
    bytes memory returnArray = new bytes(byteArray.length + byteArray2.length);
    for (uint16 i = 0; i < byteArray.length; i++) {
        returnArray[i] = byteArray[i];
    }
    for (i; i < (byteArray.length + byteArray2.length); i++) {
        returnArray[i] = byteArray2[i - byteArray.length];
    }
    return returnArray;
  }
}