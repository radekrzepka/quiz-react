import styles from "./Button.module.css";

const NextQuestionButton = props => {
	if (props.questionIndex === props.numberOfQuestions - 1)
		return (
			<button onClick={() => props.showAnswers(true)} className={styles.button}>
				Sprawdź odpowiedzi
			</button>
		);

	return (
		<button
			onClick={() => props.changeQuestion(props.questionIndex + 1)}
			className={styles.button}
		>
			Następne pytanie
		</button>
	);
};

export default NextQuestionButton;
