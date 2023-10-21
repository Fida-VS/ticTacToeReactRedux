import styles from '../App.module.css';
import PropTypes from 'prop-types';

export const AppHeader = ({status}) => {

return(

	<div className={styles.header}>
		<div className={styles.status}>{status}</div>
	</div>

   )

};


AppHeader.propTypes = {
	status: PropTypes.string,
}
