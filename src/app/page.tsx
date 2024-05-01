import NavBar from "@/components/NavBar";
import Projects from "@/components/projects";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar/>
      <main className="container flex flex-col-reverse lg:flex-row items-center justify-between  lg:mt-16 text-center lg:text-left">
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

      <section id="projects" className="container flex items:center text-center flex-col mt-16 lg:mt-32">
        <div>
          <h1 className="text-white text-4xl font-bold">Projects</h1>
        </div>
        <div className="flex flex-col items-center mt-12 p-10 lg:flex-row lg:flex-wrap justify-center">
          <Projects src={"/projects/chat2click.png"} alt={"projeto de automação na criação de links para o whatsapp"} h2={"Chat2Click"} description={"Aplicação criada com o foco no auxilio de desenvolvimento de links para whatsapp."} link={"https://click2-chat.vercel.app/"}/>
          <Projects src={"/projects/chat2click.png"} alt={"projeto de automação na criação de links para o whatsapp"} h2={"Chat2Click"} description={"Aplicação criada com o foco no auxilio de desenvolvimento de links para whatsapp."} link={"https://click2-chat.vercel.app/"}/>
          <Projects src={"/projects/chat2click.png"} alt={"projeto de automação na criação de links para o whatsapp"} h2={"Chat2Click"} description={"Aplicação criada com o foco no auxilio de desenvolvimento de links para whatsapp."} link={"https://click2-chat.vercel.app/"}/>
          <Projects src={"/projects/chat2click.png"} alt={"projeto de automação na criação de links para o whatsapp"} h2={"Chat2Click"} description={"Aplicação criada com o foco no auxilio de desenvolvimento de links para whatsapp."} link={"https://click2-chat.vercel.app/"}/>
        </div>

      </section>
    </>
  );
}
