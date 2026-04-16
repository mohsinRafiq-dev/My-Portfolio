# EmailJS Setup Guide

Follow these steps to enable email functionality on your contact form:

## Step 1: Create EmailJS Account
1. Visit [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **Sign Up** and create a free account
3. Verify your email

## Step 2: Get Your Public Key
1. Go to **Account** → **API Keys** in the dashboard
2. Copy your **Public Key**
3. Add it to `.env.local`:
   ```
   VITE_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY
   ```

## Step 3: Create Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add Email Service**
3. Choose **Gmail** (or your preferred provider)
4. Select **Connect Gmail** and authorize
5. Save your **Service ID** (e.g., `service_xxxxx`)
6. Add to `.env.local`:
   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxx
   ```

## Step 4: Create Email Template
1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use the following settings:
   - **Name**: Portfolio Contact Form
   - **Content**:

```
Subject: {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}
```

4. Save and note your **Template ID** (e.g., `template_xxxxx`)
5. Add to `.env.local`:
   ```
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
   ```

## Step 5: Configure Contact Email
1. In `.env.local`, add the email where you want to receive messages:
   ```
   VITE_CONTACT_EMAIL=your-email@gmail.com
   ```

## Final .env.local Configuration
Your `.env.local` should look like:
```
VITE_EMAILJS_PUBLIC_KEY=abc123xyz...
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_CONTACT_EMAIL=your-email@gmail.com
```

## Step 6: Test
1. Start your development server: `npm run dev`
2. Navigate to the contact form
3. Fill in all fields and click "Send Message"
4. Check your inbox for the test email
5. You should see "Message sent successfully!" on the form

## Features Implemented
✅ Form validation (all fields required)
✅ Email format validation
✅ Loading state with animation
✅ Success message with 3-second auto-clear
✅ Error handling with user-friendly messages
✅ Field clearing after successful submission
✅ Disabled button state during submission

## Troubleshooting

**"Failed to send message" error:**
- Verify all credentials in `.env.local` are correct
- Check that your email service is connected in EmailJS
- Ensure template variables match: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`

**Not receiving emails:**
- Check spam/junk folder
- Verify `VITE_CONTACT_EMAIL` in `.env.local` matches where you want emails sent
- Test sending from EmailJS dashboard directly

**Environment variables not loading:**
- Restart dev server after updating `.env.local`
- Variables only load on server restart
