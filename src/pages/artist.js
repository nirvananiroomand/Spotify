import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../layouts/footer";

const Artist = () => {
    const [isShown, setIsShown] = useState([]);
    const { artistName } = useParams();
    const [albums, setAlbums] = useState([]);
    const [album, setAlbum] = useState([]);
    const [listeners, setListeners] = useState();
    const [played, setPlayed] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAlbums = async () => {
            const response = await axios.get(
                "https://api.npoint.io/eb7cb2980ed54a5604e6/"
            );
            setAlbums(response.data);
            setIsLoading(false); 
            setListeners(Math.floor(Math.random() * 100000));
        };
        fetchAlbums();
        console.log(albums);
    }, []);

    useEffect(() => {
        if (albums.length && artistName) {
            const selectedAlbum = albums.find(
                (album) => album.artists[0] === artistName
            );
            setAlbum(selectedAlbum);
            const randomPlayed = Array.from(
                { length: selectedAlbum.tracks.length },
                () => Math.floor(Math.floor(Math.random() * 10000))
            );
            setPlayed(randomPlayed);
        }
    }, [albums]);

    if (isLoading) {
        return <p className="text-light mt-5 fs-1">Loading...</p> 
      }
    

    if (!album || !album.tracks) {
        // Handle case where playlist is not found (loading or invalid ID)
        return <div className="text-light">Invalid Playlist ID</div>;
    }

    const handleMouseEnter = (index) => {
        setIsShown((prevIsShown) => {
            const updatedIsShown = [...prevIsShown];
            updatedIsShown[index] = true;
            return updatedIsShown;
        });
    };

    const handleMouseLeave = (index) => {
        setIsShown((prevIsShown) => {
            const updatedIsShown = [...prevIsShown];
            updatedIsShown[index] = false;
            return updatedIsShown;
        });
    };

    return (
        <div>
            <div
                className="d-flex flex-row text-light ps-4 py-4 bg-image"
                style={{
                    backgroundImage:
                        "url('https://picsum.photos/2000/?random=1')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div
                    className="d-flex flex-column align-items-start ms-4"
                    style={{ marginTop: "8em" }}
                >
                    <p>artist</p>
                    <p className="fs-1 fw-bolder">{artistName}</p>
                    <div>{listeners} monthly listener</div>
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
                <button
                    type="button"
                    class="btn btn-outline-secondary me-4 fw-bolder"
                >
                    FOLLOW
                </button>
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
                <thead className="fs-3 text-light fw-bold">Popular</thead>
                <tbody>
                    {album.tracks.map((track, index) => (
                        <tr
                            key={track.id}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                        >
                            <th scope="row" width={10}>
                                {index + 1}
                            </th>
                            <td className="d-flex flex-row">
                                <img
                                    src={`https://picsum.photos/200/?random=${index+3}`}
                                    alt=""
                                    width={40}
                                />
                                <div className="d-flex flex-column lh-1 ms-3">
                                    <p className="m-0 text-light">
                                        {track.name}
                                    </p>
                                </div>
                            </td>
                            <td>{`played ${played[index]} times`}</td>
                            <td>
                                {isShown[index] ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="me-4"
                                        height="16"
                                        viewBox="0 0 512 512"
                                        style={{ fill: "#6c757d" }}
                                    >
                                        <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                                    </svg>
                                ) : (
                                    <svg
                                        className="me-4"
                                        height="16"
                                        viewBox="0 0 512 512"
                                    >
                                        ...
                                    </svg>
                                )}
                            </td>
                            <td>{track.duration}</td>
                            <td>
                                {isShown[index] ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="me-4"
                                        height="16"
                                        viewBox="0 0 448 512"
                                        style={{ fill: "#6c757d" }}
                                    >
                                        <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
                                    </svg>
                                ) : (
                                    <svg
                                        className="me-4"
                                        height="16"
                                        viewBox="0 0 512 512"
                                    >
                                        ...
                                    </svg>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="fs-3 text-light fw-bold text-start m-3">
                Discography
            </div>
            <div className="d-flex flex-row m-5 text-light">
                <img
                    src={album.image}
                    alt=""
                    height={94}
                    className="rounded-circle me-2"
                />
                <Link
                    to={`/albums/${album.name}`}
                    className="d-flex flex-column justify-content-end text-light text-decoration-none"
                >
                    <p className="mb-0">Album</p>
                    <p className="mt-0">{album.name}</p>
                </Link>
            </div>
            {/* <div className="fs-3 text-light fw-bold text-start m-3">
                Featuring Artist
            </div> */}
            <Footer />
        </div>
    );
};

export default Artist;
