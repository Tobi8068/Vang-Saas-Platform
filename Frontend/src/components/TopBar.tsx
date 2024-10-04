import { LuBell } from "react-icons/lu";
import avatar from "../assets/img/image 4.png"

const TopBar = () => {
  return (
    <div className="w-full h-20 bg-white flex flex-row py-2 px-6 justify-between">
      <div className=" flex flex-row items-center">
        <div className=" font-bold text-[#006eff] text-4xl pr-8">SF</div>
        <div className=" font-bold text-[#777272] text-2xl">Dashboard</div>
      </div>
      <div className=" flex flex-row items-center">
        <LuBell size={32} />
        <div className=" font-normal text-[#777272] flex flex-col items-start ml-8 mr-4">
          <div>Anna Bronton</div><div>Software Engineer</div>
        </div>
        <img src={avatar} alt="avatar" className=" rounded-full" />
      </div>
    </div>
  )
}

export default TopBar;