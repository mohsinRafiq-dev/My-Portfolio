export const XLogo = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2H21.5l-7.11 8.128L22.75 22h-6.545l-5.124-6.726L4.87 22H1.61l7.605-8.697L1.25 2h6.71l4.633 6.116L18.244 2zm-1.14 18h1.804L6.98 3.9H5.04L17.104 20z" />
  </svg>
);
