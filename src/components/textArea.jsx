import { React, useState, useEffect } from "react";
import styles from "./textArea.module.css";

export function getRecommendation(message) {
  // Getting the recommended insurance plan
  const match = message.match(
    /recommend(?:ed)?:?\s*(Mechanical Breakdown Insurance|Comprehensive Car Insurance|Third Party Car Insurance)/i
  );
  return match ? match[1] : "";
}

// Main TextArea component
export default function TextArea(props) {
  // State for the input text box
  const [text, setText] = useState("");
  // State for the latest AI response (not directly used in UI)
  const [response, setResponse] = useState("");
  // State for the conversation history (array of user/AI messages)
  const [conversation, setConversation] = useState([]);
  // State for the final recommendation
  const [recommendation, setRecommendation] = useState("");

  // Fetch initial data from backend on mount (optional, can be used for greeting)
  useEffect(() => {
    fetch("http://localhost:4000/quote")
      .then((res) => res.json())
      .then((data) => {
        setResponse(data.message); // Store initial message if needed
      });
  }, []);

  // Update the input text state as the user types
  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  // Handle submit button click
  const handleSubmit = () => {
    // Add the user's message to the conversation array
    const updatedConversation = [...conversation, `user: ${text}`];
    setConversation(updatedConversation);

    // Map the conversation array to the format expected by the backend/AI
    const mappedConversation = updatedConversation
      .map((msg) => {
        if (msg.startsWith("user: ")) {
          // User message format
          return { role: "user", parts: [{ text: msg.replace("user: ", "") }] };
        } else if (msg.startsWith("AI: ")) {
          // AI message format
          return { role: "model", parts: [{ text: msg.replace("AI: ", "") }] };
        }
        return null; // Ignore any lines that don't match
      })
      .filter(Boolean); // Remove nulls

    // Send the mapped conversation to the backend
    fetch("http://localhost:4000/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ conversation: mappedConversation }),
    })
      .then((res) => res.json())
      .then((data) => {
        // Add the AI's response to the conversation array
        setConversation((prev) => [...prev, `AI: ${data.message}`]);
        const rec = getRecommendation(data.message);
        if (rec && props.setRecommendation) {
          props.setRecommendation(rec);
        }

        console.log(data); // Log the backend response for debugging
      });
    setText(""); // Clear the input box after sending
  };

  return (
    <div>
      {/* Text area showing the conversation history */}
      <div className={styles.textAreaDiv}>
        <div className={styles.textArea}>
          {conversation.length === 0 ? (
            <div style={{ color: "#ccc", padding: "10px" }}>
              No messages yet...
            </div>
          ) : (
            conversation.map((line, idx) => (
              <div
                key={idx}
                className={styles.line}
                style={{
                  width: `${Math.min(30 + line.length * 8, 700)}px`,
                  border: "2px solid #2176D4",
                  borderRadius: "0px 50px 50px 0px",
                  margin: "15px 0",
                  color: "#2176d4",
                }}
              >
                {line}
              </div>
            ))
          )}
        </div>
      </div>{" "}
      {/* Submit button */}
      <div className={styles.submitButtonDiv}>
        <button className={styles.submitButton} onClick={handleSubmit}>
          Submit Button
        </button>
      </div>
      {/* Input box for user to type their message */}
      <div>
        <input
          type="text"
          className={styles.textBox}
          onChange={handleInputChange}
          value={text}
        />
      </div>
    </div>
  );
}
