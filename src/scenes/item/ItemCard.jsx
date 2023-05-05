import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Box, useMediaQuery} from "@mui/material";

export default function ItemCard() {
    const isDesktop = useMediaQuery("(min-width:700px)");
    return (
        <Card sx={{maxWidth: 200, flexShrink: isDesktop ? 1 : 0}}>
            <CardMedia
                sx={{height: 150}}
                image="https://picsum.photos/seed/picsum/300/600"
            />
            <Box bgcolor="background.default" px={2} py={2}>
                <Typography gutterBottom variant="body1" component="div">
                    Product Name
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Product Description
                </Typography>
            </Box>
        </Card>
    );
}
