import { GridBeams } from "@/components/magicui/grid-beams";
import { AnimatedGradientTextDemo } from "./mainbutton";
import { HighlighterDemo } from "./uniqueDesigntext";
import { ConfettiCustomShapes } from "./magicbutton";
import { AnimatedImageDemo } from "./AnimatedImage";
import "../globals.css"

export function GridBeamsDemo() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-black">
      <GridBeams
        gridSize={0}
        gridColor="rgba(255, 255, 255, 0.2)"
        rayCount={20}
        rayOpacity={0.55}
        raySpeed={1.5}
        rayLength="40vh"
        gridFadeStart={5}
        gridFadeEnd={90}
        className="h-full w-full"
      >
        <div className="flex h-auto flex-col space-y-4 items-center">

          <div className="text-center space-y-6 px-4 mt-20 w-[20%]">
            <AnimatedGradientTextDemo></AnimatedGradientTextDemo>
          </div>

          <div className="w-[60%] flex flex-col space-y-5 text-center">
            <h1 className="main-text text-[70px] font-bold text-white">The New Way of creating you value in BTKIT is Leetcode</h1>
            <HighlighterDemo></HighlighterDemo>
          </div>

          <div className="flex space-x-6 items-center mt-10">
           <ConfettiCustomShapes></ConfettiCustomShapes>
          </div>

          <div className="mt-20">
            <AnimatedImageDemo></AnimatedImageDemo>
          </div>

        </div>
      </GridBeams>
    </div>
  );
}
