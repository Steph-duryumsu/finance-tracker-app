'use client';
//This directive tells Next.js that this component should run on the client side (in the browser) rather than being server-side rendered. This is necessary because the component uses interactive features like event handlers and browser APIs.

import { IoLogoGithub } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import image1 from "@/images/image5.png";
import blob1 from '@/images/graph5.png';
import blob2 from '@/images/graph5.png';
import blob3 from '@/images/image7.png';
import blob4 from '@/images/image8.png';
import blob5 from '@/images/graph6.png';
import blob6 from '@/images/graph13.png';
import blob7 from '@/images/graph15.png';
// import image3 from '@/images/image9.png';



import { supabase } from '@/lib/supabaseClient';
// Imports your configured Supabase client from a local file. This client handles all communication with your Supabase backend.

import { useRouter } from 'next/navigation';
// Imports Next.js's navigation hook for programmatically routing users to different pages.

export default function LoginPage() {
  //export default Defines and exports the main React component as the default export, making it available for import in other files.

  const router = useRouter();
  //Creates an instance of the Next.js router hook, which provides methods to navigate between pages programmatically.

  const handleOAuthLogin = async (provider: 'google' | 'github') => {
    //Defines an asynchronous function that:Takes a provider parameter that can only be 'google' or 'github' (TypeScript type restriction)Handles the OAuth authentication process for both providers

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
    });
    //Calls Supabase's OAuth sign-in method:Uses destructuring to extract data and error from the responseawait pauses execution until the promise resolvesprovider is passed as a shorthand for provider: provider

    if (error) {
      console.error('OAuth sign-in error:', error.message);
    } else {
      console.log('Redirecting for', provider, 'sign in...');
    }
  };
  //Error handling logic:If there's an error, it logs the error message to the browser consoleIf successful, it logs a success messageNote: Supabase automatically handles the redirect to the OAuth provider, so no manual redirect is needed here

  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden">
    
      <Image
      src={blob1}
      alt="Decorative blob"
      width={400}
      height={400}
      className="hidden md:block absolute top-0 left-0 opacity-20 "
      />

      <Image
        src={blob2}
        width={400}
        height={400}
        className=" md:hidden sm:hidden xl:block absolute -right-50  -bottom-60 opacity-20 z-0"
        alt="Decorative blob"
      />

      <Image
         src={blob3} 
         width={120}
         height={120}
         className="absolutetop-20 right-10 opacity-40"
         alt="decorative blob"
       />

      <Image
         src={blob4} 
         width={100}
         height={100}
         className="absolute bottom-32 left-12 opacity-30"
         alt="decorative blob"  
        />

       <Image
         src={blob5} 
         width={100}
         height={100}
         className="absolute top-1/2 left-6 opacity-30"
         alt="decorative blob"
       />

       <Image
         src={blob6} 
         width={100}
         height={100}
         className="absolute top-1/3 right-12 opacity-30"
         alt="decorative blob"
       />
       
        <Image
         src={blob7} 
         width={100}
         height={100}
         className="absolute bottom-20 right-24 opacity-40"
         alt="decorative blob"
       />
       


      <div className="flex flex-col md:flex-row items-center justify-center gap-12 p-8 rounded-2xl shadow-md backdrop-blur-md z-10">
        <div className="flex-shrink-0">
          <Image 
            src={image1} 
            width={350}
            height={400}
            alt="characterimage"
            className="object-contain rounded-lg"
          />
        </div>


        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-semibold font-poppins mb-6">Welcome Back User 😁</h1>

          <button
            className="flex items-center justify-center gap-3 w-full px-6 py-3 mb-4 rounded-xl bg-white shadow-md text-black font-medium transition hover:scale-105 "
            onClick={() => handleOAuthLogin('google')}
          >
            <FcGoogle className="w-6 h-6" />
            Sign in with Google
          </button>

          <h2 className="text-center my-3 text-gray-500">OR</h2>

          <button
            className="flex items-center justify-center gap-3 w-full px-6 py-3 mb-4 rounded-xl bg-white shadow-lg text-black font-medium transition hover:scale-105"
            onClick={() => handleOAuthLogin('github')}
          >
            <IoLogoGithub className="w-6 h-6" />
            Sign in with GitHub
          </button>
        </div>
      </div>
  </div>
  );
}

