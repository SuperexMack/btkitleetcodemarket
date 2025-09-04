import { PixelImage } from "@/components/magicui/pixel-image";

export function AnimatedImageDemo() {
  return (
    <PixelImage
      src="/dsa.png"
      customGrid={{ rows: 4, cols: 6 }}
      grayscaleAnimation
    />
  );
}
