import QuestionAnswer from "./QuestionAnswer";

const Question = props => {
	const question = props.question;
	return (
		<div className="question">
			<p>{question.questionName}</p>
			<QuestionAnswer
				changeAnswer={props.changeAnswer}
				questionIndex={props.questionIndex}
				questionAnswer="A"
			>
				A: {question.answerA}
			</QuestionAnswer>
			<QuestionAnswer
				changeAnswer={props.changeAnswer}
				questionIndex={props.questionIndex}
				questionAnswer="B"
			>
				B: {question.answerB}
			</QuestionAnswer>
			<QuestionAnswer
				changeAnswer={props.changeAnswer}
				questionIndex={props.questionIndex}
				questionAnswer="C"
			>
				C: {question.answerC}
			</QuestionAnswer>
			<QuestionAnswer
				changeAnswer={props.changeAnswer}
				questionIndex={props.questionIndex}
				questionAnswer="D"
			>
				D: {question.answerD}
			</QuestionAnswer>
		</div>
	);
};

export default Question;
