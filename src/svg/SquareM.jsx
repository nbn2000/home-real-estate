const SquareM = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={21}
      height={20}
      fill="none"
      viewBox="0 0 21 20"
      {...props}
    >
      <path
        stroke="#191A23"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m9.366 17.853-6.45-6.45c-.73-.73-.73-2.075 0-2.805l6.45-6.45c.73-.73 2.075-.73 2.805 0l6.45 6.45c.73.73.73 2.074 0 2.804l-6.45 6.45c-.73.73-2.075.73-2.805 0ZM1.368 13.681l5.128 4.72M15.041 18.4l5.127-4.719"
      />
    </svg>
  );
};

export default SquareM;
