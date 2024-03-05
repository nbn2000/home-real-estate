const Loader = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={191}
      height={191}
      preserveAspectRatio="xMidYMid"
      style={{
        margin: "auto",
        background: "0 0",
        display: "block",
        shapeRendering: "auto",
      }}
      viewBox="0 0 100 100"
      {...props}
    >
      <path fill="#044fff" d="M30 50a20 20 0 0 0 40 0 20 22.9 0 0 1-40 0">
        <animateTransform
          attributeName="transform"
          dur="0.9615384615384615s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="rotate"
          values="0 50 51.45;360 50 51.45"
        />
      </path>
    </svg>
  );
};

export default Loader;
