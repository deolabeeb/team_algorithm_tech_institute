export default function Courses() {
  const courses = [
    {
      title: "Data Science & Machine Learning",
      duration: "6 Months",
      detail:
        "Python · Pandas · NumPy · Scikit‑learn · TensorFlow/PyTorch · NLP · MLOps · Capstone AI system",
      outcomes: [
        "Analyze and model real datasets",
        "Train, evaluate and deploy ML/DL models",
        "Build an AI portfolio (4+ projects + capstone)",
      ],
    },
    {
      title: "Frontend Web Development",
      duration: "6 Months",
      detail:
        "HTML · CSS · JavaScript · React · Next.js · Tailwind · Accessibility · Performance",
      outcomes: [
        "Build responsive, production‑grade UIs",
        "Ship portfolio sites and web apps",
        "Master React/Next.js fundamentals",
      ],
    },
    {
      title: "Backend Web Development",
      duration: "6 Months",
      detail:
        "Python · FastAPI/Django · PostgreSQL · Redis · Docker · CI/CD · Cloud · Auth · Testing",
      outcomes: [
        "Design and deploy secure REST APIs",
        "Work with databases, caching and queues",
        "Deploy to cloud with Docker and CI/CD",
      ],
    },
    {
      title: "Data Structures & Algorithms (DSA)",
      duration: "4 Months",
      detail:
        "Arrays · Strings · Recursion · Trees · Graphs · Greedy · DP · LeetCode Top 150",
      outcomes: [
        "Improve problem‑solving speed and accuracy",
        "Ace coding interviews with proven patterns",
        "Publish a competitive programming portfolio",
      ],
    },
    {
      title: "Full Stack Development (Premium)",
      duration: "9–12 Months",
      detail:
        "Frontend + Backend + DSA combined · Auth · Payments · Caching · Real‑time capabilities",
      outcomes: [
        "Ship a full SaaS product end‑to‑end",
        "Master devops basics and monitoring",
        "Capstone: Launch a production app",
      ],
    },
    {
      title: "One‑Year Backend → AI/ML Pathway",
      duration: "12 Months",
      detail:
        "6 mo Backend · 2 wks Bridge · 5.5 mo AI/ML · LeetCode Top 100 · Two capstones",
      outcomes: [
        "Become a Backend + AI/ML Engineer",
        "Portfolio of 8–10 projects",
        "Turing Developer Test preparation",
      ],
    },
  ];
  return (
    <section className="section container">
      <h1 className="h1 mb-3">Courses & Tracks</h1>
      <p className="small mb-8">
        Choose a focused track or enroll in our flagship one‑year pathway.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((c) => (
          <div
            key={c.title}
            className="card p-6 hover:border-cyan-400 transition"
          >
            <div className="h2">{c.title}</div>
            <p className="mt-1 text-cyan-300">{c.duration}</p>
            <p className="mt-2">{c.detail}</p>
            <ul className="list-disc pl-6 small mt-3 space-y-1">
              {c.outcomes.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="card p-6 mt-10">
        <h2 className="h2">Admissions & Fees</h2>
        <p className="small mt-2">
          Intakes run quarterly. Flexible payment plans are available. Scholarships may be
          offered to top applicants. See our <a className="text-cyan-400 underline" href="/admissions">Admissions</a> page for how to apply.
        </p>
      </div>
    </section>
  );
}