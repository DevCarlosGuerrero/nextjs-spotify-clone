import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";

const Login = ({ providers }) => {
  return (
    <div className="bg-black flex flex-col items-center justify-center text-white h-screen">
      <div className="mb-10">
        <Image
          src="/Spotify-Logo-White.png"
          width={2362 / 15}
          height={708 / 15}
          alt="Spotify Logo"
          priority="true"
        />
      </div>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="bg-[#2de26d] hover:bg-[#30f876] px-8 py-4 rounded-full"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
