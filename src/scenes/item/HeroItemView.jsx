import {Card, useMediaQuery} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import * as React from "react";

const HeroItemView = () => {
    return (
        <Card sx={{width:"100%"}}>
            <CardMedia
                sx={{height: 550}}
                image="https://images.unsplash.com/photo-1682547094924-4b198c6c6d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80">
            </CardMedia>
        </Card>
    );
};

export default HeroItemView;