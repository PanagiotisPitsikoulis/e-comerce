import Hero from "./Hero.jsx";
import {Box} from "@mui/material";
import ItemList from "../item/ItemList.jsx";
import Sidebar from "../global/Sidebar.jsx";


const Home = () => {
    return (<>
        <Box sx={{
            bgcolor: 'background.default',
        }}>
            <Sidebar/>
            <Hero/>
            {/*<ItemList/>*/}
        </Box>
    </>);
};

export default Home;