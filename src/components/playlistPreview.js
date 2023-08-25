import { Link } from 'react-router-dom';
import './playlistPreview.css';

const PlaylistPreview = (props) => {
    const playlistId = props.playlistId;
    const playlistName = props.playlistName;
    const playlistDescription = props.playlistDescription;
    return ( 
        <Link to={`/playlists/${playlistId}`} className='text-decoration-none'>
            <div className="card w-auto mx-2 bg-dark-subtle" style={{width: "200px"}}>
                <img src={`https://picsum.photos/200/?random=${playlistId}`} className="card-img-top" alt="..."/>
                <div className="card-body" style={{height: "100px"}}>
                    <h5 className="card-title card-text fw-bold" style={{color: "#FEFEFE"}}>{playlistName}</h5>
                    <p className="card-text custom-truncate fw-bold" style={{color: "#646464"}}>
                        {playlistDescription}
                    </p>
                </div>
            </div>
            <div className="d-flex flex-column">
                <div className="d-flex flex-row">
                    
                </div>
                <div className="d-flex flex-row justify-content-start">
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </Link>
     );
}
 
export default PlaylistPreview;