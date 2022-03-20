import React from "react";
import PropTypes from "prop-types";
import css from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <div className={css.wrapper}>
      <h2 className={css.wrapper__title}>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
