import styles from "./QuizResult.module.css";
import Counter from "../../Counter/Counter";

const QuizResult = props => {
	return (
		<div className={styles.result}>
			<p className={styles.score}>
				Wynik: {props.howManyCorrects}/{props.howManyQuestions}
			</p>
			<p>
				Czas rozwiązania quizu: <Counter time={props.resolvingTime} />
			</p>
		</div>
	);
};

export default QuizResult;
