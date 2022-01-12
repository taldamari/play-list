import "./Song.css";

export default function Song({ id, title, artist, remove }) {
  return (
    <div className="song-card">
      <div className="song-image">🎵</div>
      <p className="songName">Song name: {title}</p>
      <p className="artist">Artist: {artist}</p>
      <button className="deleteSong" onClick={() => remove(id)}>
        🗑️
      </button>
    </div>
  );
}
