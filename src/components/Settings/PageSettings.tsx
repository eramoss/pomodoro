import { Switcher } from "../Switcher";
import {CgSun,CgEditContrast} from 'react-icons/cg'

export const PageSettings = () => {
  const handleClick = () => {
    console.log("aé");
  };


  return (
    <div className=" w-full h-full   py-16 flex flex-col items-center justify-start gap-5  overflow-hidden">
      <div className="w-full flex justify-center items-start flex-col mt-10">
        <Switcher  icon={<CgSun />} label= "Light Mode" functionSwitch={handleClick} />
        <Switcher icon={<CgEditContrast/>} label="high Contrast" functionSwitch={handleClick} />
      </div>

    </div>
  );
};
