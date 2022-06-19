import Layout from "./components/Layout";
import Profile from "./components/Profile";
import GitHubProvider from "./Providers/gitHubProvider";
import Repositories from "./components/Repositories";
import { ResetCSS } from "./global/resetCSS";


function App() {
  return (
    <main>
      <GitHubProvider>
        <ResetCSS />
        <Layout>
          <Profile>

          </Profile>
          <Repositories />
          <div>Starreds</div>
        </Layout>
      </GitHubProvider>
    </main>
  );
}

export default App;
