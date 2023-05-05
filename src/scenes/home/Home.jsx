import Hero from "./Hero.jsx";
import {Box, useMediaQuery} from "@mui/material";
import ItemList from "../item/ItemList.jsx";
import Sidebar from "../global/Sidebar.jsx";
import * as React from "react";
import ItemView from "../item/ItemView.jsx";
import Stack from "@mui/material/Stack";
import HeroItemView from "../item/HeroItemView.jsx";


const Home = () => {
    const isDesktop = useMediaQuery("(min-width:600px)");
    return (<>
        <Box sx={{
            bgcolor: 'background.default',
        }}>
            <Sidebar/>
            <Box
                sx={{
                    bgcolor: 'background.default'
                }}
            >
                <Stack alignItems="center"
                       justifyContent="center">
                    <HeroItemView/>
                    <Stack direction={isDesktop ? "row" : "column"} mx="auto" py={10} alignItems="center"
                           justifyContent="center"
                           spacing={3}>
                        <Stack maxWidth={isDesktop ? "1200px" : "390px"}>
                            <ItemView/>
                            <ItemList/>
                        </Stack>
                        <Stack maxWidth={isDesktop ? "1200px" : "390px"}>
                            <ItemView/>
                            <ItemList/>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    </>);
};

export default Home;