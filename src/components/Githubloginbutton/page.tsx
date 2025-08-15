import { IoLogoGithub } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

export default function GithubLoginButton() {
  return (
   <button
      className=" px-4 py-2 rounded mb-4 flex items-center  gap-2 bg-white shadow text-gray-800"
      onClick={() => handleOAuthLogin('google')}
      >
      <FcGoogle className="w-5 h-5" />
      Sign in with Google
    </button>
    
        <h2> OR </h2>

    <button
        className="flex items-center  gap-2 px-4 py-2 rounded-xl bg-white shadow text-gray-800"
        onClick={() => handleOAuthLogin('github')}
        >
          <IoLogoGithub className="w-5 h-5"/>
        Sign in with GitHub
  </button>
  );
}
