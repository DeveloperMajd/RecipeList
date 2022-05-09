import "./Recipe.css";
import { useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import React from "react";
import { useTheme } from "../../hooks/useTheme";
export default function Recipe() {
  const { id } = useParams();
  const {
    error,
    isPending,
    data: recipe,
  } = useFetch(`http://localhost:3000/recipes/${id}`);
  const { mode } = useTheme();
  return (
    <div className={`recipe ${mode}`}>
      {error && <p className={`error ${mode}`}>{error}</p>}
      {isPending && <p className={`loading ${mode}`}>Loading...</p>}
      {recipe && (
        <React.Fragment>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </React.Fragment>
      )}
    </div>
  );
}
