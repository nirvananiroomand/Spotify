import { useState, useEffect } from "react";
import axios from "axios";

const Track = () => {
    const trackId = "ididid";
    const [tracks, setTracks] = useState([]);
    useEffect(() => {
        axios.get("../dataset.csv").then((res) => {
            const tracks = res.data.split("\n").map((row) => row.split(","));
            setTracks(tracks);
        });
    }, []);

    const [isShown, setIsShown] = useState([]);

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
        <div className="me-0">
            <div className="d-flex flex-row text-light ps-4 mt-5 py-4 bg-dark">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSij4xw9-Z1PFYNGcfs1eZtSx55zLOtlYkZkA&usqp=CAU"
                    alt=""
                />
                {tracks.map((track) => (
                    <div key={track[0]} className="track">
                        <img src={track[1]} />
                        <p>{track[2]}</p>
                        <p>{track[3]}</p>
                        <p>
                            By {track[4]} from {track[5]}
                        </p>
                    </div>
                ))}
                <div className="d-flex flex-column align-items-start mt-5 ms-4">
                    <p>Song</p>
                    <p className="fs-1 fw-bolder">Song Title</p>
                    <p>Description</p>
                    <div className="d-flex flex-row">
                        <img
                            src="https://pbs.twimg.com/media/Fm5TjksaAAABSbS?format=jpg&name=4096x4096"
                            alt=""
                            height={24}
                            className="rounded-circle me-2"
                        />
                        <div>Artist . Album , Year . 00:00 </div>
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
            <div className="fs-3 text-light fw-bold text-start m-3">Lyrics</div>
            <div className="text-secondary text-start ms-4">
                Waiting on a Sunday afternoon
                <br />
                For what I read between the lines
                <br />
                Your lies
                <br />
                ♪<br />
                Feelin' like a hand in rusted shame
                <br />
                So do you laugh at those who cry?
                <br />
                Reply
                <br />
                ♪<br />
                Leavin' on a southern train
                <br />
                Only yesterday you lied
                <br />
                Promises of what I seemed to be
                <br />
                Only watched the time go by
                <br />
                All of these things you've said to me
                <br />
                ♪<br />
                Breathing is the hardest thing to do
                <br />
                With all I've said and all that's dead for you
                <br />
                You lied
                <br />
                Goodbye
                <br />
                ♪<br />
                Leavin' on a southern train
                <br />
                Only yesterday you lied
                <br />
                Promises of what I seemed to be
                <br />
                Only watched the time go by
                <br />
                All of these things I've said to you
                <br />
            </div>
            <div className="d-flex flex-row m-5 text-light">
                <img
                    src="https://pbs.twimg.com/media/Fm5TjksaAAABSbS?format=jpg&name=4096x4096"
                    alt=""
                    height={94}
                    className="rounded-circle me-2"
                />
                <div className="d-flex flex-column justify-content-end">
                    <p className="mb-0">Artist</p>
                    <p className="mt-0">Artist Name</p>
                </div>
            </div>
            <div className="d-flex flex-column m-5 text-light text-start">
                <p className="text-secondary mb-0">Popular Tracks by</p>
                <p className="mt-0 fs-3">Artist Name</p>
                <table class="table table-borderless text-secondary text-start">
                    <tbody>
                        <tr
                            onMouseEnter={() => handleMouseEnter(0)}
                            onMouseLeave={() => handleMouseLeave(0)}
                        >
                            <th scope="row" width={10}>
                                1
                            </th>
                            <td className="d-flex flex-row">
                                <img
                                    src="https://rb.gy/purnf"
                                    alt=""
                                    width={40}
                                />
                                <div className="d-flex flex-column lh-1 ms-3">
                                    <p className="m-0 text-light">Track Name</p>
                                </div>
                            </td>
                            <td>played 0000 times</td>
                            <td>
                                {isShown[0] ? (
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
                            <td>0:00</td>
                            <td>
                                {isShown[0] ? (
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
                        <tr
                            onMouseEnter={() => handleMouseEnter(1)}
                            onMouseLeave={() => handleMouseLeave(1)}
                        >
                            <th scope="row" width={10}>
                                2
                            </th>
                            <td className="d-flex flex-row">
                                <img
                                    src="https://rb.gy/purnf"
                                    alt=""
                                    width={40}
                                />
                                <div className="d-flex flex-column lh-1 ms-3">
                                    <p className="m-0 text-light">Track Name</p>
                                </div>
                            </td>
                            <td>played 0000 times</td>
                            <td>
                                {isShown[1] && (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="me-4"
                                        height="16"
                                        viewBox="0 0 512 512"
                                        style={{ fill: "#6c757d" }}
                                    >
                                        <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                                    </svg>
                                )}
                            </td>
                            <td>0:00</td>
                            <td>
                                {isShown[1] ? (
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
                        <tr
                            onMouseEnter={() => handleMouseEnter(2)}
                            onMouseLeave={() => handleMouseLeave(2)}
                        >
                            <th scope="row" width={10}>
                                3
                            </th>
                            <td className="d-flex flex-row">
                                <img
                                    src="https://rb.gy/purnf"
                                    alt=""
                                    width={40}
                                />
                                <div className="d-flex flex-column lh-1 ms-3">
                                    <p className="m-0 text-light">Track Name</p>
                                </div>
                            </td>
                            <td>played 0000 times</td>
                            <td>
                                {isShown[2] && (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="me-4"
                                        height="16"
                                        viewBox="0 0 512 512"
                                        style={{ fill: "#6c757d" }}
                                    >
                                        <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                                    </svg>
                                )}
                            </td>
                            <td>0:00</td>
                            <td>
                                {isShown[2] ? (
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
                        <tr
                            onMouseEnter={() => handleMouseEnter(3)}
                            onMouseLeave={() => handleMouseLeave(3)}
                        >
                            <th scope="row" width={10}>
                                4
                            </th>
                            <td className="d-flex flex-row">
                                <img
                                    src="https://rb.gy/purnf"
                                    alt=""
                                    width={40}
                                />
                                <div className="d-flex flex-column lh-1 ms-3">
                                    <p className="m-0 text-light">Track Name</p>
                                </div>
                            </td>
                            <td>played 0000 times</td>
                            <td>
                                {isShown[3] && (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="me-4"
                                        height="16"
                                        viewBox="0 0 512 512"
                                        style={{ fill: "#6c757d" }}
                                    >
                                        <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                                    </svg>
                                )}
                            </td>
                            <td>0:00</td>
                            <td>
                                {isShown[3] ? (
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
                        <tr
                            onMouseEnter={() => handleMouseEnter(4)}
                            onMouseLeave={() => handleMouseLeave(4)}
                        >
                            <th scope="row" width={10}>
                                5
                            </th>
                            <td className="d-flex flex-row">
                                <img
                                    src="https://rb.gy/purnf"
                                    alt=""
                                    width={40}
                                />
                                <div className="d-flex flex-column lh-1 ms-3">
                                    <p className="m-0 text-light">Track Name</p>
                                </div>
                            </td>
                            <td>played 0000 times</td>
                            <td>
                                {isShown[4] && (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="me-4"
                                        height="16"
                                        viewBox="0 0 512 512"
                                        style={{ fill: "#6c757d" }}
                                    >
                                        <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                                    </svg>
                                )}
                            </td>
                            <td>0:00</td>
                            <td>
                                {isShown[4] ? (
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
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Track;
