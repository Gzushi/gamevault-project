import { useState } from "react";
import Main from "../components/Main";
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