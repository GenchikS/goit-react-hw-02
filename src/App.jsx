import { useState, useEffect } from 'react'
import './App.css'
import Description from './components/description/description'
import Feedback from './components/feedback/feedback'
import Options from './components/options/options'

function App() {

  const [count, setCount] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = count;
  let totalFeedback = good + neutral + bad;

const feedbackGood = () => {
    setCount({
      ...count,
      good: good + 1,
    });
  };

  useEffect(() => {
    }, [good])

  const feedbackNeutral = () => {
    setCount({
      ...count,
      neutral: neutral + 1,
    });
  };
useEffect(() => {
  }, [neutral]);
  
  
  const feedbackBad = () => {
    setCount({
      ...count,
      bad: bad + 1,
    });
  };
useEffect(() => {
  }, [bad]);

  const feedbackReset = () => {
    setCount({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

return (
    <>
      <Description />
      <Options value="Good" update={feedbackGood} />
      <Options value="Neutral" update={feedbackNeutral} />
      <Options value="Bad" update={feedbackBad} />
      {totalFeedback !== 0 ? (<Options value="Reset" update={feedbackReset} />)
                          : (<p>No feedback yet</p>)}
      <Feedback value={count} />
    </>
  );
}

export default App
