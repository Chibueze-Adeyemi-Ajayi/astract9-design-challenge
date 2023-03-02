import logo from './logo.svg';
import './App.css';
import AppBar from './components/app-bar';

function App() {
  return (
    <section className='w-full h-full p-6 flex flex-col space-y-4 bg-gray-900'>
      {/* application app bar */}
      <AppBar />
    </section>
  );
}

export default App;
