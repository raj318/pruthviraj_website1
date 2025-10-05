# 🚀 Quick Start Guide

## Your Portfolio is Now Data-Driven! 🎉

### What Changed?

Your portfolio website now reads all content from a **JSON file** (`portfolio-data.json`). This means you can update your entire website just by editing one file!

### Files Structure

```
📁 pruthviraj_website1/
├── 📄 index.html              (Main HTML - Don't edit)
├── 📄 style.css               (Styles - Don't edit)
├── 📄 script.js               (Navigation - Don't edit)
├── 📄 portfolio-builder.js    (Page builder - Don't edit)
├── 📝 portfolio-data.json     ⭐ EDIT THIS FILE! ⭐
├── 📖 README-JSON.md          (Detailed JSON guide)
└── 📖 QUICK-START.md          (This file)
```

### How to Update Your Portfolio

**Step 1:** Open `portfolio-data.json` in any text editor

**Step 2:** Edit the information you want to change

**Step 3:** Save the file

**Step 4:** Refresh your browser at http://localhost:8080/

**That's it!** Your website will automatically rebuild with the new data.

---

## Common Updates

### 1. Update Your Email
```json
"email": "newemail@gmail.com"
```
Search for `"email"` in the JSON and update it.

### 2. Add a New Job
Find the `"workExperience"` section and add:
```json
{
  "company": "New Company Name",
  "duration": "2 Years",
  "location": "City or Description",
  "description": "What you did there...",
  "isCurrent": false
}
```

### 3. Add a New Project
Find the `"projects"` section and add:
```json
{
  "title": "My New Project",
  "icon": "🚀",
  "description": "What the project does...",
  "technologies": ["React", "Node.js"],
  "demoLink": "https://demo-link.com",
  "sourceLink": "https://github.com/..."
}
```

### 4. Update Skills
Find `"skills"` and modify:
```json
"frontend": [
  { "name": "HTML5", "level": 95 }  // Change level 0-100
]
```

### 5. Add New Interests or Hobbies
Find `"interests"` or `"hobbies"` and add items:
```json
{
  "title": "New Interest",
  "icon": "🎮",
  "description": "Description here..."
}
```

---

## Current Portfolio Structure

Your portfolio currently has **12 pages**:

1. **Cover** - Your name and birth date
2. **Chapter 1** - Introduction
3. **Chapter 2** - About Me & Personal Details
4. **Chapter 3** - Education Journey (4 schools + college)
5. **Chapter 4** - Work Experience (Synopsys, FactSet, NVIDIA)
6. **Chapter 5** - Skills & Tools
7. **Chapter 6** - Project 1 (Portfolio Website)
8. **Chapter 6** - Project 2 (Dashboard)
9. **Chapter 6** - Project 3 (E-commerce)
10. **Chapter 7** - Interests & Hobbies
11. **Chapter 8** - Contact Information
12. **Back Cover** - Thank you page

---

## Included Information

### ✅ Personal Details
- Full Name: Kudith Pruthvi Raj
- DOB: July 6, 1992
- Birthplace: Vengalarajukandriga, Andhra Pradesh
- Email: pruthvi318@gmail.com

### ✅ Education
- 4 Schools (Veena Vani, Vidhyanikethan, Govt High School, Sri Venkateswara)
- Intermediate: Narayana Junior College
- Engineering: Sri Venkateswara Engineering College

### ✅ Work Experience
1. Synopsys (3.5 years) - Hyderabad
2. FactSet (3 years) - Financial Tech
3. NVIDIA (4 years) - Current

### ✅ Skills
- Frontend: HTML5, CSS3, JavaScript, React/Vue
- Tools: Git, VS Code, Figma, Bootstrap, etc.

### ✅ Projects
- 3 sample projects (update with your real projects!)

### ✅ Interests
- Web Technologies, UI/UX Design, AI/ML, Open Source

### ✅ Hobbies
- Reading, Coding, Photography, Music

---

## Tips for Editing JSON

1. **Use a text editor** with JSON syntax highlighting (VS Code, Sublime, etc.)
2. **Be careful with commas** - each item except the last needs a comma
3. **Use double quotes** `"` not single quotes `'`
4. **Validate your JSON** - Use https://jsonlint.com/ to check for errors
5. **Keep backups** - Save a copy before making major changes

---

## Emoji Guide

Use these emojis in your content:

**Education:** 📚 📖 🎓 🏫  
**Work:** 💼 🏢 💻 📊  
**Skills:** ⚛️ 🎨 🛠️ 💡  
**Projects:** 🌐 📊 🛍️ 🚀  
**Contact:** 📧 💻 💼 🐦  
**Interests:** 💻 🎨 🤖 🌟  
**Hobbies:** 📖 ⌨️ 📷 🎵  

Copy and paste these into your JSON!

---

## View Your Website

**Local Server URL:** http://localhost:8080/index.html

**Navigation:**
- Use **← →** arrow keys
- Click **Previous/Next** buttons
- **Swipe** left/right on mobile

---

## Need More Help?

Check `README-JSON.md` for detailed documentation on every JSON field!

---

## What's Next?

1. ✏️ Update `portfolio-data.json` with your real project details
2. 🔗 Add your actual GitHub, LinkedIn, Twitter links
3. 🖼️ Replace placeholder images with real photos
4. 🚀 Deploy your website to GitHub Pages, Netlify, or Vercel

**Enjoy your data-driven portfolio!** 🎉

