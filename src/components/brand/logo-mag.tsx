import { useId } from "react";
import { cn } from "@/lib/utils";

type LogoMagProps = {
  className?: string;
  title?: string;
};

/** Inline SVG wordmark — no image request, loads instantly. */
export function LogoMag({
  className,
  title = "MAG — Muhammad Ali Ghias, Software Engineer",
}: LogoMagProps) {
  const uid = useId().replace(/:/g, "");
  const magFill = `${uid}-magFill`;
  const magShine = `${uid}-magShine`;
  const lineL = `${uid}-lineL`;
  const lineR = `${uid}-lineR`;
  const softShadow = `${uid}-softShadow`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 480 200"
      role="img"
      aria-label={title}
      className={cn("h-11 w-auto", className)}
    >
      <title>{title}</title>
      <defs>
        <linearGradient id={magFill} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1a9dff" />
          <stop offset="28%" stopColor="#2b7fd9" />
          <stop offset="52%" stopColor="#3a5f9a" />
          <stop offset="72%" stopColor="#5a4a5a" />
          <stop offset="100%" stopColor="#e08a3a" />
        </linearGradient>
        <linearGradient id={magShine} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="35%" stopColor="#ffffff" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.28" />
        </linearGradient>
        <linearGradient id={lineL} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1a9dff" />
          <stop offset="100%" stopColor="#2b7fd9" />
        </linearGradient>
        <linearGradient id={lineR} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#c07030" />
          <stop offset="100%" stopColor="#e08a3a" />
        </linearGradient>
        <filter id={softShadow} x="-10%" y="-10%" width="120%" height="140%">
          <feDropShadow
            dx="0"
            dy="4"
            stdDeviation="3"
            floodColor="#0a2540"
            floodOpacity="0.35"
          />
        </filter>
      </defs>

      <g filter={`url(#${softShadow})`}>
        <text
          x="240"
          y="108"
          textAnchor="middle"
          fontFamily="Arial Black, Arial, Helvetica, sans-serif"
          fontSize="108"
          fontWeight="900"
          letterSpacing="-6"
          fill={`url(#${magFill})`}
        >
          MAG
        </text>
        <text
          x="240"
          y="108"
          textAnchor="middle"
          fontFamily="Arial Black, Arial, Helvetica, sans-serif"
          fontSize="108"
          fontWeight="900"
          letterSpacing="-6"
          fill={`url(#${magShine})`}
        >
          MAG
        </text>
      </g>

      <line
        x1="72"
        y1="148"
        x2="128"
        y2="148"
        stroke={`url(#${lineL})`}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="352"
        y1="148"
        x2="408"
        y2="148"
        stroke={`url(#${lineR})`}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <text
        x="240"
        y="154"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="14"
        fontWeight="600"
        letterSpacing="6"
        className="fill-[#2a2a2a] dark:fill-neutral-200"
      >
        SOFTWARE ENGINEER
      </text>
    </svg>
  );
}
