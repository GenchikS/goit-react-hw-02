import css from "./feedback.module.css"

export default function Feedback({ value, totalFeedback, positiveFeedback }) {
  const { good, neutral, bad } = value;
  return (
    <div className={css.containerFeedback}>
      {totalFeedback > 0 && (
        <>
          <p className={css.textFeedback}>Good: {good}</p>
          <p className={css.textFeedback}>Neutral: {neutral}</p>
          <p className={css.textFeedback}>Bad: {bad}</p>
          <p className={css.textFeedback}>Total: {totalFeedback}</p>
          <p className={css.textFeedback}>Positive: {positiveFeedback}%</p>
        </>
      )}
    </div>
  );
}