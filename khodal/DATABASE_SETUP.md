# Database Setup Guide for Khodal Website

## Why Supabase?
- **Free Tier**: 500MB database, 1GB file storage, 2GB bandwidth
- **PostgreSQL**: Powerful, reliable, and feature-rich
- **Real-time**: Built-in real-time subscriptions
- **Easy to Use**: Simple setup with great documentation
- **Secure**: Built-in authentication and Row Level Security

## Step-by-Step Setup Instructions

### 1. Create Supabase Account

1. Go to [https://supabase.com](https://supabase.com)
2. Click "Start your project" or "Sign Up"
3. Sign up with GitHub, Google, or email
4. Verify your email if required

### 2. Create a New Project

1. After logging in, click "New Project"
2. Fill in the details:
   - **Name**: `khodal-website` (or any name you prefer)
   - **Database Password**: Create a strong password (SAVE THIS!)
   - **Region**: Choose closest to your location (e.g., Mumbai for India)
   - **Pricing Plan**: Select "Free" tier
3. Click "Create new project"
4. Wait 1-2 minutes for the project to be set up

### 3. Get Your API Keys

1. Once the project is ready, go to **Settings** (gear icon on the left sidebar)
2. Click on **API** in the settings menu
3. You'll see:
   - **Project URL**: Copy this (looks like: `https://xxxxx.supabase.co`)
   - **anon public key**: Copy this (long string starting with `eyJ...`)

### 4. Set Up Environment Variables

1. In your project root folder, create a file named `.env.local`
2. Add the following lines (replace with your actual values):

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

3. Save the file
4. **IMPORTANT**: Never commit `.env.local` to Git (it's already in .gitignore)

### 5. Create Database Tables

1. In Supabase dashboard, click on **SQL Editor** (on the left sidebar)
2. Click "New query"
3. Copy the entire content from `database/schema.sql` file
4. Paste it into the SQL editor
5. Click "Run" or press Ctrl/Cmd + Enter
6. You should see "Success. No rows returned" message

### 6. Verify Tables Created

1. Click on **Table Editor** (on the left sidebar)
2. You should see three tables:
   - `contact_submissions`
   - `newsletter_subscriptions`
   - `project_inquiries`

### 7. Install Dependencies

In your terminal, run:

```bash
npm install
# or
yarn install
```

This will install `@supabase/supabase-js` package.

### 8. Test the Setup

1. Start your development server:
```bash
npm run dev
```

2. Go to `http://localhost:3000/contact`
3. Fill out the contact form
4. Submit the form
5. Go back to Supabase → Table Editor → contact_submissions
6. You should see your submission!

## Viewing Submissions

### In Supabase Dashboard:
1. Go to **Table Editor**
2. Click on `contact_submissions`
3. You can see all submissions with columns:
   - id, name, email, phone, service, message, status, created_at, updated_at

### Filter and Search:
- Use the search bar at the top to find specific submissions
- Click on column headers to sort
- Use filters to find submissions by status, date, etc.

## Database Schema Overview

### contact_submissions
Stores all contact form submissions from the website.

**Columns:**
- `id` (UUID): Unique identifier
- `name` (VARCHAR): Contact person's name
- `email` (VARCHAR): Email address
- `phone` (VARCHAR): Phone number (optional)
- `service` (VARCHAR): Service they're interested in
- `message` (TEXT): Their message
- `status` (VARCHAR): Status of inquiry (new, contacted, closed)
- `created_at` (TIMESTAMP): When submitted
- `updated_at` (TIMESTAMP): Last updated

### newsletter_subscriptions
For newsletter signups (if you add this feature later).

**Columns:**
- `id` (UUID): Unique identifier
- `email` (VARCHAR): Subscriber email
- `subscribed_at` (TIMESTAMP): When subscribed
- `is_active` (BOOLEAN): Whether subscription is active

### project_inquiries
For detailed project inquiry forms (if you add this feature).

**Columns:**
- `id` (UUID): Unique identifier
- `company_name` (VARCHAR): Company name
- `contact_person` (VARCHAR): Contact person
- `email` (VARCHAR): Email address
- `phone` (VARCHAR): Phone number
- `project_type` (VARCHAR): Type of project
- `budget_range` (VARCHAR): Budget range
- `timeline` (VARCHAR): Project timeline
- `description` (TEXT): Project description
- `status` (VARCHAR): Inquiry status
- `created_at` (TIMESTAMP): When submitted

## Security Features

### Row Level Security (RLS)
- Enabled on all tables
- Public can only INSERT (submit forms)
- Only authenticated users (you) can view/edit data
- Prevents unauthorized access

### Data Validation
- Email format validation
- Required field checks
- SQL injection prevention (handled by Supabase)

## Managing Data

### Updating Status:
1. Go to Table Editor
2. Click on a row
3. Change the `status` field
4. Click outside to save

### Exporting Data:
1. Click the "..." menu on any table
2. Select "Download as CSV"
3. Opens in Excel/Sheets

### Deleting Data:
1. Select rows using checkboxes
2. Click "Delete" button
3. Confirm deletion

## Costs and Limits

### Free Tier Includes:
- 500MB database space
- Unlimited API requests
- Up to 50,000 monthly active users
- 1GB file storage
- 2GB bandwidth

### When to Upgrade:
- If you exceed 500MB database
- Need more than 2GB bandwidth/month
- Want automated backups
- Need priority support

**Monthly Cost (Pro Plan)**: $25/month
- 8GB database
- 100GB bandwidth
- Daily backups
- Email support

## Troubleshooting

### Error: "Missing Supabase environment variables"
- Check that `.env.local` exists in project root
- Verify the variable names are correct
- Restart the dev server after adding env variables

### Error: "Failed to submit form"
- Check internet connection
- Verify Supabase project is active
- Check browser console for detailed error
- Ensure API keys are correct in `.env.local`

### Can't see data in Supabase:
- Wait a few seconds and refresh
- Check you're looking at the correct table
- Verify the form submission was successful

### Permission errors:
- Check RLS policies are created correctly
- Ensure you ran the entire schema.sql script
- Try re-running the SQL schema

## Next Steps

### Additional Features to Add:

1. **Email Notifications:**
   - Set up email sending when form is submitted
   - Use Supabase Edge Functions + Resend/SendGrid

2. **Admin Dashboard:**
   - Create an admin page to view submissions
   - Add authentication for admin access
   - Implement status updates

3. **Analytics:**
   - Track form submission rates
   - Monitor popular services
   - View conversion metrics

4. **Newsletter Integration:**
   - Add newsletter signup form
   - Use newsletter_subscriptions table
   - Integrate with email service

## Support

- **Supabase Docs**: https://supabase.com/docs
- **Community**: https://github.com/supabase/supabase/discussions
- **Discord**: https://discord.supabase.com

## Security Best Practices

1. **Never commit `.env.local`** to version control
2. **Rotate keys** if accidentally exposed
3. **Use strong database passwords**
4. **Enable 2FA** on your Supabase account
5. **Regular backups** (automated in Pro plan)
6. **Monitor usage** in Supabase dashboard

---

**Your database is now set up and ready to use!** 🎉

All contact form submissions will be automatically saved to your Supabase database.