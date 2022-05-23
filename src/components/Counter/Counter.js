import styles from "./Counter.module.css";

const Counter = props => {
	const hours = Math.floor(props.time / (60 * 60));
	const minutes = Math.floor(props.time / 60);
	const seconds = props.time - minutes * 60;
	return (
		<p className={styles.counter}>
			{hours < 10 ? `0${hours}` : hours}:
			{minutes < 10 ? `0${minutes}` : minutes}:
			{seconds < 10 ? `0${seconds}` : seconds}
		</p>
	);
};

export default Counter;
