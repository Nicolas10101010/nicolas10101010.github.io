# Styleguide

## Farbpalette

Definiert als CSS-Custom-Properties im :root-Selektor:

- **--rock-color:** `#e74c3c`
- **--pop-color:** `#f39c12`
- **--jazz-color:** `#3498db`
- **--hiphop-color:** `#9b59b6`
- **--electronic-color:** `#1abc9c`
- **--klassisch-color:** `#e67e22`
- **--indie-color:** `#2ecc71`
- **--metal-color:** `#7f8c8d`
- **--latin-color:** `#e84393`
- **--lofi-color:** `#74b9ff`
- **--country-color:** `#d35400`
- **--rnb-color:** `#8e44ad`
- **--blues-color:** `#4a90e2`
- **--reggae-color:** `#27ae60`
- **--funk-color:** `#f39c12`
- **--gospel-color:** `#9b59b6`
- **--ska-color:** `#80a4c0`
- **--disco-color:** `#e84393`
- **--punk-color:** `#c0392b`
- **--ambient-color:** `#16a085`

## Typografie

- **Body-Text:** `font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif`; `line-height: 1.6`
- **Überschriften:**
  - **H2** (Artikeldetail): `font-size: 2.2rem`; `font-weight: 800`
  - **H3** (Artikel-Grid): `font-size: 2rem`; `font-weight: 600`
- **Genre-spezifische Schriftarten:** Je nach Genre in `article.css` festgelegt (z. B. "Rock Salt", "Playfair Display" etc.)

## Abstände

- **Grundabstand:** `1rem` als Basis für `gap`, `padding` und `margin`
- **Container-Padding:**
  - `main { padding: 0 1rem; }`
  - `header`, `footer`: `padding: 1rem 2rem;`
- **Abschnitts-Margin:** `section { margin: 2rem 0; }`

## Grid-System

- **Responsive Grid:**
  ```css
  .articles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1rem;
  }
  ```
  Die Spaltenzahl passt sich automatisch der Containerbreite an.
- **Maximale Breite:**
  ```css
  main {
    max-width: 1200px;
    margin: 0 auto;
  }
  ```
  Zentriert den Inhalt und begrenzt die Breite auf 1200px.

## Google Fonts

**Benutzte Google Fonts:**

- **Rock Salt:** Rock-Genre
- **Montserrat:** Pop-Genre, Indie-Genre, RnB-Genre
- **Playfair Display:** Jazz-Genre
- **Bebas Neue:** Hip-Hop-Genre
- **Orbitron:** Electronic-Genre
- **Libre Baskerville:** Klassisch-Genre
- **Poppins:** Indie-Genre, RnB-Genre
- **Metal Mania:** Metal-Genre
- **Roboto Slab:** Klassisch-Genre
- **Comfortaa:** Lo-Fi-Genre
- **Amatic SC:** Country-Genre
- **Raleway:** RnB-Genre
- **Merriweather:** Blues-Genre
- **Fredericka the Great:** Reggae-Genre
- **Shrikhand:** Funk-Genre
- **Great Vibes:** Gospel-Genre
- **Anton:** Ska-Genre
- **Monoton:** Disco-Genre
- **Bangers:** Punk-Genre
- **Exo 2:** Ambient-Genre
