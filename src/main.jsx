import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Provider} from "react-redux";
import store from "./state/store.js";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import SignIn from "./scenes/authentication/SignIn.jsx";
import SignUp from "./scenes/authentication/SignUp.jsx";

const router = createBrowserRouter([
    {
        path: "/", element: <App/>,
    },
    {
        path: "/signin", element: <SignIn/>,
    },
    {
        path: "/signup", element: <SignUp/>,
    },
    {
        path: "*", element: <div>404</div>,
    }
]);

// eslint-disable-next-line react-refresh/only-export-components
function Root() {
    return (<React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>);
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root/>);
