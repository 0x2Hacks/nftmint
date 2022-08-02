//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@divergencetech/ethier/contracts/erc721/ERC721ACommon.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract OnePeeNFT is ERC721A, Ownable, ReentrancyGuard {
    uint256 public mintPrice;
    uint256 public maxSupply;
    uint256 public teamSupply;
    uint256 public maxPerWallet;
    bool public isPublicMintEnalbed;
    bool public isWhiteListMintEnabled;
    string internal baseTokenUri;
    address payable public withdrawWallet;
    mapping(address => uint256) public walletMints;
    mapping(address => bool) public whiteList;
    uint256 public whiteListNum;

    constructor() payable ERC721A('OnePees', 'OPee') {
        mintPrice = 0.001 ether;
        maxSupply = 20;
        teamSupply = 15;
        maxPerWallet = 5;
        withdrawWallet = payable(msg.sender);
    }

    function setMintPrice(uint256 _price) external onlyOwner {
        mintPrice = _price;
    }

    function setIsPublicMintEnabled(bool isPublicMintEnalbed_) external onlyOwner {
        isPublicMintEnalbed = isPublicMintEnalbed_;
        isWhiteListMintEnabled = true;
    }

    function setIsWhiteListMintEnabled(bool isWhiteListMintEnabled_) external onlyOwner {
        isWhiteListMintEnabled = isWhiteListMintEnabled_;
    }

    function setBaseTokenUri(string calldata baseTokenUri_) external onlyOwner {
        baseTokenUri = baseTokenUri_;
    }

    function tokenURI(uint256 tokenId_) public view override returns (string memory) {
        require(_exists(tokenId_), 'Token does not exist!');
        return string(abi.encodePacked(baseTokenUri, Strings.toString(tokenId_), ".json"));
    }

    function withdraw() external onlyOwner nonReentrant {
        (bool success, ) = withdrawWallet.call{ value: address(this).balance }('');
        require(success, 'withdraw failed');
    }

    function setWhiteList(address[] calldata _whiteList) public onlyOwner{
        for (uint256 i = 0; i < _whiteList.length; i++) {
            if (whiteList[_whiteList[i]] != true) {
                whiteList[_whiteList[i]] = true;
                whiteListNum++;
            }
        }
    }

    function mint(uint256 quantity_) public payable {
        require(isPublicMintEnalbed, 'minting not enabled');
        if (isWhiteListMintEnabled) {
            require(whiteList[msg.sender], 'not in white list');
        }
        require(msg.value == quantity_ * mintPrice, 'wrong mint value');
        require(totalSupply() + quantity_ <= (maxSupply - teamSupply), 'sold out');
        require(walletMints[msg.sender] + quantity_ <= maxPerWallet, 'exceed max wallet');

        walletMints[msg.sender] += quantity_;
        _safeMint(msg.sender, quantity_);
    }

    function teamMint() public onlyOwner{
        require(totalSupply() == (maxSupply - teamSupply), 'wait sold out');
        walletMints[msg.sender] += teamSupply;
        _safeMint(msg.sender, teamSupply);
    }
}