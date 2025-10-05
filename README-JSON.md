# Portfolio Data JSON Guide

## Overview
Your portfolio website is now **data-driven**! All content is stored in `portfolio-data.json` and the website is automatically built from this data.

## How to Update Your Portfolio

Simply edit the `portfolio-data.json` file to update your website. The page will automatically rebuild when you refresh.

## JSON Structure

### 1. **Personal Information**
```json
"personal": {
  "fullName": "Your Full Name",
  "firstName": "First Name",
  "dateOfBirth": "Month Day, Year",
  "birthplace": "City, State, Country",
  "email": "your@email.com",
  "tagline": "Your • Professional • Title"
}
```

### 2. **Introduction**
```json
"introduction": {
  "text": "Opening paragraph...",
  "description": "Second paragraph...",
  "callToAction": "Closing paragraph..."
}
```

### 3. **About Section**
```json
"about": {
  "earlyLife": "Description of your early life...",
  "journey": "Your professional journey..."
}
```

### 4. **Education**

**Schools** (array of schools):
```json
"schools": [
  {
    "name": "School Name",
    "location": "City, State",
    "icon": "📚"
  }
]
```

**Intermediate**:
```json
"intermediate": {
  "name": "College Name",
  "description": "Description",
  "icon": "📖"
}
```

**College**:
```json
"college": {
  "name": "College Name",
  "degree": "Degree Name",
  "icon": "🎓",
  "highlight": true
}
```

### 5. **Work Experience**
```json
"workExperience": [
  {
    "company": "Company Name",
    "duration": "3.5 Years",
    "location": "City or Description",
    "description": "What you did...",
    "isCurrent": true/false
  }
]
```
- Set `"isCurrent": true` for your current job
- Duration is used to calculate total years automatically

### 6. **Skills**

**Frontend Skills** (with progress bars):
```json
"frontend": [
  { "name": "HTML5", "level": 90 }
]
```
- `level`: 0-100 (percentage for progress bar)

**Tools** (badges):
```json
"tools": ["Git", "VS Code", "Figma"]
```

### 7. **Projects**
```json
"projects": [
  {
    "title": "Project Name",
    "icon": "🌐",
    "description": "Project description...",
    "technologies": ["Tech1", "Tech2"],
    "demoLink": "https://...",
    "sourceLink": "https://..."
  }
]
```
- Each project gets its own page
- Use emoji for icon (🌐, 📊, 🛍️, etc.)

### 8. **Interests**
```json
"interests": [
  {
    "title": "Interest Title",
    "icon": "💻",
    "description": "Description..."
  }
]
```
- Displayed as cards in a grid

### 9. **Hobbies**
```json
"hobbies": [
  {
    "name": "Hobby Name",
    "icon": "📖",
    "description": "Description..."
  }
]
```
- Displayed as list items with icons

### 10. **Contact Information**
```json
"contact": {
  "email": {
    "icon": "📧",
    "title": "Email",
    "value": "your@email.com",
    "link": "mailto:your@email.com"
  }
}
```

### 11. **Quotes**
```json
"quotes": [
  {
    "text": "Quote text",
    "author": "Author Name"
  }
]
```
- Quotes are automatically placed throughout the portfolio
- Quote 0: Introduction page
- Quote 1: Education page
- Quote 2: Work Experience page
- Quote 3: Contact page

## Adding New Content

### To Add a New School:
```json
{
  "name": "New School Name",
  "location": "Location",
  "icon": "📚"
}
```

### To Add a New Job:
```json
{
  "company": "New Company",
  "duration": "2 Years",
  "location": "Location",
  "description": "What you did...",
  "isCurrent": false
}
```

### To Add a New Project:
Just add a new object to the `projects` array. It will automatically get its own page!

### To Add a New Interest or Hobby:
Add to the respective array. They will appear on the Interests & Hobbies page.

## Tips

1. **Emojis**: Use emojis for visual appeal (📚, 🎓, 💻, 🎨, etc.)
2. **Current Job**: Only set `"isCurrent": true` for ONE job
3. **Order**: Items appear in the order they're listed in the JSON
4. **Links**: Use `#` for placeholder links, replace with real URLs
5. **Line Breaks**: Use `<br>` in text for line breaks
6. **Bold Text**: Use `<strong>text</strong>` for emphasis

## Page Generation

The website automatically generates these pages:
1. Cover Page
2. Introduction
3. About Me
4. Education
5. Work Experience
6. Skills
7-9. Projects (one page per project)
10. Interests & Hobbies
11. Contact
12. Back Cover

Total pages will update automatically based on your data!

## Example: Adding a New Interest

```json
{
  "title": "Blockchain Technology",
  "icon": "⛓️",
  "description": "Exploring decentralized applications and smart contracts."
}
```

Just add this to the `interests` array and refresh your browser!

## Need Help?

- Make sure your JSON is valid (use a JSON validator)
- Keep proper comma placement between items
- Match opening and closing brackets/braces
- Use double quotes for strings, not single quotes

