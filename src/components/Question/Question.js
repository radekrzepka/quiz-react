import QuestionAnswer from "./QuestionAnswer";

const Question = props => {
	const question = props.question;
	return (
		<div className="question">
			<p>{question.questionName}</p>
			<QuestionAnswer>A: {question.answerA}</QuestionAnswer>
			<QuestionAnswer>B: {question.answerB}</QuestionAnswer>
			<QuestionAnswer>C: {question.answerC}</QuestionAnswer>
			<QuestionAnswer>D: {question.answerD}</QuestionAnswer>
		</div>
	);
};

export default Question;
