import './App.css';
import Form from './components/applicationForm/Form';
import ListData from './components/applicationForm/ListData';

function App() {
  
  return (
    <>
      <h1 className="text-3xl  font-bold underline px-2 pt-5 text-center">
        @Slashifytech [The Tech Company]
      </h1>
      <div className="relative min-h-screen ">
        <Form />
      </div>

    </>
  );
}

export default App;
