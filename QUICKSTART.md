# 🚀 Quick Start Guide

## Prerequisites Setup

If you haven't already, you'll need to install Node.js (which includes npm):

1. **Download Node.js:**
   - Visit https://nodejs.org/
   - Download the LTS (Long Term Support) version
   - Run the installer and follow the installation wizard

2. **Verify Installation:**
   Open a new terminal/command prompt and run:
   ```bash
   node --version
   npm --version
   ```
   You should see version numbers for both.

## Running the Student Marketplace

1. **Open a terminal in the project folder:**
   ```bash
   cd student-marketplace
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   This will download all required packages (may take a few minutes the first time).

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - The terminal will show a URL (typically http://localhost:5173)
   - Open this URL in your web browser
   - You should see the UniMarket login page!

## First Steps

1. **Register an account:**
   - Click the "Register" tab
   - Use any university email (e.g., `sarah.jones@university.edu`)
   - Enter any password (at least 6 characters)
   - Click "Register"

2. **Explore the marketplace:**
   - Browse the pre-loaded sample items
   - Try searching and filtering
   - Click on items to view details

3. **Post your own item:**
   - Click "Post Item" in the top navigation
   - Fill in the details
   - Submit to see your item in the marketplace

## Troubleshooting

**Port already in use?**
- If you see an error about port 5173 being in use, Vite will automatically use the next available port (5174, 5175, etc.)

**Changes not showing?**
- The dev server has hot reload - just save your changes and the browser will update automatically
- If it doesn't work, try refreshing the browser

**npm install errors?**
- Make sure you have a stable internet connection
- Try running `npm cache clean --force` then `npm install` again

## Need Help?

Check the main README.md for more detailed information about features and functionality.

---

Enjoy your student marketplace! 🎓✨



