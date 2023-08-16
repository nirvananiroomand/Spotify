const TrackRow = () => {
    return ( 
        <div className="d-flex flex-row justify-content-between text-secondary p-3">
            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440" alt="" width={40}/>
            <div className="d-flex flex-column lh-1">
                <p className="m-0 text-light">Track Name</p>
                <p className="m-0">Artist Name</p>
            </div>
            <div>
                Album Name
            </div>
            <div>
                Duration
            </div>
        </div>
     );
}
 
export default TrackRow;