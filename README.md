# Jaivik Patel - Personal Portfolio Website

A modern, fully responsive personal portfolio website built with React.js, featuring a light/dark theme toggle, smooth animations, and a clean professional design.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Light/Dark Theme**: Toggle between light and dark modes with localStorage persistence
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Modern UI**: Clean and professional design with custom CSS
- **SEO Optimized**: Proper meta tags and Open Graph tags for better discoverability
- **Sections**:
  - Hero/Home with call-to-action buttons
  - About Me with highlights
  - Skills showcase with icons
  - Featured Projects with live demos and GitHub links
  - Work Experience timeline
  - Education details
  - Certifications
  - Contact form with Gmail integration
  - Footer with quick links
  - Back to Top button

## 🛠️ Tech Stack

- **Frontend**: React.js (Vite)
- **Styling**: Custom CSS with CSS Variables
- **Icons**: React Icons
- **Animations**: Framer Motion
- **State Management**: React Context API
- **Theme Persistence**: localStorage

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/jaivikpatel/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── About/
│   ├── Skills/
│   ├── Projects/
│   ├── Experience/
│   ├── Education/
│   ├── Certifications/
│   ├── Contact/
│   ├── Footer/
│   └── BackToTop/
├── context/
│   └── ThemeContext.jsx
├── data/
│   └── projectsData.js
├── App.jsx
├── main.jsx
└── index.css
```

## 🎨 Customization

### Update Personal Information

1. **Projects**: Edit `src/data/projectsData.js` to add/modify projects
2. **Experience**: Update experience data in `src/data/projectsData.js`
3. **Education**: Modify education details in `src/data/projectsData.js`
4. **Skills**: Add or remove skills in `src/data/projectsData.js`
5. **Contact**: Update social links in `src/components/Contact/Contact.jsx`

### Theme Colors

Modify CSS variables in `src/index.css`:
```css
:root {
  --color-accent: #3b82f6;
  --color-accent-hover: #2563eb;
  /* ... other variables */
}
```

### Add Your Resume

Place your resume PDF in the `public` folder as `resume.pdf`

### Add Project Images

Place project images in the `public/projects/` folder and update the image paths in `projectsData.js`

## 📧 Contact Form

The contact form opens Gmail with pre-filled data. Update the email address in `src/components/Contact/Contact.jsx`:

```javascript
const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=your-email@example.com&...`;
```

## 🌐 Deployment

### Netlify
```bash
npm run build
# Deploy the dist folder to Netlify
```

### Vercel
```bash
npm run build
# Deploy the dist folder to Vercel
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Jaivik Patel**
- LinkedIn: [linkedin.com/in/jaivikpatel](https://linkedin.com/in/jaivikpatel)
- GitHub: [github.com/jaivikpatel](https://github.com/jaivikpatel)
- Portfolio: [jaivikpatel.com](https://jaivikpatel.com)

## 🙏 Acknowledgments

- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

Made with ❤️ using React.js
