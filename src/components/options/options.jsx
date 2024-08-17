import css from "./options.module.css"

export default function Options({ value, update }) {
    return (
      <div className={css.containerOptions}>
        <button onClick={update} className={css.textButton}>
          {value}
        </button>
    </div>
    );
}