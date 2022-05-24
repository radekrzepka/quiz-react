import Question from "../Question/Question";
import PlayAgainButton from "./PlayAgainButton/PlayAgainButton";
import globalStyles from "../../App.module.css";
import QuizResult from "./QuizResult/QuizResult";

const QuizAnswers = props => {
	let howManyCorrects = 0;
	props.questions.forEach((question, index) => {
		if (props.userAnswers[index] === question.correctAnswer) howManyCorrects++;
	});
	return (
		<div className={globalStyles.app}>
			<QuizResult
				howManyCorrects={howManyCorrects}
				howManyQuestions={props.questions.length}
				resolvingTime={props.resolvingTime}
			/>
			<PlayAgainButton />
			{props.questions.map((question, index) => (
				<Question
					correctAnswer={question.correctAnswer}
					isCorrectAnswer={props.userAnswers[index] === question.correctAnswer}
					userAnswer={props.userAnswers[index]}
					question={question}
					quizFinished={true}
					key={index}
				>
					{props.userAnswers[index] === question.correctAnswer ? "1" : "0"}/1
				</Question>
			))}
		</div>
	);
};

export default QuizAnswers;
