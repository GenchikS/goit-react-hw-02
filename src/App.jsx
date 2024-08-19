import { useState, useEffect } from 'react'
import './App.css'
import Description from './components/description/description'
import Feedback from './components/feedback/feedback'
import Options from './components/options/options'
import Notification from './components/notification/Notification'

function App() {
  const [count, setCount] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })


  const { good, neutral, bad } = count;
  const totalFeedback = good + neutral + bad;
  const updateFeedback = (countType) => {
    setCount({
      ...count,
      [countType]: count[countType] + 1,
    });
  };

  useEffect(() => {
    window.localStorage.setItem("saved-count", JSON.stringify(count));
    const savedClicks = window.localStorage.getItem("saved-count");
    if (savedClicks !== null) {
      // console.log("savedClicks", savedClicks);
    }
    }, [count]);

  const resetClick = () => {
    setCount({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

return (
  <>
    <Description />
    <Options
      totalFeedback={totalFeedback}
      onResetClick={resetClick}
      onDateClick={updateFeedback}
    />
    {totalFeedback > 0 ? (
      <Feedback
        value={count}
        totalFeedback={totalFeedback}
        positiveFeedback={Math.round((good / totalFeedback) * 100)}
      />
    ) : (
        <Notification />
      )}
    </>
);
}

export default App
