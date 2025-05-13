export default function ChatLayout() {
  return (
    <main className="main light-shadow">
      <div className="message-container">
        {/* THESE MESSAGE ROW ARE JUST EXAMPLE MESSAGES */}
        <MessageRow
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
            architecto odio. Exercitationem quasi quibusdam mollitia, obcaecati
            eligendi facere nobis. Ea magnam reprehenderit, soluta molestias
            officiis ratione perspiciatis ad vitae quisquam?"
          isUser={false}
        />
        <MessageRow
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
            architecto odio. Exercitationem quasi quibusdam mollitia, obcaecati
            eligendi facere nobis. Ea magnam reprehenderit, soluta molestias
            officiis ratione perspiciatis ad vitae quisquam?"
          isUser={true}
        />
        <MessageRow
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
            architecto odio. Exercitationem quasi quibusdam mollitia, obcaecati
            eligendi facere nobis. Ea magnam reprehenderit, soluta molestias
            officiis ratione perspiciatis ad vitae quisquam?"
          isUser={true}
        />
      </div>
      <div className="input-container flex-center">
        <input
          type="text"
          placeholder="Enter.."
          className="form-control"
          autoComplete="off"
          autoSave="off"
          autoCorrect="off"
        />
        {/* <span className="material-symbols-outlined input-send"> send </span> */}
      </div>
    </main>
  );
}

interface MessageRowProps {
  isUser: boolean;
  content: string;
}
function MessageRow({ isUser, content }: MessageRowProps) {
  return (
    <div className={isUser ? "message-row user-message" : "message-row"}>
      <span>{content}</span>
    </div>
  );
}
