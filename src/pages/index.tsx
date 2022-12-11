
import { Header } from "../components/Header";

import { ModalSettings } from "../components/Settings/ModalSettings";
import { Starter } from "../components/Starter";




export default function Home() {




  return (
    <div  className="bg-midnight h-screen  w-screen flex flex-col justify-center gap-20 items-center" >
      <h1 className="text-white font-bold text-3xl" >pomodoro</h1>
      <Header/>
      <Starter/>
      <ModalSettings/>
     
    </div>
  )
}
