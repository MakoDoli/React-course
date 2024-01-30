import { useState } from "react";

export default function StatusUpdate() {
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState("submitting");
  console.log(status, answer);
  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await check(answer);
      setStatus("success");
    } catch (err) {
      console.error(err);
    }
  }
  function check(answer) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let isError = answer.toLowerCase() !== "lima";
        if (isError) {
          reject(new Error("wrong answer"));
        } else {
          resolve();
        }
      });
    });
  }

  if (status === "success") return <h2>Correct!</h2>;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="textarea"
          onChange={(e) => {
            setAnswer(e.target.value);
            setStatus("typing");
          }}
        />
        <button
          style={{ background: "yellow" }}
          type="submit"
          disabled={status === "submitting"}
        >
          submit
        </button>
      </form>
    </div>
  );
}
