import React, { useState } from 'react'
import ReactDOM from 'react-dom'

  const Statistics = (props) => {
    const {good,neutral,bad} = props
    const all = good+neutral+bad;
    if (good===0 && neutral===0 && bad===0) {
      return(
        <h3>
          No feedback give
        </h3>
      )
    } else {
      return(
        <table>
          <tbody>
          <tr>
            <td>good</td> 
            <td>{good}</td> 
          </tr>
          <tr>
            <td>neutral</td> 
            <td>{neutral}</td> 
          </tr>
          <tr>
            <td>bad</td> 
            <td>{bad}</td> 
          </tr>
          <tr>
            <td>all</td> 
            <td>{all}</td> 
          </tr>
          <tr>
            <td>average</td> 
            <td>{(good-bad)/all}</td> 
          </tr>
          <tr>
            <td>average</td> 
            <td>{(((good)/all)*100)}</td> 
          </tr>
          </tbody>
        </table>
      )
    }
  } 

  const Button = (props) => {
    const {text, handleClick} = props
    return(
    <button onClick = {handleClick}>
      {text}
    </button>
    )
  }

  const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)




  const handleGoodClick = () => {
      setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <br/>
      <Button text = "good" handleClick = {handleGoodClick}/>
      <Button text = "neutral" handleClick = {handleNeutralClick}/>
      <Button text = "bad" handleClick = {handleBadClick}/>
      <h1>statistics</h1>
      <Statistics  good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)