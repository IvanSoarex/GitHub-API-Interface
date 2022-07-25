import Layout from './components/layout/index'
import Profile from './components/profile';
import Repositories from './components/repositories';
import React from 'react';
import NoSearch from './components/no-search';
import useGithub from "./hooks/github-hooks";

function App() {
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
        <NoSearch />
      )}
    </Layout>
  );
};

export default App;