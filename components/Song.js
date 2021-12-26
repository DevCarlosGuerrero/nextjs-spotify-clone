import useSpotify from "../hooks/useSpotify";

const Song = ({ order, track, i }) => {
  const spotifyApi = useSpotify();
  //   console.log(track);

  return (
    <div>
      <p>{order + 1}</p>
      <img src={track.track.album.images[0].url} alt={track.track.album.name} />
    </div>
  );
};

export default Song;
