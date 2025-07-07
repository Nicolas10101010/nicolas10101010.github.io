# Musictasting Blog – Ausführliche Projektdokumentation

## Inhaltsverzeichnis

1. [Intro](#intro)
2. [Planung & Vorbereitung](#planung--vorbereitung)
3. [Erstellung der Wireframes](#erstellung-der-wireframes)
   - [Mobile Version](#mobile-version)
   - [Tablet Version](#tablet-version)
   - [Desktop Version](#desktop-version)
4. [Integration von KI](#integration-von-ki)
5. [Zusätzliche Features](#zusätzliche-features)
6. [Reflexion & Verbesserungspotential](#reflexion--verbesserungspotential)
7. [Design & Styleguide](#design--styleguide)

---

## **Intro**

Für unser Abschlussprojekt hatten wir 3 Möglichkeiten: 1. ein Blog, 2. ein Portfolio und 3. ein Webshop.
Ich habe mich dazu entschieden einen Blog zu machen, da man eine viel grössere Auswahl von Themen hat über die man Blogs schreiben kann.
Zuerst hatte ich eine Idee, wie ein Kolleg von mit eine Website über Planeten zu machen, aber das schien mir zu langweilig.
Danach kam mir die Idee von Musictasting, eine Website bei der man viele verschiedene Genres von Musik kennenlernen kann.
Ich finde diese Idee super, da viele auf die Frage "Welche Genres hörst du am liebsten?" entweder die Antwort "Ich mag alle" (Unrealistisch) oder "Keine Ahnung" geben. Bei Musictasting kann man auch die Genres filtern um Genres zu finden, die eher zu seinem Geschmack passen. Ausserdem habe ich auch noch 2 Versionen der Geschichten der jeweiligen Genres hinzugefügt, falls man ein besseres Verständnis zu dem Genre haben will.

---

## **Planung & Vorbereitung**

_Diese Schritte gehen davon aus, den Projektauftrag schon gelesen und verstanden zu haben._

1. **Wireframes erstellen**

   - Leider habe ich erst später bemerkt, wie hilfreich dieser Schritt sein kann, besonders bei Tablets und Handys.

2. **Ordnerstruktur erstellen**

   - Zunächst wollte ich meine Ordnerstruktur nach dem Atomic Design-Prinzip organisieren, aber ich stellte fest, dass dies zu aufwendig gewesen wäre und letztlich nicht notwendig war. Bei GitHub Pages muss `index.html` im Root-Verzeichnis liegen.

3. **Dateien erstellen**

   - Basierend auf dem Projekt wusste ich, dass mindestens 4 HTML-Dateien benötigt werden (Startseite, Themen, Artikel und Kontakt). Daher mussten auch 4 CSS-Dateien erstellt werden, um die spezifischen UI-Komponenten jeder Seite zu stylen. Zusätzlich war eine allgemeine CSS-Datei wichtig, um Redundanzen zu vermeiden.

4. **Grundstruktur der HTML-Dateien**

   - Die Verknüpfung zwischen den Dateien wurde mit einem Header und einigen grundlegenden Texten hergestellt.

5. **Erneutes Überprüfen des Projektauftrags**

   - Durch meine Erfahrungen mit anderen Projekten habe ich gelernt, wie wichtig es ist, regelmässig den Projektauftrag zu überprüfen. 8 von 10 Mal habe ich etwas vergessen und vor der Präsentation den "Oh Shit"-Moment erlebt. Diesmal habe ich mehrfach die Kriterienliste und den Projektauftrag durchgesehen, um sicherzugehen, dass ich nichts übersehe.

6. **Implementierung des Designs**

   - Hier kam der schwierige Teil: Design. Ich entschied mich, zunächst ein Grundgerüst mit KI zu erstellen und dann viele Anpassungen mit den Entwicklertools im Browser vorzunehmen. Wichtig dabei war, immer genügend Kontext zu geben, da die KI ansonsten Änderungen vornehmen könnte, die das Projekt zurückwerfen.

**Wichtig:** Dieses Repository wurde vorübergehend erstellt, um meine Website auf GitHub Pages hochladen zu können. Regelmässige Commits habe ich in meinem M293-Repository gemacht.

---

## **Erstellung der Wireframes**

Die Wireframes wurden zunächst in **draw.io** skizziert und dann in Markdown mithilfe von Screenshot eingebunden.

#### Mobile Version

#### Tablet Version

#### Desktop Version

---

## **Integration von KI**

#### Spezifischer Einsatz von KI

| Tool     | Einsatzgebiet                | Prompt-Beispiel                                 |
| -------- | ---------------------------- | ----------------------------------------------- |
| Windsurf | CSS-Variablen für Styleguide | "Erkläre mir diesen Teil vom Code"              |
| ChatGPT  | Content-Redaktion, Texte     | "Schreibe eine kurze Einführung zum Jazz-Genre" |
| Deepseek | Korrektur von Code/Bugfixing | "Wie kann ich dieses Problem lösen?"            |

- **Prozess**: Zuerst die Frage formulieren und Kontext geben → KI-Antwort erhalten → manuelle Anpassung → Integration.

#### Genereller Einsatz von KI

Ich will ehrlich sein - bei diesem Projekt habe ich mehr KI benutzt als mir lieb ist. Wegen schlechter Planung habe ich erst viel später angefagen wirklich an diesen Projekt zu arbeiten, was mich sehr belastet hat, da wir am Tag der Abgabe auch noch eine andere Prüfung haben. Man kann sagen ich habe auch viel gelernt, darunter aber viel mehr wie man eine KI richtig benutzt anstatt HTML und CSS. Im Endeffekt wird mir das korrekte Benutzen von KI sicher auch sehr viel helfen, aber ich hätte gerne die HTML und CSS kenntnissse, da es mir echt spass macht.
Für das Code generieren habe ich Windsurf eher weniger benutzt, auch weil ich mit Copilot sehr schlechte Erfahrung gemacht habe.
Ich habe KI auch für die Kontrollierung der Anforderungen in diesem Projekt und das Bugfixing benutzt, auch wenn das Bugfixing eine Achterbahn war, es gab auch Momente, bei denen ich frühere Projekte anschauen musste um ein Bug zu beheben, oder eben die Entwicklertools.

---

## **Zusätzliche Features**

1. **Like-System** (Web Storage API)
2. **Kommentarfunktion** (LocalStorage)
3. **Light Mode**
4. **Lazy Loading** (wegen Bugfixing)
5. **Slider-Implementationen**
6. **Spezifische Fonts und Farben für Genres**

---

## **Reflexion & Verbesserungspotential**

Es war ein sehr cooles Projekt, das viel Raum für Kreativität liess. Das Ziel war nicht, die komplexeste Website zu erstellen, sondern eine, die mir persönlich gefällt. Auch wenn ich im Nachhinein erkannt habe, dass ich viel mit KI gearbeitet habe (hauptsächlich aufgrund von Zeitdruck), denke ich, dass ich viel aus diesem Projekt gelernt habe. Die wichtigste Erkenntnis war, wie wichtig es ist, mit den Entwicklertools zu arbeiten, um Anpassungen schnell zu testen, ohne den eigenen Code zu verändern.

---

## **Design & Styleguide**

Das meiste CSS in meinem Projekt war das Styling der verschiedenen Fonts und Farben der Genres. Wenn du meine Website angeschaut hast, dann weisst du was ich meine.
Ich wollte für jedes Genre eine eigene Font und Farbe benutzen, welche das Genre so darstellen wie es auch ist - ein sehr mühsamer Prozess.
Die Fonts habe ich von fonts.googleapis.com genommen, zuerst habe ich bei den vorinstallierten Fonts gesucht, aber keine waren so wie ich sie jetzt importieren und auf der Website darstelle.

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

---

Dieser Text wurde von mir geschieben und danach mit ChatGPT korrigiert und besser formatiert.
