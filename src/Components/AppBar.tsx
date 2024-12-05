import { FaHome } from "react-icons/fa";
import { GrSchedules, GrTransaction } from "react-icons/gr";
import { IoMdPeople } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { FcSettings } from "react-icons/fc";
import { IoOptions } from "react-icons/io5";


const AppBar = () => {
  return (
    <div className="flex items-center  w-[96%] mx-auto m-2 justify-between h-16 px-10 rounded   bg-white  shadow-md">
      <div className="logo flex items-center space-x-2">
        <img
          src="https://cdn.pixabay.com/photo/2015/05/19/07/44/browser-773215_960_720.png"
          alt="Logo"
          className="w-10 h-10 object-contain"
        />
        <span className="text-lg font-semibold text-gray-700">App Name</span>
      </div>

    
      <ul className="flex items-center space-x-6 text-gray-600">
        <li className="flex items-center space-x-2 hover:bg-teal-400 rounded-full px-2 py-1 cursor-pointer">
          <FaHome />
          <span>Overview</span>
        </li>
        <li className="flex items-center space-x-2 hover:bg-teal-400 rounded-full px-2 py-1 cursor-pointer">
          <IoMdPeople />
          <span>Patient</span>
        </li>
        <li className="flex items-center space-x-2 hover:bg-teal-400 rounded-full px-2 py-1 cursor-pointer">
          <GrSchedules />
          <span>Schedules</span>
        </li>
        <li className="flex items-center space-x-2 hover:bg-teal-400 rounded-full px-2 py-1 cursor-pointer">
          <MdMessage />
          <span>Messages</span>
        </li>
        <li className="flex items-center space-x-2 hover:bg-teal-400 rounded-full px-2 py-1 cursor-pointer">
          <GrTransaction />
          <span>Transaction</span>
        </li>
      </ul>

      <div className="flex items-center space-x-6">
     
        
      
        <div className="flex items-center space-x-4 text-gray-600">
          <FcSettings className="w-6 h-6 cursor-pointer hover:text-blue-500" />
          <IoOptions className="w-6 h-6 cursor-pointer hover:text-blue-500" />
        </div>
      </div>
    </div>
  );
};

export default AppBar;
