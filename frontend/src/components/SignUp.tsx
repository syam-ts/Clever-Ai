

const SignUp = () => {

    const signUpUser = async() => {

        
    }

  return (
    <div className=" mx-auto my-96 bg-opacity-35">
      <div className="lg:w-[18rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
        <button className="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 text-white ring-offset-2 transition focus:ring-2 hover:border-transparent quicksand-bold hover:bg-black hover:text-yellow-400"
           onClick={signUpUser}
        >
          <img
            className="mr-2 h-5 "
            src="https://static.cdnlogo.com/logos/g/35/google-icon.svg"
            alt="img"
          />{" "}
          Log in with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
