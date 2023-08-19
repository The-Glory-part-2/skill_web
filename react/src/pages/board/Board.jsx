import React from 'react';

import classes from './Board.module.css';

const Board = (props) => {
  return (
    <li className={classes.board}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
    </li>
  );
};

export default Board;