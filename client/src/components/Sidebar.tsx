import { useNavigate } from "react-router-dom";
import api from "../api/api";
import useAuth from "../hooks/useAuth";

export default function Sidebar() {
  const navigate = useNavigate();
  const { setAuth, auth } = useAuth();
  const handleLogout = () => {
    api
      .delete("/api/logout", { withCredentials: true })
      .then((res) => {
        console.log(res.data.msg);
        setAuth(null);
        navigate("/login", { replace: true });
      })
      .catch((e) => console.log(e?.response?.data?.error || e));
  };
  return (
    <aside className="sidebar light-shadow">
      <div className="conversation-container">
        <div className="conversation-header">
          <button className="btn btn-dark" onClick={() => navigate("/")}>
            + New Chat
          </button>
        </div>
        <div className="conversation-history">
          <ConversationDate date="Today" />
          <ConversationRow title="Expense Tracker UI Analysis lorem" />
          <ConversationRow title="Run React Code Request" />
          <ConversationRow title="CSS selector issue" />
        </div>
        <div className="conversation-history">
          <ConversationDate date="Yesterday" />
          <ConversationRow title="Expense Tracker UI Analysis lorem" />
          <ConversationRow title="Run React Code Request" />
          <ConversationRow title="CSS selector issue" />
        </div>
        <div className="conversation-history">
          <ConversationDate date="Last Week" />
          <ConversationRow title="Expense Tracker UI Analysis lorem" />
          <ConversationRow title="Run React Code Request" />
          <ConversationRow title="CSS selector issue" />
        </div>
      </div>
      <div className="sidebar-menu flex-center flex--column">
        <h6>Hi, {auth?.user.username}</h6>
        <button onClick={handleLogout} className="btn btn-dark">
          Logout
        </button>
      </div>
    </aside>
  );
}

interface ConversationRowProps {
  title: string;
}
function ConversationRow({ title }: ConversationRowProps) {
  return <div className="conversation-row">{title}</div>;
}

interface ConversationDateProps {
  date: string;
}
function ConversationDate({ date }: ConversationDateProps) {
  return (
    <div className="conversation-row-date">
      <p>{date}</p>
    </div>
  );
}
