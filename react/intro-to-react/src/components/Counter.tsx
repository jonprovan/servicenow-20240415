import { useState, useEffect } from "react";

/**
 * Examples of State:
 * 
 * - The counter of some number of clicks
 * - User filling out a form, the form fields are state
 * - Adding/removing to a shopping cart
 * 
 * View = Fn(state)
 * 
 * When the state changes, React will look to rerender that component where the state changed
 *   - Virtual DOM compares the old tree with the new one to determine if updates to the DOM are required
 */

export const Counter = () => {
    // let count = 0; // NOT stateful

    // useState returns an array of two items
    // first index is the state
    // second index is the function to update the state
    const [count, setCount] = useState(0);
    console.log('Component Rerendered');

    /**
     * Side Effects in React
     * - Outside of the scope of React
     *   - Retrieving data from an API
     *   - Local Storage
     *   - Window (URL changing, query params, DNS)
     *   - Connecting to a websocket (Real time chat rooms)
     * 
     * useEffect
     * - Supplies React with a side effect
     * - It serves as a synchronization tool between React and these outside entities (localstorage)
     * 
     * - A lifecycle hook (runs at various points in the components lifecycle)
     *   - On Mount (Component is FIRST rendered)
     *   - On Rerender (When the component is rerendered, run the side effect again)
     *   - On Unmount (When the component is ABOUT to be unrendered)
     */

    useEffect(() => {
        // Fetching data from API
        // Connecting to a websocket
        // Fetching data from localstorage
        console.log('Component Mounted');

        const intervalKey = setInterval(() => {
            console.log(new Date());
        }, 1000);


        // Returning from a useEffect, provide a function and React will call it when unmounting
        return () => {
            // Disconnect from the chatroom
            // Save the data to localstorage
            // Send analytics to some DB
            // Remove event listeners, timeouts, intervals
            console.log('Component unmounted');
            clearInterval(intervalKey);

            // THIS IS USED TO AVOID MEMORY LEAKS
        }

    }, []); // This useEffect ONLY RUNS on mount
    
    useEffect(() => {
        console.log('This one runs everytime count changes');
    }, [count]); // This array is a "dependency array". When it is first mounted OR 
      // the value in the array changes, then rerun it

    const handleIncrement = () => {
        // count++; // Don't do this, use the setter function
        setCount(count + 1);
        console.log(count);
    }

    const handleDecrement = () => {
        // count++; // Don't do this, use the setter function
        setCount(count - 1);
        console.log(count);
    }

    return (
        <>
            {/* Display the current count */}
            <div>Current Count: {count}</div>
            {/* Have a button increment the count */}
            <button onClick={handleIncrement}>+</button>

            {/* Have a button to decrement the count */}
            <button onClick={handleDecrement}>-</button>

            {/* Have a button to reset the count to 0 */}
            <button onClick={() => setCount(0)}>Reset</button>
        </>
    );
}