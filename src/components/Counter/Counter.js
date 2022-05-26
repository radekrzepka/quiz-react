import styles from "./Counter.module.css";

const Counter = props => {
	const minutes = Math.floor(props.time / (60 * 10));
	const seconds = Math.floor(props.time / 10 - minutes * 60);

	return (
		<p className={styles.counter}>
			{minutes < 10 ? `0${minutes}` : minutes}:
			{seconds < 10 ? `0${seconds}` : seconds}
		</p>
	);
};

export default Counter;
