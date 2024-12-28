import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home.tsx";
import About from "./pages/about.tsx";
import Music from "./pages/music.tsx";

const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/music" element={<Music />} />
        </Routes>
    </BrowserRouter>
}

export default App;
