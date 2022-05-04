const QuestionList = props => {
	const questions = props.questions;
	return (
		<div>
			{questions.map((question, index) => (
				<div
					key={question.questionName}
					onClick={() => props.changeQuestion(index)}
				>
					{index + 1}
				</div>
			))}
		</div>
	);
};

export default QuestionList;
