import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Spotify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-black h-screen overflow-hidden">
        <main>
          <Sidebar />
          {/* Center */}
        </main>
      </div>
      <div>{/* Player */}</div>
    </div>
  );
}
