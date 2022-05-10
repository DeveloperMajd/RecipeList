import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import DeleteIcon from "../assets/deleteIcon.svg";
import { projectFirestore } from "../firebase/config";

import "./RecipeList.css";

export default function RecipeList({ recipes }) {
  const { mode, color } = useTheme();

  const handleClick = (id) => {
    projectFirestore.collection("recipes").doc(id).delete();
  };

  if (recipes.length === 0) {
    return <div className="error">No recipes to load...</div>;
  }
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div className={`card ${mode}`} key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`} style={{ background: color }}>
            Cook This
          </Link>
          <img className="delete" src={DeleteIcon} onClick={() => handleClick(recipe.id)} alt="delete icon" />
        </div>
      ))}
    </div>
  );
}
