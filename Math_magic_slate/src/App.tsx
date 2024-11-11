import { createBrowserRouter, RouterProvider } from "react-router-dom";
import '@mantine/core/styles.css';
import { MantineProvider } from "@mantine/core";
import Home from './screens/home';
import './index.css';


const paths = [
    {
        path: '/',
        element : (
            <Home/>
        ),
    },
];

const BrowserRouter = createBrowserRouter(paths);
const App = () => {
    return (
    <MantineProvider>
        <RouterProvider router={BrowserRouter}/>;
    </MantineProvider>
    );
}

export default App;


// C:\Users\shubh\Desktop\workspace\try_project\p29__math\Math_magic_slate\src\screens\home