import { AllRoutes } from './routes/AllRoutes';
import { Footer, Appbar } from './components';

function App() {
  return (
    <div className="App dark:bg-slate-800">
      <Appbar />
        <AllRoutes/>
      <Footer /> 
    </div>
  );
}

export default App;