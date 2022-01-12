import "./App.css";
import Songs from "./Components/Songs/Songs";
import Header from "./Components/Header/Header";
import AddSong from "./Components/AddSong/AddSong";
import { useState } from "react";

function App() {
  const songList = [
    {
      id: 1,
      name: "song1",
      artist: "aa",
    },
    {
      id: 2,
      name: "song2",
      artist: "bb",
    },
    {
      id: 3,
      name: "song3",
      artist: "cc",
    },
    {
      id: 4,
      name: "song4",
      artist: "dd",
    },
  ];
  const [songs, setSong] = useState(songList);
  const [newSong, setNewSong] = useState("");

  const addSong = (songName) => {
    setSong([
      ...songs,
      { id: songs.length + 1, name: songName, artist: "Adele" },
    ]);
    setNewSong("");
  };

  const removeSong = (id) => {
    setSong(songs.filter((song) => song.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <AddSong onAddSong={addSong} />
      <Songs songList={songs} remove={removeSong} />
    </div>
  );
}

export default App;
