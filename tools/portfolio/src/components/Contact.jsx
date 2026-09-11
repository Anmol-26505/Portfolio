import { useState } from "react";
import {
  FaEnvelope,
  FaCopy,
  FaCheck,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPaperPlane,
  FaCheckCircle,
  FaTerminal,
} from "react-icons/fa";
import { playClick, playKeypress, playSuccess } from "../utils/sound";

const Contact = ({ onOpenTerminal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const contactEmail = "anmolchohaan.ac.2001@gmail.com";

  const handleCopyEmail = () => {
    playSuccess();
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Please enter a subject";
    if (!formData.message.trim()) newErrors.message = "Please write a message";
    return newErrors;
  };

  const handleChange = (e) => {
    playKeypress();
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    playSuccess();
    const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(
      `[Engineering Transmission] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#050505] py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <span>05 // Transmission</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Initiate Direct Connection
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Open for software engineering roles, technical collaboration, and high-impact products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Info & Social Hub */}
          <div className="lg:col-span-5 space-y-4">
            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/80 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 text-cyan-400 flex items-center justify-center">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-[11px] uppercase font-mono text-zinc-400">
                    Direct Channel
                  </p>
                  <a
                    href={`mailto:${contactEmail}`}
                    onClick={playClick}
                    className="text-white text-sm sm:text-base font-semibold hover:text-cyan-400 transition-colors break-all"
                  >
                    {contactEmail}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                type="button"
                className="w-full mt-3 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors text-xs font-mono cursor-pointer"
              >
                {copied ? (
                  <>
                    <FaCheck className="text-emerald-400" />
                    <span className="text-emerald-400">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <FaCopy />
                    <span>Copy Direct Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Availability Status */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/80 shadow-lg">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <h3 className="text-white font-semibold text-sm">
                  Engineering Availability
                </h3>
              </div>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Open for Frontend & Full-Stack engineering roles, high-performance web projects, and team scaling.
              </p>
              <div className="mt-4 pt-3 border-t border-zinc-900 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>⚡ Latency: &lt; 24h response</span>
                <span className="text-emerald-400">Status: Active</span>
              </div>
            </div>

            {/* CLI Shortcut Hint */}
            <div className="p-5 rounded-2xl bg-zinc-950 border border-cyan-500/20 shadow-lg flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <FaTerminal className="text-cyan-400" />
                <span className="text-xs font-mono text-zinc-300">
                  Prefer terminal? Run <code className="text-cyan-300 bg-zinc-900 px-1.5 py-0.5 rounded">sudo hire</code>
                </span>
              </div>
              {onOpenTerminal && (
                <button
                  onClick={() => {
                    playClick();
                    onOpenTerminal();
                  }}
                  className="px-2.5 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono cursor-pointer hover:bg-cyan-500/30"
                >
                  CLI
                </button>
              )}
            </div>

            {/* Social Hub */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/80 shadow-lg">
              <p className="text-[11px] uppercase font-mono text-zinc-400 mb-4">
                Verified Socials
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Anmol-26505"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  onClick={playClick}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors text-xs font-mono"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/anmolchauhan84/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  onClick={playClick}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors text-xs font-mono"
                >
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://www.instagram.com/youknow_anmol/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  onClick={playClick}
                  className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-pink-400 hover:border-zinc-700 transition-colors text-sm"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Transmission Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800/80 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-900 mb-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-0.5">
                  Send a Direct Note
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm">
                  Drop your message below to dispatch a message packet.
                </p>
              </div>
              <span className="text-[10px] font-mono px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-cyan-400">
                PORT // 443
              </span>
            </div>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-zinc-900 border border-emerald-500/40 text-xs sm:text-sm text-zinc-300 flex items-center gap-3">
                <FaCheckCircle className="text-emerald-400 text-base flex-shrink-0" />
                <span>
                  Mail client launched! If it didn't open, write directly to{" "}
                  <strong className="text-white">{contactEmail}</strong>.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="c-name"
                    className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="c-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Connor"
                    className={`w-full px-4 py-2.5 rounded-xl bg-zinc-900 border text-white text-sm placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors ${
                      errors.name ? "border-red-500" : "border-zinc-800 focus:border-cyan-400"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="c-email"
                    className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5"
                  >
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="c-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="sarah@example.com"
                    className={`w-full px-4 py-2.5 rounded-xl bg-zinc-900 border text-white text-sm placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors ${
                      errors.email ? "border-red-500" : "border-zinc-800 focus:border-cyan-400"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="c-subject"
                  className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="c-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Engineering Role / Project Collaboration"
                  className={`w-full px-4 py-2.5 rounded-xl bg-zinc-900 border text-white text-sm placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors ${
                    errors.subject ? "border-red-500" : "border-zinc-800 focus:border-cyan-400"
                  }`}
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-400">{errors.subject}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="c-message"
                  className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5"
                >
                  Message *
                </label>
                <textarea
                  id="c-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Anmol, I'd like to chat about..."
                  className={`w-full px-4 py-2.5 rounded-xl bg-zinc-900 border text-white text-sm placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors resize-none ${
                    errors.message ? "border-red-500" : "border-zinc-800 focus:border-cyan-400"
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                onClick={playClick}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all text-sm cursor-pointer"
              >
                <FaPaperPlane className="text-xs" />
                <span>Transmit Packet (Send)</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
