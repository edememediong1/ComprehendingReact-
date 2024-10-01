import { useState } from "react"

function TextColorChanger() {
    const[value, setValue] = useState(null)

    function yes(){
        setValue('green')
    }

    function no(){
        setValue('red')
    }

  return (
    <div>
        <h1 style={{color: value}}>This is the result</h1>
        <button onClick={yes}>Yes</button>
        <button onClick={no}>No</button>
    </div>
  )
}

export default TextColorChanger