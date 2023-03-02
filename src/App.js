import logo from './logo.svg';
import './App.css';
import AppBar from './components/app-bar';
import ElectionData from './components/election-data';

function App() {
  return (
    <section className='w-full h-full p-12 flex flex-col space-y-4 bg-gray-900'>
      {/* application app bar */}
      <AppBar />
      {/* election data section */}
      <ElectionData />
    </section>
  );
}

export default App;
