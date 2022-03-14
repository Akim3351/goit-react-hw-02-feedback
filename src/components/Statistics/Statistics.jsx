import React, { Component } from "react";
import propTypes from "prop-types";
import css from "./Statistics.module.css";

class Statistics extends Component {
  positivePercentage = () => {
    const { good, neutral, bad } = this.props;
    const positiveFeedback = Number.parseInt(
      (good / (good + neutral + bad)) * 100
    );
    return Number.isNaN(positiveFeedback) ? "0" : `${positiveFeedback} %`;
  };

  render() {
    const { good, neutral, bad, total } = this.props;
    return (
      <ul className={css.stats__list}>
        <li className={css.stats__item}>Good: {good}</li>
        <li className={css.stats__item}>Neutral: {neutral}</li>
        <li className={css.stats__item}>Bad: {bad}</li>
        <li className={css.stats__item}>Total: {total}</li>
        <li className={css.stats__item}>
          Positive feedback: {this.positivePercentage()}
        </li>
      </ul>
    );
  }
}

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number,
};

export default Statistics;
