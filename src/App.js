import './App.css';
import AppBar from './components/app-bar';
import ElectionData from './components/election-data';
import PresidentialElection from './components/presidential-election';
import OtherElectionResults from './components/other-election-results';
import Stateresults from './components/state-results';
import Footer from './components/footer';
import Map from './components/map';
import MapRegion from './components/map-region';

// this project is a frontend project from astract9 

function App() {
  return (
    <div className='w-full h-fit flex flex-col bg-[#1E2748]'>
      <div className='w-full flex flex-col h-full bg-black/30'>
        <section className='w-full h-full p-12 flex flex-col space-y-4'>
                {/* application app bar */}
                <AppBar />
                <section className='h-10'></section>
                {/* election data section */}
                <ElectionData />
                {/* presidential election section */}
                <div className='hidden' id='presidential'><PresidentialElection /></div>
                {/* other election results */}
                <div className='hidden' id='senate-house'><OtherElectionResults /></div>
                <div className='flex flex-col'>
                  {/* displaying the map */}
                  <Map />
                  {/* Displaying map region */}
                  <div className='hidden' id='map-region'><MapRegion /></div>
                </div>
                {/* displaying the states results */}
                <div className='hidden' id='mystate-id'><Stateresults /></div>
        </section>
        <Footer />
      </div>
      
    </div>
    
  );
}

export default App;
