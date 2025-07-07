# Musictasting Blog – Ausführliche Projektdokumentation

## Inhaltsverzeichnis

1. [Projektübersicht](#projektübersicht)
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

### 1. Projektübersicht

---

### 2. Planung & Vorbereitung

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

### 3. Erstellung der Wireframes

Die Wireframes wurden zunächst in **draw.io** skizziert und dann in Markdown mithilfe von Screenshot eingebunden.

#### Mobile Version

#### Tablet Version

#### Desktop Version

---

### 4. Integration von KI

#### Spezifischer Einsatz von KI

| Tool     | Einsatzgebiet                | Prompt-Beispiel                                 |
| -------- | ---------------------------- | ----------------------------------------------- |
| Windsurf | CSS-Variablen für Styleguide | "Erkläre mir diesen Teil vom Code"              |
| ChatGPT  | Content-Redaktion, Texte     | "Schreibe eine kurze Einführung zum Jazz-Genre" |
| Deepseek | Korrektur von Code/Bugfixing | "Wie kann ich dieses Problem lösen?"            |

- **Prozess**: Zuerst die Frage formulieren und Kontext geben → KI-Antwort erhalten → manuelle Anpassung → Integration.

#### Genereller Einsatz von KI

---

### 5. Zusätzliche Features

1. **Like-System** (Web Storage API)
2. **Kommentarfunktion** (LocalStorage)
3. **Light Mode**
4. **Lazy Loading** (wegen Bugfixing)
5. **Slider-Implementationen**
6. **Spezifische Fonts und Farben für Genres**

---

### 6. Reflexion & Verbesserungspotential

Es war ein sehr cooles Projekt, das viel Raum für Kreativität liess. Das Ziel war nicht, die komplexeste Website zu erstellen, sondern eine, die mir persönlich gefällt. Auch wenn ich im Nachhinein erkannt habe, dass ich viel mit KI gearbeitet habe (hauptsächlich aufgrund von Zeitdruck), denke ich, dass ich viel aus diesem Projekt gelernt habe. Die wichtigste Erkenntnis war, wie wichtig es ist, mit den Entwicklertools zu arbeiten, um Anpassungen schnell zu testen, ohne den eigenen Code zu verändern.

---

### 7. Design & Styleguide

<bild>

---

Dieser Text wurde von mir geschieben und danach mit ChatGPT korrigiert und besser formatiert.
