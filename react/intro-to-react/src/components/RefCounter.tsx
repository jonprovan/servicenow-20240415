import { useState, useRef } from "react";

/**
 * useRef vs useState
 * 
 * When State changes, the component is rerendered
 * When refs, change, the component is NOT rerendered
 * 
 * 
 * useRef vs local variable
 * 
 * When a component rerenders, local variables are reset and reinitialized (they lose their value, NOT PERSISTED)
 * When a component rerenders, the ref maintains its value through rerenders
 */

export const RefCounter = () => {

    const [dummyState, setDummyState] = useState(false);

    // ref is an object with a property called current which will hold the default value
    let count = useRef(0);
    // let count = 0;

    const handleIncrement = () => {
        count.current++;
        // count++;
        console.log(count);
    }

    const handleDecrement = () => {
        count.current--;
        // count--;
    }

    return (
        <>
            {/* Display the current count */}
            
            <div>Current Count: {count.current}</div>
            {/* Have a button increment the count */}
            <button onClick={handleIncrement}>+</button>

            {/* Have a button to decrement the count */}
            <button onClick={handleDecrement}>-</button>

            {/* Have a button to reset the count to 0 */}
            <button onClick={() => count.current = 0}>Reset</button>

            <button onClick={() => setDummyState(!dummyState)}>Cause Rerender</button>
        </>
    );
}