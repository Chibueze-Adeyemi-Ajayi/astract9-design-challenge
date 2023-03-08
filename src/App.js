import './App.css';
import AppBar from './components/app-bar';
import ElectionData from './components/election-data';
import PresidentialElection from './components/presidential-election';
import OtherElectionResults from './components/other-election-results';
import Stateresults from './components/state-results';
import Footer from './components/footer';
import Map from './components/map';
import MapRegion from './components/map-region';
import FetchHTTPData from './assets/js/http-connector';

// this project is a frontend project from astract9 

function App() {
  return (
    <div id='app' className='w-full h-fit flex flex-col bg-[#1E2748]'>
      <div className='w-full flex flex-col h-full bg-black/30'>
        <section className='w-full h-full p-12 flex flex-col space-y-4'>
                {/* application app bar */}
                <AppBar />
                <section className='h-10'></section>
                {/* election data section */}
                <ElectionData />

                {/* presidential election section */}

                {/* spinner */}
                <section id='presidential-loader' className='hidden h-56'>
                    <div className='w-full h-full p-8 flex'><span class="loader mx-auto my-auto"></span></div>
                </section>

                {/* no result for presidential election */}
                <section id='presidential-loader-error-message' className='hidden h-56'>
                    <div className='w-full h-full flex flex-col space-y-2'>
                      <svg className='w-20 h-20 mx-auto my-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                        <path className='fill-white' d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-280c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"/>
                      </svg>
                      <font className="text-center my-auto text-xl w-full h-fit text-white">No Result availble yet for <b>Presidential</b> election</font>
                    </div>
                </section>
                
                <div className='hidden' id='presidential'><br></br><br></br><br></br><br></br>
                  <PresidentialElection />
                </div>
 
                {/* other election results */}
                <div className='hidden' id='senate-house'><OtherElectionResults /></div>
                <div className='flex flex-col'>
                  {/* displaying the map */}
                  <Map />
                  {/* Displaying map region */}
                  <div className='hidden' id='map-region'><MapRegion /></div>
                </div>
                {/* displaying the states results */}
                <div className='hidden' id='state-results'><Stateresults /></div>
                
        </section>
        <Footer />
      </div>
      
    </div>
    
  );
}

export default App;
