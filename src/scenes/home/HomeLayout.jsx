import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import HeroItemView from "../item/HeroItemView.jsx";
import ItemList from "../item/ItemList.jsx";
import ItemView from "../item/ItemView.jsx";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.background.default, ...theme.typography.body2,
    textAlign: 'center',
    margin: theme.spacing(2),
    color: theme.palette.text.secondary,
}));
const HomeLayout = () => {
    return (<Box sx={{flexGrow: 1}}>
        <Grid container spacing={2}>
            <Grid xs={12}>
                <Item>
                    <HeroItemView/>
                </Item>
            </Grid>
            <Grid md={5} xs={12}>
                <Item>
                    <ItemList/>
                </Item>
            </Grid>
            <Grid xs={7}>
                <Item>
                    <ItemView/>
                </Item>
            </Grid>
            {/*<Grid xs={4}>*/}
            {/*    <Item>xs=4</Item>*/}
            {/*</Grid>*/}
            {/*<Grid xs={8}>*/}
            {/*    <Item>xs=8</Item>*/}
            {/*</Grid>*/}
        </Grid>
    </Box>);
};

export default HomeLayout;