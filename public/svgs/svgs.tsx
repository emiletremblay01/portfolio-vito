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
        strokeWidth="6"
        // strokeOpacity="0"
      />
    </svg>
  );
};

const LinkedInIcon = ({
  width = 63,
  height = 63,
  fillColor = "#D9D9D9",
  className,
}: Props) => {
  return (
    <svg
      className={cn(className)}
      width={width}
      height={height}
      viewBox="0 0 63 63"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.3451 19.6513H21.1465V62.8771H35.0877V37.3242C35.0877 36.2329 35.265 35.1339 35.5234 34.4868C37.5868 29.318 45.7615 26.4273 48.5933 34.4868C48.8111 35.376 49.0289 36.4824 49.0289 37.3242V62.8771H62.7523V33.1836C62.7523 20.518 45.4557 11.4375 34.652 25.3262H34.2164L33.3451 19.6513Z"
        fill="#D9D9D9"
      />
      <rect
        x="1.43945"
        y="18.3516"
        width="13.1387"
        height="44.5256"
        fill="#D9D9D9"
      />
      <ellipse
        cx="7.64134"
        cy="8.13228"
        rx="6.93431"
        ry="7.29927"
        fill="#D9D9D9"
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
const CvIcon = ({
  width = 86,
  height = 53,
  fillColor = "#D9D9D9",
  className,
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 86 53"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M20.6719 40.6943C21.7344 40.6943 22.5938 40.5068 23.25 40.1318C23.9062 39.7568 24.375 39.085 24.6562 38.1162C24.9688 37.1162 25.0938 35.6787 25.0312 33.8037H39.4219C39.4844 37.9912 38.7031 41.5068 37.0781 44.3506C35.4844 47.1631 33.2969 49.2881 30.5156 50.7256C27.7344 52.1318 24.5781 52.835 21.0469 52.835C17.6094 52.835 14.6094 52.335 12.0469 51.335C9.48438 50.3037 7.34375 48.7881 5.625 46.7881C3.9375 44.7881 2.67188 42.3037 1.82812 39.335C0.984375 36.3662 0.5625 32.9131 0.5625 28.9756V24.1475C0.5625 20.21 0.984375 16.7568 1.82812 13.7881C2.67188 10.7881 3.9375 8.28809 5.625 6.28809C7.34375 4.28809 9.46875 2.78809 12 1.78809C14.5625 0.756836 17.5469 0.241211 20.9531 0.241211C24.6406 0.241211 27.875 0.959961 30.6562 2.39746C33.4375 3.83496 35.6094 6.05371 37.1719 9.05371C38.7344 12.0537 39.4844 15.8975 39.4219 20.585H25.0312C25.0938 18.6475 24.9844 17.085 24.7031 15.8975C24.4531 14.6787 24 13.8037 23.3438 13.2725C22.6875 12.71 21.7656 12.4287 20.5781 12.4287C19.4219 12.4287 18.5312 12.6475 17.9062 13.085C17.2812 13.5225 16.8281 14.21 16.5469 15.1475C16.2656 16.085 16.0938 17.3037 16.0312 18.8037C16 20.2725 15.9844 22.0537 15.9844 24.1475V28.9756C15.9844 31.1006 16.0156 32.9131 16.0781 34.4131C16.1406 35.9131 16.3125 37.1318 16.5938 38.0693C16.875 38.9756 17.3281 39.6475 17.9531 40.085C18.6094 40.4912 19.5156 40.6943 20.6719 40.6943ZM62.0156 41.0693L69 1.17871H85.2188L71.8125 51.8975H62.2969L62.0156 41.0693ZM58.9219 1.17871L65.8125 41.0693L65.625 51.8975H56.1094L42.7031 1.17871H58.9219Z"
        fill="#D9D9D9"
      />
    </svg>
  );
};
const MailIcon = ({
  width = 73,
  height = 52,
  fillColor = "#D9D9D9",
  className,
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 73 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <rect
        x="4.24805"
        y="6.47559"
        width="63.5037"
        height="45.2555"
        rx="4"
        fill={fillColor}
      />
      <path
        d="M34.4504 35.7918C35.561 36.7126 37.1696 36.7126 38.2802 35.7918L67.9905 11.1568C68.9639 10.3497 69.3267 9.019 68.8977 7.82958C68.4688 6.64016 67.3401 5.84739 66.0757 5.84739L6.65494 5.84738C5.39053 5.84738 4.26184 6.64016 3.83287 7.82958C3.40389 9.019 3.76673 10.3497 4.74006 11.1568L34.4504 35.7918Z"
        fill={fillColor}
        stroke="#2C2E33"
        stroke-width="6"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export { ProtoolsIcon, MicIcon, MusicIcon, LinkedInIcon, CvIcon, MailIcon };
