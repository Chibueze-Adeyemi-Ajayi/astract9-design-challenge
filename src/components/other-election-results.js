import apc from "../assets/img/apc.png";
import lp from "../assets/img/lp.png";
import pdp from "../assets/img/pdp.png";

const Section = (props) => {
    return <section className="w-full pt-8 h-full flex flex-col space-y-3">
    <h3 className="uppercase font-medium text-gray-100">{props.title}</h3><br></br>
    <div className="w-full h-fit flex flex-row">
        <div className="h-4 w-[51.3%] bg-cyan-300"></div>
        <div className="h-4 w-[42%] bg-[#0AA83F]"></div>
        <div className="h-4 w-[22.3%] bg-red-700"></div>
    </div>
    <div className="w-full h-fit -mt-2 grid grid-cols-3">
        <Card margin="ml-0" img={apc} color="text-cyan-300" vote="54 Seats (51.3%)" name="All Progressive Congress" />
        <Card margin="ml-8" img={lp} color="text-[#0AA83F" vote="12 Seats (16.3%)" name={"The Labour Party"} />
        <Card margin="ml-8" img={pdp} color="text-red-600" vote="36 Seats(46%)" name="People Democratic Party" />
    </div>
</section>
}

const Card = (props) => {
    return <section className={props.margin + " w-fit h-fit flex flex-col"}>
        <svg className="w-6 mx-auto h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path className="fill-white" d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"/>
        </svg>
        <div className={"w-fit -mt-2 flex flex-row space-x-2 h-20 p-2 bg-white"}>
            <img className="w-8 h-8" src={props.img}></img>
            <div className="w-full font-medium h-full flex flex-col space-y-1">
                <font className={"text-sm text-left " + props.color}>{props.name}</font>
                <font className="text-sm text-left">{props.vote}</font>
            </div>
        </div>
    </section>
    
}
const OtherElectionResults = () => {
    return <><br></br><br></br>
        <section className="w-full h-full grid grid-cols-2 gap-16">
            <Section title="senate" />
            <Section title="house" />
        </section>
    </>
    
}

export default OtherElectionResults;