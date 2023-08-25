import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../layouts/footer";
import { useState, useEffect } from "react";

const Playlist = () => {
    const { playlistId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [playlists, setPlaylists] = useState([]);
    const [playlist, setPlaylist] = useState([]);

    useEffect(() => {
        const fetchPlaylists = async () => {
            const response = await axios.get(
                "https://api.npoint.io/aab317701da36736cbb4"
            );
            setPlaylists(response.data.playlists);
            setIsLoading(false);
        };

        fetchPlaylists();
    }, []);

    useEffect(() => {
        if (playlistId) {
            const selectedPlaylist = playlists.find((p) => p.id === playlistId);
            setPlaylist(selectedPlaylist);
        }
    }, [playlistId, playlists]);

    if (!playlist || !playlist.tracks) {
        // Handle case where playlist is not found (loading or invalid ID)
        return <div>Loading or Invalid Playlist ID</div>;
    }
    const { tracks } = playlist;

    // Calculate total seconds
    let totalSecs = 0;
    if (tracks) {
        totalSecs = tracks.reduce((total, track) => {
            const [mins, secs] = track.duration.split(":").map(Number);
            return total + (mins * 60 + secs);
        }, 0);
    }

    // Format total duration string
    let hours = 0;
    let minutes = Math.floor(totalSecs / 60);
    const seconds = totalSecs % 60;

    // Check if need hours
    if (minutes >= 60) {
        hours = Math.floor(minutes / 60);
        minutes = minutes % 60;
    }

    const totalDuration = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    
    if (isLoading) {
        return <p className="text-light mt-5 fs-1">Loading...</p> 
    }
    

    return (
        <div className="me-0">
            <div className="d-flex flex-row text-light ps-4 mt-5 py-4 bg-dark">
                <img
                    src="https://picsum.photos/200/?random=1"
                    alt=""
                />
                <div className="d-flex flex-column align-items-start mt-5 ms-4">
                    <p>Playlist</p>
                    <p className="fs-1 fw-bolder">{playlist.name}</p>
                    <p>{playlist.description}</p>
                    <div>
                        {tracks.length} Songs, About {totalDuration}
                    </div>
                </div>
            </div>
            <div className="d-flex flex-row ps-4 mt-3 align-items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="me-4"
                    height="56"
                    viewBox="0 0 512 512"
                    style={{ fill: "#1fdf64" }}
                >
                    <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="me-4"
                    height="32"
                    viewBox="0 0 512 512"
                    style={{ fill: "#6c757d" }}
                >
                    <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="me-4"
                    height="32"
                    viewBox="0 0 448 512"
                    style={{ fill: "#6c757d" }}
                >
                    <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
                </svg>
            </div>

            <table class="table table-borderless text-secondary m-3 text-start">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Album</th>
                        <th scope="col">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 512 512"
                                style={{ fill: "#6c757d" }}
                            >
                                <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                            </svg>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tracks.map((track, index) => {
                        return (
                            <tr>
                                <th scope="row">1</th>
                                <td className="d-flex flex-row">
                                    <img
                                        src={`https://picsum.photos/200/?random=${index+4}`}
                                        alt=""
                                        width={40}
                                    />
                                    <div className="d-flex flex-column lh-1 ms-3">
                                        <Link
                                            to={`/tracks/${tracks[index].name}`}
                                            className="text-decoration-none text-light"
                                        >
                                            {tracks[index].name}
                                        </Link>
                                        <p className="m-0">
                                            <Link
                                                to={`/artists/${tracks[index].artists}`}
                                                className="text-decoration-none text-reset"
                                            >
                                                {tracks[index].artists}
                                            </Link>
                                        </p>
                                    </div>
                                </td>
                                <td>
                                    <Link
                                        to={`/albums/${tracks[index].album}`}
                                        className="text-decoration-none text-reset"
                                    >
                                        {tracks[index].album}
                                    </Link>
                                </td>
                                <td>{tracks[index].duration}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <Footer />
        </div>
    );
};

export default Playlist;
