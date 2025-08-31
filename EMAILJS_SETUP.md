# EmailJS Setup Instructions

## Quick Setup

To enable the contact form to send emails to your email address, follow these steps:

## Step 1: Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month for free)

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection instructions for your provider
5. Note down your **Service ID** (looks like: `service_xxxxx`)

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Set up your template with these variables:
   - **To Email**: Your email address (where you want to receive messages)
   - **From Name**: `{{user_name}}`
   - **Reply To**: `{{user_email}}`
   - **Subject**: `New Portfolio Contact from {{user_name}}`
   - **Content**: 
   ```
   You have received a new message from your portfolio website:
   
   Name: {{user_name}}
   Email: {{user_email}}
   
   Message:
   {{message}}
   ```
4. Save the template
5. Note down your **Template ID** (looks like: `template_xxxxx`)

## Step 4: Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (looks like: `xxxxx-xxxxx-xxxxx`)

## Step 5: Update Your Code
In `src/App.tsx`, find the ContactSection and replace the placeholder values:

```javascript
// Replace these with your actual EmailJS credentials
emailjs.init("YOUR_PUBLIC_KEY") // Line ~1037

const result = await emailjs.sendForm(
  'YOUR_SERVICE_ID',  // Line ~1040 - Replace with your service ID
  'YOUR_TEMPLATE_ID',  // Line ~1041 - Replace with your template ID
  formRef.current!,
  'YOUR_PUBLIC_KEY'    // Line ~1043 - Replace with your public key
)
```

## Step 6: Test
1. Run your app: `npm run dev`
2. Fill out the contact form
3. Submit and check your email

## Security Note
- The public key is safe to expose in frontend code
- Never expose your EmailJS private key
- Consider using environment variables for better organization:
  ```javascript
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  ```

## Troubleshooting
- Make sure your email service is active (green status in EmailJS dashboard)
- Check that template variables match form field names (`user_name`, `user_email`, `message`)
- Verify you're under your monthly email limit
- Check browser console for any errors