import Song from "./Song/Song";
import "./Songs";

export default function Songs({ songList, remove }) {
  return (
    <div className="songList">
      {songList.map((song) => (
        <Song
          key={song.id}
          id={song.id}
          title={song.name}
          artist={song.artist}
          remove={remove}
        />
      ))}
    </div>
  );
}
