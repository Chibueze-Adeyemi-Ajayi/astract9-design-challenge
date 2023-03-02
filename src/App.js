import logo from './logo.svg';
import './App.css';
import AppBar from './components/app-bar';
import ElectionData from './components/election-data';
import PresidentialElection from './components/presidential-election';
import OtherElectionResults from './components/other-election-results';
import Stateresults from './components/state-results';

function App() {
  return (
    <section className='w-full h-fit p-12 flex flex-col space-y-4 bg-gray-900'>
      {/* application app bar */}
      <AppBar />
      {/* election data section */}
      <ElectionData />
      {/* presidential election section */}
      <PresidentialElection />
      {/* other election results */}
      <OtherElectionResults />
      {/* displaying the states results */}
      <Stateresults />
    </section>
  );
}

export default App;
