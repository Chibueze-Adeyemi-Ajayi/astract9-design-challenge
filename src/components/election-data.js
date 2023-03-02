import "flowbite"

const DropButton = (props) => {
    return <div className="w-full h-full flex flex-row space-x-2">
    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white w-full flex-row space-x-2 mx-auto font-light rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:hover:bg-blue-700" type="button"> 
        <font className="w-full text-left text-gray-100">Election Data</font>
        <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </button>
    <div id="dropdown" className="z-10 mt-3 ml-2 border border-gray-800 hidden bg-gray-900 divide-y divide-gray-100 rounded-lg shadow w-64 dark:bg-gray-700">
        <ul className="py-2 text-sm text-gray-100 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          <li>
            <a href="#" className="block border-b border-gray-800 px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-600 dark:hover:text-white">Pre-Election</a>
          </li>
          <li>
            <a href="#" className="block border-b border-gray-800 px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-600 dark:hover:text-white">Election Day Live Updates</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-600 dark:hover:text-white">Post Election Analysis</a>
          </li>
        </ul>
    </div>
    </div>
}


const ElectionData = (props) => {
  return <section className="w-full h-fit grid grid-cols-5 gap-5">
    <div className="w-full h-full flex flex-col space-y-3">
        <div className="w-full h-full flex flex-row space-x-2">
            <font className="font-bold w-96 h-fit flex text-3xl text-gray-100">Election&nbsp;Data</font>
            <font className="w-fit text-gray-100 text-sm h-fit p-1 flex flex-row border rounded-md mt-1 space-x-1 bg-black/20 border-gray-800">
                <font className="uppercase font-semibold">presidential</font>
                <font>/</font>
                <font className="uppercase font-semibold">2023</font>
            </font>
        </div>
        <font className="uppercase font-light text-gray-100"><font className="text-yellow-400">updated</font> mar.15, 9:43 a.m. edt</font>
    </div><div></div>
    <div className="w-full h-[3rem] flex p-2 bg-black/20 rounded-md border border-gray-800"><DropButton title="Election Data" target_id="btn-1" id="drop-btn-1" children={()=>{
        return [ "Pre-Election", "Election Day Live Update", "post Election Analysis" ]
    }} /></div>
    <div className="w-full h-[3rem] flex p-2 bg-black/20 rounded-md border border-gray-800"><DropButton title="Presidential" id="drop-btn-2" children={} /></div>
    <div className="w-full h-[3rem] flex p-2 bg-black/20 rounded-md border border-gray-800"><DropButton title="2023" id="drop-btn-3" children={} /></div>
    
  </section>
}

export default ElectionData;