import css from "./options.module.css"

function Reset({ onResetClick }) {
  return (
    <button onClick={onResetClick} className={css.textButtonReset}>
      Reset
    </button>
  );
}

export default function Options({ totalFeedback, onDateClick, onResetClick }) {
  // console.log("totalFeedback", totalFeedback);
  return (
    <div className={css.containerOptions}>
      <button onClick={() => onDateClick("good")} className={css.textButton}>
        Good
      </button>
      <button onClick={() => onDateClick("neutral")} className={css.textButton}>
        Neutral
      </button>
      <button onClick={() => onDateClick("bad")} className={css.textButton}>
        Bad
      </button>
      {totalFeedback > 0 && <Reset onResetClick={onResetClick} />}
    </div>
  );
}