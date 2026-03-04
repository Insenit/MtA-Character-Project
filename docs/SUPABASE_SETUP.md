# Supabase Setup — Detailed Guide

This document contains the detailed steps to create and configure a Supabase project for this app. The README contains a short pointer — keep this file for reference when creating the project, running the SQL, and configuring deployment.

1) Create a Supabase project

- Go to https://app.supabase.com and sign in or create an account.
- Create a new project (free tier is sufficient for development). Note the Project URL and the anon public key (Project Settings → API).

2) Create the `sheets` table and RLS policies

- Open the SQL Editor in the Supabase dashboard and run the SQL in `db/init.sql` (this repository includes that file). That script:
  - creates `public.sheets` (id, owner, title, tabs jsonb, created_at, updated_at),
  - adds an `updated_at` trigger,
  - enables Row Level Security (RLS), and
  - creates policies so authenticated users can only insert/select/update/delete their own sheets (owner = auth.uid()).

Why RLS? It enforces at the database level that users only access their own rows instead of relying on client-side checks. This is the recommended pattern with Supabase.

3) Local environment variables

- Copy `.env.example` to `.env.local` (or `.env`) in the project root and fill the values with your Supabase Project URL and anon public key:

```text
VITE_SUPABASE_URL="https://your-project-ref.supabase.co"
VITE_SUPABASE_ANON_KEY="your-anon-public-key"
```

- Restart the Vite dev server after setting env vars so Vite picks them up.

4) Using the Supabase client in the app

- This project includes `src/lib/supabaseClient.js`, which reads `import.meta.env.VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` and exports a `supabase` client.
- Use `supabase.auth` for signup/signin and `supabase.from('sheets').select(...)` / `insert()` / `update()` / `delete()` for CRUD operations.

5) Deploying (Vercel / Netlify / Cloudflare Pages)

- In your host (Vercel/Netlify/Cloudflare) create environment variables with the same names (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`) and values from the Supabase dashboard.
- Redeploy after adding the env variables.

6) Troubleshooting tips

- Missing env vars: if `supabase` client complains or the console logs the warning in `src/lib/supabaseClient.js`, verify the host has the correct VITE_ vars configured and that they are visible to the build process (Vite inlines VITE_ vars at build time).
- RLS denies access: check the policies in the Supabase Table Editor and ensure the user is authenticated; use the Supabase SQL editor to `select auth.uid()` to verify session behavior.
- CORS/Networking: Supabase clients use direct API endpoints (no special CORS steps normally required). If you run into network authorization issues check the project settings and keys.

7) Next steps after setup (recommended)

- Implement signup/login flows in `src/pages/Login.jsx` using `supabase.auth.signUp()` / `supabase.auth.signInWithPassword()`.
- Add an `AuthContext` in the frontend to track the session and current user.
- Replace localStorage-based sheet storage with `supabase.from('sheets')` CRUD operations and add optimistic UI + autosave.

8) Security reminders

- Never commit the anon key if it is intended for private use. The anon key is public-facing by design but should still be treated carefully. Use server-side secrets (service_role) only in backend environments and never in the client.
- Rotate keys in the Supabase dashboard if you suspect they were exposed.

If you want, I can walk you through creating a Supabase project step-by-step while you do it (I can provide the exact SQL to paste, the env var values to set locally, and then wire the client code). Let me know if you want that guided setup next.
