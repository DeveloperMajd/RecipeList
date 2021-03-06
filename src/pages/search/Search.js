import { useLocation } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import RecipeList from "../../components/RecipeList";
import { useTheme } from "../../hooks/useTheme";

export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  const url = "http://localhost:3000/recipes?q=" + query;
  console.log("🚀 ~ file: search.js ~ line 12 ~ Search ~ url", url);

  const { error, isPending, data } = useFetch(url);
  const { mode } = useTheme();
  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className={`error ${mode}`}>{error}</p>}
      {isPending && <p className={`loading ${mode}`}>loading ...</p>}
      {data && <RecipeList recipes={data}> </RecipeList>}
    </div>
  );
}
