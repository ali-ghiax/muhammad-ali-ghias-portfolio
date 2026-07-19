import Image from "next/image";
import { cn } from "@/lib/utils";

type ProfileAvatarProps = {
  className?: string;
  size?: number;
  priority?: boolean;
};

/** MAG logo in a rounded professional frame — replaces portrait photos. */
export function ProfileAvatar({
  className,
  size = 160,
  priority = false,
}: ProfileAvatarProps) {
  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-full bg-[#f8f7f4]",
        "ring-1 ring-border/80 shadow-sm",
        className
      )}
      style={{ width: size, height: size }}
    >
      <Image
        src="/avatar-mag.png"
        alt="MAG — Muhammad Ali Ghias"
        width={size}
        height={size}
        priority={priority}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
