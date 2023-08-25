import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Search = () => {
    const getRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const [words, setWords] = useState([]);

    useEffect(() => {
        const fetchWords = async () => {
            const response = await axios.get(
                "https://random-word-api.herokuapp.com/word?number=15&length=10"
            );
            setWords(response.data);
        };
        fetchWords();
    }, []);

    return (
        <div className="d-flex flex-column text-light ps-4 mt-5 py-4 bg-dark">
            <div className="col-lg-8">
                <form action="" className="my-5">
                    <div
                        className="p-1 bg-black rounded rounded-pill shadow-sm mb-4"
                        style={{ width: "400px" }}
                    >
                        <div className="input-group">
                            <input
                                type="search"
                                placeholder="What are you searching for?"
                                aria-describedby="button-addon1"
                                className="form-control rounded rounded-pill border-0 bg-black"
                            />
                            <div className="input-group-append">
                                <img
                                    src="https://img.icons8.com/ios-filled/50/000000/search--v1.png"
                                    className="img-fluid me-1"
                                    style={{
                                        filter: "brightness(0) invert(0.5)",
                                        width: "16px",
                                        height: "16px",
                                    }}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div className="d-flex flex-wrap justify-content-start">
                {words.map((word, index) => (
                    <div
                        key={index}
                        className="card m-3"
                        style={{
                            width: "190px",
                            height: "190px",
                            borderRadius: "20px",
                            backgroundColor: getRandomColor(),
                        }}
                    >
                        <div className="card-body d-flex flex-column justify-content-center align-items-center">
                            <h5 className="card-title text-white fw-bold me-auto mb-auto">
                                {word}
                            </h5>
                            <p className="card-text text-muted">
                                {/* Add any additional content you want for each card */}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;
