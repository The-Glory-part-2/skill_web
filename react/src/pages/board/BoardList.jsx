import React from 'react';

import Board from './Board';
import classes from './BoardList.module.css';

const BoardList = (props) => {
  return (
    <ul className={classes['boards-list']}>
      {props.boards.map((board) => (
        <Board
          key={board.id}
          title={board.title}
          releaseDate={board.releaseDate}
          openingText={board.openingText}
        />
      ))}
    </ul>
  );
};

export default BoardList;