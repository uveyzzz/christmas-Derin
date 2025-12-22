# Countdown Event Website

A beautiful, responsive website featuring a background video, countdown timer, event information, and Google Maps location embed.

## 📋 Features

- **Background Video**: Full-screen video background with overlay
- **Countdown Timer**: Real-time countdown to your event (Days, Hours, Minutes, Seconds)
- **Event Information Box**: Display event details and call-to-action button
- **Google Maps Embed**: Integrated map showing event location
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Gradient buttons, smooth animations, and glassmorphism effects

## 🛠️ Setup Instructions

### 1. Add Your Video File
- Replace `your-video.mp4` in `index.html` with your actual video file
- You can use online video hosting (YouTube, Vimeo) or host the video file directly
- Recommended video formats: MP4 (H.264), WebM

### 2. Configure the Countdown Timer
Edit `script.js` and update the `EVENT_DATE`:
```javascript
const EVENT_DATE = new Date("December 25, 2025 6:00:00 PM").getTime();
```

Change the date and time to your event. Format: `"Month Day, Year Time AM/PM"`

Examples:
- `"January 1, 2026 12:00:00 AM"` - New Year's Eve
- `"February 14, 2026 6:00:00 PM"` - Valentine's Day

### 3. Update Event Information
Edit the information box in `index.html`:
- Change event name, location, and description
- Update the button text and action
- Customize colors and styling in `style.css`

### 4. Configure Google Maps
Replace the embed URL in `index.html`:
1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your location
3. Click "Share" → "Embed a map"
4. Copy the iframe code and replace the existing one

## 🚀 Deployment on Netlify

### Option 1: Using Netlify UI
1. Create a [Netlify account](https://netlify.com) (free)
2. Drag and drop your project folder into Netlify
3. Your site will be live instantly!

### Option 2: Using Git
1. Push your code to GitHub
2. Connect your GitHub repo to Netlify
3. Netlify will auto-deploy on every push

### Option 3: Using Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy
```

## 📱 File Structure
```
├── index.html          # Main HTML file
├── style.css           # Styling and responsive design
├── script.js           # Countdown timer logic
└── your-video.mp4      # Your background video (add this)
```

## 🎨 Customization Tips

### Change Colors
Edit the gradient colors in `style.css`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Change Fonts
Update font in `style.css`:
```css
font-family: 'Your Font Name', sans-serif;
```

### Add More Sections
Add new `<div>` elements in `index.html` and style them in `style.css`

### Adjust Video Opacity
Change the overlay opacity in `style.css`:
```css
background: rgba(0, 0, 0, 0.5); /* Change 0.5 to your preferred opacity */
```

## ⚙️ Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 Notes
- Use high-quality, optimized videos (under 10MB recommended for fast loading)
- Keep the site lightweight for better Netlify performance
- Test on mobile devices before deploying
- Use HTTPS for secure deployment

## 🔧 Troubleshooting

**Video not playing?**
- Ensure the video path is correct
- Try using a different video format
- Check browser console for errors (F12)

**Countdown not updating?**
- Verify the date format in `script.js`
- Check browser console for JavaScript errors
- Ensure JavaScript is enabled

**Maps not showing?**
- Check the embed URL is correct
- Ensure the location exists on Google Maps
- Verify iframe permissions

## 📞 Support
For Netlify deployment help, visit [Netlify Docs](https://docs.netlify.com/)

---

**Happy Countdown! 🎉**
