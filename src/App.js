import logo from './logo.svg';
import './App.css';
import AppBar from './components/app-bar';
import ElectionData from './components/election-data';
import PresidentialElection from './components/presidential-election';
import OtherElectionResults from './components/other-election-results';
import Stateresults from './components/state-results';
import Footer from './components/footer';

// this

function App() {
  return (
    <div className='w-full h-fit flex flex-col bg-[#1E2748]'>
      <div className='w-full flex flex-col h-full bg-black/30'>
        <section className='w-full h-full p-12 flex flex-col space-y-4'>
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
        <Footer />
      </div>
      
    </div>
    
  );
}

export default App;
