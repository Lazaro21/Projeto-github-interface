import Layout from "./components/Layout";
import Profile from "./components/Profile";
import Repositories from "./components/Repositories";
import { ResetCSS } from "./global/resetCSS";


function App() {
  return (
    <main>
      <ResetCSS />
      <Layout>
        <Profile>
          
        </Profile>  
        <Repositories />
        <div>Starreds</div>
      </Layout>
    </main>
  );
}

export default App;
