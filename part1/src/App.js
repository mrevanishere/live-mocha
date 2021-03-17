import React, { useDebugValue } from 'react'


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
      Part {props.number}: {props.part.name} <br></br>
      Exercises: {props.part.exercises}
    </p>
  )
}

const Content = (props) => {
  console.log("Content component called")
  // console.log(props.parts)
  console.log(props.parts)
  console.log(props.parts[1])
  return (
    <div>
      <Part number={1} part={props.parts[0]} />
      <Part number={2} part={props.parts[1]} />
      <Part number={3} part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  console.log("Total component called") 
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

const App = () => {
  // consts
  // const course = 'Half Stack application development'
  /*
  const parts = ['Fundamentals of React',
                  'Using props to pass data',
                  'State of a component']
  const exercises = [10,7,14]
  */
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

  console.log("App Component:")
  //console.log(parts)
  //console.log(parts[0])
  //console.log(typeof(parts[0]))
  // Components
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </>
  )
}

export default App