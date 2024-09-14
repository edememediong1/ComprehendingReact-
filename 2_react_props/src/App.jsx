function Button({text, color, fontSize}){
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px"
  };

  return <button style={buttonStyle}>{text}</button>
}


Button.defaultProps = {
  text: "Click Me!",
  color: "blue",
  fontSize: 14
}


function App() {
  return (
    <div>
      <Button />
      <Button text="Don't click me" color='red' />
      <Button fontSize={20} />
    </div>
  )
}

export default App