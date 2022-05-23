import styles from "./QuestionAnswer.module.css";

const QuestionAnswer = props => {
	return (
		<div
			className={`${styles.answer} ${
				props.userAnswer === props.questionAnswer ? styles.selected : ""
			}`}
			onClick={() =>
				props.changeAnswer(props.questionAnswer, props.questionIndex)
			}
		>
			{props.children}
		</div>
	);
};

export default QuestionAnswer;
