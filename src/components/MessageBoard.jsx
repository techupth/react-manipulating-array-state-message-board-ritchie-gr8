import { useState } from "react";

function MessageBoard() {
  const [messagesList, setMessagesList] = useState([
    "Hello all ! This is first message.",
  ]);
  const [newMsg, setNewMsg] = useState("");

  const handleRemoveMsg = (idx) => {
    const newList = [...messagesList];
    newList.splice(idx, 1);
    setMessagesList(newList);
  };

  const handleAddNewMsg = () => {
    const newList = [...messagesList];
    newList.push(newMsg);
    setMessagesList(newList);
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={(e) => setNewMsg(e.target.value)}
          />
        </label>
        <button
          className="submit-message-button"
          onClick={handleAddNewMsg}
        >
          Submit
        </button>
      </div>
      <div className="board">
        {messagesList.map((msg, idx) => (
          <div key={idx} className="message">
            <h1>{msg}</h1>
            <button
              className="delete-button"
              onClick={() => handleRemoveMsg(idx)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;
