import React, { Component } from "react";
import css from "./FeedbackOptions.module.css";
import propTypes from "prop-types";

class FeedBackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div className={css.feedback__buttons}>
        {options.map((btn) => (
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
  options: propTypes.array.isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};

export default FeedBackOptions;
