import PlaylistPreview from "./playlistPreview";
import axios from "axios"; 
import { useEffect, useState } from "react";

const Shelf = ({playlistStartIndex}) => {

  const [playlists, setPlaylists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPlaylists = async () => {
    try {
      const response = await axios.get("https://api.npoint.io/aab317701da36736cbb4");
      setPlaylists(response.data.playlists);
      setIsLoading(false); 
    } catch (error) {
      console.log('Error in fetchPlaylists:', error);
    }
  }
  
  useEffect(() => {
    fetchPlaylists();
  }, []);

  const [isMedium, setIsMedium] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleResize = () => {
      setIsMedium(mediaQuery.matches);
    }

    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    }
  }, []);

  const playlistLimit = isMedium ? 4 : 6;


  // const isMediumScreen = window.matchMedia("(max-width: 768px)").matches;
  // const playlistLimit = isMediumScreen ? 4 : 6;
  const limitedPlaylists = playlists.slice(
    playlistStartIndex, 
    playlistStartIndex + playlistLimit
  );

    if (isLoading) {
      return <p className="text-light">Loading...</p> 
    }

    return (
      <div className="mood">
        <div className="row row-cols-3 row-cols-md-4 row-cols-lg-6 mx-3">
          {limitedPlaylists.map((playlist, index) =>{
            if(isMedium && index >= playlistLimit) return null;
            else return(
            <div key={playlist.id} className="col px-0 d-lg-block">
              <PlaylistPreview 
                playlistId={playlist.id}
                playlistName={playlist.name}
                playlistDescription={playlist.description} 
              />
            </div>
            );
            })}
        </div>
      </div>
    );
};
export default Shelf;