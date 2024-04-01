import { useRef, useState } from "react";
function HomePage() {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;
    if (!enteredEmail || !enteredFeedback) return;
    const reqBody = { email: enteredEmail, text: enteredFeedback };

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  function loadFeedbackHandler() {
    fetch("/api/feedback")
      .then((response) => response.json())
      .then((data) => setFeedbackItems(data.feedback));
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Email</label>
          <input ref={emailInputRef} type="email" id="email" />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback </label>
          <textarea ref={feedbackInputRef} rows={5} id="feedback" />
        </div>
        <button>Send Feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedbackHandler}>Load Feedback</button>
      <ul>
        {feedbackItems.map((item) => (
          <li key={item.id}>{item.feedback}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
