import questions from "./data/questions.json";
import Question from "./components/Question/Question";
import QuestionList from "./components/QuestionList/QuestionList";
import Counter from "./components/Counter/Counter";
import { useState, useEffect } from "react";
import FlagQuestionButton from "./components/buttons/FlagQuestionButton";
import CheckAnswerButton from "./components/buttons/CheckAnswerButton";

const App = () => {
	const selectedQuestions = questions.basketball;
	const initialAnswers = {
		userAnswers: Array(selectedQuestions.length).fill(""),
		questionState: Array(selectedQuestions.length).fill("unsolved"),
	};
	const [answers, setAnswers] = useState(initialAnswers);
	const [selectedQuestion, setSelectedQuestion] = useState(0);
	const [resolvingTime, setResolvingTime] = useState(0);

	const changeQuestion = questionNumber => {
		setSelectedQuestion(questionNumber);
	};

	const changeAnswer = (answer, index) => {
		setAnswers(prevAnswers => {
			prevAnswers.userAnswers[index] = answer;
			prevAnswers.questionState[index] = "solved";
			return prevAnswers;
		});
	};

	const flagQuestion = index => {
		setAnswers(prevAnswers => {
			prevAnswers.questionState[index] = "flagged";
			return prevAnswers;
		});
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setResolvingTime(prevTime => prevTime + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="App">
			{console.log(answers)}
			<QuestionList
				questions={selectedQuestions}
				answers={answers}
				changeQuestion={changeQuestion}
			></QuestionList>
			<Counter time={resolvingTime}></Counter>
			<Question
				question={selectedQuestions[selectedQuestion]}
				questionIndex={selectedQuestion}
				changeAnswer={changeAnswer}
			/>
			<FlagQuestionButton
				flagQuestion={flagQuestion}
				questionIndex={selectedQuestion}
			/>
			<CheckAnswerButton />
		</div>
	);
};

export default App;
