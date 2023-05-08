import "./App.css";
import Card from "./components/Card";
import { useFetchRepositories } from "./hooks/useRepos";
import { useReposStore } from "./store/useReposStore";

function App() {
  const { data, isLoading } = useFetchRepositories("daromacs");
  const { favoriteReposId } = useReposStore();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {data?.map((repository) => (
        <Card
          key={repository.id}
          repository={repository}
          isFavorite={favoriteReposId.includes(repository.id)}
        />
      ))}
    </div>
  );
}

export default App;
