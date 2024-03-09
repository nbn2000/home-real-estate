const index = ({ children }) => {
  return (
    <div className="grid grid-cols-2 justify-items-center w-full gap-x-[16px] gap-y-[35px] md:grid-cols-3">
      {children}
    </div>
  );
};

export default index;
