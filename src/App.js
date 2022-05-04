import questions from "./data/questions.json";
import Question from "./components/Question/Question";
import QuestionList from "./components/QuestionList/QuestionList";
import Counter from "./components/Counter/Counter";
import { useState, useEffect } from "react";
import FlagQuestionButton from "./components/buttons/FlagQuestionButton";
import CheckAnswerButton from "./components/buttons/CheckAnswerButton";

const App = () => {
	const [selectedQuestion, setSelectedQuestion] = useState(0);
	const [resolvingTime, setResolvingTime] = useState(0);

	const selectedQuestions = questions.basketball;
	selectedQuestions.forEach(question => {
		question.state = "unsolved";
	});

	const changeQuestion = questionNumber => {
		setSelectedQuestion(questionNumber);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setResolvingTime(prevTime => prevTime + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="App">
			<QuestionList
				questions={selectedQuestions}
				changeQuestion={changeQuestion}
			></QuestionList>
			<Counter time={resolvingTime}></Counter>
			<Question question={selectedQuestions[selectedQuestion]} />
			<FlagQuestionButton />
			<CheckAnswerButton />
		</div>
	);
};

export default App;
