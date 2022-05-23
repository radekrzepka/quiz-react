import QuestionAnswer from "./QuestionAnswer";
import styles from "./Question.module.css";

const Question = props => {
	return (
		<div className={styles.question}>
			<p className={styles["question-name"]}>{props.question.questionName}</p>
			{props.children}
			{props.question.answers.map((answer, index) => (
				<QuestionAnswer
					correctAnswer={props.correctAnswer}
					changeAnswer={props.changeAnswer}
					isCorrectAnswer={props.isCorrectAnswer}
					questionIndex={props.questionIndex}
					userAnswer={props.userAnswer}
					questionAnswer={index}
					key={index}
					quizFinished={props.quizFinished}
				>
					{String.fromCharCode(65 + index)}: {answer}
				</QuestionAnswer>
			))}
		</div>
	);
};

export default Question;
