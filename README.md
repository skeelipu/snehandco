# Sneh & Co — Waitlist Website

**Made for everyday moments.**
A coming-soon / waitlist page for Sneh & Co, an everyday Indian clothing brand launching Jul–Aug 2026.

---

## What this is

A single-file static website (`snehandco_final.html`) that serves as the brand's pre-launch presence. No framework, no build step, no dependencies beyond Google Fonts. Download the file, swap in two config values, and deploy.

**What it does:**
- Shows the full launch collection (banner image + 5 product cards)
- Captures waitlist emails via Brevo (formerly Sendinblue)
- Displays a live countdown to the launch date
- Shows a running waitlist count

---

## File structure

```
snehandco_final.html    # The entire website — HTML, CSS, JS, and images in one file
README.md               # This file
```

All product images and the logo are base64-embedded directly in the HTML. No external image hosting required.

---

## Setup before deploying

Open `snehandco_final.html` in any text editor and find the config block near the bottom of the file (inside the `<script>` tag):

```js
const BREVO_API_KEY = 'YOUR_BREVO_API_KEY_HERE';
const BREVO_LIST_ID = 3;
```

Replace these two values:

| Variable | What to put |
|---|---|
| `BREVO_API_KEY` | Your Brevo API key (see below) |
| `BREVO_LIST_ID` | The numeric ID of your Brevo contact list |

Also check and update:

```js
const launchDate = new Date('2026-07-15T00:00:00+05:30');
```

Change `2026-07-15` to your confirmed launch date. The countdown on the site is live and calculated from this value.

And in the footer:

```html
<a href="https://instagram.com/snehandco" ...>Instagram</a>
<a href="mailto:hello@snehandco.com">Contact</a>
```

Update the Instagram handle and contact email to your actual ones.

---

## Setting up Brevo (free email backend)

Brevo's free tier supports unlimited contacts and 300 emails/day — enough for a waitlist.

1. Sign up at [brevo.com](https://brevo.com) (free, no credit card)
2. Go to **Settings → API Keys → Generate a new API key** — copy it
3. Go to **Contacts → Lists → Create a list** named "Sneh & Co Waitlist" — note the list ID shown next to it
4. Paste both values into the config block above

Every signup will appear in your Brevo contact list, tagged with the form source (`hero` or `footer`) and the date signed up. You can export to CSV anytime, or connect to Razorpay/Mailchimp later.

---

## Deployment

The site is a single HTML file. Three zero-cost options:

### GitHub Pages
1. Create a GitHub repo named `snehandco`
2. Rename the file to `index.html` (required by GitHub Pages)
3. Upload to the repo
4. Go to **Settings → Pages → Source → Deploy from branch → main → / (root)**
5. Live at `yourusername.github.io/snehandco` within ~2 minutes
6. Custom domain: add it in Pages settings, then add a `CNAME` record at your registrar pointing to `yourusername.github.io`

---

## Brand reference

| Element | Value |
|---|---|
| Brand name | Sneh & Co |
| Tagline | Made for everyday moments |
| Launch window | July – August 2026 |
| Starting price | ₹2,799 |
| Fabric | SnehWeave — 50% banana fiber, 50% cotton |
| Fabric weight | 155 GSM |
| Launch colourways | Mitti Beige, Charcoal Black |
| Launch silhouettes | Root Tie-Back Shirt (Women), Root Kurta-Shirt (Men) |
| City | Bengaluru, India |

**Colour palette:**

| Name | Hex |
|---|---|
| Ink | `#1A1916` |
| Mitti Beige | `#E6D9C8` |
| Mitti Mid | `#C8B69E` |
| Dust | `#8C7B6B` |
| Paper | `#F8F4EE` |
| Charcoal | `#2A2825` |

**Typography:**
- Display / headings: Cormorant Garamond (Google Fonts) — Light 300, italic variant
- Body / UI: DM Sans (Google Fonts) — Light 300, Regular 400, Medium 500

---

## Updating the waitlist count

The count shown on the site (`247+` by default) is a seed number in the JS. Update it periodically to reflect actual signups:

```js
let waitlistCount = 247;  // ← update this to your real count
```

Once Brevo is connected, you can pull the real count from Brevo's API and replace this with a live fetch if needed.

---

## What's not included

- **Payment / checkout** — intentional. This is a waitlist-only page. Razorpay integration comes at launch.
- **CMS** — all content is hardcoded. Edit the HTML directly to update copy or images.
- **Analytics** — add Google Analytics or Plausible by pasting their script tag before `</body>`.
- **Men's product page** — currently both men's shirts link to the waitlist. Separate PDPs come at launch.

---

## Contact

hello@snehandco.com
[instagram.com/snehandco](https://instagram.com/snehandco)
