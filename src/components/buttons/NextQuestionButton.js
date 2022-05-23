const NextQuestionButton = props => {
	const changeQuestion = () => {
		if (props.questionIndex === props.numberOfQuestions - 1) return;
		props.changeQuestion(props.questionIndex + 1);
	};

	return <button onClick={changeQuestion}>Następne pytanie</button>;
};

export default NextQuestionButton;
