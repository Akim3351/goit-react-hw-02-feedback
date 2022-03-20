import React, { Component } from "react";

import Section from "./components/Section/Section";
import FeedBackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (event) => {
    const { name } = event.target;
    this.setState((prevState) => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const positiveFeedback = Number.parseInt(
      (good / (good + neutral + bad)) * 100
    );
    return Number.isNaN(positiveFeedback) ? "0" : `${positiveFeedback} %`;
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedBackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              countPositiveFeedbackPercentage={
                this.countPositiveFeedbackPercentage
              }
              countTotalFeedback={this.countTotalFeedback()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
