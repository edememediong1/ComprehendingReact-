// import React from 'react'
import { useState } from 'react'

function BackgroundChanger() {
    const COLORS = ['pink', 'green', 'blue', 'yellow','purple']

    const [backgroundColor, setBackgroundColor] = useState(COLORS[0])

    const onButtonClick = (color) => () =>{
        setBackgroundColor(color)
    }


    return (
        <div className="App" style={{backgroundColor}}>
        {COLORS.map((color) => (
            <button key={color} onClick={onButtonClick(color)} className={backgroundColor === color ? "selected" : ""}>{color}</button>
        ))}
        </div>
    )
}


export default BackgroundChanger