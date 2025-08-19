"use client";

import { ReactNode } from "react";

export default function LandingSlide({ children }: { children: ReactNode }) {
  return (
    <div className="w-screen h-screen flex flex-col flex-shrink-0 items-center justify-center gap-6">
      {children}
    </div>
  );
}



// import {ReactNode} from "react";

// type Props = {
//   children: ReactNode;
//   bg?: string;
// };

// export default function LandingSlide
// ({children, bg }: Props){
//   return (
//     <div
//       className={`min-w-full h-screen flex flex-col items-center px-6 ${bg || "bg-white"}`}
//     >
//       {children}
//     </div>
//   );
// }