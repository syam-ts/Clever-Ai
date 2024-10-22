const Profile = () => {
  return (
    <div className="pr-5 pt-4 flex justify-end">
      <div className="relative inline-flex pr-12 pt-4">
        <img
          className="w-10 h-10 rounded-full"
          src="data:image/jpeg;base64,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"
        />
      </div>
      <div className='pt-4'>
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex px-5 font-thin h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 text-sm text-white backdrop-blur-3xl">
            Logout
          </span>
        </button>
      </div>
    </div>
  );
};

export default Profile;
