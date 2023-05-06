import styles from "./QuestionList.module.css";

const QuestionList = props => {
	return (
		<nav className={styles["question-list"]}>
			{props.questions.map((question, index) => (
				<div
					key={question.questionName}
					onClick={() => props.changeQuestion(index)}
					className={`${styles["question-list__item"]} ${
						props.answers.questionState[index]
							? styles[props.answers.questionState[index]]
							: ""
					}`}
				>
					{index + 1}
				</div>
			))}
		</nav>
	);
};

export default QuestionList;
