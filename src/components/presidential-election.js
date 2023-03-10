import atiku from "../assets/img/atiku.png";
import obi from "../assets/img/obi.png";
import tinubu from "../assets/img/tinubu.png";

const Card = (props) => {
    return <section className={props.margin + " w-fit h-fit flex flex-col"}>
        <svg className="w-6 mx-auto h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path className="fill-white" d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"/>
        </svg>
        <div className={"w-fit -mt-2 flex flex-row space-x-2 h-fit p-2 bg-white"}>
            <img id={`picx-${props.id}`} src={props.img}></img>
            <div className="w-full font-medium h-full flex flex-col space-y-1">
                <font id={`name-${props.id}`} className={"text-sm text-left " + props.color}>{props.name}</font>
                <font id={`vote-${props.id}`} className="text-sm text-left">{props.vote}</font>
            </div>
        </div>
    </section>
    
}

const PresidentialElection = () => {
    return <section className="w-full pt-8 h-full flex flex-col space-y-3">
        <h3 className="uppercase font-medium text-gray-100">president</h3><br></br>
        <div className="w-full h-fit flex flex-row">
            <div id="bar-1" className="h-4 w-[51.3%] bg-cyan-300"></div>
            <div id="bar-2" className="h-4 w-[42%] bg-[#0AA83F]"></div>
            <div id="bar-3" className="h-4 w-[22.3%] bg-red-700"></div>
        </div>
        <div className="w-full h-fit -mt-2 grid grid-cols-3">
            <Card margin="ml-20" id="1" img={tinubu} color="text-cyan-300" vote="81,283,786 votes (51.3%)" name="Tinubu, APC" />
            <Card margin="ml-44" id="2" img={obi} color="text-green-500" vote="60,283,786 votes (42%)" name="Peter, LP" />
            <Card margin="ml-48" id="3" img={atiku} color="text-red-600" vote="283,786 votes (7.3%)" name="Atiku, PDP" />
        </div>
    </section>
}

export default PresidentialElection;