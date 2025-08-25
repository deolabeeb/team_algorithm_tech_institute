export default function Programs() {
  return (
    <section className="section container">
      <h1 className="h1 mb-6">Programs & Curriculum</h1>
      <p className="small mb-8">
        Our curriculum guides you from coding foundations through backend, bridging into AI/ML, with projects and capstones to showcase your skills. Weekly coding interview practice is baked in.
      </p>

      {/* Backend track card */}
      <div id="backend" className="card p-6 mb-8">
        <h2 className="h2">Backend Developer Track (6 Months)</h2>
        <ul className="list-disc pl-6 mt-4 space-y-1 text-slate-300">
          <li>Python foundations → CLI apps & GitHub workflow</li>
          <li>FastAPI core → Build To‑Do, Contact Book, Email Notification APIs</li>
          <li>Database & Auth → PostgreSQL, SQLAlchemy, JWT and role-based access</li>
          <li>Advanced topics → Redis caching, async programming, automated testing</li>
          <li>DevOps essentials → Docker, Docker Compose, CI/CD pipelines, cloud deployment</li>
          <li>Real‑time apps → WebSockets chat and microservices architecture</li>
          <li>Capstone → Build a production‑grade API (Social, Hospital or Learning platform)</li>
        </ul>
      </div>

      {/* Bridge module card */}
      <div id="bridge" className="card p-6 mb-8">
        <h2 className="h2">AI/ML Bridge Module (2 Weeks)</h2>
        <ul className="list-disc pl-6 mt-4 space-y-1 text-slate-300">
          <li>Data wrangling with Pandas & NumPy</li>
          <li>Build your first ML model with scikit‑learn and serve it via FastAPI</li>
          <li>Deploy a spam detector API using Docker</li>
        </ul>
      </div>

      {/* AI/ML track card */}
      <div id="aiml" className="card p-6">
        <h2 className="h2">AI/ML Engineer Track (5.5 Months)</h2>
        <ul className="list-disc pl-6 mt-4 space-y-1 text-slate-300">
          <li>Math & data foundations → Linear algebra, probability, statistics, data cleaning</li>
          <li>Core machine learning → Regression, classification, clustering, evaluation metrics</li>
          <li>Deep learning → Neural networks, CNNs & transfer learning, RNNs & Transformers</li>
          <li>NLP & recommender systems → Fine‑tune BERT, build a text summarizer and movie recommender</li>
          <li>MLOps → Save/load models, serve with FastAPI, Dockerise, automate with CI/CD, deploy to cloud</li>
          <li>Capstone → Launch a real AI product (Chatbot, summarizer, fraud detector or recommender)</li>
        </ul>
      </div>
    </section>
  );
}