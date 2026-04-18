import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, User, Mail, Phone, GraduationCap, BookOpen } from "lucide-react";

interface Props {
  onClose: () => void;
}

export default function ApplyForm({ onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    const fields: Record<string, string> = {};
    data.forEach((val, key) => { fields[key] = val.toString(); });

    const body = Object.entries(fields)
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
      .join("&");

    try {
      await fetch(`https://formsubmit.co/pixelwindtechnology@gmail.com`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
    } catch {
      // formsubmit redirects, ignore network errors
    }

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" onClick={onClose} />

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden z-10"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-5 flex items-center justify-between">
            <div>
              <h2 className="text-white text-xl font-bold">Apply for Internship</h2>
              <p className="text-blue-100 text-sm mt-0.5">Pixelwind Technologies — AI/ML Program</p>
            </div>
            <button onClick={onClose} className="text-white/80 hover:text-white transition-colors p-1">
              <X className="w-5 h-5" />
            </button>
          </div>

          {submitted ? (
            <div className="px-8 py-12 text-center">
              <CheckCircle2 className="w-14 h-14 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Application Submitted!</h3>
              <p className="text-slate-500 text-sm mb-6">
                Thank you for applying. Our team will reach out to you within 1–2 business days at the email you provided.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
              {/* hidden formsubmit config */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value="New Internship Application - Pixelwind Technologies" />

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      name="name"
                      required
                      type="text"
                      placeholder="Your full name"
                      className="w-full pl-9 pr-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="your@email.com"
                      className="w-full pl-9 pr-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Phone Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      name="phone"
                      required
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full pl-9 pr-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">College / University *</label>
                  <div className="relative">
                    <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      name="college"
                      required
                      type="text"
                      placeholder="Your institution"
                      className="w-full pl-9 pr-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Program Duration *</label>
                  <select
                    name="duration"
                    required
                    className="w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select duration</option>
                    <option value="2 Months">2 Months — Core AI/ML</option>
                    <option value="3 Months">3 Months — Full Stack AI</option>
                    <option value="6 Months">6 Months — Advanced AI Specialist</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Current Year *</label>
                  <select
                    name="year"
                    required
                    className="w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select year</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                    <option value="Graduate">Graduate</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Why do you want to join? (Optional)</label>
                <div className="relative">
                  <BookOpen className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Tell us about your interest in AI/ML..."
                    className="w-full pl-9 pr-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-blue-600/20"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>

              <p className="text-center text-xs text-slate-400">
                Your details will be sent to our admissions team. We'll contact you within 1–2 business days.
              </p>
            </form>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
