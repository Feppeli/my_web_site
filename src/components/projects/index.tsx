import Image from "next/image";

interface projectProps{
    src: string,
    alt: string,
    h2: string,
    description: string,
    link:string
}

const Projects = (props:projectProps) => {
    return <>
    <div className="w-full bg-zinc-800 flex flex-col items-center text-left rounded-lg m-4 lg:flex-row lg:w-5/12 lg:items-center justify-between">
            <Image
            className="rounded"
            src={props.src}
            alt={props.alt}
            width={300}
            height={300}/>
            <div className="lg:p-2 p-4">
                <h2 className="text-white w-full p-2 text-2xl font-bold">{props.h2}</h2>
                <p className="text-white p-2 pb-4">{props.description}</p>
                <div className="bg-none border-blue-600 border-2 rounded-full text-center lg:w-fit p-2 hover:bg-blue-600">
                    <a  className="p-4 text-white font-bold text-2xl transition" href={props.link} target="_blank">Visitar</a>
                </div>
            </div>

      </div>    
    </>
}

export default Projects;