import { useState, useEffect } from "react";

import questions from "./data/questions.json";
import Question from "./components/Question/Question";
import QuestionList from "./components/QuestionList/QuestionList";

import Counter from "./components/Counter/Counter";
import FlagQuestionButton from "./components/buttons/FlagQuestionButton";
import NextQuestionButton from "./components/buttons/NextQuestionButton";

import QuizAnswers from "./components/QuizAnswers/QuizAnswers";

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
	const [showAnswers, setShowAnswers] = useState(false);

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
		}, 100);
		return () => clearInterval(interval);
	}, []);

	if (showAnswers)
		return (
			<main>
				<QuizAnswers
					userAnswers={answers.userAnswers}
					questions={selectedQuestions}
				/>
			</main>
		);

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
					userAnswer={answers.userAnswers[selectedQuestion]}
					quizFinished={false}
				/>
				<div className={styles.buttons}>
					<FlagQuestionButton
						changeQuestion={changeQuestion}
						flagQuestion={flagQuestion}
						questionIndex={selectedQuestion}
						numberOfQuestions={selectedQuestions.length}
					/>
					<NextQuestionButton
						changeQuestion={changeQuestion}
						questionIndex={selectedQuestion}
						numberOfQuestions={selectedQuestions.length}
						showAnswers={setShowAnswers}
					/>
				</div>
			</section>
		</main>
	);
};

export default App;
