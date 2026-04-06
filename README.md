# Alex Baggio — Portfolio

A clean, modern personal portfolio built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**.

## Design

- Dark, editorial aesthetic with Cormorant Garamond (display) + DM Sans (body)
- Warm accent color (`#E8D5B0`) for an elegant, non-generic feel
- Grain texture overlay for depth
- Smooth animations and hover interactions

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with font imports
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles + Tailwind
└── components/
    ├── Navbar.tsx        # Fixed nav with scroll blur effect
    ├── Hero.tsx          # Full-screen hero section
    ├── Projects.tsx      # Project cards grid
    ├── Skills.tsx        # Skill groups
    ├── Contact.tsx       # Contact links
    └── Footer.tsx        # Footer
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Projects
Edit the `projects` array in `src/components/Projects.tsx`

### Update Skills
Edit the `skillGroups` array in `src/components/Skills.tsx`

### Update Contact Info
Edit email and links in `src/components/Contact.tsx`

### Update GitHub link
In `src/components/Contact.tsx`, replace `github.com/alexbaggio` with your actual GitHub URL.

## Build for Production

```bash
npm run build
npm start
```

## Deploy

Easiest deployment: push to GitHub and connect to [Vercel](https://vercel.com). Zero config needed for Next.js.
