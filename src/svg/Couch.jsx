const Couch = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={23}
      height={16}
      fill="none"
      viewBox="0 0 23 16"
      {...props}
    >
      <path
        stroke="#191A23"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.257 14.5v-2.167M2.48 14.5v-2.167m18.888 0h-20v-3.25c0-.287.117-.563.326-.766.208-.203.49-.317.786-.317h17.777c.295 0 .578.114.786.317.208.204.325.479.325.766v3.25Zm-2.222-9.75a1.07 1.07 0 0 0-.325-.766 1.125 1.125 0 0 0-.786-.317H4.702c-.295 0-.578.114-.786.317a1.07 1.07 0 0 0-.325.766V8h15.555V2.583Z"
      />
    </svg>
  );
};

export default Couch;
