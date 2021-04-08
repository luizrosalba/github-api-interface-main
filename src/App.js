import React from "react";
import Layout from "./components/layout";
import NoSearch from "./components/no-search";
import NotFound from "./components/not-found";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import useGithub from "./hooks/github-hooks";

const App = () => {
  const { githubState } = useGithub();
  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        githubState.notFound?
          <NotFound />
        :
          <NoSearch />
      )}
    </Layout>
  );
};

export default App;
