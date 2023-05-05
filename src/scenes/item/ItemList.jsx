import {useState} from "react";
import Stack from "@mui/material/Stack";
import ItemCard from "./ItemCard.jsx";
import {Box, IconButton, Typography, useMediaQuery} from "@mui/material";
import {ArrowBack, ArrowForward} from "@mui/icons-material";

const itemListData = [
    {id: 1, name: "Item 1"},
    {id: 2, name: "Item 2"},
    {id: 3, name: "Item 3"},
    {id: 4, name: "Item 4"},
    {id: 5, name: "Item 5"},
    {id: 6, name: "Item 6"},
    {id: 7, name: "Item 7"},
    {id: 8, name: "Item 8"},
];

const ItemList = () => {
    const [startIndex, setStartIndex] = useState(0);
    const isDesktop = useMediaQuery("(min-width:600px)");

    const handlePrevClick = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 2);
        }
    };

    const handleNextClick = () => {
        if (startIndex < itemListData.length - 2) {
            setStartIndex(startIndex + 2);
        }
    };

    return (
        <>
            <Box bgcolor="background.paper" py={2} borderRadius={1}>
                {isDesktop ? (
                    <>
                        <Typography variant={"h5"} mx={5}>Group title</Typography>
                        <Box mx={3}>
                            <Stack direction="row" spacing={2} my={2} mx={2}>
                                {itemListData.slice(startIndex, startIndex + 4).map((item) => (
                                    <ItemCard key={item.id} name={item.name}/>
                                ))}
                            </Stack>
                            <Box display="flex" justifyContent="left" bottom="0" mt={2} mx={2}>
                                <IconButton onClick={handlePrevClick} disabled={startIndex === 0}>
                                    <ArrowBack/>
                                </IconButton>
                                <IconButton onClick={handleNextClick} disabled={startIndex === itemListData.length - 2}>
                                    <ArrowForward/>
                                </IconButton>
                            </Box>
                        </Box>
                    </>
                ) : (
                    <>
                        <Typography variant={"h5"} mx={2}>Group title</Typography>
                        <Stack direction="row" spacing={1} sx={{maxWidth: "500px", overflowX: "scroll"}}
                               py={3} mx={2}>
                            {itemListData.map((item) => (
                                <ItemCard key={item.id} name={item.name}/>
                            ))}
                        </Stack>
                    </>
                )}
            </Box>
        </>
    );
};

export default ItemList;
