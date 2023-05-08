import { useReposStore } from "../store/useReposStore";
import { Repository } from "../types";

interface ICard {
  repository: Repository;
  isFavorite: boolean;
}

const Card = ({ repository, isFavorite }: ICard) => {
  const { addFavoriteRepos, removeFavoriteRepos } = useReposStore();

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavoriteRepos(repository.id);
      return;
    }
    addFavoriteRepos(repository.id);
  };

  return (
    <div>
      <h1>{repository.name}</h1>
      <button onClick={toggleFavorite}>{isFavorite ? "Liked" : "Like"}</button>
    </div>
  );
};

export default Card;
