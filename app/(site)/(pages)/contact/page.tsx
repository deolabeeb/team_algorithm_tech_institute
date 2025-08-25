export default function Contact() {
  return (
    <section className="section container">
      <h1 className="h1 mb-6">Contact</h1>
      <div className="card p-6">
        <p className="small">
          We typically reply within 24 hours. Reach out via email or WhatsApp.
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-1 text-slate-300">
          <li>Email: teamalgorithm2022@gmail.com</li>
          <li>Phone/WhatsApp: 08060752917</li>
          <li>
            WhatsApp direct: <a
              className="text-cyan-400 underline"
              href="https://wa.me/2348060752917"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://wa.me/2348060752917
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}