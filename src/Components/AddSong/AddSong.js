import { useRef } from "react";
import "./AddSong.css";

export default function AddSong({ onAddSong }) {
  const val = useRef();
  return (
    <div className="input">
      <p className="text">Add song</p>
      <input ref={val} />
      <button onClick={() => onAddSong(val.current.value)}>+</button>
    </div>
  );
}
