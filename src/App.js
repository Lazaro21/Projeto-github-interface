import Layout from "./components/Layout";
import Profile from "./components/Profile";
import GitHubProvider from "./Providers/gitHubProvider";
import Repositories from "./components/Repositories";
import useGitHub from "./hooks/github-hooks";
import { ResetCSS } from "./global/resetCSS";


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
      </>: <div>Nenhum usuario pesquisado</div>}
      <div>Starreds</div>
    </Layout>

  );
}

export default App;
