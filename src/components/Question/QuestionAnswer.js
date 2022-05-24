import styles from "./QuestionAnswer.module.css";

const QuestionAnswer = props => {
	if (!props.quizFinished)
		return (
			<div
				className={`${styles.answer} 
					${props.userAnswer === props.answerIndex ? styles.selected : ""} 
					${styles.notFinished}`}
				onClick={() =>
					props.changeAnswer(props.answerIndex, props.questionIndex)
				}
			>
				{props.children}
			</div>
		);
	return (
		<div
			className={`${styles.answer} 
			${styles.finished}
			${
				props.userAnswer === props.answerIndex && !props.isCorrectAnswer
					? styles.incorrect
					: ""
			} 
			${props.correctAnswer === props.answerIndex ? styles.correct : ""}
			
			`}
		>
			{props.children}
		</div>
	);
};

export default QuestionAnswer;
