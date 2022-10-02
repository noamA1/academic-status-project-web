import css from "./Color_menu.module.css";

const Color_menu = (props) => {
  return (
    <div className={css.color_container}>
      <span className={[css.color_span, css.span_general].join(" ")}></span>
      <p className={css.span_text}>כללי</p>
      <span className={[css.span_math, css.color_span].join(" ")}></span>
      <p className={css.span_text}> מתמטיקה</p>
      <span className={[css.span_programing, css.color_span].join(" ")}></span>
      <p className={css.span_text}>תוכנה</p>
      <span className={[css.span_physics, css.color_span].join(" ")}></span>
      <p className={css.span_text}>פיזיקה</p>
      <span className={[css.span_it, css.color_span].join(" ")}></span>
      <p className={css.span_text}>התמחות מערכות מידע</p>
      <span className={[css.span_operation, css.color_span].join(" ")}></span>
      <p className={css.span_text}>התמחות ניהול התפעול</p>
      {props.page === "grades" && (
        <>
          <span className={[css.span_pass, css.color_span].join(" ")}></span>
          <p className={css.span_text}>עובר</p>
          <span className={[css.span_fail, css.color_span].join(" ")}></span>
          <p className={css.span_text}>נכשל</p>
        </>
      )}
    </div>
  );
};

export default Color_menu;
