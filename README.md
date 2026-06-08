# soniayogi

The website for **soniayogi** — fun, flow and transformative yoga with Sonia, a 500-hour Yoga Alliance certified teacher in Chiswick (W4), West London, and online. Weekly hybrid classes, daily morning meditation, private and corporate sessions, and an annual Portugal retreat.

A fast, dependency-free static site — just HTML and CSS. No build step.

## Pages

| File | Page |
|------|------|
| `index.html` | Home — hero, weekly schedule, classes, meditation, retreat, about, areas served, FAQ |
| `classes-bookings.html` | Classes & Bookings — Yang & Yin, Yogasana, Morning Meditations, Private Sessions, Corporate + annual retreat |
| `about-testimonials.html` | About Sonia (500-hr cert) + the 8 Limbs philosophy + testimonials |
| `contact-us.html` | Contact info + Instagram + enquiry form |
| `assets/haven.css` | Shared design system (white canvas, dark hairlines, green-heart brand) |
| `assets/site.js` | Mobile nav + scroll reveals |
| `sitemap.xml`, `robots.txt` | Search-engine helpers |
| `CNAME` | Custom domain for GitHub Pages — set to `soniayogi.com` |

Primary address: **https://soniayogi.com** (the bare domain). `www.soniayogi.com` will redirect to it.

---

## PART A — Put the site on GitHub

### A1. Create the repository
1. Sign in at https://github.com (create a free account if needed).
2. Click the **+** (top right) → **New repository**.
3. **Repository name:** `soniayogi-website` (anything is fine).
4. Set it to **Public**.
5. Do **not** tick "Add a README" (we already have one).
6. Click **Create repository**.

### A2. Upload the website files
1. On the new empty repo page, click **uploading an existing file** (the link in the middle).
2. Drag in **all** the files and folders from this download — `index.html`, `classes-bookings.html`, `about-testimonials.html`, `contact-us.html`, the **`assets`** folder (with `haven.css` and `site.js` inside), `sitemap.xml`, `robots.txt`, `CNAME`, `.nojekyll`, and `README.md`.
   - Keep the `assets` folder as a folder — drag the folder itself, don't pull the files out.
3. At the bottom, click **Commit changes**.

### A3. Turn on GitHub Pages
1. In the repo, go to **Settings** (top menu) → **Pages** (left sidebar).
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. **Branch:** select **main**, **Folder:** select **/ (root)**, click **Save**.
4. Wait 1–2 minutes, then refresh. You'll see a temporary live link like `https://<your-username>.github.io/soniayogi-website/`. Open it to confirm the site works.

> The `.nojekyll` file (included) makes GitHub serve the files exactly as-is. Leave it in.

### A4. Tell GitHub your domain
1. Still in **Settings → Pages**, find **Custom domain**.
2. Type `soniayogi.com` and click **Save**.
   - GitHub will start a DNS check (it will show a warning until the DNS in Part B is done — that's normal).
3. Leave **Enforce HTTPS** unticked for now; you'll tick it after Part B finishes and the certificate is issued.

---

## PART B — Point the domain at GitHub (DNS in Squarespace)

Your domain `soniayogi.com` is managed in Squarespace, so the DNS records are edited there.

> Important: this only changes where the **domain** points. If your old Squarespace **site** is still published, you'll be moving the domain off it onto the new GitHub site. Make sure that's what you want before saving.

### B1. Open the domain's DNS settings
1. Log in to https://account.squarespace.com.
2. Go to **Domains** → click **soniayogi.com**.
3. Open **DNS** / **DNS Settings** (sometimes under "Advanced settings" or "DNS").

### B2. Remove conflicting records
- In the custom records list, **delete any existing `A` records** on host `@` that point to Squarespace's own IP addresses, and **delete any existing `CNAME` on `www`** that points to Squarespace.
- Leave `MX` records (email) and any `TXT` verification records alone.

### B3. Add the four GitHub A records (apex domain)
Add each of these as a new custom record:

| Type | Host | Value (Data) |
|------|------|--------------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

### B4. Add the www redirect
| Type | Host | Value (Data) |
|------|------|--------------|
| CNAME | `www` | `<your-username>.github.io` |

Replace `<your-username>` with your GitHub username (lowercase). Example: if your username is `soniayoga`, the value is `soniayoga.github.io`. (No `https://`, no repo name — just the host, and a trailing dot is fine if Squarespace adds one.)

### B5. (Optional) IPv6 — add four AAAA records on `@`
`2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`

### B6. Save and wait
- Save the records. DNS usually updates within minutes, but can take up to 24–48 hours.
- Back in **GitHub → Settings → Pages**, the custom-domain check will go green once it sees the records. Then tick **Enforce HTTPS** (GitHub issues a free SSL certificate automatically — this can take up to an hour).

### B7. Confirm
- Visit `https://soniayogi.com` — the new site should load over HTTPS.
- Visit `https://www.soniayogi.com` — it should redirect to `https://soniayogi.com`.

---

## Updating the site later
Edit a file (locally or directly on GitHub via the pencil ✏️ icon) and commit. GitHub Pages redeploys automatically within a minute or two.

---

## Recommended next steps (optional)
- **Self-host the images.** The site currently loads 7 photos from your Squarespace library (listed below). Download them, drop them into an `images/` folder, and they can be repointed to local files so the site is fully independent of Squarespace.
  1. `IMG_9363.jpg` — hero / Sonia outdoors
  2. `Slow Flow yoga - soniayogi.jpg` — Yang & Yin
  3. `slow flow soniyogi.jpg` — Yogasana
  4. `Corporate yoga - soniayogi.jpg` — Corporate
  5. `Meet SoniaYogi.jpg` — About / Private Sessions
  6. `IMG_7295.JPG` — Morning Meditation
  7. `Cópia de D8B714C8-…-F52841A6614F.jpg` — Portugal retreat
- **Contact form to your inbox.** The form currently opens the visitor's email app, pre-addressed to you. It can be wired to a no-backend service (e.g. Formspree) so messages arrive directly.
- **Google Business Profile** at your W4 location, linked to the site — the single biggest lever for "yoga near me" searches.
- **Google Search Console:** add the property and submit `https://soniayogi.com/sitemap.xml`.
