import questions from "../../data/questions.json";
// import styles from "./CategoryPicker.module.css";

const CategoryPicker = props => {
	return (
		<div>
			{Object.keys(questions).map((category, index) => (
				<div key={index} onClick={() => props.selectCategory(category)}>
					{questions[category].name}
					{questions[category].icon}
				</div>
			))}
		</div>
	);
};

export default CategoryPicker;
