import { SignIn } from "@clerk/nextjs";
import React from "react";

function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen py-10"> 
     <div className="shadow-blue-300 shadow-lg">
     <SignIn/>
     </div>
    </div>
  );
}

export default Page;
