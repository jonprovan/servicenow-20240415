import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { MoviePage } from "./pages/MoviePage";
import { MovieDisplayPage } from "./pages/MovieDisplayPage";

// import { useContext, useState } from "react";
// import { Article, Counter, Input, RefCounter, RegistrationForm } from "./components";
// import { ThemeContext } from "./contexts/ThemeContext";
// import { Nav } from "./components/Nav";
// import { Article } from "./components/Article";
// import { Counter } from "./components/Counter";
// import { RefCounter } from "./components/RefCounter";
// import { Input } from "./components/Input";
// import { RegistrationForm } from "./components/RegistrationForm";

const App = () => {
    // const [open, setOpen] = useState(true);
    // const { toggleTheme } = useContext(ThemeContext);

    return (
        // React Fragment
        <BrowserRouter>
            <nav>
                <Link to="/"><img height="100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Target_logo.svg/1541px-Target_logo.svg.png"/></Link>
                <Link to="/about">About Us</Link>
                <Link to="/movies">Movies</Link>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<Navigate to="/" />} />
                <Route path="/about" element={<div>About</div>} />
                <Route path="/movies" element={<MoviePage />} />
                <Route path="/movies/:id" element={<MovieDisplayPage />} />
                <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>






            {/* <Nav /> */}
            {/* <RegistrationForm /> */}
            {/* <div className="form-error">Hello World</div> */}
            {/* <RegistrationForm /> */}
            
            
            {/* <Input />
            <button onClick={() => setOpen(!open)}>Toggle Counter</button>
            {/* Conditional Rendering */}
            {/* {/* {open ? <RefCounter /> : null} */}
            {/* <Article 
                author="John Doe"
                title="Cats!"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sapiente voluptatibus, obcaecati quasi optio expedita aut delectus ratione itaque nesciunt provident cum assumenda dolorum fugiat tenetur. At architecto odio voluptatem.
            Et eveniet, quod repellendus modi sapiente rerum aliquam aliquid itaque maxime saepe consequuntur alias debitis labore deserunt porro odio libero quo! Id ullam sint voluptatibus reiciendis totam est quam iste?</Article>
            <Article author="Sally Wright" title="Dogs!">
                <p>
                    ABC
                </p>
                <div>
                    123
                </div>
                <footer></footer>
            </Article>
            <button onClick={toggleTheme}>Toggle Theme</button> */}
        </BrowserRouter>
    );
}

export default App;