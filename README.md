# Team Algorithm Tech Institute Website

Welcome to the source code for the Team Algorithm Tech Institute website. This project is built with **Next.js 14** and **Tailwind CSS** and is designed to be easy to deploy for free on Vercel or similar hosting platforms. All dependencies are open‑source and there are no recurring hosting costs.

## 📦 What’s Included

* **Next.js App Router** with TypeScript support
* **Tailwind CSS** for styling
* A responsive design with dark, tech‑inspired colours
* Pages for **Home**, **Programs**, **About**, **Courses**, **Admissions**, and **Contact**
* Placeholder handbook PDF (`/public/handbook.pdf`) — replace with your real curriculum
* Downloaded stock photos in `/public/images` (licensed from Pexels)

## 🛠️ Running Locally

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Open http://localhost:3000 in your browser
```

## 🚀 Deploying for Free on Vercel

1. **Push to GitHub** — create a new repository on GitHub and push this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/team-algorithm-site.git
   git push -u origin main
   ```

2. **Create a Vercel account** — visit [vercel.com](https://vercel.com) and sign up (free).

3. **Import your repository** — click *New Project* and select your GitHub repo. Vercel will detect Next.js automatically. Click **Deploy**.

4. **Assign a custom domain** — after deployment, go to *Settings → Domains* in Vercel and click *Add*. You can:
   - Use a **free domain** (e.g. `teamalgorithm.ml`) from [Freenom](https://www.freenom.com). Register your domain there, then add it in Vercel. Vercel will show the DNS records you need to set (an `A` record pointing to `76.76.21.21` and a `CNAME` record pointing to the Vercel target). Wait a few minutes for propagation; SSL will be automatic.
   - Or purchase a `.com` domain (e.g. `teamalgorithm.com`) from a registrar (Namecheap, Google Domains). Connect it to Vercel using the same DNS steps. Hosting remains free.

5. **Update environment variables** — if you embed a form service or send emails, add any API keys via *Settings → Environment Variables*.

## 📃 Replacing the Placeholder Handbook

Your handbook PDF is served at `/handbook.pdf`. Replace the file in `public/handbook.pdf` with your own curriculum document.

## 📝 Embedding a Google Form

On the **Admissions** page you’ll find a placeholder for a Google Form. To embed your real form:

1. Create a Google Form and click **Send → Embed**.
2. Copy the `src` URL from the iframe snippet.
3. Open `app/(site)/(pages)/admissions/page.tsx` and replace the placeholder `<div>` with:

```tsx
<iframe
  src="https://docs.google.com/forms/d/e/your-form-id/viewform?embedded=1"
  width="100%"
  height="780"
  className="rounded-xl border border-slate-800"
  loading="lazy"
></iframe>
```

## 🖼️ Updating Images

Place any new images in `public/images` and refer to them in your pages via `/images/your-image.jpg`. The home page currently uses `hero1.jpeg`. You can switch to `hero2.jpeg` or `hero3.jpeg` or add your own.

## 🧠 Extending the Site

This site is meant to be a starting point. Feel free to:

* Add blog posts or case studies using the `app/blog` folder.
* Write more detailed course pages.
* Integrate a payment gateway or CRM.
* Add analytics (Plausible, Google Analytics) by inserting script tags in `app/layout.tsx`.

## 📞 Need Help?

If you’re stuck or have questions about deploying, feel free to open an issue on your GitHub repo or contact your facilitator at `teamalgorithm2022@gmail.com`.