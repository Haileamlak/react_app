import './App.css'
import ListGroup from './components/ListGroup'
import Alert from './components/Alert'
function App() {
  const items = ["faith", "Hope", "Love"];

  return (
    <div className="App">
      <h1>My First React App</h1>
      <ListGroup items={items} heading='But Love is greater than all' ></ListGroup>
      <Alert>this is alert</Alert>
    </div>
  )
}

export default App
