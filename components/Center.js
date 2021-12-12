import Image from "next/image";
import { useSession } from "next-auth/react";

// Assets and Icons
import { ChevronDownIcon } from "@heroicons/react/outline";

const Center = () => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-grow">
      <h1>I am the center</h1>
      <header>
        <div className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
          <img
            src={session?.user.image}
            alt="User image"
            className="w-10 h-10 rounded-full object-cover"
          />
          <h2>{session?.user.name}</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>
    </div>
  );
};

export default Center;
