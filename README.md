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

## PART B — Point the domain at GitHub (DNS)

Your domain is **registered at Bluehost** and your current site is **hosted at Squarespace**. DNS (the records that decide where the domain points) lives in **one** of those two places — you must edit it wherever it is actually being managed. First find out which, then follow B2 or B3.

> Important: this moves the **domain** from your old Squarespace site onto the new GitHub site. Only do it when you're ready for soniayogi.com to show the new site.

### B1. Find out who controls your DNS (check the nameservers)
1. Go to https://lookup.icann.org and search `soniayogi.com` (or use https://www.whatsmydns.net and choose record type **NS**).
2. Look at the **Name Servers** listed:
   - If they contain **bluehost.com** (e.g. `ns1.bluehost.com`) → your DNS is at **Bluehost** → follow **B2**.
   - If they contain **squarespace** or **squarespacedns.com** → your DNS is at **Squarespace** → follow **B3**.
3. Whichever it is, that's the only place the records below need to go. (Editing the other one will have no effect.)

### B2. If DNS is at BLUEHOST
1. Sign in at https://my.bluehost.com.
2. Go to **Domains** → select **soniayogi.com** → open **DNS** (or **Manage** → **DNS / Zone Editor**).
3. **Remove conflicting records:** delete any existing **`A` record on host `@`** that points to Squarespace, and any **`CNAME` on `www`** that points to Squarespace. Leave `MX` (email) and `TXT` records alone.
4. **Add the four GitHub A records** (see the table in B4).
5. **Add the www CNAME** (see B4).
6. Save. Skip to **B5**.

### B3. If DNS is at SQUARESPACE
1. Sign in at https://account.squarespace.com → **Domains** → **soniayogi.com** → **DNS Settings**.
2. **Remove conflicting records:** delete the existing Squarespace **`A` records on `@`** and the **`www` CNAME** that points to Squarespace. Leave `MX` and `TXT` records alone.
3. **Add the four GitHub A records** (see the table in B4).
4. **Add the www CNAME** (see B4).
5. Save. Continue to **B5**.

### B4. The exact records to add (same for either provider)

Four A records on the apex (`@`):

| Type | Host / Name | Value (Points to) |
|------|-------------|-------------------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

One CNAME for `www`:

| Type | Host / Name | Value (Points to) |
|------|-------------|-------------------|
| CNAME | `www` | `<your-username>.github.io` |

Replace `<your-username>` with your GitHub username in lowercase — e.g. `soniayoga.github.io`. No `https://`, no repo name, just the host (a trailing dot is fine if the panel adds one).

*(Optional IPv6 — four AAAA records on `@`):* `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`

> Note on `@`: some panels use `@` for the bare domain, others want it left blank or want you to type `soniayogi.com`. They all mean the same thing.

### B5. Save and wait
- DNS usually updates within minutes but can take up to 24–48 hours.
- Back in **GitHub → Settings → Pages**, the custom-domain check goes green once it sees the records. Then tick **Enforce HTTPS** (GitHub issues a free SSL certificate automatically — can take up to an hour).

### B6. Confirm
- Visit `https://soniayogi.com` — the new site should load over HTTPS.
- Visit `https://www.soniayogi.com` — it should redirect to `https://soniayogi.com`.

> If your email runs on this domain (e.g. info@soniayogi.com), don't touch the `MX` and related `TXT` records — leaving them as-is keeps your email working.

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
