# Beaver and Weaver – BIM / CAD Engineering Services page (reference edition)

A one-page Next.js site whose layout and styling follow the reference page
<https://www.advenser.com/engineering-services/>, filled with Beaver and Weaver's own logo, drawings and content.
No text, images or logos from the reference are used, only its layout and style values.

## Run

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` and the SMTP values so quote requests are emailed.

## What matches the reference

| Element | Values taken from the reference |
| --- | --- |
| Type | Open Sans (body 14px/23.8px, #404040), Lato bold for the top links, Roboto in the popup |
| Top bar | Fixed, 110px black-to-transparent gradient, 13px white links |
| Nav bar | Fixed white 46px bar at 30px, 15px/600 #6d6d6d links with cog icons |
| Hero | 531px banner, 40px/700 uppercase two-line heading, 15px text, orange gradient "Let's Connect" button |
| Floating button | "Get a Quote", Arial 18px, 136° #fe9a00→#fe3100 gradient, fixed on the right |
| Bottom strip | Fixed 10px strip: blue #027bca, orange #f68221, grey #706f73 |
| Core Services | 31px/800 heading with a 3px tri-colour rule; 3 cards per row (29.67% + 5.5% gutter), shadow 0 2px 18px rgba(0,0,0,.3), blue #027bca 7px-radius title, grey #efefef description band, #efefef→#d1d1d1 list buttons |
| Consultancy grid | #ededed section, 26px heading, 4 white cards (22.75% + 3% gutter), image with blue diagonal band, 16px/600 #0c71c3 titles, justified text |
| Split CTA | #0579bd and #e63c22 halves, 28px text, 20px outlined buttons |
| Footer | Dark image background, orange #ff5615 uppercase 18px headings, hexagon bullets, #1f1f1f copyright bar |
| Popup | 400px white modal, 32px title, 40px inputs, #fe6a00 pill "Send" button, dark round close button |
| Breakpoints | 980 / 767 / 479px (Divi) |

## Files

| What | Where |
| --- | --- |
| Company details | `lib/site.ts` |
| Core service cards | `lib/services.ts` |
| Hero, intro, consultancy cards, footer columns | `lib/content.ts` |
| All styles | `app/globals.css` |
| Quote popup | `components/QuoteModal.tsx` (posts to `app/api/enquiry/route.ts`) |

## Before launch

- [ ] Confirm the domain and business email (placeholder `enquiries@bwense.com`)
- [ ] Add phone number and company number in `lib/site.ts` if they should appear
- [ ] Configure SMTP so the popup form delivers email
- [ ] Hosting note: serverless hosts limit uploads (Vercel about 4.5 MB); see `lib/enquiry.ts`
