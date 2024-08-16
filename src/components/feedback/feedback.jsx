import css from "./feedback.module.css"

export default function Feedback() {
    return (
        <div className={css.containerFeedback}>
          <p className={css.textFeedback}>God:</p>
          <p className={css.textFeedback}>Neutral:</p>
          <p className={css.textFeedback}>Bad:</p>
          <p className={css.textFeedback}>Total:</p>
          <p className={css.textFeedback}>Positive:</p>
        </div>
    )
}