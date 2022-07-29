import { useState } from 'react';
import { ethers, BigNumber } from 'ethers';
import  { Box, Button, Flex, Input, Text} from "@chakra-ui/react";
import onePeeNFT from './OnePeeNFT.json';

const onePeeNFTAdderess = '0x616a96593b91433D88541827a16cec0717e35Cda';

const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                onePeeNFTAdderess,
                onePeeNFT.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.02 * mintAmount).toString())
                });
                console.log('response: ', response);
            } catch (err) {
                console.log('error: ', err)
            }
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () => {
        if (mintAmount >= 3) return;
        setMintAmount(mintAmount + 1);
    };

    return (
        <Flex justify="center" align="center" height="100vh" paddingBottom="5vw">
            <Box width="80%">
                <div>
                    <Text
                        className = "thePirates"
                        fontSize="4vw"
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
                        I'm Lucy, The Punk Who's Gonna Be King of the Pirates.
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
                        textShadow="0 3px #000000"
                        color="#ffff1a"
                    >
                        You must be connected to Mint. Rinkeby testnet testing.
                    </Text>
                )}
            </Box>
        </Flex>
    )
};

export default MainMint;    