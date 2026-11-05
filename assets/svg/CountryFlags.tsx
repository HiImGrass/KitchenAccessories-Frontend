function VietnamFlag() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-7 rounded-sm"
      viewBox="0 0 30 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="30" height="20" fill="#da251d" />
      <path
        d="m15 3.2 1.32 4.06h4.27l-3.45 2.51 1.32 4.06L15 11.32l-3.46 2.51 1.32-4.06-3.45-2.51h4.27L15 3.2Z"
        fill="#ffde00"
      />
    </svg>
  );
}

function UnitedStatesFlag() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-7 rounded-sm"
      viewBox="0 0 30 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="30" height="20" fill="#fff" />
      <path
        d="M0 0h30v2H0Zm0 4h30v2H0Zm0 4h30v2H0Zm0 4h30v2H0Zm0 4h30v2H0Z"
        fill="#b22234"
      />
      <rect width="13" height="10.8" fill="#3c3b6e" />
      <g fill="#fff">
        <circle cx="2" cy="2" r=".55" />
        <circle cx="5" cy="2" r=".55" />
        <circle cx="8" cy="2" r=".55" />
        <circle cx="11" cy="2" r=".55" />
        <circle cx="3.5" cy="4" r=".55" />
        <circle cx="6.5" cy="4" r=".55" />
        <circle cx="9.5" cy="4" r=".55" />
        <circle cx="2" cy="6" r=".55" />
        <circle cx="5" cy="6" r=".55" />
        <circle cx="8" cy="6" r=".55" />
        <circle cx="11" cy="6" r=".55" />
        <circle cx="3.5" cy="8" r=".55" />
        <circle cx="6.5" cy="8" r=".55" />
        <circle cx="9.5" cy="8" r=".55" />
      </g>
    </svg>
  );
}

export { VietnamFlag, UnitedStatesFlag };