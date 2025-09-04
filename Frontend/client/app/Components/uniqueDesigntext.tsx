import { Highlighter } from "@/components/magicui/highlighter";

export function HighlighterDemo() {
  return (
    <div className="text-center">
      <p className="leading-relaxed text-[20px] text-white">
        BTKITLeetcodemArket is The{" "}
        <Highlighter action="underline" color="#FF9800">
          Market
        </Highlighter>{" "}
         Which value{" "}
        <Highlighter action="highlight" color="#87CEFA">
          Your DSA
        </Highlighter>{" "}
         Skills and value you according to your DSA problems which 
         contributes to the BTKITLeetcodemArket 
      </p>
    </div>
  );
}
