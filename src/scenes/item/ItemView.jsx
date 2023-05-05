import {Box, Card, useMediaQuery} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import * as React from "react";

const ItemView = () => {
    return (<Card>
            <CardMedia
                sx={{height: 370}}
                image="https://images.unsplash.com/photo-1682834818789-fdd3fd6c93fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80">
            </CardMedia>
        </Card>);
};

export default ItemView;
