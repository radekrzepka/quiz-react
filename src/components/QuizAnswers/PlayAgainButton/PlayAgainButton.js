import styles from "../../buttons/Button.module.css";

const PlayAgainButton = () => {
	const refreshQuiz = () => {
		document.location.reload(true);
	};
	return (
		<button className={styles.button} onClick={refreshQuiz}>
			Zagraj ponownie
		</button>
	);
};

export default PlayAgainButton;
