'use client';
//This directive tells Next.js that this component should run on the client side (in the browser) rather than being server-side rendered. This is necessary because the component uses interactive features like event handlers and browser APIs.

import { IoLogoGithub } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import image1 from "@/images/image5.png";
import image2 from '@/images/graph5.png';
import image3 from '@/images/graph5.png';
import image4 from '@/images/image9.png';



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
    <div className="relative h-screen overflow-hidden">
    
      <img
      src={image2.src}
      alt="Decorative blob"
      className=" w-[600px] h-[600px] -ml-70 -mt-80 opacity-20"
      />
      <img
        src={image3.src}
        className="absolute -right-50 -bottom-60 w-[600px] h-[600px] opacity-20 z-0"
      />

      <img src={image4.src} className="-ml-50 w-[100px] h-[100px]" />


      <div className="flex gap-20 p-10 -mt-80 ml-70">
        <div>
          <img src={image1.src} alt="characterimage" />
        </div>

        <div className="mt-20">
          <h1 className="text-2xl font-medium font-sans mb-6">Welcome Back User</h1>

          <button
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white shadow-lg text-black font-medium transition hover:scale-105"
            onClick={() => handleOAuthLogin('google')}
          >
            <FcGoogle className="w-5 h-5" />
            Sign in with Google
          </button>

          <h2 className="text-center my-4">OR</h2>

          <button
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white shadow-lg text-black font-medium transition hover:scale-105"
            onClick={() => handleOAuthLogin('github')}
          >
            <IoLogoGithub className="w-5 h-5" />
            Sign in with GitHub
          </button>
        </div>
      </div>
  </div>
  );
}

