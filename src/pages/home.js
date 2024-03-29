import Shelf from "../components/shelf";
import Footer from "../layouts/footer";
import "./home.css";

const HomePage = () => {
    return (
        <div>
            <div className="shelves">
                <div className="header text-start fs-4 mx-5 fw-bolder text-light">
                    Playlists For You
                </div>
                <Shelf playlistStartIndex={0}/>
                <div className="header text-start fs-4 mx-5 fw-bolder text-light">
                    Jump Back Into
                </div>
                <Shelf playlistStartIndex={6}/>
                <div className="header text-start fs-4 mx-5 fw-bolder text-light">
                    Recently Played
                </div>
                <Shelf playlistStartIndex={12}/>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
