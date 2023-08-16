import "./sidebar.css";

const Sidebar = () => {
    return ( 
        <div className="bg-black">
            <div>
                <img src="https://www.logo.wine/a/logo/Spotify/Spotify-Black-Logo.wine.svg" className="img-fluid" style={{filter: "brightness(0) invert(1)"}} alt="" />
            </div> 
            <div className="ms-3 my-3">
                <div className="d-flex flex-row justify-content-start align-items-center p-2">
                    <img src="https://img.icons8.com/fluency-systems-filled/48/000000/home.png" className="img-fluid" style={{filter: "brightness(0) invert(1)", width: "24px", height: "24px"}} alt="" />
                    <p className="text-light p-2 mb-0">Home</p>
                </div>       
                <div className="d-flex flex-row justify-content-start align-items-center p-2">
                    <img src="https://img.icons8.com/ios-filled/50/000000/search--v1.png" className="img-fluid" style={{filter: "brightness(0) invert(1)", width: "24px", height: "24px"}} alt="" />
                    <p className="text-light p-2 mb-0">Search</p>
                </div>       
                <div className="d-flex flex-row justify-content-start align-items-center p-2">
                    <img src="https://img.icons8.com/external-flat-icons-inmotus-design/67/000000/external-books-books-elements-flat-icons-inmotus-design.png" className="img-fluid" style={{filter: "brightness(0) invert(1)", width: "24px", height: "24px"}} alt="" />
                    <p className="text-light p-2 mb-0">Your Library</p>
                </div>  
            </div>  
            <div className="ms-3 my-3">\
                <div className="d-flex flex-row justify-content-start align-items-center p-2">
                    <img src="https://img.icons8.com/ios-filled/50/000000/plus-2-math.png" className="img-fluid" style={{filter: "brightness(0) invert(1)", width: "24px", height: "24px"}} alt="" />
                    <p className="text-light p-2 mb-0">Create Playlist</p>
                </div> 
                <div className="d-flex flex-row justify-content-start align-items-center p-2">
                    <img src="https://img.icons8.com/external-others-inmotus-design/67/external-Like-player-others-inmotus-design.png" className="img-fluid" style={{filter: "brightness(0) invert(1)", width: "24px", height: "24px"}} alt="" />
                    <p className="text-light p-2 mb-0">Liked Songs</p>
                </div> 
            </div>  
            <div className="">
                <div className="ms-3 my-3 d-flex pt-4 justify-content-start">
                    <a href="" className="text-decoration-none text-secondary m-2">Legal</a>
                    <a href="" className="text-decoration-none text-secondary m-2">Privacy Center</a>
                </div>
                <div className="ms-3 my-3 d-flex justify-content-start">
                    <a href="" className="text-decoration-none text-secondary m-2">Privacy Policy</a>
                    <a href="" className="text-decoration-none text-secondary m-2">Cookie Setting</a>
                </div>
                <div className="ms-3 my-3 d-flex flex-column align-items-start">
                    <a href="" className="text-decoration-none text-secondary m-2">About Ads</a>
                    <a href="" className="text-decoration-none text-secondary m-2">Cookies</a>
                </div>
                <div className="d-flex justify-content-start ms-3 my-5">
                    <button className="btn btn-outline-light rounded-5 btn-responsive">
                    <img src="https://img.icons8.com/pastel-glyph/64/globe.png" className="img-fluid" style={{filter: "brightness(0) invert(1)", width: "24px", height: "24px"}} alt=""/>
                    <span className="ps-2 text-responsive">English</span>
                    </button>
                </div>
            </div> 
        </div>
     );
}
 
export default Sidebar;