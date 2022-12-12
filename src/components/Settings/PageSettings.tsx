import { Switcher } from "../Switcher";

export const PageSettings = () => {
  const handleClick = () => {
    console.log("aé");
  };

  return (
    <div className=" w-full h-full p-4 flex items-center justify-center gap-5  overflow-hidden">
      <div className="flex flex-col  justify-center items-center gap-3">
        <Switcher label="jurema" functionSwitch={handleClick} />
        <Switcher label="jurandir" functionSwitch={handleClick} />
      </div>
    </div>
  );
};
