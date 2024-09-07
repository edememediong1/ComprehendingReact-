function ListItem(props){
  return(
    <li>{props.animal}</li>
  )

}

function List(props){
  return(
    <ul>
        {props.animals.map((animal) =>{
          return  animal.startsWith("L") && <ListItem key={animal} animal={animal}/>;
        })}
    </ul>
  )
}


function App() {
  
  const animals = ['Goat', 'Elephant', 'Sheep', 'Guinea pig', 'Lobster', "Lion"];

  return (
    <div>
      <h1>Animals:</h1>
      <List animals={animals}/>
      
    </div>
  )
}

export default App
