import styles from "./Button.module.css";

const FlagQuestionButton = props => {
	const flagAndChangeQuestion = () => {
		props.flagQuestion(props.questionIndex);
		if (props.questionIndex === props.numberOfQuestions - 1) return;
		props.changeQuestion(props.questionIndex + 1);
	};
	return (
		<button onClick={flagAndChangeQuestion} className={styles.button}>
			Oflaguj pytanie
		</button>
	);
};

export default FlagQuestionButton;
