# Musictasting Blog – Ausführliche Projektdokumentation

## Inhaltsverzeichnis

1. [Einführung & Motivation](#einführung--motivation)
2. [Gedankengang & Planungsphase](#gedankengang--planungsphase)
3. [Wireframes](#wireframes)
   - Mobile
   - Tablet
   - Desktop
4. [Implementierung im Detail](#implementierung-im-detail)
   - Seitenstruktur
   - Grid-Layout & Responsive Design
   - Dynamische Inhalte mit JavaScript
   - Formulare & Interaktivität
   - Dark Mode & Extras
5. [KI-Einsatz und Workflow](#ki-einsatz-und-workflow)
6. [Erweiterte Features](#erweiterte-features)
7. [Reflexion & Verbesserungsmöglichkeiten](#reflexion--verbesserungsmöglichkeiten)
8. [Bekannte Bugs & ToDos](#bekannte-bugs--todos)
9. [Styleguide](#styleguide)

---

## Einführung & Motivation

Als leidenschaftlicher Musikfan wollte ich eine Plattform schaffen, die Nutzer\:innen spielerisch durch die Vielfalt der Musikgenres führt. **Musictasting** entstand aus dem Bedürfnis heraus, unterschiedliche Stile auf einen Blick vergleichen zu können und gleichzeitig einen modernen Webauftritt zu gestalten, der durch KI-gestützte Tools optimiert wird.

- **Warum „Musictasting“?**
  - Analog zum Wein-Tasting: kleine Kostproben verschiedener Genres ermöglichen den schnellen Überblick.
  - Fokus auf Schnelligkeit, Übersichtlichkeit und ästhetisches Design.
  - Kombination aus technischer UX/UI-Optimierung und inhaltlicher Tiefe.

---

## Gedankengang & Planungsphase

1. **Zielgruppenanalyse**
   - Hauptziel: Musikinteressierte zwischen 16 und 50 Jahren.
   - Sekundär: Studierende und Berufstätige, die nebenbei neue Musik entdecken möchten.
2. **Feature-Definition**
   - Startseite: Neueste & beliebteste Artikel, Newsletter-Anmeldung.
   - Themenübersicht: Filterbare Genre-Übersicht.
   - Detailseiten: Artikeltexte, Bilder, Videos, Autor\:innenprofil.
   - Kontaktseite: Kontaktformular mit Betreff-Dropdown.
3. **Technik-Stack**
   - **HTML & CSS**: Alles selbst geschrieben, keine Frameworks.
   - **JavaScript**: Dynamische Inhaltsbefüllung (`article.js`, `topics.js`), Web Storage API.
   - **KI-Tools**: Cursor und Windsurf für Boilerplate-Generierung und UI-Vorschläge.
4. **Workflow**
   - Git-Repository strukturiert: `/html`, `/css`, `/js`, `/wireframes`, `/assets`.
   - Branching für Features: `feature-wireframes`, `feature-ki-docs`, `feature-darkmode`, etc.

---

## Wireframes

Die Wireframes wurden zunächst in **draw\.io** skizziert und dann in Markdown eingebunden. Sie veranschaulichen jeweils Layout, Navigation und Content-Blöcke.

### Mobile

- **Header**: Burger-Menü, Logo, Newsletter-Icon.
- **Artikel-Grid**: Einspaltiges Scroll-Layout.
- **Footer**: Social-Media-Links minimiert.

### Tablet

- **Header**: Hamburger-Icon entfällt, horizontale Nav.
- **Grid**: Zwei Spalten für Artikel-Vorschauen.
- **Kontaktformular**: Vollbreite mit Dropdown.

### Desktop

- **Header**: Vollständige Navigation mit Logo zentriert.
- **Grid**: Drei Spalten für Artikel.
- **Seitenleiste**: Thema/Favoriten-Widget.

---

## Implementierung im Detail

### 1. Seitenstruktur

- Dateien: `index.html`, `topics.html`, `article.html`, `contact.html`
- Alle Seiten verwenden semantische Elemente: `<header>`, `<main>`, `<footer>`.
- Gemeinsame Navigation per `nav.html` als Include (Server-seitiges Build).

### 2. Grid-Layout & Responsive Design

- **CSS-Grid** in `.articles-grid`:
  ```css
  .articles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1rem;
  }
  ```
- **Media Queries**:
  ```css
  @media (max-width: 600px) {
    .articles-grid {
      grid-template-columns: 1fr;
    }
  }
  @media (min-width: 601px) and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  ```

### 3. Dynamische Inhalte mit JavaScript

- ``: Objekt mit allen Genres als Keys (inkl. Hip-Hop, Country, Blues, Latin, RnB, Lo-Fi).
- **Param-Auswertung**:
  ```js
  const params = new URLSearchParams(window.location.search);
  const genre = params.get("genre") || "Rock";
  const data = contentMap[genre];
  ```
- **Inhaltsbefüllung**: Text, Bilder (`<img>`), Videos (`<video controls>`), Autor\:innen-Bereich.

### 4. Formulare & Interaktivität

- **Newsletter**: Einfaches Formular mit Mailchimp-Integration (Action-URL).
- **Kontakt**: `<select>` für Betreff, `fetch()`-POST zu `contact.php`.
- **Like-System**: LocalStorage, jeder Artikel-Key speichert Anzahl und User-Flag.
- **Kommentare**: Minimaler JSON-Store in `localStorage`, Kommentar-Widget unter `<article>`.

### 5. Dark Mode & Extras

- **Dark Mode** per CSS-Variante und Toggle-Button:
  ```js
  document.body.classList.toggle("dark-mode");
  ```
- **Optional**: Sticky-Sidebar mit Top-Genres.

---

## KI-Einsatz und Workflow

| Tool     | Einsatzgebiet                | Prompt-Beispiel                                 | Ergebnis                           |
| -------- | ---------------------------- | ----------------------------------------------- | ---------------------------------- |
| Cursor   | HTML-Boilerplate             | "Erzeuge ein responsive Grid-Layout-HTML"       | Grundstruktur in `index.html`      |
| Windsurf | CSS-Variablen für Styleguide | "Erzeuge Farbpaletten-Variablen für Styleguide" | `:root`-Definition in `styles.css` |
| ChatGPT  | Content-Redaktion, Texte     | "Schreibe kurze Einführung zu Jazz-Genre"       | Inhalte für `contentMap.Jazz`      |

- **Prozess**: Zuerst Prompt formuliert → KI-Antwort geprüft → manuelle Anpassung → Integration.
- **Dokumentation**: Alle Prompts und Outputs in `ki-documentation.md` per Markdown geloggt.

---

## Erweiterte Features

1. **Like-System** (Web Storage API)
2. **Kommentarfunktion** (LocalStorage)
3. **Dark Mode**
4. **Sticky Genre-Sidebar**
5. **Lazy Loading (planned)**

---

## Reflexion & Verbesserungsmöglichkeiten

- **Performance**: Lazy Loading für Bilder & Videos fehlt, könnte LCP verbessern.
- **Accessibility**: ARIA-Labels und Tastaturnavigation optimieren.
- **Testing**: Automatisierte Tests (Lighthouse, aXe) integrieren.
- **Internationalisierung**: Mehrsprachigkeit (i18n) vorbereiten.

---

## Bekannte Bugs & ToDos

| Bug                                    | Status   | ToDo                                     |
| -------------------------------------- | -------- | ---------------------------------------- |
| Leere Detailseiten für fehlende Genres | offen    | `contentMap` um alle 20 Genres erweitern |
| Dropdown resetet nach Submit           | behoben? | JS-Reset-Funktion prüfen                 |
| Responsive-Bruch bei <320px            | offen    | Media Query anpassen                     |

---

## Styleguide

<bild>
