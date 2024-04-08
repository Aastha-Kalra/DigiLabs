"use client";
import { RiNotification2Line } from "react-icons/ri";
import { RiSendPlaneLine } from "react-icons/ri";
import { GiNetworkBars } from "react-icons/gi";
import { IoBatteryHalfSharp } from "react-icons/io5";
import { GrWifiMedium } from "react-icons/gr";
export default function Home() {
  const HandleNotification = () => {
    console.log("Notification Sent");
  };
  return (
    <div className="bg-black min-h-screen text-white flex justify-start p-2 items-center flex-col gap-4">
      <div className="flex justify-between items-center w-full px-4 ">
        <div className="flex justify-center items-center">
          1:11 &nbsp; <RiSendPlaneLine />
        </div>
        <div className="flex justify-center items-center gap-2">
          <GiNetworkBars />
          <GrWifiMedium />
          <IoBatteryHalfSharp />
        </div>
      </div>

      <div className="mt-4">
        <h1 className="text-2xl text-center">Lorem Ipsum...</h1>
        <p className="text-gray-400 mt-4">Lorem ipsum dolor sit amet.</p>
      </div>

      <div className="my-20 md:my-4">
        <div className="w-[365px] h-[365px] rounded-full border-2 border-l-[#CE722C] border-r-[#CE722C] border-t-[#CE722C] flex justify-center items-center border-b-[#040303]  ">
          <div className="w-72 h-72 rounded-full flex justify-center items-center border-2 border-l-[#CE722C] border-r-[#CE722C] border-t-[#CE722C] border-b-[#000000] ">
            <div className="w-56 h-56 rounded-full flex justify-center items-center border-2 border-l-[#CE722C] border-r-[#CE722C] border-t-[#CE722C] border-b-[#090505] ">
              <div className="w-40 h-40 rounded-full  flex justify-center items-center border-2 border-l-[#CE722C] border-r-[#CE722C] border-t-[#CE722C] border-b-[#060505] ">
                <div className="w-24 h-24 rounded-full flex justify-center items-center bg-gradient-to-b from-[#f58e3f] via-[#812321] to-[#371717]">
                  <RiNotification2Line size={50} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button
          onClick={HandleNotification}
          className="relative bg-gradient-to-r from-[#401b11] via-[#DF522B] to-[#C77D2C00] w-full rounded-md text-white font-semibold py-4 px-24 shadow-[#0000001F] overflow-hidden"
        >
          <span className="absolute inset-0 border-2  border-l-0 border-opacity-25  opacity-25 border-[#C6802C]"></span>
          Send Notification
        </button>
      </div>
    </div>
  );
}
