import { useRef, useState } from "react";

export const Input = () => {

    // useRef can be used to gain a refernce to a native HTML DOM Node

    // "Uncontrolled"
    // Something React does not control, but rather the native HTML element (ie. inputs)

    // "Controlled"
    // A component React has full control over. React decides its value and when it can change

    const inputRef = useRef(null);
    const [lastName, setLastName] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Look at the last input character of this string.
        // If it is not an allowed character
        // Remove it
        // Else, setLastName

        setLastName(e.target.value);
    }

    return (
        <form onSubmit={e => {
            e.preventDefault();
        }} >
            {/* Uncontrolled Input */}
            <input id="first-name" required ref={inputRef} placeholder="First Name" />

            {/* Controlled Input */}
            <input value={lastName} onChange={handleChange} placeholder="Last Name" />
            <button>Submit</button>

            <input type="number" />
        </form>
        
    );
}