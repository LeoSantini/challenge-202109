import { useState } from "react";

import "./index.css"

export function Counter () {

    const [counter, setCounter] = useState(0);

    function handleIncrement() {
        setCounter(counter + 1)
    }

    function handleDecrement() {

        if(counter === 0) {

        } else {
            setCounter(counter - 1)
        }
    }

    return (
        <>
            <h1>{counter}</h1>
            <div className="click">
                <button onClick={handleIncrement} className="btn">Increment</button>
                <button onClick={handleDecrement} className="btn">Decrement</button>
            </div>
        </>
    )
}