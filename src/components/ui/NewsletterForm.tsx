"use client";

import { useState, FormEvent } from "react";
import { BiSend } from "react-icons/bi";
import type { NewsletterResponse } from "@/types/newsletter";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validation côté client
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Veuillez entrer une adresse email valide");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data: NewsletterResponse = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(data.message || "Inscription réussie !");
        setEmail(""); // Réinitialiser le champ
      } else {
        setStatus("error");
        setMessage(data.error || "Une erreur est survenue");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Erreur de connexion. Veuillez réessayer.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex mb-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Votre email"
          disabled={status === "loading" || status === "success"}
          className="flex-1 bg-white text-black px-4 py-2 rounded-l-sm focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          required
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="bg-gray-800 px-4 py-2 rounded-r-sm hover:bg-terra transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="S'inscrire"
        >
          {status === "loading" ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <BiSend size={20} />
          )}
        </button>
      </form>

      {/* Messages de statut */}
      {message && (
        <p
          className={`text-sm mt-2 ${
            status === "success"
              ? "text-green-400"
              : status === "error"
              ? "text-red-400"
              : "text-gray-400"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
