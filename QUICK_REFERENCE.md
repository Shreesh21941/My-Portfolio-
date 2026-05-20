# 📋 QUICK REFERENCE GUIDE

## 🎯 FILE REFERENCE

### Main Website Files
```
index.html     → Open this in browser to see your portfolio
styles.css     → Edit this to change colors, spacing, fonts
script.js      → Edit this for advanced interactivity
```

---

## 🔍 WHERE TO FIND THINGS IN index.html

### Your Name
- Line 5: Page title
- Line 80: Hero section main title
- Line 740: Footer copyright

Find & Replace: `Shreesh Kolhatkar` with your name

### Contact Information
- Line 691: Email address
- Line 699: Phone number
- Line 707: Location

### Social Media Links
- Line 92-93: Hero section social icons
- Line 754: Footer social icons

### About Section
- Line 139-160: About text

### Skills
- Line 217-240: Frontend skills
- Line 250-270: Backend skills
- Line 280-300: Database & tools
- Line 310-330: Other skills

### Experience
- Line 364-395: Senior position
- Line 405-435: Mid position
- Line 445-475: Junior position

### Projects (6 total)
- Line 502-530: Project 1 (E-Commerce)
- Line 532-560: Project 2 (Task Management)
- Line 562-590: Project 3 (Analytics)
- Line 592-620: Project 4 (Social API)
- Line 622-650: Project 5 (Weather)
- Line 652-680: Project 6 (Chat)

### Education
- Line 585-610: Education cards

### Contact Form
- Line 704-740: Contact form

---

## 🎨 WHERE TO FIND THINGS IN styles.css

### Colors
- Line 10-25: CSS Variables (colors, shadows)
- Change primary color: Line 11
- Change secondary color: Line 12
- Change accent color: Line 13

### Navigation Styling
- Line 105-160: Navbar styles

### Hero Section
- Line 200-330: Hero section styles

### Sections
- Line 350-400: About section
- Line 410-480: Skills section
- Line 490-580: Experience section
- Line 590-750: Projects section
- Line 760-820: Education section
- Line 830-920: Contact section

### Responsive Design
- Line 930-1000: Tablet breakpoint (1024px)
- Line 1010-1100: Mobile breakpoint (768px)
- Line 1110-1200: Small mobile breakpoint (480px)

---

## ⚡ QUICK EDITS

### Change Your Name
1. Open index.html
2. Press Ctrl+H (Find & Replace)
3. Find: `Shreesh Kolhatkar`
4. Replace with: `Your Name`
5. Click Replace All

### Change Primary Color
1. Open styles.css
2. Find line 11: `--primary-color:`
3. Change: `#6366f1` to your color
4. Save and refresh browser

### Add a Project
1. Copy lines 502-530 from index.html
2. Paste after line 680
3. Update: title, description, technologies
4. Save and refresh

### Update Experience
1. Find your job section (lines 364-475)
2. Change: title, company, dates
3. Update: bullet point descriptions
4. Save and refresh

---

## 📸 IMAGE PLACEHOLDERS

| Location | Current Line | Size | Purpose |
|----------|-------------|------|---------|
| Hero section | ~115 | 500x500 | Profile photo |
| About section | ~155 | 400x500 | About photo |
| Project 1-6 | 510-680 | 600x400 | Project screenshots |

See PHOTO_GUIDE.md for detailed instructions.

---

## 🔗 IMPORTANT LINKS TO UPDATE

### Social Media (Hero & Footer)
- LinkedIn: Line 92, 754
- GitHub: Line 93, 755
- Twitter: Line 94, 756
- Email: Line 95, 757

### Project Links
- Each project has "View Project" link
- Lines: 528, 558, 588, 618, 648, 678

### Contact Form Action
- Currently shows notification
- To send emails, update script.js (line 45)

---

## 🎯 TOP 5 CUSTOMIZATIONS

### 1. Change Your Name
Find & Replace in index.html
- Takes: 30 seconds
- Impact: High

### 2. Update Contact Info
Edit index.html lines 691-707
- Takes: 2 minutes
- Impact: High

### 3. Add Your Content
Replace placeholder text in sections
- Takes: 20 minutes
- Impact: Very High

### 4. Add Photos
Replace image placeholders
- Takes: 30 minutes
- Impact: Very High

### 5. Customize Colors
Edit CSS variables in styles.css
- Takes: 5 minutes
- Impact: Medium

---

## 🐛 TROUBLESHOOTING

### Website won't load
✅ Make sure you opened index.html
✅ Check file path is correct
✅ Try different browser

### Content not updating
✅ Hard refresh: Ctrl+Shift+R
✅ Clear browser cache
✅ Check you saved the file

### Images not showing
✅ Check image file exists
✅ Verify file path is correct
✅ Check file name (case sensitive)
✅ Use absolute or relative paths

### Styling looks weird
✅ Check styles.css loaded
✅ Verify no syntax errors
✅ Hard refresh browser
✅ Check browser console (F12)

### Mobile menu not working
✅ Check script.js is loading
✅ Open browser console (F12)
✅ Look for errors
✅ Try different browser

---

## 🔑 KEYBOARD SHORTCUTS

### Text Editing
- Ctrl+H: Find & Replace
- Ctrl+F: Find
- Ctrl+Z: Undo
- Ctrl+S: Save

### Browser Testing
- F12: Open Developer Tools
- Ctrl+Shift+M: Toggle Mobile View
- Ctrl+Shift+R: Hard Refresh
- Ctrl+Shift+K: Open Console

---

## 📱 TEST CHECKLIST

Before deploying, test on:

Desktop
- [ ] Chrome
- [ ] Firefox
- [ ] Safari (if available)

Mobile
- [ ] iPhone (portrait & landscape)
- [ ] Android (portrait & landscape)
- [ ] Tablet

Navigation
- [ ] All links work
- [ ] Menu opens/closes
- [ ] Scrolling smooth
- [ ] No console errors

---

## 📄 DOCUMENTATION MAP

```
START_HERE.txt
    ↓
QUICK_START.html (interactive)
    ↓
CUSTOMIZATION_CHECKLIST.md (step-by-step)
    ↓
PHOTO_GUIDE.md (when ready)
    ↓
README.md (reference)
    ↓
PORTFOLIO_SUMMARY.md (overview)
```

---

## 🚀 DEPLOYMENT CHECKLIST

Before going live:

Content
- [ ] Name updated
- [ ] Contact info correct
- [ ] No placeholder text
- [ ] All sections filled

Design
- [ ] Images look good
- [ ] Colors consistent
- [ ] Alignment perfect
- [ ] No broken elements

Testing
- [ ] Desktop works
- [ ] Mobile works
- [ ] Landscape works
- [ ] Links all work
- [ ] No console errors

Final
- [ ] Ready to deploy
- [ ] Backed up locally
- [ ] Ready to share

---

## 💾 FILE BACKUP TIPS

Before making changes:
1. Duplicate the folder
2. Name it: "portfolio-backup"
3. Now make changes safely
4. If needed, restore from backup

Or use Git:
```
git init
git add .
git commit -m "Initial portfolio"
```

---

## 📊 QUICK STATS

| Metric | Value |
|--------|-------|
| Total Files | 9 |
| HTML Size | ~50 KB |
| CSS Size | ~60 KB |
| JS Size | ~15 KB |
| Total | ~125 KB |
| Load Time | < 1 second |

---

## ✅ DONE!

You have everything you need to create an impressive portfolio!

Next Step: Open START_HERE.txt and begin customizing! 🎉
