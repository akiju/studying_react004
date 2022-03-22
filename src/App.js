import { useState } from "react";
import { ChileArea } from "./ChileArea";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(true);

  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);
  const onClickClose = () => setOpen(false);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChileArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
