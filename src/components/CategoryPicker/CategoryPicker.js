import questions from "../../data/questions.json";
import styles from "./CategoryPicker.module.css";

const CategoryPicker = props => {
	return (
		<div className={styles["category-picker"]}>
			<h1 className={styles.header}>Quizy</h1>
			<p className={styles.paragraph}>Wybierz kategorię, aby rozpocząć quiz</p>
			{Object.keys(questions).map((category, index) => (
				<div
					key={index}
					onClick={() => props.selectCategory(category)}
					className={styles.category}
				>
					<img
						src={`icons/${questions[category].icon}`}
						alt={`${questions[category].name} ikona`}
						className={styles.image}
					/>
					<p className={styles.text}>
						{questions[category].name} ({questions[category].questions.length}{" "}
						{questions[category].questions.length >= 22 &&
						questions[category].questions.length <= 24
							? "pytania"
							: "pytań"}
						)
					</p>
				</div>
			))}
		</div>
	);
};

export default CategoryPicker;
