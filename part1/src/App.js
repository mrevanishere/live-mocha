import React from 'react'


const Header = (props) => {
  console.log("Header called")
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  console.log("Part component called")
  return (
    <p>
      Part {props.number}: {props.name}. Exercises: {props.numOfEx}
    </p>
  )
}

const Content = (parts, exercises) => {
  console.log("Content component called")
  // console.log(props.parts)
  console.log(parts)
  console.log(parts[1])
  return (
    <div>
      <Part number={1} name={parts[0]} numOfEx={exercises[0]} />
      <Part number={2} name={parts[1]} numOfEx={exercises[1]} />
      <Part number={3} name={parts[2]} numOfEx={exercises[2]} />
    </div>
  )
}

const Total = (props) => {
  console.log("Total component called") 
  return (
    <p>
      Number of exercises
      {props.exercises1 + props.exercises2, props.exercises3}
    </p>
  )
}

const App = () => {
  // consts
  const course = 'Half Stack application development'
  var parts = ['Fundamentals of React',
                  'Using props to pass data',
                  'State of a component']
  var exercises = [10,7,14]

  
  console.log(parts)
  console.log(parts[0])
  console.log(typeof(parts[0]))
  // Components
  return (
    <>
      <Header course={course} />
      <Content part={parts} exercises={exercises}/>
      <Total exercises1={exercises[0]} exercises2={exercises[1]} exercises3={exercises[2]}/>
    </>
  )
}

export default App