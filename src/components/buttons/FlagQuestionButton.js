const FlagQuestionButton = props => {
	return (
		<button onClick={() => props.flagQuestion(props.questionIndex)}>
			Oflaguj Pytanie
		</button>
	);
};

export default FlagQuestionButton;
