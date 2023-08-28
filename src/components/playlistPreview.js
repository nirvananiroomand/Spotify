import { Link } from "react-router-dom";
import { useState } from "react";
import "./playlistPreview.css";

const PlaylistPreview = (props) => {
    const playlistId = props.playlistId;
    const playlistName = props.playlistName;
    const playlistDescription = props.playlistDescription;

    const [buttonOpacity, setButtonOpacity] = useState(0);

    const handleMouseEnter = () => {
        setButtonOpacity(1);
    };

    const handleMouseLeave = () => {
        setButtonOpacity(0);
    };

    return (
        <Link
            to={`/playlists/${playlistId}`}
            className="text-decoration-none"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className={`card w-auto mx-2 bg-dark-subtle`}
                style={{ width: "200px" }}
            >
                <img
                    src={`https://picsum.photos/200/?random=${playlistId}`}
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body" style={{ height: "100px" }}>
                    <h5
                        className="card-title card-text fw-bold"
                        style={{ color: "#FEFEFE" }}
                    >
                        {playlistName}
                    </h5>
                    <p
                        className="card-text custom-truncate fw-bold"
                        style={{ color: "#646464" }}
                    >
                        {playlistDescription}
                    </p>

                    <a
                        href="#"
                        className="btn position-absolute bottom-0 end-0 p-2"
                        style={{
                            opacity: buttonOpacity,
                            transition: "opacity 0.3s ease",
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="2.5em"
                            viewBox="0 0 512 512"
                            style={{ fill: "#00d604" }}
                        >
                            <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                        </svg>
                    </a>
                </div>
            </div>
        </Link>
    );
};

export default PlaylistPreview;
