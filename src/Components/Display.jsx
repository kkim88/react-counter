import React, { useState } from 'react';

function Display(props) {
    const [display, setDisplay] = useState(0);

    return (
        <section className="display">
            <h3>The current count is: </h3>
            <h1>{display}</h1>
            <p></p>
            <button onClick={() => setDisplay(display + 1)}>+1</button>
            <button onClick={() => setDisplay(display + 2)}>+2</button>
            <button onClick={() => setDisplay(display + 5)}>+5</button>
            <button onClick={() => setDisplay(display + 10)}>+10</button>
            <button onClick={() => setDisplay(display - 1)}>-1</button>
            <button onClick={() => setDisplay(0)}>Reset</button>
        </section>
    )


}

export default Display;

