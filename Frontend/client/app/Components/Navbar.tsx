import Link from "next/link";

export default function Navbar(){
    return(
        <>

        <div className="w-full h-[80px] flex items-center border-b-2 border-b-slate-800">

           <div className="absolute left-[10%]">
              <h1 className="font-bold text-white text-[25px]">BTKITLeetcodemArket</h1>
           </div>

            <div className="absolute right-[20%] space-x-5">
              <Link className="text-[20px] font-bold text-white" href={"/"}>Login</Link>
              <Link className="text-[20px] font-bold text-white" href={"/"}>Signup</Link>
           </div>

        </div>

        </>
    )
}