import atiku from "../assets/img/atiku.png";
import obi from "../assets/img/obi.png";
import tinubu from "../assets/img/tinubu.png";

const Card = (props) => {
    return <section className="w-full h-fit flex flex-col">
        <div className={props.margin + " w-fit flex flex-row space-x-2 h-fit p-2 bg-white"}>
            <img src={props.img}></img>
            <div className="w-full h-full flex flex-col space-y-1">
                <font className={"text-sm text-left " + props.color}>{props.name}</font>
                <font className="text-sm text-left">{props.vote}</font>
            </div>
        </div>
    </section>
    
}

const PresidentialElection = () => {
    return <section className="w-full pt-8 h-full flex flex-col space-y-3">
        <h3 className="uppercase font-medium text-gray-100">president</h3><br></br>
        <div className="w-full h-fit flex flex-row">
            <div className="h-4 w-[51.3%] bg-cyan-300"></div>
            <div className="h-4 w-[42%] bg-green-500"></div>
            <div className="h-4 w-[22.3%] bg-red-700"></div>
        </div>
        <div className="w-full h-fit grid grid-cols-3">
            <Card margin="ml-20" img={tinubu} color="text-cyan-300" vote="81,283,786 votes (51.3%)" name="Tinubu, APC" />
            <Card margin="ml-44" img={obi} color="text-green-500" vote="60,283,786 votes (42%)" name="Peter, LP" />
            <Card margin="ml-48" img={atiku} color="text-cyan-300" vote="283,786 votes (7.3%)" name="Atiku, PDP" />
        </div>
    </section>
}

export default PresidentialElection;