import { useState } from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";
import DefaultLayout from "../layouts/defaultlayout";

function App() {
    const [count, setCount] = useState(0);
    
    return (
        <DefaultLayout>
            <Main />
        </DefaultLayout>
    );
}

export default App;