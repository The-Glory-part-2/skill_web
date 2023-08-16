import React, { useState, useEffect, useCallback } from 'react';

import BoardsList from './BoardList';
import AddBoard from './AddBoard';
import './BoardTest.css';

function BoardTest() {
  const [boards, setBoards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBoardsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://test-skillweb-default-rtdb.firebaseio.com/movies.json');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      
      const loadedBoards = [];
      
      for (const key in data) {
        loadedBoards.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }


      setBoards(loadedBoards);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchBoardsHandler();
  }, [fetchBoardsHandler]);

  async function addBoardHandler(board) {
     const response = fetch('https://test-skillweb-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(board),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = (await response).json();
    console.log(data)
  }

  let content = <p>Found no Boards.</p>;

  if (boards.length > 0) {
    content = <BoardsList boards={boards} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddBoard onAddBoard={addBoardHandler} />
      </section>
      <section>
        <button onClick={fetchBoardsHandler}>Fetch </button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default BoardTest;
