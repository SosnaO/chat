import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import MessageList from "./components/MessageList";
import Preloader from "./components/Preloader";

function Chat() {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const url = "https://edikdolynskyi.github.io/react_sources/messages.json";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setState(json.sort((a, b) => a.createdAt.localeCompare(b.createdAt)));
        setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="chat">
      <Header state={state} />
      {loading && <Preloader />}
      <MessageList state={state} setState={setState} />
    </div>
  );
}

export default Chat;
