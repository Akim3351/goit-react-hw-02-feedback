import React, { Component } from "react";
import propTypes from "prop-types";
import css from "./Notification.module.css";

class Notification extends Component {
  render() {
    const { message } = this.props;
    return <p className={css.message}>{message}</p>;
  }
}

Notification.propTypes = {
  message: propTypes.string,
};

export default Notification;
