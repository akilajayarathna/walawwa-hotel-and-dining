# Walawwa Hotel & Dining

A premium, fully responsive website for a fictional Kandyan heritage hotel and restaurant in Kandy, Sri Lanka.

**Live website:** https://walawwa-hotel-and-dining.vercel.app/
**Repository:** https://github.com/akilajayarathna/walawwa-hotel-and-dining

## Concept

Walawwa is a boutique hotel inspired by the traditional Kandyan manor house (walawwa). The goal was to keep the identity traditional while keeping the layout and interactions modern: heritage appears in the colours, ornaments, imagery and wording, while the structure stays clean, spacious and easy to use.

## Design

- **Palette:** taken from Kandyan painted temple ceilings: deep ink green, ivory, ochre gold and crimson.
- **Typography:** Cormorant Garamond for headings and Inter for body text, loaded with `next/font`.
- **Ornaments:** a gold Kandyan floral garland on the section edges, arch-shaped image frames, and thin gold dividers under headings.
- **Layout rhythm:** sections alternate between ivory and dark backgrounds, with generous spacing.

## Pages

1. **Home:** hero with a slow Ken Burns zoom, a heritage introduction that slides over the hero, featured rooms, a dining highlight, an experiences preview, and a rotating guest-review section.
2. **Rooms:** all rooms, an "included in every stay" strip and a booking call to action.
3. **Room details** (`/rooms/[slug]`): a dynamic page for each room with facts, features, a gallery, a sticky price card and related rooms.
4. **Dining:** restaurant story, opening hours, a menu with category tabs, and a table reservation form.
5. **Experience:** alternating rows for tea plantation visits, cooking classes, Kandyan dance evenings and more.
6. **Contact & Booking:** a room booking form with validation and an estimated total, and the hotel's contact details.

## Features

- Fully responsive for mobile, tablet and desktop, with a slide-in mobile menu
- Navbar that is transparent over the hero and turns solid on scroll, with active link highlighting
- Scroll-reveal animations, staggered card entrances, hover scaling and image zoom
- Room booking form with date validation, room pre-selection from the room page, and a night-by-night estimated total
- Separate table reservation form with time slots grouped by lunch and dinner
- Reusable components and data-driven pages: rooms, menu and experiences are each defined in one data file
- Per-page metadata for titles and descriptions
- Optimised images with `next/image` and WebP, with lazy loading except for above-the-fold images

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router, JavaScript)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) (Button, Card, Sheet, Tabs, Input, Textarea, Label)
- [Framer Motion](https://www.framer.com/motion/)
- [lucide-react](https://lucide.dev/) icons
- Deployed on [Vercel](https://vercel.com/)


## Run Locally

```bash
git clone [your repository URL]
cd [project folder]
npm install
npm run dev
```

Open http://localhost:3000. To test the production build:

```bash
npm run build
npm start
```

## Notes

- This is a front-end project, so there is no backend. The booking and reservation forms validate input and show a confirmation screen, but they do not send data anywhere.
- The hotel, its address, phone number, email, prices and guest reviews are fictional and written for demonstration.
- Most photographs were generated with AI for demonstration purposes only.
