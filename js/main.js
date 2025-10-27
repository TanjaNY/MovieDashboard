// Global variables
let filteredMovies = [...movies];
let genreChart = null;
let ratingChart = null;

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Main initialization function
function initializeApp() {
    updateStatistics();
    populateGenreFilter();
    displayMovies(movies);
    createCharts();
    setupEventListeners();
}

// Update statistics cards
function updateStatistics() {
    const totalMovies = movies.length;
    const avgRating = (movies.reduce((sum, movie) => sum + movie.rating, 0) / totalMovies).toFixed(1);
    const totalRuntime = Math.round(movies.reduce((sum, movie) => sum + movie.runtime, 0) / 60);
    const topGenre = getTopGenre();

    document.getElementById('totalMovies').textContent = totalMovies;
    document.getElementById('avgRating').textContent = avgRating;
    document.getElementById('totalRuntime').textContent = totalRuntime + 'h';
    document.getElementById('topGenre').textContent = topGenre;

    // Add animation to numbers
    animateValue('totalMovies', 0, totalMovies, 1000);
    animateValue('avgRating', 0, avgRating, 1000, true);
    animateValue('totalRuntime', 0, totalRuntime, 1000);
}

// Animate number counting
function animateValue(id, start, end, duration, isDecimal = false) {
    const element = document.getElementById(id);
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = isDecimal ? current.toFixed(1) : Math.round(current);
        if (id === 'totalRuntime') {
            element.textContent += 'h';
        }
    }, 16);
}

// Get the most common genre
function getTopGenre() {
    const genreCounts = {};
    movies.forEach(movie => {
        genreCounts[movie.genre] = (genreCounts[movie.genre] || 0) + 1;
    });
    
    return Object.keys(genreCounts).reduce((a, b) => 
        genreCounts[a] > genreCounts[b] ? a : b
    );
}

// Populate genre filter dropdown
function populateGenreFilter() {
    const genres = [...new Set(movies.map(movie => movie.genre))].sort();
    const genreFilter = document.getElementById('genreFilter');
    
    genres.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        option.textContent = genre;
        genreFilter.appendChild(option);
    });
}

// Display movies in the grid
function displayMovies(moviesToDisplay) {
    const movieGrid = document.getElementById('movieGrid');
    movieGrid.innerHTML = '';

    if (moviesToDisplay.length === 0) {
        movieGrid.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-film fa-3x text-muted mb-3"></i>
                <h4 class="text-muted">No movies found</h4>
                <p class="text-muted">Try adjusting your filters</p>
            </div>
        `;
        return;
    }

    moviesToDisplay.forEach((movie, index) => {
        const movieCard = createMovieCard(movie, index);
        movieGrid.appendChild(movieCard);
    });
}

// Create individual movie card
function createMovieCard(movie, index) {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4 col-xl-3';
    col.style.animationDelay = `${index * 0.1}s`;

    col.innerHTML = `
        <div class="movie-card">
            <div class="movie-poster">
                ${movie.poster}
            </div>
            <div class="movie-body">
                <h5 class="movie-title">${movie.title}</h5>
                <div class="movie-meta">
                    <span><i class="fas fa-calendar"></i> ${movie.year}</span>
                    <span class="movie-rating">
                        <i class="fas fa-star"></i> ${movie.rating}
                    </span>
                </div>
                <p class="movie-description">${movie.description}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <span class="movie-genre">${movie.genre}</span>
                    <small class="text-muted">${movie.runtime} min</small>
                </div>
            </div>
        </div>
    `;

    return col;
}

// Create charts
function createCharts() {
    createGenreChart();
    createRatingChart();
}

// Create genre distribution chart
function createGenreChart() {
    const genreCounts = {};
    movies.forEach(movie => {
        genreCounts[movie.genre] = (genreCounts[movie.genre] || 0) + 1;
    });

    const ctx = document.getElementById('genreChart').getContext('2d');
    genreChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(genreCounts),
            datasets: [{
                label: 'Number of Movies',
                data: Object.values(genreCounts),
                backgroundColor: [
                    '#6366f1',
                    '#8b5cf6',
                    '#10b981',
                    '#f59e0b',
                    '#ef4444',
                    '#06b6d4',
                    '#ec4899',
                    '#84cc16'
                ],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Movies by Genre',
                    font: {
                        size: 18,
                        weight: 'bold'
                    }
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        font: {
                            size: 12
                        }
                    }
                }
            }
        }
    });
}

// Create rating distribution chart
function createRatingChart() {
    // Group movies by rating ranges
    const ratingRanges = {
        '8.0-8.4': 0,
        '8.5-8.9': 0,
        '9.0+': 0
    };

    movies.forEach(movie => {
        if (movie.rating >= 9.0) {
            ratingRanges['9.0+']++;
        } else if (movie.rating >= 8.5) {
            ratingRanges['8.5-8.9']++;
        } else {
            ratingRanges['8.0-8.4']++;
        }
    });

    const ctx = document.getElementById('ratingChart').getContext('2d');
    ratingChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(ratingRanges),
            datasets: [{
                label: 'Number of Movies',
                data: Object.values(ratingRanges),
                backgroundColor: [
                    '#f59e0b',
                    '#10b981',
                    '#6366f1'
                ],
                borderRadius: 8,
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Rating Distribution',
                    font: {
                        size: 18,
                        weight: 'bold'
                    }
                },
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    document.getElementById('searchInput').addEventListener('input', filterMovies);
    
    // Genre filter
    document.getElementById('genreFilter').addEventListener('change', filterMovies);
    
    // Sort functionality
    document.getElementById('sortBy').addEventListener('change', sortMovies);

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Filter movies based on search and genre
function filterMovies() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const selectedGenre = document.getElementById('genreFilter').value;

    filteredMovies = movies.filter(movie => {
        const matchesSearch = movie.title.toLowerCase().includes(searchTerm) ||
                            movie.description.toLowerCase().includes(searchTerm) ||
                            movie.director.toLowerCase().includes(searchTerm);
        
        const matchesGenre = selectedGenre === '' || movie.genre === selectedGenre;

        return matchesSearch && matchesGenre;
    });

    sortMovies();
}

// Sort movies based on selected criteria
function sortMovies() {
    const sortBy = document.getElementById('sortBy').value;

    filteredMovies.sort((a, b) => {
        switch(sortBy) {
            case 'title':
                return a.title.localeCompare(b.title);
            case 'year':
                return b.year - a.year; // Newest first
            case 'rating':
                return b.rating - a.rating; // Highest first
            default:
                return 0;
        }
    });

    displayMovies(filteredMovies);
}

// Add scroll animation effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Console welcome message
console.log('%c🎬 Movie Database Dashboard', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with ❤️ using Bootstrap, JavaScript & Chart.js', 'color: #8b5cf6; font-size: 12px;');
console.log(`%cTotal Movies: ${movies.length}`, 'color: #10b981; font-size: 12px;');
