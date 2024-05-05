import FormContact from "@/components/FormContact";
import NavBar from "@/components/NavBar";
import Projects from "@/components/projects";
import Image from "next/image";

type inputs = {
  name: string,
  email:string,
  mesage: string
}

export default function Home() {

  return (
    <>
      <NavBar/>
      <main className="container flex flex-col-reverse lg:flex-row items-center justify-between  lg:mt-16 text-center lg:text-left  ">
        <div className=" m-4 lg:m-0">
          <h1 className="text-4xl lg:text-6xl text-white font-bold">Hello i'm Felipe Teixeira</h1>
          <span className="text-white text-xl lg:text-3xl mt-8">
            Full-stack Developer, Instructor and Data Science student
          </span>
          <div className="mt-8 text-white flex flex-col lg:flex-row gap-4">
            <div className="bg-blue-600 rounded-full p-3 hover:bg-white hover:text-black">
              <a href="." className="text-xl font-bold p-6 ">Download cv</a>
            </div>
            <div className="border-2 border-blue-600 rounded-full p-3 hover:bg-blue-600 hover:border-0 hover:p-4">
              <a href="" className="text-xl font-bold p-6 ">Contact-me</a>
            </div>
          </div>
        </div>
        <div>
          <Image
          className="p-8 rounded-full"
          src='https://avatars.githubusercontent.com/u/80359142?v=4'
          alt="Avatar"
          width={580}
          height={580}
          />
        </div>
      </main>


      {/* ABOUT */}
      <section id="#about" className="container flex items:center text-center flex-col mt-16">
        <div>
        <h1 className="text-white text-4xl font-bold">About</h1>
        </div>
        <div className="flex flex-col items-center mt-4 lg:mt-16">
          <div className="p-4 flex flex-col lg:flex-row lg:justify-center items-center">
            <div>
            <Image 
            className="md:w-full md:h-full"
            src="/coding.jpg"
            alt="imagem de linhas de código"
            width={600}
            height={600}/>
            </div>

            <div className="lg:w-2/3">
              <p className="text-white text-left mt-4 text-xl md:m-0 md:mt-2 md:text-center lg:text-left lg:ml-4  lg:text-2xl lg:mt-0 lg:mb-4">Born in 2002 in the city of Limoeiro-PE, currently living in Recife, graduating in Information Systems from UFRPE, my goal is to improve myself as a fullstack developer and create scalable systems.
              </p>
              <div className="lg:ml-4 flex flex-col md:text-center">
                <h1 className="text-white text-left mt-6 text-2xl font-bold md:text-center lg:text-left">Tecnologies</h1>
                <div className="flex flex-wrap gap-2 mt-2 md:items-center md:justify-center lg:justify-start">
                  <div className="bg-black font-bold text-white pl-6 pr-6 pt-2 pb-2  lg:pl-6 lg:pr-6 lg:pt-3 lg:pb-3 text-xl  rounded"><span>Next.js</span></div>
                  <div className="bg-lime-600 font-bold text-white pl-6 pr-6 pt-2 pb-2  lg:pl-6 lg:pr-6 lg:pt-3 lg:pb-3 text-xl  rounded"><span>Node.js</span></div>
                  <div className="bg-blue-700 font-bold text-white pl-6 pr-6 pt-2 pb-2  lg:pl-6 lg:pr-6 lg:pt-3 lg:pb-3 text-xl  rounded"><span>Python</span></div>
                  <div className="bg-yellow-600 font-bold text-white pl-6 pr-6 pt-2 pb-2  lg:pl-6 lg:pr-6 lg:pt-3 lg:pb-3 text-xl  rounded"><span>Postgres</span></div>
                  <div className="bg-sky-600 font-bold text-white pl-6 pr-6 pt-2 pb-2  lg:pl-6 lg:pr-6 lg:pt-3 lg:pb-3 text-xl  rounded"><span>React</span></div>
                  <div className="bg-red-600 font-bold text-white pl-6 pr-6 pt-2 pb-2  lg:pl-6 lg:pr-6 lg:pt-3 lg:pb-3 text-xl  rounded"><span>Nest.js</span></div>
                  <div className="bg-blue-800 font-bold text-white pl-6 pr-6 pt-2 pb-2  lg:pl-6 lg:pr-6 lg:pt-3 lg:pb-3 text-xl  rounded"><span>Typescript</span></div>
                </div>
              </div>
              <div className="rounded-full border-2 border-blue-600 mt-6 text-white font-bold  text-xl lg:ml-4 lg:mt-12 pl-6 pr-6 pt-2 pb-2 lg:pl-6 lg:pr-6 lg:pt-3 lg:pb-3 hover:bg-blue-600 hover:text-white">
                <a href="#contacts">Contacts</a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* PROJECTS */}
      <section id="projects" className="container flex items:center text-center flex-col mt-16 lg:mt-32">
        <div>
          <h1 className="text-white text-4xl font-bold">Projects</h1>
        </div>
        <div className="flex flex-col items-center mt-2 pl-4 pr-5 md:pl-10 md:pr-10  lg:flex-row lg:flex-wrap justify-center lg:mt-16">
          <Projects src={"/projects/chat2click.png"} alt={"projeto de automação na criação de links para o whatsapp"} h2={"Chat2Click"} description={"Aplicação criada com o foco no auxilio de desenvolvimento de links para whatsapp."} link={"https://click2-chat.vercel.app/"}/>
          <Projects src={"/projects/chat2click.png"} alt={"projeto de automação na criação de links para o whatsapp"} h2={"Chat2Click"} description={"Aplicação criada com o foco no auxilio de desenvolvimento de links para whatsapp."} link={"https://click2-chat.vercel.app/"}/>
          <Projects src={"/projects/chat2click.png"} alt={"projeto de automação na criação de links para o whatsapp"} h2={"Chat2Click"} description={"Aplicação criada com o foco no auxilio de desenvolvimento de links para whatsapp."} link={"https://click2-chat.vercel.app/"}/>
          <Projects src={"/projects/chat2click.png"} alt={"projeto de automação na criação de links para o whatsapp"} h2={"Chat2Click"} description={"Aplicação criada com o foco no auxilio de desenvolvimento de links para whatsapp."} link={"https://click2-chat.vercel.app/"}/>
        </div>

        {/* FORM */}
        <div className="container pt-24 p-4">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-white">Tem algum projeto em mente?</h1>
          </div>
          <div>
            <FormContact/>
          </div>
        </div>


      </section>
      <footer className="bg-blue-600 flex flex-col items-center justify-center text-center mt-16">
        <span className="text-white font-bold text-xl p-6">© <a href="">Felipe Teixeira</a> 2024</span>
      </footer>
    </>
  );
}
