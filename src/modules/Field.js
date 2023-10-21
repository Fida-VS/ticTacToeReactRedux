
import { useState } from 'react';
import { CalculateWinner } from '../utils/calculateWinner'
import { FieldLayout } from './FieldLayout';
import { initialState } from '../reducer';
import { useSelector } from 'react-redux';
import { store } from '../store';

export const Field = () => {

	const [xIsNext, setXIsNext] = useState(true);

	const fieldItems = useSelector((state) => state);


	function handleClick(i) {
		if (fieldItems[i] || CalculateWinner(fieldItems)) {
			return;
		}
		const newFieldItems = fieldItems.slice();
		if (xIsNext) {
			newFieldItems[i] = 'X';
		  } else {
			newFieldItems[i] = 'O';
		  }
		  store.dispatch({type: 'SET_FIELDITEMS', payload: newFieldItems });
		  setXIsNext(!xIsNext);
	  };


	  const winner = CalculateWinner(fieldItems);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (!winner&&!(fieldItems.includes(null))){
	status = "Winner: Nobody";
  } else if (!winner&&fieldItems.includes(null)){
    status = "Next player: " + (xIsNext ? "X" : "O");
  }


  const restartClick = () => {
	setXIsNext(true);
	store.dispatch({type: 'SET_FIELDITEMS', payload: initialState });
  }


return <FieldLayout
handleClick={handleClick}
status={status}
restartClick={restartClick}/>

}
