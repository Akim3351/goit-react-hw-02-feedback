import React from "react";
import propTypes from "prop-types";
import css from "./Statistics.module.css";

const Statistics = ({
  good,
  neutral,
  bad,
  countPositiveFeedbackPercentage,
  countTotalFeedback,
}) => {
  return (
    <ul className={css.stats__list}>
      <li className={css.stats__item}>Good: {good}</li>
      <li className={css.stats__item}>Neutral: {neutral}</li>
      <li className={css.stats__item}>Bad: {bad}</li>
      <li className={css.stats__item}>Total: {countTotalFeedback}</li>
      <li className={css.stats__item}>
        Positive feedback: {countPositiveFeedbackPercentage()}
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number,
  countPositiveFeedbackPercentage: propTypes.func.isRequired,
};

export default Statistics;
