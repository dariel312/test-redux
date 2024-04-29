import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Pokemon } from "./features/pokemon/pokemon"
import { Quotes } from "./features/quotes/Quotes"
import { Todo } from "./features/todo/todo"
import logo from "./logo.svg"

const App = () => {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <div className="container">
        <h1>
          Redux-toolkit
        </h1>
        <Counter />
        <hr />
        <h1>
          Redux-Query
        </h1>
        <Pokemon />
        <hr />
        <Todo />
      </div>
    </div>
  )
}

export default App
