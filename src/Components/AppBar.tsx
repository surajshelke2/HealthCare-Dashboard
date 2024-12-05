import { FaHome } from "react-icons/fa";
import { GrSchedules, GrTransaction } from "react-icons/gr";
import { IoMdPeople } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { FcSettings } from "react-icons/fc";
import logo from '../assets/TestLogo.png'


const AppBar = () => {
 
  return (
    <div
      className="flex items-center justify-between w-[96%] mx-auto my-4 h-16 px-10 rounded-full bg-white shadow-md"
      style={{
        background: "#FFFFFF",
      }}
    >
     
      <div className="flex items-center ">
        <img
          src={logo}
          alt="Logo"
          className="w-[210.58px] h-[48px]"
        />
      
      </div>


      <ul className="flex items-center space-x-8 text-gray-600">
        <li className="flex items-center space-x-2 px-4 py-2 hover:bg-teal-500  rounded-full cursor-pointer">
          <FaHome />
          <span>Overview</span>
        </li>
        <li className="flex items-center space-x-2 px-4 py-2 hover:bg-teal-500  rounded-full cursor-pointer">
          <IoMdPeople />
          <span>Patients</span>
        </li>
        <li className="flex items-center space-x-2 px-4 py-2 hover:bg-teal-500 rounded-full cursor-pointer">
          <GrSchedules />
          <span>Schedule</span>
        </li>
        <li className="flex items-center space-x-2 px-4 py-2 hover:bg-teal-500 rounded-full cursor-pointer">
          <MdMessage />
          <span>Message</span>
        </li>
        <li className="flex items-center space-x-2 px-4 py-2 hover:bg-teal-500 rounded-full cursor-pointer">
          <GrTransaction />
          <span>Transactions</span>
        </li>
      </ul>

     
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="text-right">
            <p className="text-sm font-semibold">Dr. Jose Simmons</p>
            <p className="text-xs text-gray-500">General Practitioner</p>
          </div>
        </div>
        <FcSettings className="w-6 h-6 cursor-pointer hover:text-teal-500" />
      </div>
    </div>
  );
};

export default AppBar;
