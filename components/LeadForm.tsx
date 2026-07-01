"use client";

import React, { useState } from "react";
import { track } from "@vercel/analytics";

type LeadType = "memory-screen" | "cro-licensing" | "clinical-trial-match" | "affiliate-interest";

interface LeadFormProps {
  leadType: LeadType;
  title: string;
  submitLabel: string;
  includeTrialFields?: boolean;
}

function eventForLeadType(leadType: LeadType) {
  if (leadType === "cro-licensing" || leadType === "clinical-trial-match") return "cro_inquiry_submit";
  if (leadType === "affiliate-interest") return "affiliate_interest_submit";
  return "memory_screen_lead_submit";
}

export default function LeadForm({ leadType, title, submitLabel, includeTrialFields = false }: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ leadType, ...data, path: window.location.pathname }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Submission failed");
      track(eventForLeadType(leadType), { leadType });
      setStatus("success");
      setMessage(result.message || "Received. We will follow up shortly.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Submission failed. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="border-4 border-black rounded-3xl p-8 space-y-5" aria-label={title}>
      <h2 className="text-3xl font-semibold">{title}</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <label className="block">
          <span className="font-semibold">Name</span>
          <input name="name" required className="mt-2 w-full border-2 border-black rounded-xl px-4 py-3 text-black" />
        </label>
        <label className="block">
          <span className="font-semibold">Email</span>
          <input name="email" type="email" required className="mt-2 w-full border-2 border-black rounded-xl px-4 py-3 text-black" />
        </label>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <label className="block">
          <span className="font-semibold">Organization</span>
          <input name="organization" className="mt-2 w-full border-2 border-black rounded-xl px-4 py-3 text-black" />
        </label>
        <label className="block">
          <span className="font-semibold">Role</span>
          <input name="role" className="mt-2 w-full border-2 border-black rounded-xl px-4 py-3 text-black" />
        </label>
      </div>
      {includeTrialFields && (
        <div className="grid md:grid-cols-2 gap-4">
          <label className="block">
            <span className="font-semibold">Trial indication / use case</span>
            <input name="trialUseCase" className="mt-2 w-full border-2 border-black rounded-xl px-4 py-3 text-black" />
          </label>
          <label className="block">
            <span className="font-semibold">Projected participant volume</span>
            <input name="participantVolume" className="mt-2 w-full border-2 border-black rounded-xl px-4 py-3 text-black" />
          </label>
          <label className="block">
            <span className="font-semibold">Countries / sites</span>
            <input name="sites" className="mt-2 w-full border-2 border-black rounded-xl px-4 py-3 text-black" />
          </label>
          <label className="block">
            <span className="font-semibold">Timeline</span>
            <input name="timeline" className="mt-2 w-full border-2 border-black rounded-xl px-4 py-3 text-black" />
          </label>
        </div>
      )}
      <label className="block">
        <span className="font-semibold">What are you trying to accomplish?</span>
        <textarea name="message" rows={5} className="mt-2 w-full border-2 border-black rounded-xl px-4 py-3 text-black" />
      </label>
      {includeTrialFields && (
        <label className="flex items-start gap-3">
          <input name="trialDataConsent" type="checkbox" required className="mt-2 h-5 w-5" />
          <span>I consent to VascuMind using the information I submit to evaluate whether a clinical-trial or CRO partner follow-up may be appropriate. I understand VascuMind will not share identifiable information with a trial sponsor or CRO without additional explicit consent.</span>
        </label>
      )}
      <label className="flex items-start gap-3">
        <input name="consent" type="checkbox" required className="mt-2 h-5 w-5" />
        <span>I understand this website is educational only and does not provide medical advice or clinical guidance. I consent to being contacted about this request.</span>
      </label>
      <button type="submit" disabled={status === "submitting"} className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold border border-black hover:bg-white hover:text-black disabled:opacity-70">
        {status === "submitting" ? "Submitting..." : submitLabel}
      </button>
      {message && <p className="font-semibold" role="status">{message}</p>}
    </form>
  );
}
