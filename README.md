
Here’s the German translation of your GitHub README:

---

# 🎬 Film-Datenbank-Dashboard – Studentenprojekt

Eine vollständig funktionsfähige statische Website, erstellt mit **Bootstrap 5**, **CSS3**, **HTML5** und **JavaScript**, die Filmdaten mit interaktiven Funktionen anzeigt und visualisiert.

## 📋 Projektübersicht

Dieses Projekt zeigt, wie man eine dynamische, datengesteuerte Website mit statischen Webtechnologien erstellt. Studierende lernen:

* Semantische Strukturierung mit HTML5
* Responsive Designs mit Bootstrap 5
* Eigene CSS-Stile und Animationen
* Datenmanipulation mit JavaScript
* Datenvisualisierung mit Chart.js
* DOM-Manipulation und Ereignisbehandlung

## ✨ Funktionen

### 1. **Dashboard-Statistiken**

* Gesamtanzahl der Filme
* Durchschnittliche Bewertung aller Filme
* Gesamte Laufzeit (in Stunden)
* Beliebtestes Genre
* Animierte Zähleffekte

### 2. **Datenvisualisierung**

* Genreverteilung (Donut-Diagramm)
* Bewertungsverteilung (Balkendiagramm)
* Interaktive Diagramme mit Chart.js

### 3. **Filmauswahl-Anzeige**

* Responsives Rasterlayout
* Filmkarten mit Bewertung, Jahr, Genre und Laufzeit
* Hover-Effekte und Animationen
* Symbolbasierte visuelle Elemente

### 4. **Interaktive Filterung & Sortierung**

* Echtzeitsuche
* Filter nach Genre
* Sortierung nach Titel, Jahr oder Bewertung
* Dynamische Inhaltsaktualisierung

### 5. **Responsives Design**

* Mobile-optimiertes Layout
* Bootstrap-Rastersystem
* Passt sich allen Bildschirmgrößen an

## 🗂️ Dateistruktur

```
movie-database/
├── index.html          # Haupt-HTML-Datei
├── css/
│   └── style.css      # Benutzerdefiniertes CSS
├── js/
│   ├── data.js        # Filmdaten (25 Filme)
│   └── main.js        # Haupt-JavaScript-Funktionalität
└── README.md          # Projektdokumentation
```

## 🚀 Ausführen des Projekts

1. **Lade alle Projektdateien herunter** und behalte die Ordnerstruktur bei.
2. **Öffne `index.html`** in einem modernen Webbrowser (Chrome, Firefox, Safari, Edge).
3. **Kein Server erforderlich** – es handelt sich um eine statische Website!

Alternativ kannst du einen lokalen Server nutzen:

```bash
# Mit Python
python -m http.server 8000

# Mit Node.js (falls http-server installiert ist)
npx http-server
```

## 💻 Verwendete Technologien

### HTML5

* Semantische Elemente (`<section>`, `<nav>`, `<footer>`)
* Korrekte Dokumentstruktur
* Barrierefreiheitselemente

### Bootstrap 5.3.2

* Rastersystem für responsives Layout
* Navigationskomponenten
* Formularelemente
* Utility-Klassen
* Vorgefertigte Komponenten

### CSS3

* Benutzerdefinierte Variablen (CSS-Variablen)
* Flexbox- und Grid-Layouts
* Animationen und Übergänge
* Responsives Design mit Media Queries
* Moderne Styling-Techniken

### JavaScript (ES6+)

* Arrow Functions
* Array-Methoden (map, filter, reduce, sort)
* Template Literals
* DOM-Manipulation
* Ereignislistener
* Datenverarbeitung und Filterung

### Chart.js 4.4.0

* Donut-Diagramm für Genreverteilung
* Balkendiagramm für Bewertungsverteilung
* Responsives Diagramm-Layout

### Font Awesome 6.4.0

* Icons im gesamten Interface
* Visuelle Aufwertung

## 📊 Datenstruktur

Jedes Filmobjekt enthält:

```javascript
{
    id: 1,                    // Eindeutige ID
    title: "Filmtitel",       // Titel des Films
    year: 1994,               // Erscheinungsjahr
    genre: "Drama",           // Genre
    rating: 9.3,              // Bewertung (von 10)
    runtime: 142,             // Laufzeit in Minuten
    director: "Regisseur",    // Name des Regisseurs
    description: "...",       // Filmbeschreibung
    poster: "🎬"              // Emoji-Icon
}
```

Der Datensatz enthält **25 beliebte Filme** aus verschiedenen Genres:

* Drama
* Krimi
* Action
* Sci-Fi
* Thriller
* Animation

## 🎯 Lernziele

### HTML/CSS-Fähigkeiten

* ✅ Semantische HTML5-Struktur
* ✅ Integration des Bootstrap-Frameworks
* ✅ Individuelles CSS-Styling
* ✅ Prinzipien des responsiven Designs
* ✅ CSS-Animationen und -Übergänge

### JavaScript-Fähigkeiten

* ✅ Arbeiten mit Arrays und Objekten
* ✅ Datenmanipulation (Filtern, Sortieren, Suchen)
* ✅ DOM-Manipulation
* ✅ Ereignisbehandlung
* ✅ Dynamische Inhaltserzeugung
* ✅ Erstellung und Konfiguration von Diagrammen

### Webentwicklungskonzepte

* ✅ Trennung von Struktur, Stil und Logik (HTML/CSS/JS)
* ✅ Saubere Codeorganisation
* ✅ Benutzerfreundliches Design
* ✅ Interaktive Webanwendungen

## 🔧 Anpassungsmöglichkeiten

### Einfache Änderungen

1. **Weitere Filme hinzufügen** – Bearbeite `js/data.js`
2. **Farben ändern** – Passe CSS-Variablen in `css/style.css` an
3. **Neue Statistiken hinzufügen** – Ergänze das Dashboard
4. **Andere Icons verwenden** – Ersetze Font Awesome-Icons oder Emojis

### Erweiterte Verbesserungen

1. **localStorage hinzufügen** – Benutzerpräferenzen speichern
2. **Dark Mode** – Umschaltbare Themes implementieren
3. **Erweiterte Filter** – Filter nach Jahr oder Bewertungsspanne
4. **Filmdetails im Modal anzeigen** – Popup mit vollständigen Infos
5. **Exportfunktion** – Daten als CSV exportieren
6. **Benutzerbewertungen** – Nutzer eigene Bewertungen hinzufügen lassen
7. **Watchlist-Funktion** – Filme für später markieren

## 📝 Codebeispiele

### Dynamische Filmkartenerstellung

```javascript
function createMovieCard(movie, index) {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4 col-xl-3';
    col.innerHTML = `
        <div class="movie-card">
            <!-- Karteninhalt -->
        </div>
    `;
    return col;
}
```

### Echtzeit-Suche & Filterung

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

### Animierte Statistiken

```javascript
function animateValue(id, start, end, duration) {
    // Sanfte Zählanimation für Zahlen
}
```

## 🎨 Designmerkmale

* **Farbschema:** Moderner Violett/Blau-Verlauf mit Akzentfarben
* **Typografie:** Klare, gut lesbare Segoe UI-Schrift
* **Karten:** Erhöhte Karten mit Hover-Effekt
* **Icons:** Font Awesome & Emojis für visuelle Attraktivität
* **Abstände:** Konsistente Nutzung von Bootstrap-Abständen
* **Animationen:** Weiche Übergänge und Fade-in-Effekte

## 🐛 Fehlerbehebung

**Diagramme werden nicht angezeigt?**

* Browserkonsole auf Fehler prüfen
* Sicherstellen, dass Chart.js korrekt geladen wird
* Internetverbindung für CDN prüfen

**Filterung funktioniert nicht?**

* JavaScript-Konsole prüfen
* Sicherstellen, dass `data.js` vor `main.js` geladen wird
* Überprüfen, ob das `movies`-Array korrekt definiert ist

**Layout-Probleme auf mobilen Geräten?**

* Browsercache leeren
* Bootstrap-CSS prüfen
* `<meta viewport>`-Tag kontrollieren

## 📚 Lernressourcen

* [Bootstrap-Dokumentation](https://getbootstrap.com/docs/5.3/)
* [Chart.js-Dokumentation](https://www.chartjs.org/docs/)
* [MDN Web Docs](https://developer.mozilla.org/)
* [JavaScript Array-Methoden](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## 🎓 Bewertungskriterien

Bewertet werden kann nach:

* **Codequalität** (20%) – Sauber, kommentiert, strukturiert
* **Funktionalität** (30%) – Alle Funktionen arbeiten korrekt
* **Design** (20%) – Visuelle Attraktivität & Benutzererlebnis
* **Responsivität** (15%) – Anpassung an Mobil- & Desktopgeräte
* **Datenmanagement** (10%) – Richtige Datenstruktur & -verarbeitung
* **Kreativität** (5%) – Eigene Erweiterungen oder Ideen

## 👩‍💻 Über dieses Projekt

Erstellt als Lehrbeispiel für Studierende der Webentwicklung.
Dieses Projekt zeigt Best Practices in:

* Moderner Webentwicklung
* Sauberem, wartbarem Code
* Responsivem Design
* Interaktiven Benutzeroberflächen
* Datenvisualisierung

## 📄 Lizenz

Dieses Projekt ist **frei für Bildungszwecke** nutzbar.
Es darf nach Belieben geändert und angepasst werden.


