import logo from './logo.svg';
import './App.css';
import AppBar from './components/app-bar';
import ElectionData from './components/election-data';
import PresidentialElection from './components/presidential-election';

function App() {
  return (
    <section className='w-full h-full p-12 flex flex-col space-y-4 bg-gray-900'>
      {/* application app bar */}
      <AppBar />
      {/* election data section */}
      <ElectionData />
      {/* presidential election section */}
      <PresidentialElection />
    </section>
  );
}

export default App;
