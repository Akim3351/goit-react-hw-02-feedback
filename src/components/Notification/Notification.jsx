import React from "react";
import propTypes from "prop-types";
import css from "./Notification.module.css";

const Notification = ({ message }) => {
  return <p className={css.message}>{message}</p>;
};

Notification.propTypes = {
  message: propTypes.string,
};

export default Notification;
