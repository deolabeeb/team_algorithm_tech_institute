import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="section container">
      {/* Hero section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="h1">
            Become a Backend + AI/ML Engineer in 12 Months
          </h1>
          <p className="mt-4 text-slate-300">
            2 days/week · 4 hours/day · Portfolio, capstones and Turing Developer Test prep.
          </p>
          <div className="mt-6 flex gap-3">
            <Link className="btn" href="/programs">
              View Program
            </Link>
            <Link className="btn-outline" href="/admissions">
              Apply Now
            </Link>
          </div>
          <div className="mt-8 small">
            Backed by experience: SMATECH (Nigeria), ExploreAI (Cape Town), EKAI (London · RegTech).
          </div>
        </div>
        <div className="relative h-72 md:h-80 lg:h-96">
          <Image
            src="/images/hero1.jpeg"
            alt="Students coding"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl shadow"
          />
        </div>
      </div>

      {/* Roadmap cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {[
          {
            title: "Backend Track",
            desc: "6 months · APIs, DB, DevOps",
            href: "/programs#backend",
          },
          {
            title: "AI/ML Bridge",
            desc: "2 weeks · ML API & deploy",
            href: "/programs#bridge",
          },
          {
            title: "AI/ML Track",
            desc: "5.5 months · ML/DL/NLP/MLOps",
            href: "/programs#aiml",
          },
        ].map((c) => (
          <Link
            key={c.title}
            href={c.href}
            className="card p-6 hover:border-cyan-400 transition block"
          >
            <div className="h2">{c.title}</div>
            <p className="mt-2 small">{c.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}