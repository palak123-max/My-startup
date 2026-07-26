export function Logo({ withWordmark = true }: { withWordmark?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="5" cy="13" r="3.4" fill="#5B5BD6" />
        <circle cx="21" cy="5.5" r="2.4" fill="currentColor" className="text-primary dark:text-primary-dark" />
        <circle cx="21" cy="20.5" r="2.4" fill="currentColor" className="text-primary dark:text-primary-dark" />
        <path
          d="M8 11.8L18.5 6.3M8 14.2L18.5 19.7"
          stroke="currentColor"
          className="text-primary dark:text-primary-dark"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
      {withWordmark && (
        <span className="text-[15px] font-semibold tracking-tight text-primary dark:text-primary-dark">
          Cadence
        </span>
      )}
    </span>
  );
}
