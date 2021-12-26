import Image from "next/image";
import useSpotify from "../hooks/useSpotify";

const Song = ({ order, track, i }) => {
  const spotifyApi = useSpotify();
  //   console.log(track);

  return (
    <div className="flex items-center pl-3 space-x-4 py-1">
      <p>{order + 1}</p>
      <Image
        src={track.track.album.images[0].url}
        alt={track.track.album.name}
        width={40}
        height={40}
      />
    </div>
  );
};

export default Song;
