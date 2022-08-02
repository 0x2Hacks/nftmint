import { useState } from 'react';
import { ethers, BigNumber } from 'ethers';
import  { Box, Button, Flex, Input, Text} from "@chakra-ui/react";
import onePeeNFT from './OnePeeNFT.json';
import PopUp from './PopUp';

const onePeeNFTAdderess = '0x1C4bC471e76257328E7145D33E2003d10345870c';
const maxPerWallet = 5;
const maxSupply = 20;

const MainMint = ({ accounts, setAccounts }) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
                onePeeNFTAdderess,
                onePeeNFT.abi,
                signer
        );

    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);
    const [buttonPopup, setButtonPopup] = useState(false);
    const [mintNum, setMintNum] = useState(maxSupply);
    setInterval(updateMint, 5000);
    
    async function updateMint() {
        contract.totalSupply().then((value)=>{setMintNum(value.toNumber())});
    }

    async function handleMint() {
        if (window.ethereum) {
            const mintPrice = await contract.mintPrice();
            console.log(mintPrice.toNumber());
            try {
                const response = await contract.mint(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.001 * mintAmount).toString())
                });
                console.log('response: ', response);
            } catch (err) {
                console.log(err.reason);
                setButtonPopup(err.reason);
                setTimeout(()=> setButtonPopup(false),5000);
            }
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () => {
        if (mintAmount >= maxPerWallet) return;
        setMintAmount(mintAmount + 1);
    };

    return (
        <div>
            <PopUp trigger={buttonPopup}>
                <Box
                    position="absolute"
                    width="40%"
                    height="20%"
                    backgroundColor="white"
                    opacity="0.7"
                    left="30%"
                    color="red"
                    fontSize="1.5vw"
                    justifyContent="center"
                    padding="2vw"
                >
                    <Text>{buttonPopup}</Text>
                </Box>
            </PopUp>
            <Flex justify="center" align="center" height="100vh" paddingBottom="5vw">
                <Box width="80%">
                    <div>
                        <Text
                            className="thePirates"
                            fontSize="5vw"
                            textShadow="0 0 0.05em #fff, 0 0 0.3em #f6ff00, 0 0 0.1em #00001a"
                            color="#ffff00"
                            >
                                The Pirates
                        </Text>
                        <Text 
                            fontSize="2.5vw"
                            letterSpacing="-5.5%"
                            fontFamily="VT323"
                            textShadow="0 2px 2px #000000">
                            {mintNum} / {maxSupply} minted
                        </Text>
                    </div>
                    {isConnected ? (
                        <div>
                            <Flex align="center" justify="center">
                                <Button
                                    backgroundColor="#ffff1a"
                                    borderRadius="1vw"
                                    boxShadow="0px 2px 2px 1px #0F0F0F"
                                    color="black"
                                    cursor="pointer"
                                    fontSize="1vw"
                                    fontFamily="inherit"
                                    padding="1vw"
                                    marginTop="1vw"
                                    onClick={handleDecrement}
                                >
                                    -
                                </Button>
                                <Input 
                                    readOnly
                                    fontFamily="inherit"
                                    borderRadius="1vw"
                                    width="5vw"
                                    height="3vw"
                                    textAlign="center"
                                    paddingLeft="1.5vw"
                                    fontSize="1vw"
                                    marginTop="1vw"
                                    type="number"
                                    value={mintAmount}
                                />
                                <Button
                                    backgroundColor="#ffff1a"
                                    borderRadius="1vw"
                                    boxShadow="0px 2px 2px 1px #0F0F0F"
                                    color="black"
                                    cursor="pointer"
                                    fontSize="1vw"
                                    fontFamily="inherit"
                                    padding="1vw"
                                    marginTop="1vw"
                                    onClick={handleIncrement}
                                >
                                    +
                                </Button>
                            </Flex>
                            <Button
                                backgroundColor="#ffff1a"
                                borderRadius="1vw"
                                boxShadow="0px 2px 2px 1px #0F0F0F"
                                color="black"
                                cursor="pointer"
                                fontSize="1vw"
                                fontFamily="inherit"
                                padding="1vw"
                                marginTop="1vw"
                                onClick={handleMint}
                            >
                                Mint Now
                            </Button>
                        </div>
                    ) : (
                        <Text
                            marginTop="3vw"
                            fontSize="2vw"
                            letterSpacing="-5.5%"
                            fontFamily="VT323"
                            textShadow="0 0.2vm #000000"
                            color="#ffff1a"
                        >
                            You must be connected to Mint. Rinkeby testnet testing.
                        </Text>
                    )}
                </Box>
            </Flex>
        </div>
    )
};

export default MainMint;    