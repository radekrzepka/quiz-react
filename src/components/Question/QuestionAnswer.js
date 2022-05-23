import styles from "./QuestionAnswer.module.css";

const QuestionAnswer = props => {
	return (
		<div
			className={`${styles.answer} 
			${props.userAnswer === props.questionAnswer ? styles.selected : ""} 
			${!props.quizFinished ? styles.notFinished : styles.finished}
			${
				props.userAnswer === props.questionAnswer && !props.isCorrectAnswer
					? styles.incorrect
					: ""
			} 
			${
				props.quizFinished && props.correctAnswer === props.questionAnswer
					? styles.correct
					: ""
			}
			
			`}
			onClick={() =>
				props.changeAnswer(props.questionAnswer, props.questionIndex)
			}
		>
			{props.children}
		</div>
	);
};

export default QuestionAnswer;
