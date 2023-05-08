import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IUseReposStore {
  favoriteReposId: number[];
  addFavoriteRepos: (id: number) => void;
  removeFavoriteRepos: (id: number) => void;
}

export const useReposStore = create(
  persist<IUseReposStore>(
    (set) => ({
      favoriteReposId: [],

      addFavoriteRepos: (id: number) =>
        set((state) => ({ favoriteReposId: [...state.favoriteReposId, id] })),

      removeFavoriteRepos: (id: number) =>
        set((state) => ({
          favoriteReposId: state.favoriteReposId.filter(
            (repoId) => repoId !== id
          ),
        })),
    }),
    {
      name: "favorite-repos",
    }
  )
);
