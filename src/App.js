import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';
import HomePage from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './custom-bootstrap.scss'
import Playlist from './pages/playlist';
import RootLayout from './layouts/rootLayout';
import Album from './pages/album';
import Artist from './pages/artist';
import Track from './pages/track';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {path: '/', element: <HomePage/>},
      {path: 'albums/:albumName', element: <Album/>},
      {path: '/playlists/:playlistId', element: <Playlist/>},
      {path: '/artists/:artistName', element: <Artist/>},
      {path: '/track/:trackId', element: <Track/>}
    ],
  },
]);


function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
