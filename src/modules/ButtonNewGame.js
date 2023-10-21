import styles from '../App.module.css';
import PropTypes from 'prop-types';

export const ButtonNewGame = ({onButtonNewGameClick}) => {

	return(

		<button onClick={onButtonNewGameClick} className={styles.buttonNewGame}>Start Game</button>

	)

	};

	ButtonNewGame.propTypes = {
		onButtonNewGameClick: PropTypes.func,
	}
