import { useEffect, useState } from "react";

type Bark = {
  _id: string;
  email: string;
  body: string;
};

export default function Barks() {
  const [barks, setBarks] = useState<Bark[]>([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBarks();
  }, []);

  async function fetchBarks() {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/v1/barks");
      const data = await response.json();
      setBarks(data);
    } catch (err) {
      setError("Failed to fetch barks.");
      console.error("Failed to fetch barks:", err);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    try {
      const response = await fetch("http://localhost:3000/api/v1/barks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, body }),
      });
      if (response.ok) {
        setEmail("");
        setBody("");
        fetchBarks(); // Refresh the list
      } else {
        const data = await response.json();
        setError(data.error || "Failed to add bark.");
      }
    } catch (err) {
      setError("Network error.");
      console.error("Network error:", err);
    }
  }

  return (
    <>
      <h1>Barks</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="body">Bark</label>
          <input id="body" type="text" value={body} onChange={(e) => setBody(e.target.value)} required />
        </div>
        <button type="submit">Post Bark</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {barks.map((bark) => (
            <li key={bark._id}>
              <strong>{bark.email}:</strong> {bark.body}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
