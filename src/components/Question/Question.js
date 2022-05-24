import QuestionAnswer from "./QuestionAnswer";
import styles from "./Question.module.css";

const Question = props => {
	return (
		<div className={styles.question}>
			<p className={styles["question-name"]}>{props.question.questionName}</p>
			{props.children}
			{props.question.answers.map((answer, index) => (
				<QuestionAnswer
					answerIndex={index}
					changeAnswer={props.changeAnswer}
					questionIndex={props.questionIndex}
					userAnswer={props.userAnswer}
					quizFinished={props.quizFinished}
					correctAnswer={props.correctAnswer}
					isCorrectAnswer={props.isCorrectAnswer}
					key={index}
				>
					{String.fromCharCode(65 + index)}: {answer}
				</QuestionAnswer>
			))}
		</div>
	);
};

export default Question;
