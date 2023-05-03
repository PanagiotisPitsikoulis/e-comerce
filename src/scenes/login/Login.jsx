import {useDispatch, useSelector} from "react-redux";
import LoginForm from "./LoginForm";
import {loginRequest} from "../../state/slices/authSlice.js";
import {Container} from "@mui/material";

const Login = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.auth.isLoading);

    const handleSubmit = (credentials) => {
        dispatch(loginRequest(credentials));
    };

    return (
        <Container
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '40vh',
            }}
        >
            <LoginForm onSubmit={handleSubmit} isLoading={isLoading}/>
        </Container>
    );
};

export default Login;
