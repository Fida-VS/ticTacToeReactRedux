import styles from '../App.module.css';
import PropTypes from 'prop-types';


export const FieldItem = ({value, onFieldItemClick}) => {

	return(

		<div onClick={onFieldItemClick} className={styles.fieldItem}>{value}</div>

	)

	};


	FieldItem.propTypes = {
		value: PropTypes.string,
		onFieldItemClick: PropTypes.func,
	}
