import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import spotifyAPI from "../lib/spotify";
import spotifyApi from "../lib/spotify";

const spotifyAPI = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});

const useSpotify = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) {
      // If refresh access token attempt fails, direct user to login
      if (session.error === "RefreshAccessTokenError") {
        signIn();
      }

      spotifyAPI.setAccessToken(sesion.user.acessToken);
    }
  }, [session]);

  return spotifyApi;
};

export default useSpotify;
