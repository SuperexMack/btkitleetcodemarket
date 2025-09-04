import { GridBeamsDemo } from "./MainDesign";
import Navbar from "./Navbar";

export default function HomePage() {
  return(
    <>
    <div className="w-full h-auto p-2 bg-black flex flex-col">
       <Navbar></Navbar>
       <div className="w-full h-auto bg-amber-600">
           <GridBeamsDemo></GridBeamsDemo>
       </div>
    </div>
    </>
  )
}
