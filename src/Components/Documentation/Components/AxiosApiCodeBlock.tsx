import React, { useState } from "react";

const AxiosApiCodeBlock = () => {
  const code = `import axios from "axios";

axios.post("http://localhost:3000/email/otp", {
  email: "anjangautam095@gmail.com",
  otpDigit: 6,
  secretCode: "YOUR_SECRET_CODE_HERE"
})
.then(response => {
  console.log("Success:", response.data);
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
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold text-white">Axios API Code</h2>
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
      <p className="font-medium">
        ⚠️ Note: Replace{" "}
        <code className="font-bold">YOUR_SECRET_CODE_HERE</code> with your
        actual secret code from the <strong>Account & API</strong> section.
      </p>
    </div>
  );
};

export default AxiosApiCodeBlock;
