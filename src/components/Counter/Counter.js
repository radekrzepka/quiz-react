import styles from "./Counter.module.css";

const Counter = props => {
	const minutes = Math.floor(props.time / (10 * 60));
	const seconds = Math.floor(props.time / 10) - minutes * 60;
	const miliseconds = props.time - seconds * 10 - minutes * 60 * 10;
	return (
		<p className={styles.counter}>
			{minutes < 10 ? `0${minutes}` : minutes}:
			{seconds < 10 ? `0${seconds}` : seconds}:
			{miliseconds * 100 < 100 ? "000" : miliseconds * 100}
		</p>
	);
};

export default Counter;
