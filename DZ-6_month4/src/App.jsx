import { useState } from 'react'
import './App.css'
import Posts from "./components/Post/Post";
import ButtonPost from "./components/ButtonPost/Comments.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Posts/>
      <ButtonPost/>
    </div>
  )
}

export default App
