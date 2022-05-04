const QuestionList = props => {
	const questions = props.questions;
	const questionColor = questionState => {
		switch (questionState) {
			case "solved":
				return "green";
			case "flagged":
				return "yellow";
			case "unsolved":
				return "red";
			default:
		}
	};
	return (
		<div>
			{questions.map((question, index) => (
				<div
					key={question.questionName}
					onClick={() => props.changeQuestion(index)}
					style={{ color: questionColor(props.answers.questionState[index]) }}
				>
					{index + 1}
				</div>
			))}
		</div>
	);
};

export default QuestionList;
