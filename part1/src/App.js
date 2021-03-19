import React, { useDebugValue, useState } from 'react'

// Part a/b components
const Header = (props) => {
  //console.log("Header called")
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  //console.log("Part component called")
  return (
    <p>
      Part {props.number}: {props.part.name} <br></br>
      Exercises: {props.part.exercises}
    </p>
  )
}

const Content = (props) => {
  //console.log("Content component called")
  // console.log(props.parts)
  //console.log(props.parts)
  //console.log(props.parts[1])
  return (
    <div>
      <Part number={1} part={props.parts[0]} />
      <Part number={2} part={props.parts[1]} />
      <Part number={3} part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  //console.log("Total component called") 
  return (
    <p>
      Number of exercises: 
      {
        props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises
      }
    </p>
  )
}
// Part c components
const Display = ({counter}) => <div>{counter}</div>
const GenericButton = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}
// Part d components
const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  // consts
  // const course = 'Half Stack application development'
  /*
  const parts = ['Fundamentals of React',
                  'Using props to pass data',
                  'State of a component']
  const exercises = [10,7,14]
  */
 // Part d
 const [clicks, setClicks] = useState({
   left: 0, right: 0
 })
 const handleLeftSideClick = () => {
  setClicks({...clicks, left: clicks.left + 1})
}
const handleRightSideClick = () => {
  setClicks({...clicks, right: clicks.right + 1})
}


 const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
 const [allClicks, setAll] = useState([])

 const handleLeftClick = () => {
   setAll(allClicks.concat('L'))
   setLeft(left + 1)
 }
 const handleRightClick = () => {
  setAll(allClicks.concat('R'))
  setRight(right + 1)
}

const setToValue = (newValue) => {
  setValue(newValue)
}

 // Part c
 const [ counter, setCounter ] = useState(0)

 // setTimeout(() => setCounter(counter+1, 1000))

 // console.log('rendering...', counter)

 const output_clicked = () => console.log('clicked')
 const increaseByOne = () => setCounter(counter + 1)
 const decreaseByOne = () => setCounter(counter - 1)
 const setToZero = () => setCounter(0)

 // Part a/b
 const course = {
   name: 'Half Stack Application Development',
   parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  //console.log("App Component:")
  //console.log(parts)
  //console.log(parts[0])
  //console.log(typeof(parts[0]))
  // Components
  return (
    <>
      <div>
        {clicks.left}
        <button onClick={handleLeftSideClick}>left</button>
        <button onClick={handleRightSideClick}>right</button>
        {clicks.right}
        <hr></hr>
        {left}
        <GenericButton handleClick={handleLeftClick} text='left' />
        <GenericButton handleClick={handleRightClick} text='right' />
        {right}
        <History allClicks={allClicks}/>
        <hr></hr>
      </div>
      <div>
        <Display counter={counter}/>
        <GenericButton 
          handleClick={increaseByOne} 
          text='plus'
        />
        <GenericButton 
          handleClick={setToZero} 
          text='zero'
        />
        <GenericButton 
          handleClick={decreaseByOne} 
          text='minus'
        />
      </div>
      <div>
        <Header course={course.name} />
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </div>
    </>
  )
}

export default App