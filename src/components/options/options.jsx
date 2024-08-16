import css from "./options.module.css"

export default function Options() {
    return (
        <div className={css.containerOptions}>
        <button className={css.textButton}>Good</button>
        <button className={css.textButton}>Neutral</button>
        <button className={css.textButton}>Bad</button>
        <button className={css.textButton}>Reset</button>
        </div>
    )
}