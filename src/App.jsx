// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import Description from './components/description/description'
import Feedback from './components/feedback/feedback'
import Options from './components/options/options'

function App() {
  // const [count, setCount] = useState(0)

  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });


  return (
    <>
      <Description />
      <Options />
      <Feedback/>
    </>
  )
}

export default App
