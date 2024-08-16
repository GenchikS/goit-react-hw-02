import css from "./description.module.css"

export default function Description() {
    return (
        <div className={css.containerDescription}>
        <h1 className={css.titleDescription}>Sip Happens Café</h1>
            <p className={css.textDescriptions}>
          Please leave your feedback about our service by selecting one of the
          options below.
        </p>
      </div>
    );
}