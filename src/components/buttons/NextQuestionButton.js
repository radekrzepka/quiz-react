import styles from "./Button.module.css";

const NextQuestionButton = props => {
	const changeQuestion = () => {
		if (props.questionIndex === props.numberOfQuestions - 1) return;
		props.changeQuestion(props.questionIndex + 1);
	};

	return (
		<button onClick={changeQuestion} className={styles.button}>
			{props.questionIndex === props.numberOfQuestions - 1
				? "Sprawdź odpowiedzi"
				: "Następne pytanie"}
		</button>
	);
};

export default NextQuestionButton;
