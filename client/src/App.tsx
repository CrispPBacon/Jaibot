import React from "react";

const ChatLayout = React.lazy(() => import("./components/ChatLayout"));

function App() {
  return <ChatLayout />;
}

export default App;
