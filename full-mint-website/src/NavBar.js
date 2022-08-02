import { useState } from 'react';
import React from "react";
import  { Box, Button, Flex, Image, Link, Spacer, Text } from "@chakra-ui/react";
import Facebook from "./assets/social-media-icons/facebook_32x32.png";
import Twitter from "./assets/social-media-icons/twitter_32x32.png";
import Email from "./assets/social-media-icons/email_32x32.png";
import PopUp from './PopUp';
import p4507 from "./assets/pi/4507.png";
import p5177 from "./assets/pi/5177.png";
import p6094 from "./assets/pi/6094.png";
import p9003 from "./assets/pi/9003.png";
import p9856 from "./assets/pi/9856.png";
import rmap from "./assets/roadmap.png";

const NavBar =  ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);
    const [storyUp, setStoryUp] = useState(false);
    const [roadmapUp, setRoadmapUp] = useState(false);
    const [teamUp, setTeamUp] = useState(false);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    return (
        <div>
            <PopUp trigger={storyUp}>
                <Box
                    position="absolute"
                    width="90%"
                    height="72%"
                    opacity="0.95"
                    top="20%"
                    left="5%"
                    color="white"
                    backgroundColor="black"
                    fontSize="1vw"
                    justifyContent="center"
                    padding="2vw"
                    backgroundSize="cover"
                    backgroundRepeat="no-repeat"
                    zIndex="20"
                    borderRadius="1vw"
                >
                    <Flex 
                        justify="space-between"
                        align="center"
                        flexDirection="column"
                        textShadow="0 0 0.05em #fff, 0 0 0.3em #f6ff00, 0 0 0.1em #f6ff00"
                    >
                        <Text>I'm Lucy,The Punk Who's Gonna Be King of the Pirates.</Text>
                        <Text>I'm gonna be the King of the Pirates!</Text>
                        <Text>Wealth, Fame, Power.</Text>
                        <Text>The man who had acquired everything in this world, the Pirate King,</Text>
                        <Text>Satoshi·D·Nakamoto.</Text>
                        <Text>The final words that were said before he disappear, sent people to the seas.</Text>
                        <Text>"My wealth and treasure? If you want it, I'll let you have it!</Text>
                        <Text>Look for it! I left it all at that place!"</Text>
                        <Text>Punks now, chasing their dreams, head towards the Grand Line.</Text>
                        <Text>The world now enters a Great Age of Pirates!</Text>
                    </Flex>
                </Box>
            </PopUp>
            <PopUp trigger={roadmapUp}>
                <Image
                    position="absolute"
                    width="90%"
                    height="72%"
                    opacity="0.9"
                    top="20%"
                    left="5%"
                    color="white"
                    backgroundColor="black"
                    fontSize="1vw"
                    justifyContent="center"
                    padding="2vw"
                    backgroundSize="cover"
                    backgroundRepeat="no-repeat"
                    zIndex="20"
                    borderRadius="1vw"
                    src={rmap}
                />
            </PopUp>
            <PopUp trigger={teamUp}>
                <Box
                    position="absolute"
                    width="90%"
                    height="72%"
                    opacity="0.95"
                    top="20%"
                    left="5%"
                    color="white"
                    backgroundColor="black"
                    fontSize="1vw"
                    justifyContent="center"
                    padding="2vw"
                    backgroundSize="cover"
                    backgroundRepeat="no-repeat"
                    zIndex="20"
                    borderRadius="1vw"
                >
                    <Flex 
                        flexDirection="column"
                        textShadow="0 0 0.05em #fff, 0 0 0.3em #f6ff00, 0 0 0.1em #f6ff00"
                        rowGap = "1.5vw"
                    >
                        <Flex columnGap="3vw">
                            <Image src={p4507} boxSize="5vw" margin="0 1%" />
                            <Text>Lucy</Text>
                            <Text>Dreamer</Text>
                        </Flex>
                        <Flex columnGap="3vw">
                            <Image src={p5177} boxSize="5vw" margin="0 1%"/>
                            <Text>Matsuura</Text>
                            <Text>Artist</Text>
                        </Flex>
                        <Flex columnGap="3vw">
                            <Image src={p6094} boxSize="5vw" margin="0 1%"/>
                            <Text>Yoshie</Text>
                            <Text>Mod</Text>
                        </Flex>
                        <Flex columnGap="3vw">
                            <Image src={p9003} boxSize="5vw" margin="0 1%"/>
                            <Text>Matsuyama</Text>
                            <Text>Engager</Text>
                        </Flex>
                        <Flex columnGap="3vw">
                            <Image src={p9856} boxSize="5vw" margin="0 1%"/>
                            <Text>Miki</Text>
                            <Text>Developer</Text>
                        </Flex>
                    </Flex>
                </Box>
            </PopUp>
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
                    <Button
                        margin="0 2vw"
                        fontSize="1vw"
                        textShadow="0 2px 2px #000000"
                        fontFamily="inherit"
                        color="white"
                        cursor="pointer"
                        background="transparent"
                        borderWidth="0"
                        onMouseEnter={()=>setStoryUp(true)}
                        onMouseLeave={()=>setStoryUp(false)}
                    >Story</Button>
                    <Spacer />
                    <Button
                        margin="0 2vw"
                        fontSize="1vw"
                        textShadow="0 2px 2px #000000"
                        fontFamily="inherit"
                        color="white"
                        cursor="pointer"
                        background="transparent"
                        borderWidth="0"
                        onMouseEnter={()=>setRoadmapUp(true)}
                        onMouseLeave={()=>setRoadmapUp(false)}
                    >RoadMap</Button>
                    <Spacer />
                    <Button
                        margin="0 2vw"
                        fontSize="1vw"
                        textShadow="0 2px 2px #000000"
                        fontFamily="inherit"
                        color="white"
                        cursor="pointer"
                        background="transparent"
                        borderWidth="0"
                        onMouseEnter={()=>setTeamUp(true)}
                        onMouseLeave={()=>setTeamUp(false)}
                    >Team</Button>
                    <Spacer />
                </Flex>
                {isConnected ? (
                    <Box margin="0 2vw" color="#ffff1a" fontSize="1vw" textShadow="0 2px 2px #000000">
                        Connected
                    </Box>
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
        </div>
    )
};

export default NavBar;
