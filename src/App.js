import Layout from "./components/Layout";
import Profile from "./components/Profile";
import GitHubProvider from "./Providers/github-provider";
import Repositories from "./components/Repositories";
import useGitHub from "./hooks/github-hooks";
import { ResetCSS } from "./global/resetCSS";
import NoSearch from "./components/no-search";


function App() {
  const { githubState } = useGitHub();
  return (

    <Layout>
      {githubState.hasUser ? <>
        {githubState.loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <Profile />
            <Repositories />
          </>
        )}
      </>: <NoSearch />}
      <div>Starreds</div>
    </Layout>

  );
}

export default App;
