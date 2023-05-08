import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import apiInstance from "../api/github";
import { Repository } from "../types";

const fetchRepos = async (ctx: QueryFunctionContext) => {
  const [_, userGithub] = ctx.queryKey;
  const response = await apiInstance.get<Repository[]>(
    `/users/${userGithub}/repos`
  );
  const { data } = response;
  return data;
};

export const useFetchRepositories = (userGithub: string) => {
  return useQuery(["repos", userGithub], fetchRepos);
};
