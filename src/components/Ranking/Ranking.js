import { useState } from "react";
import questions from "../../data/questions.json";
import buttonStyles from "../buttons/Button.module.css";
import styles from "./Ranking.module.css";

const Ranking = props => {
	const [selectedCategory, setSelectedCategory] = useState("basketball");
	const switchCategory = event => {
		setSelectedCategory(event.target.value);
	};
	const sortedResults = questions[selectedCategory].results.sort(
		(a, b) => b.score - a.score || a.resolvingTime - b.resolvingTime
	);
	return (
		<div className={styles.ranking}>
			<label className={styles.label} htmlFor="ranking">
				Wybierz kategorię:{" "}
			</label>
			<select className={styles.select} id="ranking" onChange={switchCategory}>
				{Object.keys(questions).map((category, index) => (
					<option value={category} key={index}>
						{questions[category].name}
					</option>
				))}
			</select>
			<div className={styles.results}>
				{sortedResults.map((result, index) => (
					<p
						key={index}
						className={`${index <= 2 ? styles["best-results"] : ""} ${
							styles.result
						}`}
					>
						{index + 1}. {result.name} {result.score}/
						{questions[selectedCategory].questions.length}{" "}
						{Math.floor(result.resolvingTime / (60 * 10))}:
						{Math.floor(
							result.resolvingTime / 10 -
								Math.floor(result.resolvingTime / (60 * 10)) * 60
						)}
					</p>
				))}
				<button
					className={`${buttonStyles.button} ${styles.button}`}
					onClick={props.hideRanking}
				>
					Powrót
				</button>
			</div>
		</div>
	);
};

export default Ranking;
