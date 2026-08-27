import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <div className="page">
      {/* Nav */}
      <nav className="nav">
        <span className="logo">STUDIO</span>
        <div className="nav-links">
          <a href="#work" className="nav-link">Work</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#contact" className="nav-link active">Contact</a>
        </div>
      </nav>
      <div className="nav-divider" />

      {/* Header */}
      <div className="header">
        <div className="header-left">
          <div className="eyebrow">05 — CONTACT</div>
          <h1 className="heading">Get in touch.</h1>
        </div>
        <div className="header-right">
          <p className="header-note">
            We respond to all enquiries within one business day. For urgent
            matters, call directly.
          </p>
        </div>
      </div>
      <div className="divider" />

      {/* Main content */}
      <div className="content">
        {/* Left column: form */}
        <form className="form-column" onSubmit={handleSubmit}>
          <div className="row">
            <div className="field">
              <label className="label">FULL NAME</label>
              <input
                type="text"
                placeholder="Alex Morgan"
                value={form.name}
                onChange={handleChange("name")}
                className="input"
              />
            </div>
            <div className="field">
              <label className="label">EMAIL ADDRESS</label>
              <input
                type="email"
                placeholder="alex@company.co"
                value={form.email}
                onChange={handleChange("email")}
                className="input"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">SUBJECT</label>
            <select
              value={form.subject}
              onChange={handleChange("subject")}
              className="input select"
            >
              <option value="" disabled>
                Select a topic...
              </option>
              <option value="general">General enquiry</option>
              <option value="project">New project</option>
              <option value="partnership">Partnership</option>
              <option value="support">Support</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="field">
            <label className="label">MESSAGE</label>
            <textarea
              placeholder="Tell us about your project, timeline, and goals..."
              value={form.message}
              onChange={handleChange("message")}
              rows={7}
              className="input textarea"
            />
          </div>

          <div className="form-footer">
            <span className="form-note">
              All fields required. We never share your data.
            </span>
            <button type="submit" className="submit-button">
              SEND MESSAGE →
            </button>
          </div>
        </form>

        {/* Vertical divider */}
        <div className="vertical-divider" />

        {/* Right column: info */}
        <div className="info-column">
          <div className="info-block">
            <div className="info-label">OFFICE</div>
            <div className="info-text">
              24 Bleecker Street, Floor 3
              <br />
              New York, NY 10012
              <br />
              United States
            </div>
          </div>

          <div className="info-block">
            <div className="info-label">HOURS</div>
            <div className="info-text">
              Monday – Friday
              <br />
              9:00 AM – 6:00 PM EST
            </div>
          </div>

          <div className="info-block">
            <div className="info-label">DIRECT</div>
            <div className="info-text">
              +1 (212) 555-0194
              <br />
              hello@studiomake.co
            </div>
          </div>

          <div className="thin-divider" />

          <div className="info-block">
            <div className="info-label">FOLLOW</div>
            <div className="follow-row">
              <span className="follow-name">Instagram</span>
              <span className="follow-handle">@studiomake</span>
            </div>
            <div className="follow-row">
              <span className="follow-name">LinkedIn</span>
              <span className="follow-handle">Studio Make</span>
            </div>
            <div className="follow-row">
              <span className="follow-name">Dribbble</span>
              <span className="follow-handle">studiomake</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer-divider" />
      <div className="footer">
        <span className="footer-text">© 2026 Studio Make. All rights reserved.</span>
        <div className="footer-links">
          <a href="#privacy" className="footer-link">Privacy Policy</a>
          <span className="footer-dot">·</span>
          <a href="#terms" className="footer-link">Terms</a>
        </div>
      </div>
    </div>
  );
}
