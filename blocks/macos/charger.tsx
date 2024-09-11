import { cn } from "@/lib/tw";

export interface ChargerProps {}

const Charger = (props: ChargerProps) => {
  return (
    <div className="size-[150px] rounded-3xl p-4 bg-white flex gap-2 flex-col justify-center items-center">
      <div className="text-center text-[#222222]">
        <span className="font-sans text-3xl font-semibold">57%</span>
      </div>
      <div className="grid grid-cols-5 justify-center w-full gap-1">
        <div
          className={cn(
            "relative w-full h-[50px] rounded-lg bg-[#F5F5F5] overflow-hidden",
            "after:absolute after:bottom-0 after:left-0 after:bg-[#FA461F] after:w-full after:rounded-lg after:h-full"
          )}
        ></div>
        <div
          className={cn(
            "relative w-full h-[50px] rounded-lg bg-[#F5F5F5] overflow-hidden",
            "after:absolute after:bottom-0 after:left-0 after:bg-[#FA461F] after:w-full after:rounded-lg after:h-full"
          )}
        ></div>
        <div
          className={cn(
            "relative w-full h-[50px] rounded-lg bg-[#F5F5F5] overflow-hidden",
            "after:absolute after:bottom-0 after:left-0 after:bg-[#FA461F] after:w-full after:rounded-lg after:h-[50%]"
          )}
        ></div>
        <div className="w-full h-[50px] rounded-lg bg-[#F5F5F5] overflow-hidden"></div>
        <div className="w-full h-[50px] rounded-lg bg-[#F5F5F5] overflow-hidden"></div>
      </div>
      <div className="text-center text-[#414140] text-xs font-normal">
        ~ 5hours
      </div>
    </div>
  );
};

export default Charger;