import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) =>{
  const {handleClick, text} = props
  return (
    <button onClick = {handleClick}>{text}</button>
  );
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote,setVote] = useState([0,0,0,0,0,0])
  const [mostVote,setMostVote] = useState(0)

  const anecdotesRandom = () => {
    setSelected(Math.floor(Math.random() * (anecdotes.length)))
  }

  const anecdotesVote = () => {
    const copy = {...vote}
    copy[selected] +=1
    setVote(copy)
    if(copy[selected]>vote[mostVote]){
      setMostVote(selected);
    }
  }

  return (
    <div>
      {props.anecdotes[selected]}
      <br/>
      <Button text = {"next anecdotes"} handleClick={anecdotesRandom}/>  
      <Button text ={"vote"} handleClick={anecdotesVote}/>
      <h2>Anecdote with most vote</h2>
      <div>{anecdotes[mostVote]}</div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)