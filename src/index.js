import React from 'react'
import ReactDom from 'react-dom'
import './main.css'

const App = () => {
  function myClick () {
    // console.log(Style)
  }
  return (
    <div>
      <p>React here!</p>
      <button onClick={myClick}>测试</button>
    </div>
  )
}

export default App

ReactDom.render(
  <App />,
  document.getElementById('app')
)
