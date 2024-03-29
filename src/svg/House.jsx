const House = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      fill="none"
      viewBox="-3 -5 32 32"
      {...props}
    >
      <path
        fill="#044FFF"
        d="m12.17 5.823-8.003 6.59v7.114a.694.694 0 0 0 .695.694l4.863-.012a.695.695 0 0 0 .691-.695V15.36a.695.695 0 0 1 .695-.694h2.778a.695.695 0 0 1 .694.694v4.151a.694.694 0 0 0 .695.697l4.862.013a.694.694 0 0 0 .694-.694v-7.118l-8-6.586a.529.529 0 0 0-.665 0Zm12.64 4.48L21.18 7.31V1.3a.521.521 0 0 0-.52-.521H18.23a.521.521 0 0 0-.521.52v3.152l-3.886-3.197a2.083 2.083 0 0 0-2.647 0L.189 10.302a.522.522 0 0 0-.07.734l1.107 1.345a.521.521 0 0 0 .734.071l10.21-8.409a.529.529 0 0 1 .664 0l10.21 8.409a.52.52 0 0 0 .733-.07l1.107-1.345a.522.522 0 0 0-.074-.735Z"
      />
    </svg>
  );
};

export default House;
