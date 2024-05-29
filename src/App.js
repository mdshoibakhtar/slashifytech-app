import './App.css';
import Form from './components/applicationForm/Form';

function App() {
  return (
    <>
      <h1 className="text-3xl  font-bold underline px-2 pt-5 text-center">
        @Slashifytech [The Tech Company]
      </h1>
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="max-w-3xl w-full mx-4 lg:mx-auto bg-amber-300 py-8 px-10 rounded boxShadow-1">
          <Form />
        </div>
      </div>
    </>
  );
}

export default App;
