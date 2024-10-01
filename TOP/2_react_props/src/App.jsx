function Button({text = "Click me!", color = "blue", fontSize= 12, handleClick}){
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px"
  };

  return <button onClick={handleClick} style={buttonStyle}>{text}</button>
}


// Button.defaultProps = {
//   text: "Click Me!",
//   color: "blue",
//   fontSize: 14
// }


function App() {
  const handleButtonClick = () =>{
    window.location.href = "https://www.google.com"
  }


  return (
    <div>
      <Button handleClick={handleButtonClick} />
    </div>
  )
}

export default App