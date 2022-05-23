import Question from "../Question/Question";
import PlayAgainButton from "./PlayAgainButton";
import globalStyles from "../../App.module.css";
import styles from "./QuizAnswers.module.css";

const QuizAnswers = props => {
	let howManyCorrects = 0;
	props.questions.forEach((question, index) => {
		if (props.userAnswers[index] === question.correctAnswer) howManyCorrects++;
	});
	return (
		<div className={globalStyles.app}>
			<p className={styles.score}>
				Wynik: {howManyCorrects}/{props.questions.length}
			</p>
			<PlayAgainButton />
			{props.questions.map((question, index) => (
				<Question
					correctAnswer={question.correctAnswer}
					isCorrectAnswer={props.userAnswers[index] === question.correctAnswer}
					userAnswer={props.userAnswers[index]}
					question={question}
					questionIndex={index}
					key={index}
					quizFinished={true}
				>
					{props.userAnswers[index] === question.correctAnswer ? "1" : "0"}/1
				</Question>
			))}
		</div>
	);
};

export default QuizAnswers;
