import {useState} from "react";
import Stack from "@mui/material/Stack";
import ItemCard from "./ItemCard.jsx";
import {Box, IconButton, useMediaQuery} from "@mui/material";
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
            {isDesktop ? (
                <>
                    <Box py={2} mx={3} my={4}>
                        <Stack direction="row" spacing={2} my={2} mx={2}>
                            {itemListData.slice(startIndex, startIndex + 4).map((item) => (
                                <ItemCard key={item.id} name={item.name}/>
                            ))}
                        </Stack>
                        <Box display="flex" justifyContent="left" position="sticky" bottom="0" mt={2} mx={2}>
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
                <Stack direction="row" spacing={2} sx={{maxWidth: "500px", overflowX: "scroll"}} py={3} mx={1}>
                    {itemListData.map((item) => (
                        <ItemCard key={item.id} name={item.name}/>
                    ))}
                </Stack>
            )}
        </>
    );
};

export default ItemList;
