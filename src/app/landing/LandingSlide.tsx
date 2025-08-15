import {ReactNode} from "react";

type Props = {
  children: ReactNode;
  bg?: string;
};

export default function LandingSlide
({children, bg }: Props){
  return (
    <div
      className={`min-w-full h-screen flex flex-col items-center px-6 ${bg || "bg-white"}`}
    >
      {children}
    </div>
  );
}