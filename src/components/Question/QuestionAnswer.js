const QuestionAnswer = props => {
	return (
		<div
			onClick={() =>
				props.changeAnswer(props.questionAnswer, props.questionIndex)
			}
		>
			{props.children}
		</div>
	);
};

export default QuestionAnswer;
