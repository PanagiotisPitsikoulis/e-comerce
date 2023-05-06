import {Box, Card, useMediaQuery, useTheme} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import * as React from "react";
import {useSelector} from "react-redux";

const ItemView = () => {
    const theme = useTheme();
    const darkMode = useSelector((state) => state.theme.mode);

    return (
        <Card>
            <CardMedia
                sx={{height: 370, position: "relative"}}
                image="https://images.unsplash.com/photo-1682834818789-fdd3fd6c93fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
            >
                <Box
                    sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundImage: darkMode
                            ? "linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 20%, rgba(0, 0, 0, 0.8))"
                            : "linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.8))",
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "left",
                        flexDirection: "column",
                        color: darkMode ? "#fff" : "#222",
                        textAlign: "left",
                        padding: "20px",
                    }}
                >
                    <h1>Title</h1>
                    <p>Description</p>
                </Box>
            </CardMedia>

        </Card>
    );
};

export default ItemView;
