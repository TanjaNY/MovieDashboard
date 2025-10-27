# 🎬 Movie Database Dashboard - Student Project

A fully functional static website built with **Bootstrap 5**, **CSS3**, **HTML5**, and **JavaScript** that displays and visualizes movie data with interactive features.

## 📋 Project Overview

This project demonstrates how to create a dynamic, data-driven website using static web technologies. Students will learn:
- HTML5 semantic structure
- Bootstrap 5 for responsive design
- Custom CSS styling and animations
- JavaScript for data manipulation
- Chart.js for data visualization
- DOM manipulation and event handling

## ✨ Features

### 1. **Dashboard Statistics**
- Total number of movies
- Average rating across all movies
- Total hours of content
- Most popular genre
- Animated number counting effects

### 2. **Data Visualization**
- Genre distribution (Doughnut Chart)
- Rating distribution (Bar Chart)
- Interactive charts powered by Chart.js

### 3. **Movie Collection Display**
- Responsive grid layout
- Movie cards with ratings, year, genre, runtime
- Hover effects and animations
- Icon-based visual elements

### 4. **Interactive Filtering & Sorting**
- Real-time search functionality
- Filter by genre
- Sort by title, year, or rating
- Dynamic content updates

### 5. **Responsive Design**
- Mobile-friendly layout
- Bootstrap grid system
- Adapts to all screen sizes

## 🗂️ File Structure

```
movie-database/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Custom CSS styling
├── js/
│   ├── data.js        # Movie data (25 movies)
│   └── main.js        # Main JavaScript functionality
└── README.md          # Project documentation
```

## 🚀 How to Run

1. **Download all project files** and maintain the folder structure
2. **Open `index.html`** in a modern web browser (Chrome, Firefox, Safari, Edge)
3. **No server required** - it's a static website!

Alternatively, you can use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server
```

## 💻 Technologies Used

### HTML5
- Semantic elements (`<section>`, `<nav>`, `<footer>`)
- Proper document structure
- Accessibility features

### Bootstrap 5.3.2
- Grid system for responsive layout
- Navigation component
- Form controls
- Utility classes
- Pre-built components

### CSS3
- Custom properties (CSS Variables)
- Flexbox and Grid layouts
- Animations and transitions
- Responsive design with media queries
- Modern styling techniques

### JavaScript (ES6+)
- Arrow functions
- Array methods (map, filter, reduce, sort)
- Template literals
- DOM manipulation
- Event listeners
- Data processing and filtering

### Chart.js 4.4.0
- Doughnut chart for genre distribution
- Bar chart for rating distribution
- Responsive chart configuration

### Font Awesome 6.4.0
- Icons throughout the interface
- Visual enhancement

## 📊 Data Structure

Each movie object contains:
```javascript
{
    id: 1,                    // Unique identifier
    title: "Movie Name",      // Movie title
    year: 1994,              // Release year
    genre: "Drama",          // Genre category
    rating: 9.3,             // Rating (out of 10)
    runtime: 142,            // Runtime in minutes
    director: "Director",    // Director name
    description: "...",      // Movie description
    poster: "🎬"            // Emoji icon
}
```

The dataset includes **25 popular movies** across various genres:
- Drama
- Crime
- Action
- Sci-Fi
- Thriller
- Animation

## 🎯 Key Learning Objectives

### HTML/CSS Skills
- ✅ Semantic HTML5 structure
- ✅ Bootstrap framework integration
- ✅ Custom CSS styling
- ✅ Responsive design principles
- ✅ CSS animations and transitions

### JavaScript Skills
- ✅ Working with arrays and objects
- ✅ Data manipulation (filter, sort, search)
- ✅ DOM manipulation
- ✅ Event handling
- ✅ Dynamic content generation
- ✅ Chart creation and configuration

### Web Development Concepts
- ✅ Separation of concerns (HTML/CSS/JS)
- ✅ Code organization
- ✅ User experience design
- ✅ Interactive web applications

## 🔧 Customization Ideas

### Easy Modifications
1. **Add more movies** - Edit `js/data.js` to include additional entries
2. **Change colors** - Modify CSS variables in `css/style.css`
3. **Update statistics** - Add new metrics in the dashboard
4. **Different icons** - Use different Font Awesome icons or emojis

### Advanced Enhancements
1. **Add localStorage** - Save user preferences and favorites
2. **Dark mode toggle** - Implement theme switching
3. **Advanced filters** - Add year range, rating range filters
4. **Movie details modal** - Show full information in a popup
5. **Export functionality** - Allow users to export data as CSV
6. **User ratings** - Let users add their own ratings
7. **Watchlist feature** - Mark movies to watch later

## 📝 Code Highlights

### Dynamic Movie Card Generation
```javascript
function createMovieCard(movie, index) {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4 col-xl-3';
    col.innerHTML = `
        <div class="movie-card">
            <!-- Card content -->
        </div>
    `;
    return col;
}
```

### Real-time Search & Filter
```javascript
function filterMovies() {
    filteredMovies = movies.filter(movie => {
        const matchesSearch = movie.title.toLowerCase().includes(searchTerm);
        const matchesGenre = selectedGenre === '' || movie.genre === selectedGenre;
        return matchesSearch && matchesGenre;
    });
    displayMovies(filteredMovies);
}
```

### Animated Statistics
```javascript
function animateValue(id, start, end, duration) {
    // Smooth counting animation for numbers
}
```

## 🎨 Design Features

- **Color Scheme**: Modern purple/blue gradient with accent colors
- **Typography**: Clean, readable Segoe UI font family
- **Cards**: Elevated cards with hover effects
- **Icons**: Font Awesome icons and emoji for visual appeal
- **Spacing**: Consistent padding and margins using Bootstrap
- **Animations**: Smooth transitions and fade-in effects

## 🐛 Troubleshooting

**Charts not displaying?**
- Check browser console for errors
- Ensure Chart.js CDN is loading properly
- Verify internet connection for CDN resources

**Movies not filtering?**
- Check JavaScript console for errors
- Ensure data.js is loaded before main.js
- Verify the movies array is properly defined

**Responsive layout issues?**
- Clear browser cache
- Check Bootstrap CSS is loading
- Verify viewport meta tag is present

## 📚 Learning Resources

- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/)
- [Chart.js Documentation](https://www.chartjs.org/docs/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [JavaScript Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## 🎓 Assessment Criteria

This project can be evaluated on:
- **Code Quality** (20%) - Clean, commented, organized code
- **Functionality** (30%) - All features working correctly
- **Design** (20%) - Visual appeal and user experience
- **Responsiveness** (15%) - Mobile and desktop compatibility
- **Data Management** (10%) - Proper data structure and manipulation
- **Creativity** (5%) - Unique additions or improvements

## 👨‍💻 About This Project

Created as a teaching example for students learning web development. This project demonstrates best practices in:
- Modern web development
- Clean code principles
- Responsive design
- Interactive user interfaces
- Data visualization

## 📄 License

This project is free to use for educational purposes. Feel free to modify and adapt it for your learning needs.

---

**Built with ❤️ for students learning web development**

🌟 **Tip**: Open the browser's Developer Tools (F12) to see console messages and explore the code in action!
