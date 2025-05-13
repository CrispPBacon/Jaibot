import { useState } from "react";
import api from "../api/api";

export default function ChatNew() {
  const [content, setContent] = useState("");

  const handleSend = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!content) return;

    const data = { content };
    if (e.key == "Enter") {
      // console.log(data);

      api
        .post("/api/new-chat", { data }, { withCredentials: true })
        .then((res) => console.log(res.data))
        .catch((e) => console.log(e?.response?.data?.error || e));
      setContent("");
    }
  };
  return (
    <main className="main light-shadow">
      <div className="content-container"></div>
      <div className="input-container flex-center">
        <input
          type="text"
          placeholder="Enter.."
          className="form-control"
          autoComplete="off"
          autoSave="off"
          autoCorrect="off"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={handleSend}
        />
        {/* <span className="material-symbols-outlined input-send"> send </span> */}
      </div>
    </main>
  );
}
