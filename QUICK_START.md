# Quick Start Guide

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 📝 Customization Checklist

### Essential Updates

- [ ] **Update Personal Info in Hero Section** (`src/components/Hero/Hero.jsx`)
  - Change name from "Jaivik Patel" to your name
  - Update title and tagline

- [ ] **Update About Section** (`src/components/About/About.jsx`)
  - Modify the bio text
  - Update experience years and project counts

- [ ] **Update Projects** (`src/data/projectsData.js`)
  - Replace with your actual projects
  - Update GitHub links and live demo URLs
  - Add project images to `public/projects/` folder

- [ ] **Update Experience** (`src/data/projectsData.js`)
  - Add your work experience
  - Update company names, durations, and responsibilities

- [ ] **Update Education** (`src/data/projectsData.js`)
  - Add your educational background
  - Update institution, degree, and CGPA

- [ ] **Update Skills** (`src/data/projectsData.js`)
  - Add/remove skills based on your expertise

- [ ] **Update Certifications** (`src/data/projectsData.js`)
  - Add your certifications

- [ ] **Update Contact Info** (`src/components/Contact/Contact.jsx`)
  - Change email address in Gmail URL (line 27)
  - Update social media links (LinkedIn, GitHub, Portfolio)

- [ ] **Add Your Resume** 
  - Place your resume PDF in `public/resume.pdf`

- [ ] **Update SEO Meta Tags** (`index.html`)
  - Update title, description, and keywords
  - Update Open Graph and Twitter card information

### Optional Customizations

- [ ] **Change Theme Colors** (`src/index.css`)
  - Modify `--color-accent` and other CSS variables

- [ ] **Add Project Images**
  - Create `public/projects/` folder
  - Add images for each project
  - Update image paths in `projectsData.js`

- [ ] **Add Favicon**
  - Replace `public/vite.svg` with your favicon

- [ ] **Add Profile Photo**
  - Replace placeholder initials with actual photo in Hero and About sections

## 🎨 Theme Toggle

The theme toggle is already implemented and persists in localStorage. Users can switch between light and dark modes using the button in the navbar.

## 📱 Responsive Design

The portfolio is fully responsive and works on:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)

## 🔧 Common Issues

### Port Already in Use
If port 5173 is already in use, Vite will automatically use the next available port.

### Module Not Found
Run `npm install` to ensure all dependencies are installed.

### Animations Not Working
Make sure Framer Motion is installed: `npm install motion`

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 🌐 Deployment

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify

### Deploy to Vercel
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Vercel

## 💡 Tips

1. **Test on Multiple Devices**: Use browser dev tools to test responsiveness
2. **Optimize Images**: Compress images before adding them to the project
3. **Update Links**: Make sure all external links (GitHub, LinkedIn, etc.) are correct
4. **Test Contact Form**: Verify the Gmail integration works with your email
5. **Check Console**: Open browser console to check for any errors

## 🆘 Need Help?

- Check the main README.md for detailed documentation
- Review component files for inline comments
- Test each section individually to isolate issues

---

Happy coding! 🎉
