import { cn } from "@/lib/utils";

type Props = {
  width?: number;
  height?: number;
  fillColor?: string;
  strokeColor?: string;
  className?: string;
};

const ProtoolsIcon = ({
  width = 80,
  height = 74,
  fillColor = "#2C2E33",
  strokeColor = "#D4CECE",
  className,
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 80 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <circle
        cx="40"
        cy="37"
        r="33.8613"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth="6"
      />
      <path
        d="M39.8596 27.9798C30.3578 27.9798 24.9281 56.1342 5.92443 59.2624L0.947266 48.537C18.5936 47.6432 17.6886 15.4668 39.8596 15.4668C61.5782 15.4668 62.0306 47.1963 78.3195 48.537L73.7948 59.2624C53.8862 56.5811 49.3615 27.9798 39.8596 27.9798Z"
        fill={strokeColor}
        stroke={strokeColor}
      />
    </svg>
  );
};

const MicIcon = ({
  width = 67,
  height = 82,
  fillColor = "#D9D9D9",
  strokeColor = "#2C2E33",
  className,
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 67 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M24.8965 27.7256C28.1946 35.4678 30.5395 37.9153 38.0199 41.2467L14.0533 59.652C12.0626 61.1807 9.24713 60.9968 7.47236 59.222L6.55197 58.3016C4.76501 56.5146 4.59237 53.6752 6.14967 51.6849L24.8965 27.7256Z"
        fill={fillColor}
      />
      <path
        d="M44.2322 41.1828C54.6925 41.1828 63.2906 32.8781 63.2906 22.4893C63.2906 12.1006 54.6925 3.7959 44.2322 3.7959C33.772 3.7959 25.1738 12.1006 25.1738 22.4893C25.1738 32.8781 33.772 41.1828 44.2322 41.1828Z"
        fill={fillColor}
        stroke="#2C2E33"
        stroke-width="6"
        // strokeOpacity="0"
      />
    </svg>
  );
};

const MusicIcon = ({
  width = 71,
  height = 68,
  fillColor = "#D9D9D9",
  className,
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 71 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <circle cx="12.7369" cy="55.1168" r="12.4088" fill={fillColor} />
      <circle cx="55.8033" cy="48.5474" r="12.4088" fill={fillColor} />
      <rect
        x="19.3066"
        y="23"
        width="5.83942"
        height="32.8467"
        fill={fillColor}
      />
      <rect
        x="62.3711"
        y="16.4307"
        width="5.83942"
        height="32.8467"
        fill={fillColor}
      />
      <path
        d="M19.3078 11.1511C19.3078 9.15645 20.7772 7.46665 22.7525 7.18978L63.6613 1.45577C66.0677 1.11847 68.2165 2.9871 68.2165 5.41705L68.2165 18.6213L19.3078 25.9207L19.3078 11.1511Z"
        fill={fillColor}
      />
    </svg>
  );
};

export { ProtoolsIcon, MicIcon, MusicIcon };
