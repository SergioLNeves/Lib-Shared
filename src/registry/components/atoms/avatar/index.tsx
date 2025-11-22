import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";
import { avatarVariants, type AvatarVariants } from "./avatar.variants";
import "./avatar.css";

interface AvatarProps
  extends React.ComponentProps<typeof AvatarPrimitive.Root>,
    AvatarVariants {
  className?: string;
}

export function Avatar({ className = "", size, ...props }: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(avatarVariants({ size }), className)}
      {...props}
    />
  );
}

interface AvatarImageProps
  extends React.ComponentProps<typeof AvatarPrimitive.Image> {
  className?: string;
}

export function AvatarImage({ className, ...props }: AvatarImageProps) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn(styles.avatarImage, className)}
      {...props}
    />
  );
}

interface AvatarFallbackProps
  extends React.ComponentProps<typeof AvatarPrimitive.Fallback> {
  name?: string;
  randomColor?: boolean;
}

export function AvatarFallback({
  className,
  name,
  children,
  randomColor = false,
  ...props
}: AvatarFallbackProps) {
  const fallbackContent =
    children || (name ? name.charAt(0).toUpperCase() : "?");

  const getBackgroundColor = () => {
    if (!randomColor || !name) {
      return styleguide.colors.gray[300];
    }

    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }

    const hue = hash % 360;
    return `hsl(${hue}, 65%, 55%)`;
  };

  const backgroundColor = getBackgroundColor();

  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(styles.avatarFallback, className)}
      style={{ backgroundColor }}
      {...props}
    >
      <span aria-hidden>{fallbackContent}</span>
    </AvatarPrimitive.Fallback>
  );
}
