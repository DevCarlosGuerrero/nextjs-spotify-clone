import useSpotify from "../hooks/useSpotify";

const Song = (order, track, i) => {
  const spotifyApi = useSpotify();

  return (
    <div>
      <p>{order + 1}</p>
      {/* <img src={track.track.album.images[0].url} alt="" /> */}
    </div>
  );
};

export default Song;
