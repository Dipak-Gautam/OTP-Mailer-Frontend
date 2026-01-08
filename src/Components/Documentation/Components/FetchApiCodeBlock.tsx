import React, { useState } from "react";

const FetchApiCodeBlock = () => {
  const code = `fetch("http://localhost:3000/email/otp", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    email: "anjangautam095@gmail.com",
    otpDigit: 6,
    secretCode: "YOUR_SECRET_CODE_HERE"
  })
})
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log("Success:", data);
  })
  .catch(error => {
    console.error("Error:", error);
  });`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div>
      <div className="relative bg-gray-900 text-white p-4 rounded-xl shadow-md my-4 overflow-x-auto max-w-full">
        <div className="flex justify-end items-center mb-2 ">
          <button
            onClick={handleCopy}
            className="text-sm bg-blue-600 hover:bg-blue-700 transition-colors px-3 py-1 rounded-md"
          >
            {copied ? "Copied!" : "Copy Code"}
          </button>
        </div>
        <pre className="text-sm whitespace-pre-wrap break-words">
          <code className="break-all">{code}</code>
        </pre>
      </div>
      <p className="font-medium text-xs md:text-base">
        ⚠️ Note: Replace{" "}
        <code className="font-bold">YOUR_SECRET_CODE_HERE</code> with your
        actual secret code from the <strong>Account & API</strong> section.
      </p>
    </div>
  );
};

export default FetchApiCodeBlock;
