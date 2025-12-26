# AuctusAI Website Deployment to Cloudflare Pages

## Quick Deploy (3 Methods)

### METHOD 1: GitHub + Cloudflare Pages (Recommended)

1. **Create a GitHub repository:**
   - Go to https://github.com/new
   - Name it: `auctusai-website`
   - Make it public or private
   - Click "Create repository"

2. **Upload these files to GitHub:**
   - Drag and drop all files from this folder to your repo
   - Or use GitHub Desktop / git commands

3. **Connect to Cloudflare Pages:**
   - Go to https://dash.cloudflare.com
   - Click "Workers & Pages" → "Create application" → "Pages"
   - Click "Connect to Git"
   - Select your GitHub repo
   - Build settings:
     - **Build command:** `npm run build`
     - **Build output directory:** `dist`
     - Click "Save and Deploy"

4. **Connect your domain:**
   - After deployment, go to "Custom domains"
   - Click "Set up a custom domain"
   - Enter: `auctusai.ai`
   - Cloudflare will automatically configure DNS

**Done! Your site will be live at auctusai.ai in ~2 minutes**

---

### METHOD 2: Direct Upload to Cloudflare Pages

1. **Build the site locally:**
   ```bash
   npm install
   npm run build
   ```

2. **Upload to Cloudflare:**
   - Go to https://dash.cloudflare.com
   - Click "Workers & Pages" → "Create application" → "Pages"
   - Click "Upload assets"
   - Drag the `dist` folder
   - Project name: `auctusai`
   - Click "Deploy"

3. **Connect domain:**
   - Go to "Custom domains" → "Set up a custom domain"
   - Enter: `auctusai.ai`

---

### METHOD 3: Use Wrangler CLI (For Developers)

1. **Install Wrangler:**
   ```bash
   npm install -g wrangler
   wrangler login
   ```

2. **Build and deploy:**
   ```bash
   npm install
   npm run build
   wrangler pages deploy dist --project-name=auctusai
   ```

3. **Add custom domain in dashboard**

---

## Files Included

- `package.json` - Dependencies
- `vite.config.js` - Build configuration
- `index.html` - HTML entry point
- `src/main.jsx` - React entry point
- `src/App.jsx` - Your website component

## After Deployment

### Update DNS (if needed)
If auctusai.ai isn't already in Cloudflare:
1. Go to Cloudflare Dashboard → "Websites"
2. Click "Add a site"
3. Enter `auctusai.ai`
4. Follow the nameserver instructions

### Enable HTTPS
Cloudflare Pages automatically provides:
- Free SSL certificate
- Global CDN
- DDoS protection
- Automatic deployments

### Performance Optimization
Already included:
- Minified JavaScript
- Tailwind CSS via CDN
- React production build
- Cloudflare global CDN

---

## Troubleshooting

**Build fails?**
- Make sure Node.js 18+ is installed
- Delete `node_modules` and run `npm install` again

**Domain not connecting?**
- Wait 5-10 minutes for DNS propagation
- Check nameservers point to Cloudflare
- Verify domain is in Cloudflare dashboard

**Site looks broken?**
- Check browser console for errors
- Verify build completed successfully
- Clear browser cache

---

## Local Development

```bash
npm install
npm run dev
```

Site runs at: http://localhost:5173

---

## Support

- Cloudflare Pages Docs: https://developers.cloudflare.com/pages
- Vite Docs: https://vitejs.dev
- React Docs: https://react.dev

---

**Deployment time: ~5 minutes**
**Cost: $0 (Cloudflare Pages is free)**
