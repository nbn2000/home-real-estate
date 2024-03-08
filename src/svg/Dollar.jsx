const Dollar = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      fill="none"
      viewBox="-4 -3 21 21"
      {...props}
    >
      <path
        fill="#044FFF"
        d="M6.976 14.76h-3.04v-1.776C2.288 12.632.96 11.72.56 10.12l3.04-.608c.352.944 1.136 1.296 2.016 1.296.912 0 1.44-.368 1.44-.96 0-1.872-6.24-.368-6.24-4.976 0-1.504 1.104-2.736 3.12-3.12V.04h3.04v1.776c1.552.336 2.64 1.216 3.056 2.704l-3.104.608c-.224-.784-.8-1.136-1.616-1.136-.72 0-1.232.368-1.232.88 0 1.888 6.24.336 6.24 5.04 0 1.568-1.136 2.8-3.344 3.152v1.696Z"
      />
    </svg>
  );
};

export default Dollar;
