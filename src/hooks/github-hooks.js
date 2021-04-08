import { useContext } from "react";
import { GithubContext } from "../providers/github-provider";

const useGithub = () => {
  const { githubState, getUser, getUserRepos, getUserStarred, getUserReposWithPage } = useContext(
    GithubContext
  );

  return { githubState, getUser, getUserRepos, getUserStarred, getUserReposWithPage };
};

export default useGithub;
