import { useState } from "react";
import { buildFeedbackPath, extractFeedback } from "../api/feedback";

function FeedbackPage(props) {
  const [feedbackItem, setFeedbackItem] = useState([]);
  function loadFeedbackHandler(id) {
    // const data = handler(id);
    fetch(`/api/${id}`)
      .then((res) => res.json())
      .then((data) => setFeedbackItem(data.feedback));
  }
  return (
    <>
      {feedbackItem && <p>{feedbackItem.email}</p>}
      <ul>
        {props.feedbackItems.map((item) => (
          <li key={item.id}>
            {item.feedback}
            <button onClick={loadFeedbackHandler.bind(null, item.id)}>
              Show details
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return {
    props: {
      feedbackItems: data,
    },
  };
}
export default FeedbackPage;
