OTP Mailer
A React + TypeScript + Vite web application for sending OTPs via email with a simple API call.

Features
Send OTPs to verify user emails easily.

Choose from the provided email template or use your own custom template.

Fast, lightweight, and developer-friendly.

Tech Stack
Frontend: React.js, TypeScript

Build Tool: Vite

Getting Started
Prerequisites
Node.js (>= 16)

npm or yarn

Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/otp-mailer.git
cd otp-mailer
Install dependencies:

bash
Copy code
npm install
# or
yarn
Running the Application
Start the development server:

bash
Copy code
npm run dev
# or
yarn dev
The app will be available at http://localhost:5173.

Build for Production
bash
Copy code
npm run build
# or
yarn build
Usage
You can send OTPs with a simple API call:

http
Copy code
POST /api/send-otp
Content-Type: application/json

{
  "email": "user@example.com",
  "template": "default", // or "custom"
  "otp": "123456"
}
email — The recipient's email address.

template — (optional) Choose between the default template or provide your own custom HTML template.

otp — The OTP code to be sent.

Custom Email Template
To use your own template:

Provide your HTML in the API call payload.

Include the placeholder {{otp}} where you want the OTP to appear.
