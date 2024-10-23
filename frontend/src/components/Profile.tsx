import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import app from "../utils/firebase";
import { signOutUser } from '../Redux/slice';


const auth = getAuth(app);

const Profile = () => {
  const userImage = useSelector((store: any) => store.user.currentUser?.image);
  const isUser = useSelector((store: any) => store.user.isUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

 const logOutUser = () => {
  console.log('The image : ', userImage)
    try {
      signOut(auth);
      console.log("Signed out");
      dispatch(signOutUser())
      navigate("/");
    } catch (err: any) {
      console.log(err.message);
    }
  
 }

  return (
    <div className="pr-5 pt-4 flex justify-end">
        {
          isUser ? (
            <div className='flex'>
         
            <div className="relative inline-flex pr-12 pt-4">
            <img className="w-10 h-10 rounded-full hidden" src={userImage} />
    
            <img className="w-10 h-10 rounded-full hidden" src={userImage} />
            <img className="w-10 h-10 rounded-full" src={userImage} />
          </div>
          <div className='pt-4'>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
               onClick={logOutUser}
              >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex px-5 font-thin h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 text-sm text-white backdrop-blur-3xl">
                Logout
              </span>
               </button>
              </div>
          </div>
          ) : (
            <div>
            <div className='pt-4'>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex px-5 font-thin h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 text-sm text-white backdrop-blur-3xl">
               <Link to='/login'>  Login </Link>
              </span>
              </button>
              </div>
            </div>
          )
        }

     
    </div>
  );
};

export default Profile;
