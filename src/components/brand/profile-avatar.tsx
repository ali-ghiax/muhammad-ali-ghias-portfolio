import { cn } from "@/lib/utils";

type ProfileAvatarProps = {
  className?: string;
  size?: number;
  priority?: boolean;
};

/** Profile photo in a rounded professional frame (header / footer). */
export function ProfileAvatar({
  className,
  size = 160,
  priority = false,
}: ProfileAvatarProps) {
  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-full bg-white",
        "ring-1 ring-border/80 shadow-sm",
        className
      )}
      style={{ width: size, height: size }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/about-photo.jpg"
        alt="Muhammad Ali Ghias — Software Engineer and Graphic Designer"
        width={size}
        height={size}
        className="h-full w-full object-cover object-[50%_40%]"
        decoding="async"
        {...(priority ? { fetchPriority: "high" as const } : {})}
      />
    </div>
  );
}
