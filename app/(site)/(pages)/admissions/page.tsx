export default function Admissions() {
  return (
    <section className="section container">
      <h1 className="h1 mb-6">Admissions</h1>
      <div className="card p-6 space-y-4">
        <p className="small">
          Ready to join? We’re excited to have you. Please fill out the application form below
          or click the WhatsApp link to chat with us directly.
        </p>
        <div className="aspect-video w-full bg-slate-900/60 border border-slate-800 rounded-xl flex items-center justify-center small">
          {/* Replace the placeholder with your Google Forms embed iframe. */}
          Application form will appear here.
        </div>
        <p className="small mt-4">
          Prefer WhatsApp? <a className="text-cyan-400 underline" href="https://wa.me/2348060752917" target="_blank" rel="noopener noreferrer">Chat with us</a>
          and we will respond quickly.
        </p>
      </div>
    </section>
  );
}