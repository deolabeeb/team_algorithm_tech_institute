export default function About() {
  return (
    <section className="section container">
      <h1 className="h1 mb-6">About Us</h1>
      <div className="card p-6 space-y-6">
        <p>
          Team Algorithm Tech Institute is on a mission to raise Africa’s next tech leaders. We
          take curious minds and train them to become production‑ready Backend Developers
          and AI/ML Engineers. Our programs are hands‑on, project‑driven and accessible —
          you need only commit two days per week to transform your career in a year.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="h2 mb-2">Facilitator</h2>
            <p className="small">
              <strong>Adesina Abeeb</strong> is a Python Developer, Data Scientist and Instructor with over four
              years of experience teaching Python, Backend and AI. He currently serves as
              the Vice Principal Academic and Coding/Data Processing Instructor at SMATECH High
              School in Lagos, Nigeria and leads Team Algorithm Tech Institute.
            </p>
            <p className="small mt-2">
              Adesina honed his skills through a rigorous one‑year certification in Data Science,
              Machine Learning and AI at ExploreAI in Cape Town, South Africa. He is also gaining
              international experience as a remote intern at EKAI, a RegTech startup in London, UK.
            </p>
          </div>
          <div>
            <h2 className="h2 mb-2">Our Approach</h2>
            <ul className="list-disc pl-6 small space-y-1">
              <li>
                <strong>Structured pathway:</strong> We guide you from backend fundamentals to advanced AI/ML
                engineering in one cohesive roadmap.
              </li>
              <li>
                <strong>Portfolio first:</strong> You’ll build 8–10 real projects and two capstones to showcase
                your abilities.
              </li>
              <li>
                <strong>Interview prep:</strong> Solve the top 100 coding interview questions and prepare for the
                Turing Developer Test.
              </li>
              <li>
                <strong>Modern tools:</strong> We use FastAPI, PostgreSQL, Docker, TensorFlow, PyTorch and
                Hugging Face to prepare you for real jobs.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}