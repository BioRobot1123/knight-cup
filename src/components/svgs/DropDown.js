function DropDown({ options }) {
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={options ? 'drop-down drop-up' : 'drop-down'}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.3531 0.645993C13.3997 0.692439 13.4366 0.747614 13.4618 0.80836C13.487 0.869105 13.5 0.934226 13.5 0.999993C13.5 1.06576 13.487 1.13088 13.4618 1.19163C13.4366 1.25237 13.3997 1.30755 13.3531 1.35399L7.35311 7.35399C7.30666 7.40056 7.25148 7.4375 7.19074 7.46271C7.12999 7.48791 7.06487 7.50089 6.99911 7.50089C6.93334 7.50089 6.86822 7.48791 6.80747 7.46271C6.74673 7.4375 6.69155 7.40056 6.64511 7.35399L0.645106 1.35399C0.55122 1.26011 0.498475 1.13277 0.498475 0.999993C0.498475 0.867218 0.55122 0.73988 0.645106 0.645993C0.738993 0.552107 0.866331 0.499362 0.999106 0.499362C1.13188 0.499362 1.25922 0.552107 1.35311 0.645993L6.99911 6.29299L12.6451 0.645993C12.6916 0.59943 12.7467 0.562487 12.8075 0.537281C12.8682 0.512074 12.9333 0.4991 12.9991 0.4991C13.0649 0.4991 13.13 0.512074 13.1907 0.537281C13.2515 0.562487 13.3067 0.59943 13.3531 0.645993Z"
        fill="#212529"
      />
    </svg>
  );
}

export default DropDown;