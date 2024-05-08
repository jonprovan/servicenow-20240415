import { useState } from "react";
import { Article } from "./components/Article";
import { Counter } from "./components/Counter";
import { RefCounter } from "./components/RefCounter";
import { Input } from "./components/Input";

const App = () => {
    const [open, setOpen] = useState(true);

    return (
        // React Fragment
        <>
            <Input />
            <button onClick={() => setOpen(!open)}>Toggle Counter</button>
            {/* Conditional Rendering */}
            {open ? <RefCounter /> : null}
            <Article 
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
        </>
    );
}

export default App;