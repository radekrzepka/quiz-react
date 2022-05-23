import { useState, useEffect } from "react";

import questions from "./data/questions.json";
import Question from "./components/Question/Question";
import QuestionList from "./components/QuestionList/QuestionList";

import Counter from "./components/Counter/Counter";
import FlagQuestionButton from "./components/buttons/FlagQuestionButton";
import NextQuestionButton from "./components/buttons/NextQuestionButton";

import "./assets/global.css";
import styles from "./App.module.css";

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
		<main>
			<QuestionList
				questions={selectedQuestions}
				answers={answers}
				changeQuestion={changeQuestion}
			></QuestionList>
			<section className={styles.app}>
				<p className={styles.category}>Kategoria: koszykówka</p>
				<p className={styles["question-number"]}>
					{selectedQuestion + 1}/{selectedQuestions.length}
				</p>
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
				<NextQuestionButton
					changeQuestion={changeQuestion}
					questionIndex={selectedQuestion}
					numberOfQuestions={selectedQuestions.length}
				/>
			</section>
		</main>
	);
};

export default App;
