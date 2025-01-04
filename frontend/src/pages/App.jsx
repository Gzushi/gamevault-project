import { useState } from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="w-full h-full box-border">
            <Navbar />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
