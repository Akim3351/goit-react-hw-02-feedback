import React, { Component } from "react";
import css from "./FeedbackOptions.module.css";
import propTypes from "prop-types";

class FeedBackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    const btnNames = Object.keys(options);

    return (
      <div className={css.feedback__buttons}>
        {btnNames.map((btn) => (
          <button
            type="button"
            key={btn}
            name={btn}
            onClick={onLeaveFeedback}
            className={css.feedback__btn}
          >
            {btn}
          </button>
        ))}
      </div>
    );
  }
}

FeedBackOptions.propTypes = {
  options: propTypes.shape({
    good: propTypes.number.isRequired,
    neutral: propTypes.number.isRequired,
    bad: propTypes.number.isRequired,
  }),
  onLeaveFeedback: propTypes.func.isRequired,
};

export default FeedBackOptions;
