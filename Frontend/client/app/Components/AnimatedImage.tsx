import { PixelImage } from "@/components/magicui/pixel-image";
import Image from "next/image";

export function AnimatedImageDemo() {
  return (
    <Image
      src="/dsa.png"
      width={1300}
      height={700}
      className="w-[1300px] h-[700px]"
      alt="lc-image"
    />
  );
}
