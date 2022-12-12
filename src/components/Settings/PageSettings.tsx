import { Switcher } from "../Switcher";
import {MdDarkMode, MdOutlineModeEditOutline} from "react-icons/md"
import {RiContrast2Fill} from 'react-icons/ri'
import {TfiAlarmClock} from 'react-icons/tfi'


export const PageSettings = () => {
  const handleClick = () => {
    console.log("aé");
  };


  return (
    <div className=" w-full h-full   py-16 flex flex-col items-center justify-start gap-5 px-4 overflow-hidden ">
      <div className="w-full flex justify-center items-start flex-col mt-10 gap-4 ">
        <Switcher  icon={<MdDarkMode className="text-midnight" />} label= "Dark Mode" functionSwitch={handleClick} />
        <Switcher icon={<RiContrast2Fill className="text-midnight"/>} label="high Contrast" functionSwitch={handleClick} />
      </div>

      <div className=" bg-white h-44 rounded-2xl w-full text-gray-600 p-4">
        <header className="flex items-center gap-3 w-full border-b">
          <h1>color pallet </h1><MdOutlineModeEditOutline/>
        </header>
        

      </div>


      <div className=" bg-white h-96 rounded-2xl w-full text-gray-600 p-4 border-t-2 mt-5">
        <header className="flex items-center gap-3 w-full border-b">
          <h1>Timer settings</h1><TfiAlarmClock/>
        </header>
      
      </div>



      <div className=" bg-white h-44 rounded-2xl w-full text-gray-600 p-4 border-t-2 mt-5">
        <header className="flex items-center gap-3 w-full border-b">
          <h1>Socials</h1>
        </header>
      
      </div>

    </div>
  );
};
