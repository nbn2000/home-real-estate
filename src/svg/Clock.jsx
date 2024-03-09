const Clock = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={75}
      height={75}
      fill="none"
      viewBox="0 0 75 75"
      {...props}
    >
      <path
        fill="#044FFF"
        d="M37.5 0C16.784 0 0 16.784 0 37.5S16.784 75 37.5 75 75 58.216 75 37.5 58.216 0 37.5 0Zm8.634 52.938-13.337-9.692a1.826 1.826 0 0 1-.74-1.467V16.331a1.82 1.82 0 0 1 1.814-1.815h7.258a1.82 1.82 0 0 1 1.815 1.815v20.821l9.601 6.986c.817.59.983 1.724.393 2.54l-4.264 5.867a1.827 1.827 0 0 1-2.54.393Z"
      />
    </svg>
  );
};

export default Clock;
