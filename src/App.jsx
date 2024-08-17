import { useState, useEffect } from 'react'
import './App.css'
import Description from './components/description/description'
import Feedback from './components/feedback/feedback'
import Options from './components/options/options'
import css from "../src/components/options/options.module.css";

function App() {

  const [count, setCount] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = count;
  let totalFeedback = good + neutral + bad;
  let positiveFeedback = Math.round((good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    setCount(count =>({
        ...count,
        [feedbackType]: count[feedbackType] + 1,
      })
    );
  };


  useEffect(() => {
  window.localStorage.setItem("saved-good", good);
  }, [good])

 
  useEffect(() => {
  window.localStorage.setItem("saved-neutral", neutral);
  }, [neutral]);
  
  
  useEffect(() => {
  window.localStorage.setItem("saved-bad", bad);
  }, [bad]);

  const feedbackReset = () => {
    setCount({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

function Notification() {
    return (
    <p>No feedback yet</p>
  )
}

return (
  <>
    <Description />
    <Options value="Good" update={() => updateFeedback("good")} />
    <Options value="Neutral" update={() => updateFeedback("neutral")} />
    <Options value="Bad" update={() => updateFeedback("bad")} />
    {totalFeedback > 0 ? (
      <button onClick={feedbackReset} className={css.textButtonReset}>
        Reset
      </button>
    ) : (
      <Notification />
    )}
    <Feedback
      value={count}
      totalFeedback={totalFeedback}
      positiveFeedback={positiveFeedback}
    />
  </>
);
}

export default App
