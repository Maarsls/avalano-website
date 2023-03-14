import React, { useState } from "react";
import { addOrUpdateMailingList } from "../utils/strapiAPI";

function Newsletter() {
  // State to store the email input value
  const [email, setEmail] = useState("");

  // State to store the status of the subscription
  const [status, setStatus] = useState("");

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the email input
    if (!email || !email.includes("@")) {
      setStatus("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      return;
    }
    // Send the email to a fake API endpoint
    addOrUpdateMailingList(email)
      .then((data) => {
        // Update the status based on the response
        if (data.data === "Email already exists") {
          setStatus("Diese E-Mail-Adresse ist bereits registriert.");
        } else if (data.data) {
          setStatus("Vielen Dank für Ihre Anmeldung!");
          setEmail("");
        } else {
          setStatus(
            "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut."
          );
        }
      })
      .catch((err) => {
        // Handle any network errors
        console.error(err);
        setStatus(
          "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut."
        );
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary-background-color">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="mb-4 text-3xl font-bold text-gray-800">
          Avalano Newsletter
        </h1>
        <p className="mb-6 text-gray-600">
          Melden Sie sich an und bleiben Sie über unser Projekt auf dem
          Laufenden.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <label htmlFor="email" className="text-gray-700">
              E-Mail:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              required
              className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring"
          >
            Anmelden
          </button>
          {status && (
            <p
              className={`text-sm ${
                status.startsWith("Vielen Dank")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
