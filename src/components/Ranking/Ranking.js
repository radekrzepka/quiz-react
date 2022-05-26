import { useState } from "react";
import questions from "../../data/questions.json";
import buttonStyles from "../buttons/Button.module.css";

const Ranking = props => {
	const [selectedCategory, setSelectedCategory] = useState("basketball");
	const switchCategory = event => {
		setSelectedCategory(event.target.value);
	};
	const sortedResults = questions[selectedCategory].results.sort(
		(a, b) => b.score - a.score || a.resolvingTime - b.resolvingTime
	);
	return (
		<div>
			<label htmlFor="ranking">Wybierz kategorię: </label>
			<button className={buttonStyles.button} onClick={props.hideRanking}>
				Powrót
			</button>
			<select id="ranking" onChange={switchCategory}>
				{Object.keys(questions).map((category, index) => (
					<option value={category} key={index}>
						{questions[category].name}
					</option>
				))}
			</select>
			{sortedResults.map((result, index) => (
				<div key={index}>
					{index + 1}. {result.name} {result.score}
				</div>
			))}
		</div>
	);
};

export default Ranking;
