import React from "react";
import  { Box, Button, Flex, Image, Link, Spacer} from "@chakra-ui/react";
import Facebook from "./assets/social-media-icons/facebook_32x32.png";
import Twitter from "./assets/social-media-icons/twitter_32x32.png";
import Email from "./assets/social-media-icons/email_32x32.png";

const NavBar =  ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    return (
        <Flex justify="space-between" align="center" padding="2%">
            <Flex justify="space-around" width="20%" padding="0 3%">
                <Link href="https://www.facebook.com">
                    <Image src={Facebook} boxSize="2vw" margin="0 1%" />
                </Link>
                <Link href="https://www.twitter.com">
                    <Image src={Twitter} boxSize="2vw" margin="0 1%" />
                </Link>
                <Link href="https://www.gmail.com">
                    <Image src={Email} boxSize="2vw" margin="0 1%" />
                </Link>
            </Flex>
            <Flex justify="space-around" align="center" width="20%" padding="2%">
                <Box
                    margin="0 2vw"
                    fontSize="1vw"
                    textShadow="0 2px 2px #000000"
                >Story</Box>
                <Spacer />
                <Box
                    margin="0 2vw"
                    fontSize="1vw"
                    textShadow="0 2px 2px #000000"
                >RoadMap</Box>
                <Spacer />
                <Box
                    margin="0 2vw"
                    fontSize="1vw"
                    textShadow="0 2px 2px #000000"
                >Team</Box>
                <Spacer />
            </Flex>
            {isConnected ? (
                <Box margin="0 2vw" color="#ffff1a" fontSize="1vw">Connected</Box>
            ) : (
                <Button
                    backgroundColor="#ffff1a"
                    borderRadius="1vw"
                    boxShadow="0px 2px 2px 1px #0F0F0F"
                    color="black"
                    cursor="pointer"
                    fontSize="1vw"
                    fontFamily="inherit"
                    padding="1%"
                    margin="0 1%"
                    onClick={connectAccount}
                >
                    Connect to Mint
                </Button>
            )}  
        </Flex>
    )
};

export default NavBar;
