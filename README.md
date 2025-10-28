# 🎓 UniMarket - Student Marketplace

A demo student marketplace application where students can buy and sell items exclusively using their university login credentials.

## Features

✨ **University Email Authentication**
- Students must log in with university email addresses (@university.edu, @uni.edu, @student.edu)
- Simple demo authentication system

🛍️ **Marketplace Functionality**
- Browse available items from other students
- Search and filter by category
- View detailed item information
- Contact sellers directly

📝 **Posting Items**
- Create new listings with title, description, price, and images
- Categorize items (Books, Electronics, Furniture, Clothing, Sports, etc.)
- Specify item condition

👤 **User Management**
- View your own listings
- Delete your listings
- Personalized user experience

## Demo Content

The app comes pre-loaded with 8 sample listings including:
- Textbooks
- Electronics (mini fridge, gaming keyboard, coffee maker)
- Furniture (desk lamp)
- Lab equipment (lab coat)
- Sports equipment (mountain bike)
- And more!

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Navigate to the project directory:
   ```bash
   cd student-marketplace
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the URL shown in your terminal)

## How to Use

### 1. Login/Register
- Use any university email address (must end with @university.edu, @uni.edu, or @student.edu)
- Example: `john.doe@university.edu`
- Password must be at least 6 characters (any password works in demo mode)

### 2. Browse Marketplace
- View all available items on the main page
- Use the search bar to find specific items
- Filter by category using the category buttons

### 3. View Item Details
- Click on any item to see full details
- Contact sellers by sending a message
- Use the quick message button for convenience

### 4. Post Your Own Items
- Click "Post Item" in the navigation bar
- Fill in item details (title, description, price, category, condition)
- Optionally add an image URL (defaults to a placeholder if left blank)
- Submit to create your listing

### 5. Manage Your Listings
- Click "My Listings" to see all your posted items
- View or delete your listings as needed

## Technical Details

### Built With
- **React** - Frontend framework
- **Vite** - Build tool and development server
- **React Router** - Navigation and routing
- **LocalStorage** - Demo data persistence

### Project Structure
```
student-marketplace/
├── src/
│   ├── components/        # React components
│   │   ├── Login.jsx
│   │   ├── Marketplace.jsx
│   │   ├── ItemDetails.jsx
│   │   ├── PostItem.jsx
│   │   └── MyListings.jsx
│   ├── context/          # React context for auth
│   │   └── AuthContext.jsx
│   ├── data/             # Sample data
│   │   └── sampleData.js
│   ├── App.jsx           # Main app component
│   ├── App.css           # App styles
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies
└── vite.config.js        # Vite configuration
```

### Authentication Flow (Demo)
1. User enters university email and password
2. Email domain is validated against allowed domains
3. Password is checked for minimum length
4. User object is created and stored in localStorage
5. User is redirected to marketplace

**Note:** This is a demo authentication system. In a production app, authentication would be handled server-side with proper security measures.

### Data Persistence (Demo)
- User authentication state is saved to localStorage
- Marketplace items are saved to localStorage
- New items you post are persisted across page refreshes
- Data is stored locally in your browser only

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` folder.

To preview the production build:

```bash
npm run preview
```

## Important Notes

⚠️ **This is a Demo/Prototype**
- Authentication is client-side only (not secure for production)
- No real backend or database
- Data is stored in browser localStorage only
- Messages to sellers are simulated (alerts)
- No real payment processing

## Future Enhancements (For Production)

- Real backend API with database
- Proper authentication and authorization
- Real-time messaging between buyers and sellers
- Image upload functionality
- User profiles and ratings
- Transaction history
- Search optimization
- Mobile app version
- Payment integration
- Admin moderation panel

## License

This is a demo project for educational purposes.

## Contact

For questions or feedback, please contact the development team.

---

**Happy Trading!** 🎉



