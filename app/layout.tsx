import "./styles/globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Team Algorithm Tech Institute",
  description:
    "Become a Backend + AI/ML Engineer in 12 months. 2 days/week · 4 hrs/day · Portfolio + Turing Developer Test prep.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <header className="border-b border-slate-800/70 sticky top-0 backdrop-blur bg-slate-950/70 z-50">
          <nav className="container flex items-center justify-between py-4">
            <Link href="/" className="font-semibold tracking-wide">
              Team Algorithm
            </Link>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/programs" className="hover:text-cyan-400">
                Programs
              </Link>
              <Link href="/about" className="hover:text-cyan-400">
                About
              </Link>
              <Link href="/courses" className="hover:text-cyan-400">
                Courses
              </Link>
              <Link href="/admissions" className="hover:text-cyan-400">
                Admissions
              </Link>
              <Link href="/contact" className="hover:text-cyan-400">
                Contact
              </Link>
              <a
                className="btn"
                href="/handbook.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Handbook
              </a>
            </div>
          </nav>
        </header>
        {/* Main content */}
        <main>{children}</main>
        {/* Footer */}
        <footer className="border-t border-slate-800/70 mt-24">
          <div className="container py-8 grid md:grid-cols-3 gap-6 small">
            <div>
              <div className="font-semibold mb-2">Team Algorithm Tech Institute</div>
              <p>Backend → AI/ML in 12 months. Lagos, Nigeria.</p>
            </div>
            <div>
              <div className="font-semibold mb-2">Contact</div>
              <p>Email: teamalgorithm2022@gmail.com</p>
              <p>Phone/WhatsApp: 08060752917</p>
            </div>
            <div>
              <div className="font-semibold mb-2">Links</div>
              <ul className="space-y-1">
                <li>
                  <a
                    className="hover:text-cyan-400"
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-cyan-400"
                    href="https://wa.me/2348060752917"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Chat
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}