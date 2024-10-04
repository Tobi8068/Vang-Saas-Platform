import { LuHome } from "react-icons/lu";
import { LuClock3 } from "react-icons/lu";
import { TbWorld } from "react-icons/tb";
import { TbSettings } from "react-icons/tb";
import { LuPower } from "react-icons/lu";
import { useState } from "react";

const LeftSideBar = () => {

  const [select, setSelect] = useState("home1");

  return (
    <div className=" pt-10 bg-white h-[100vh]">
      <div onClick={() => setSelect("home1")} className={`${select === "home1" ? "pl-8 pr-9 py-4 mb-[30px] border-l-4 border-[#163edf]" : "px-9 py-4 mb-[30px]"}`}>{select === "home1" ? <div className=""><LuHome size={24} color="#163edf"></LuHome></div> : <LuHome size={24} color="#777272"></LuHome>}</div>
      <div onClick={() => setSelect("home2")} className={`${select === "home2" ? "pl-8 pr-9 py-4 mb-[30px] border-l-4 border-[#163edf]" : "px-9 py-4 mb-[30px]"}`}>{select === "home2" ? <div className=""><LuHome size={24} color="#163edf"></LuHome></div> : <LuHome size={24} color="#777272"></LuHome>}</div>
      <div onClick={() => setSelect("clock")} className={`${select === "clock" ? "pl-8 pr-9 py-4 mb-[30px] border-l-4 border-[#163edf]" : "px-9 py-4 mb-[30px]"}`}>{select === "clock" ? <div className=""><LuClock3 size={24} color="#163edf"></LuClock3></div> : <LuClock3 size={24} color="#777272"></LuClock3>}</div>
      <div onClick={() => setSelect("world")} className={`${select === "world" ? "pl-8 pr-9 py-4 mb-[30px] border-l-4 border-[#163edf]" : "px-9 py-4 mb-[30px]"}`}>{select === "world" ? <div className=""><TbWorld size={24} color="#163edf"></TbWorld></div> : <TbWorld size={24} color="#777272"></TbWorld>}</div>
      <div onClick={() => setSelect("setting")} className={`${select === "setting" ? "pl-8 pr-9 py-4 mb-[136px] border-l-4 border-[#163edf]" : "px-9 py-4 mb-[136px]"}`}>{select === "setting" ? <div className=""><TbSettings size={24} color="#163edf"></TbSettings></div> : <TbSettings size={24} color="#777272"></TbSettings>}</div>
      <div className=" px-9 py-4 mb-[30px]"><LuPower size={24} color="#777272"></LuPower></div>
    </div>
  )
}

export default LeftSideBar;
