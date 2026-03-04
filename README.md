# MtA Character Project

A personal project in order to allow users to quickly make and manage character sheets for characters from the TTRPG Mage: The Awakening

Dev steps for Windows PowerShell:

```powershell
# install dependencies
npm install

# start dev server
npm run dev

# build for production
npm run build

# preview production build
npm run preview
```

Backend setup

This project uses Supabase (Auth + Postgres) for backend services. Full setup instructions are in `docs/SUPABASE_SETUP.md` (run `db/init.sql` in the Supabase SQL editor and add the VITE_ env vars locally or in your host).

Notes

- Routes included in the scaffold: `/login`, `/dashboard`, `/sheet/:id`.
- The `TabbedSheet` component currently autosaves to `localStorage` for prototyping; it will be replaced with Supabase-backed CRUD soon.
- Do not commit secret keys. Use the provided `.env.example` as a template and store real values in environment variables.