import "./Home.css";
import { useFetch } from "../../hooks/useFetch";
import RecipeList from "../../components/RecipeList";
import { useTheme } from "../../hooks/useTheme";

export default function Home() {
  const { data, isPending, error } = useFetch("http://localhost:3000/recipes");
  const { mode } = useTheme();
  return (
    <div className="home">
      {error && <p className={`error ${mode}`}>{error}</p>}
      {isPending && <p className={`loading ${mode}`}>Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
