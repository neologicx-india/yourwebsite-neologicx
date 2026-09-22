# Neologicx Micro Website

This is a micro website for **Neologicx**, a digital engineering and marketing agency dedicated to helping Indian businesses grow online. Built with a modern tech stack to ensure high performance, responsiveness, and a premium user experience.

## 🚀 Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

## ✨ Key Features

- **Modern Glassmorphism UI**: Beautiful transparent overlays with blur effects.
- **Fully Responsive**: Optimized for Mobile, Tablet, and Desktop displays.
- **Dynamic Scroll-Spy Navigation**: The top Navbar dynamically highlights the active section as the user scrolls.
- **Sticky Sidebar**: The Terms & Conditions page features a sticky Table of Contents that tracks with the content.
- **Performance Optimized**: Built on Next.js App Router for optimal Server-Side Rendering (SSR) and fast load times.

## 💻 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## 📂 Project Structure

- `app/` - Contains all routes and layouts (App Router).
  - `page.tsx` - The main landing page.
  - `layout.tsx` - Global layout including the Footer.
  - `terms-and-conditions/` - The Terms & Conditions page route.
- `components/` - Reusable UI components.
  - `Navbar.tsx` - The responsive, dynamic top navigation bar.
- `public/` - Static assets like images and icons.

## 🌐 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
