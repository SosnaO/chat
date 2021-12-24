import React, { useState } from "react";

const MessageInput = ({ state, setState }) => {
   const [input, setInput] = useState("");
  const newMessageHandler = (event) => {
    event.preventDefault();
    if (input.trim().length > 1) {
      setState([
        ...state,
        {
          id: Date.now(),
          userId: "Olga",
          createdAt: Date.now(),
          editedAt: "",
          text: input,
          user: "Olga",
        },
      ]);
      setInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      newMessageHandler(e);
    }
  };
  return (
    <div className="message-input">
      <input
        type="text"
        className="message-input-text"
        placeholder="new message"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={handleKeyPress}
      />
      <button onClick={newMessageHandler} className="message-input-button">
        SEND
      </button>
    </div>
  );
};

export default MessageInput;
