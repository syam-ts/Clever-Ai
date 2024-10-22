import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Profile = () => {
  const userImage = useSelector((store: any) => store.userSlice.currentUser?.image);

  console.log('User from pro;', userImage)

  return (
    <div className="pr-5 pt-4 flex justify-end">
      <div className="relative inline-flex pr-12 pt-4">
        <img className="w-10 h-10 rounded-full hidden" src={userImage} />

        <img className="w-10 h-10 rounded-full" src={userImage} />
      </div>
      <div className='pt-4'>
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex px-5 font-thin h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 text-sm text-white backdrop-blur-3xl">
           <Link to='/login'>  Login </Link>
          </span>
        </button>
       
        {/* logout */}
        {/* <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex px-5 font-thin h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 text-sm text-white backdrop-blur-3xl">
            Logout
          </span>
        </button> */}
      </div>
    </div>
  );
};

export default Profile;
