# CALL2TRAIN LTD Web App

Production-ready Next.js 14 App Router website for healthcare training bookings and admin management.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- ShadCN-style reusable UI components
- MongoDB + Mongoose
- React Hook Form + Zod
- Server Actions

## Features

- Conversion-focused landing page with structured trust and CTA sections
- Real healthcare training content for Leicester audience
- WhatsApp-first booking handoff after form submission
- Duplicate booking prevention (same phone + date)
- Admin dashboard with password login and booking status updates
- Footer policy links (privacy and cookies)
- SEO metadata and server components where appropriate

## Environment Variables

Copy `.env.example` to `.env.local` and set values:

```bash
MONGODB_URI=your-mongodb-connection-string
ADMIN_PASSWORD=your-admin-password
```

## Run Locally

```bash
npm install
npm run dev
```

App routes:

- `/` landing page
- `/training` training overview
- `/book` booking form
- `/admin` admin dashboard
- `/privacy-policy` policy page
- `/cookies` policy page

## Project Structure

```
app/
	page.tsx
	training/page.tsx
	book/page.tsx
	admin/page.tsx
components/
	hero-section.tsx
	training-overview.tsx
	what-you-learn.tsx
	who-its-for.tsx
	why-choose-us.tsx
	about-section.tsx
	testimonials-section.tsx
	pricing-section.tsx
	final-cta-section.tsx
	whatsapp-button.tsx
	booking-form.tsx
	navbar.tsx
	footer.tsx
	testimonial-card.tsx
	training-card.tsx
	floating-whatsapp.tsx
	admin-login-form.tsx
	admin-bookings-table.tsx
	admin-logout-button.tsx
	ui/
actions/
	booking.ts
	admin.ts
lib/
	mongodb.ts
	constants.ts
	validations.ts
	types.ts
	models/Booking.ts
```

## Build

```bash
npm run build
npm start
```
