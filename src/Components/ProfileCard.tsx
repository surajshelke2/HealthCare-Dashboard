
import { CgMore } from "react-icons/cg";


const ProfileCard = ({
  name,
  profile,
  gender,
  age,
}: {
  name: string;
  profile: string;
  gender: string;
  age: number;
}) => {
  return (
    <div
      className="flex items-center justify-between p-4 bg-white rounded-md shadow hover:bg-teal-100 cursor-pointer"
      style={{
        borderBottom: "1px solid #E5E5E5",
      }}
    >
      <div className="flex items-center space-x-4">
        <img
          src={profile}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h4 className="text-sm font-bold text-gray-900">{name}</h4>
          <p className="text-xs text-gray-500">{`${gender}, ${age}`}</p>
        </div>
      </div>
      <div>
        <CgMore className="text-gray-400" />
      </div>
    </div>
  );
};
export default ProfileCard