import Layout from "./components/Layout";
import Profile from "./components/Profile";
import { ResetCSS } from "./global/resetCSS";


function App() {
  return (
    <main>
      <ResetCSS />
      <Layout>
        <Profile>
          
        </Profile>  
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>
  );
}

export default App;
