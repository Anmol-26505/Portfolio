import { useState } from "react";
import {
  FaEnvelope,
  FaCopy,
  FaCheck,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaCheckCircle,
  FaDownload,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const contactEmail = "anmolchauhan.ac.26@gmail.com";

  const handleCopyEmail = () => {
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

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section className="bg-stone-50/70 dark:bg-zinc-950/60 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-stone-200/80 dark:border-zinc-800/80 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/50 border border-orange-200/70 dark:border-orange-800/60 text-orange-700 dark:text-orange-300 text-xs font-mono uppercase tracking-wider mb-3">
            <span>05 // Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 dark:text-white tracking-tight">
            Let's build something exceptional.
          </h2>
          <p className="text-stone-600 dark:text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
            Whether you have an open engineering position, a project proposal, or wish to discuss C++ and React architecture — my inbox is open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Quick Connect Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* 1-Click Copy Email Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-stone-200/90 dark:border-zinc-800 shadow-xs">
              <span className="text-xs font-mono text-stone-400 dark:text-zinc-500 uppercase tracking-wider block mb-2">
                Direct Communication
              </span>
              <p className="text-sm sm:text-base font-semibold text-stone-900 dark:text-white font-mono mb-4 break-all">
                {contactEmail}
              </p>
              <div className="flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-stone-900 dark:bg-white hover:bg-stone-800 dark:hover:bg-zinc-200 text-white dark:text-zinc-950 text-xs font-semibold transition-colors cursor-pointer shadow-xs"
                >
                  {copied ? (
                    <>
                      <FaCheck className="text-emerald-400 dark:text-emerald-600 text-xs" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <FaCopy className="text-xs" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href="/Anmol_CV.pdf"
                  download="Anmol_CV.pdf"
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-stone-100 dark:bg-zinc-800 hover:bg-stone-200/80 dark:hover:bg-zinc-700 text-stone-800 dark:text-zinc-200 text-xs font-semibold border border-stone-200 dark:border-zinc-700 transition-colors"
                >
                  <FaDownload className="text-xs" />
                  <span>Resume</span>
                </a>
              </div>
            </div>

            {/* Availability & Location info */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-stone-200/90 dark:border-zinc-800 shadow-xs space-y-3.5 text-xs text-stone-600 dark:text-zinc-400">
              <div className="flex items-center justify-between pb-2.5 border-b border-stone-100 dark:border-zinc-800">
                <span className="font-mono text-stone-400 dark:text-zinc-500 uppercase">Role Availability</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Immediate / Full-Time
                </span>
              </div>
              <div className="flex items-center justify-between pb-2.5 border-b border-stone-100 dark:border-zinc-800">
                <span className="font-mono text-stone-400 dark:text-zinc-500 uppercase flex items-center gap-1">
                  <FaMapMarkerAlt className="text-stone-400 dark:text-zinc-500 text-[10px]" /> Location
                </span>
                <span className="font-medium text-stone-800 dark:text-zinc-200">Jalandhar, Punjab, India</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-stone-400 dark:text-zinc-500 uppercase flex items-center gap-1">
                  <FaClock className="text-stone-400 dark:text-zinc-500 text-[10px]" /> Timezone
                </span>
                <span className="font-medium text-stone-800 dark:text-zinc-200">IST (UTC +5:30)</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-stone-200/90 dark:border-zinc-800 shadow-xs">
              <span className="text-xs font-mono text-stone-400 dark:text-zinc-500 uppercase tracking-wider block mb-3">
                Profiles & Repositories
              </span>
              <div className="flex flex-col gap-2.5 text-xs font-medium">
                <a
                  href="https://github.com/Anmol-26505"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-stone-50 dark:hover:bg-zinc-800 text-stone-700 dark:text-zinc-300 hover:text-stone-950 dark:hover:text-white transition-colors"
                >
                  <FaGithub className="text-base text-stone-800 dark:text-zinc-200" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/anmolchauhan84/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-stone-50 dark:hover:bg-zinc-800 text-stone-700 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                >
                  <FaLinkedin className="text-base text-orange-600 dark:text-orange-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Transmission Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-stone-200/90 dark:border-zinc-800 shadow-xs">
              {submitted ? (
                <div className="text-center py-12 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto text-xl">
                    <FaCheckCircle />
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 dark:text-white">Message Transmitted!</h3>
                  <p className="text-xs sm:text-sm text-stone-500 dark:text-zinc-400 max-w-sm mx-auto">
                    Thank you for reaching out. I’ll review your note and get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 dark:text-zinc-300 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Smith"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-stone-50 dark:bg-zinc-800/80 border text-xs sm:text-sm text-stone-900 dark:text-white placeholder:text-stone-400 dark:placeholder:text-zinc-500 focus:outline-none focus:bg-white dark:focus:bg-zinc-800 focus:border-stone-400 dark:focus:border-zinc-600 transition-colors ${
                          errors.name ? "border-rose-400 bg-rose-50/30" : "border-stone-200 dark:border-zinc-700"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-rose-600 text-[11px] mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 dark:text-zinc-300 mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-stone-50 dark:bg-zinc-800/80 border text-xs sm:text-sm text-stone-900 dark:text-white placeholder:text-stone-400 dark:placeholder:text-zinc-500 focus:outline-none focus:bg-white dark:focus:bg-zinc-800 focus:border-stone-400 dark:focus:border-zinc-600 transition-colors ${
                          errors.email ? "border-rose-400 bg-rose-50/30" : "border-stone-200 dark:border-zinc-700"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-rose-600 text-[11px] mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 dark:text-zinc-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Software Engineer Opportunity / Product Project"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-stone-50 dark:bg-zinc-800/80 border text-xs sm:text-sm text-stone-900 dark:text-white placeholder:text-stone-400 dark:placeholder:text-zinc-500 focus:outline-none focus:bg-white dark:focus:bg-zinc-800 focus:border-stone-400 dark:focus:border-zinc-600 transition-colors ${
                        errors.subject ? "border-rose-400 bg-rose-50/30" : "border-stone-200 dark:border-zinc-700"
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-rose-600 text-[11px] mt-1">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 dark:text-zinc-300 mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Anmol, I’d love to discuss..."
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-stone-50 dark:bg-zinc-800/80 border text-xs sm:text-sm text-stone-900 dark:text-white placeholder:text-stone-400 dark:placeholder:text-zinc-500 focus:outline-none focus:bg-white dark:focus:bg-zinc-800 focus:border-stone-400 dark:focus:border-zinc-600 transition-colors resize-none ${
                        errors.message ? "border-rose-400 bg-rose-50/30" : "border-stone-200 dark:border-zinc-700"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-rose-600 text-[11px] mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-stone-900 dark:bg-white hover:bg-stone-800 dark:hover:bg-zinc-200 text-white dark:text-zinc-950 text-xs sm:text-sm font-semibold transition-colors shadow-xs cursor-pointer"
                  >
                    <FaPaperPlane className="text-xs" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
