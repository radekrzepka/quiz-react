import { useState, useEffect, useRef } from "react";

import questions from "./data/questions.json";
import Question from "./components/Question/Question";
import QuestionList from "./components/QuestionList/QuestionList";

import Counter from "./components/Counter/Counter";
import FlagQuestionButton from "./components/buttons/FlagQuestionButton";
import NextQuestionButton from "./components/buttons/NextQuestionButton";

import QuizAnswers from "./components/QuizAnswers/QuizAnswers";

import CategoryPicker from "./components/CategoryPicker/CategoryPicker";

import "./assets/global.css";
import styles from "./App.module.css";

const App = () => {
	const [answers, setAnswers] = useState({});
	const [selectedQuestion, setSelectedQuestion] = useState(0);
	const [resolvingTime, setResolvingTime] = useState(0);
	const [showAnswers, setShowAnswers] = useState(false);
	const [selectedQuestions, setSelectedQuestions] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState("");
	const [categoryPicked, setCategoryPicked] = useState(false);
	const [quizStarted, setQuizStarted] = useState(false);

	const funRef = useRef(null);

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

	const selectCategory = category => {
		setSelectedQuestions(questions[category].questions);
		setSelectedCategory(questions[category].name);
		setAnswers({
			userAnswers: [],
			questionState: [],
		});
		setCategoryPicked(true);
	};

	if (categoryPicked && !quizStarted) {
		setResolvingTime(0);
		setQuizStarted(true);
	}

	useEffect(() => {
		if (!showAnswers) {
			funRef.current = setInterval(() => {
				setResolvingTime(prevTime => prevTime + 1);
			}, 100);
		} else {
			clearInterval(funRef.current);
		}
	}, [showAnswers]);

	if (showAnswers)
		return (
			<main className={styles["result-margin"]}>
				<QuizAnswers
					userAnswers={answers.userAnswers}
					questions={selectedQuestions}
					resolvingTime={resolvingTime}
				/>
			</main>
		);

	if (!categoryPicked) {
		return (
			<CategoryPicker
				selectCategory={selectCategory}
			></CategoryPicker>
		);
	}

	return (
		<main>
			<QuestionList
				questions={selectedQuestions}
				answers={answers}
				changeQuestion={changeQuestion}
			></QuestionList>
			<section className={styles.app}>
				<p className={styles.category}>Kategoria: {selectedCategory}</p>
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
