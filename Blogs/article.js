const contentMap = {
  Rock: {
    shortDesc: "Kraftvoll, verzerrt und rebellisch.",
    intro:
      "Rockmusik ist mehr als nur ein Genre - es ist eine Lebenseinstellung. Mit seinen kraftvollen Gitarrenriffs und energiegeladenen Performances hat Rock Generationen von Musikfans geprägt.",
    shortHistory:
      "In den 1950ern aus Blues und Rock ’n’ Roll entstanden, revolutionierte Rock die Musikwelt.<br>Elvis Presley und Chuck Berry legten den Grundstein für eine globale Bewegung.<br>Schon bald folgten Bands wie The Beatles, die das Genre international bekannt machten.",
    history:
      "Rock entstand in den 1950er-Jahren als Verschmelzung von Blues, Country und Rhythm & Blues.<br>Pioniere wie Chuck Berry und Little Richard prägten den frühen Sound.<br>In den 1960ern explodierte das Genre mit der British Invasion (The Beatles, Rolling Stones) und entwickelte sich weiter zu Hard Rock (Led Zeppelin) und Progressive Rock (Pink Floyd).<br>Die 1970er brachten Glam Rock (David Bowie) und Punk (Sex Pistols), während die 1980er den Aufstieg von Heavy Metal (Metallica) und Alternative Rock (R.E.M.) sahen.<br>In den 1990ern dominierten Grunge (Nirvana) und Britpop (Oasis) die Szene.<br>Bis heute bleibt Rock ein vielfältiges und einflussreiches Genre, in dem sich ständig neue Substile herausbilden.",
    musicians: ["The Beatles", "Led Zeppelin", "Queen", "AC/DC", "Nirvana"],
    image: "Blogs/Images/rock.png",
    author: { name: "Nicolas Manser", photo: "Blogs/Images/Nicolas.png" },
  },

  Pop: {
    shortDesc: "Eingängig, melodisch und kommerziell.",
    intro:
      "Popmusik ist das pulsierende Herz der Mainstream-Musikszene. Mit ihren eingängigen Melodien und universell ansprechenden Texten dominiert sie die Charts weltweit.",
    shortHistory:
      "Pop entstand in den 1950ern aus Rock ’n’ Roll und wuchs rasch zum globalen Phänomen heran.<br>Die Beatles, Michael Jackson und Madonna prägten die ersten Wellen.<br>Heute ist Pop in unzähligen Stilen und Fusionen präsent.",
    history:
      "Pop-Musik entwickelte sich in den 1950ern aus Rock ’n’ Roll und setzt auf eingängige Melodien und Hooklines.<br>Die 1960er sahen den Aufstieg von Boybands und Girlgroups (The Beatles, The Supremes), während die 1970er Disco (ABBA) und Glam Pop (David Bowie) brachten.<br>Die 1980er wurden von Superstars wie Michael Jackson und Madonna geprägt, die Musikvideos als künstlerisches Medium etablierten.<br>In den 1990ern dominierten Teen Pop (Britney Spears) und Boybands (Backstreet Boys), die global tourten und Millionen Alben verkauften.<br>Die 2000er setzten auf digitale Produktion und Auto-Tune (Lady Gaga), bevor Pop heute oft mit Hip-Hop und EDM verschmilzt.<br>Stars wie Taylor Swift und The Weeknd prägen das heutige Bild, während Pop stets den Zeitgeist widerspiegelt.",
    musicians: [
      "Madonna",
      "Michael Jackson",
      "Taylor Swift",
      "Ariana Grande",
      "Beyoncé",
    ],
    image: "Blogs/Images/pop.png",
    author: { name: "Nicolas Manser", photo: "Blogs/Images/Nicolas.png" },
  },

  Jazz: {
    shortDesc: "Improvisation, Swing und Harmonie.",
    intro:
      "Jazz ist die Kunst der spontanen Kreation - eine musikalische Sprache, die Freiheit und Disziplin in perfekter Balance vereint.",
    shortHistory:
      "Um 1900 in New Orleans geboren, entwickelte sich Jazz schnell zur ersten amerikanischen Kunstform.<br>Louis Armstrong und Duke Ellington machten Swing weltweit populär.<br>Seine Improvisationskultur inspiriert Musiker bis heute.",
    history:
      "Jazz entstand um 1900 in New Orleans als Verschmelzung afrikanischer Rhythmen, europäischer Harmonik und amerikanischer Volksmusik.<br>Der frühe Dixieland-Jazz führte in den 1920ern zum Swing (Louis Armstrong, Duke Ellington), der ganz Amerika eroberte.<br>In den 1940ern brachten Bebop-Pioniere wie Charlie Parker komplexe Harmonien ein, während die 1950er Cool Jazz (Miles Davis) und Hard Bop etablierten.<br>Die 1960er sahen Free Jazz (John Coltrane) und Fusion (Herbie Hancock), die Grenzen der Improvisation sprengten.<br>In späteren Jahrzehnten verschmolz Jazz mit Hip-Hop, Funk und Elektronik, was neue Subgenres entstehen ließ.<br>Jazz bleibt eine lebendige, sich ständig weiterentwickelnde Kunstform mit globaler Anhängerschaft.",
    musicians: [
      "Louis Armstrong",
      "Miles Davis",
      "John Coltrane",
      "Ella Fitzgerald",
      "Duke Ellington",
    ],
    image: "Blogs/Images/jazz.png",
    author: { name: "Nicolas Manser", photo: "Blogs/Images/Nicolas.png" },
  },

  "Hip-Hop": {
    shortDesc: "Rhymes, Beats und Street Art.",
    intro:
      "Hip-Hop ist mehr als Musik - es ist eine Kultur, die Rap, DJing, Breakdance und Graffiti vereint und weltweit Einfluss auf Mode, Sprache und Lebensstil nimmt.",
    shortHistory:
      "In den 1970ern in der Bronx entstanden, wurde Hip-Hop zum Sprachrohr junger Urban-Communities.<br>DJ Kool Herc erfand das Breakbeat-DJing, während Grandmaster Flash das Scratching populär machte.<br>Schon bald erreichten Hip-Hop-Beats die Clubs weltweit.",
    history:
      "Hip-Hop entstand in den 1970ern in der Bronx, New York, als kreative Antwort auf soziale Ungerechtigkeit und ökonomische Not.<br>DJ Kool Herc legte mit Breakbeat-Sets den Grundstein, MCs wie Grandmaster Flash perfektionierten den Rap-Stil.<br>Die 1980er brachten Conscious Rap (Public Enemy) und Gangsta Rap (N.W.A), die gesellschaftspolitische Themen adressierten.<br>In den 1990ern erlebte das Genre sein Goldenes Zeitalter mit Tupac, Notorious B.I.G. und Outkast, die lyrische Komplexität und musikalische Vielfalt zeigten.<br>Heute dominiert Hip-Hop die globale Popkultur mit Künstlern wie Kendrick Lamar und Drake, während Untergrund-Szenen stetig neue Sounds hervorbringen.",
    musicians: [
      "Tupac",
      "Notorious B.I.G.",
      "Eminem",
      "Kendrick Lamar",
      "Nicki Minaj",
    ],
    image: "Blogs/Images/hiphop.png",
    author: { name: "Nicolas Manser", photo: "Blogs/Images/Nicolas.png" },
  },

  Electronic: {
    shortDesc: "Synths, Samples und Clubsound.",
    intro:
      "Elektronische Musik hat die Klanglandschaft des 21. Jahrhunderts revolutioniert - von experimentellen Studios bis zu riesigen Festival-Bühnen.",
    shortHistory:
      "Aus den Studios der 1960er hervorgegangen, eroberte elektronische Musik zunächst Avantgarde-Kreise.<br>Mit House und Techno in den 1980ern kamen Clubs und Raves hinzu.<br>EDM machte sie weltweit zum Mainstream.",
    history:
      "Elektronische Musik nutzt Synthesizer, Drumcomputer und digitale Effekte.<br>Pioniere wie Karlheinz Stockhausen experimentierten bereits in den 1950ern mit rein elektronischen Klängen.<br>Die 1970er brachten Disco und Krautrock (Kraftwerk), während die 1980er den Aufstieg von House (Frankie Knuckles) und Techno (Derrick May) erlebten.<br>In den 1990ern entstanden Trance (Paul van Dyk) und Drum’n’Bass (Roni Size), die Clubkultur weltweit prägten.<br>Im 21. Jahrhundert wurde EDM (Daft Punk, Calvin Harris) zum Pop-Phänomen, während experimentelle Acts die Grenzen elektronischer Klänge weiter verschieben.",
    musicians: [
      "Daft Punk",
      "Deadmau5",
      "Calvin Harris",
      "Skrillex",
      "The Prodigy",
    ],
    image: "Blogs/Images/electronic.png",
    author: { name: "Nicolas Manser", photo: "Blogs/Images/Nicolas.png" },
  },

  Klassisch: {
    shortDesc: "Von Barock bis Romantik.",
    intro:
      "Klassische Musik umfasst Jahrhunderte menschlicher Kreativität - von den komplexen Fugen Bachs bis zu den gewaltigen Symphonien Mahlers.",
    shortHistory:
      "Über 1000 Jahre Musikgeschichte, die von mittelalterlichen Chorälen bis zu modernen Orchesterwerken reicht.<br>Bach, Mozart und Beethoven schufen Meisterwerke, die bis heute begeistern.<br>Klassik prägt die westliche Musikkultur nachhaltig.",
    history:
      "Klassische Musik umfasst Zeitalter wie Barock, Wiener Klassik und Romantik.<br>Im Barock (1600–1750) schufen Bach und Vivaldi komplexe Fugen und Konzerte.<br>Die Wiener Klassik (1750–1820) mit Mozart, Haydn und Beethoven brachte die Sinfonie zur Vollendung.<br>In der Romantik (1820–1900) stand emotionale Ausdruckskraft im Vordergrund (Chopin, Tschaikowsky).<br>Das 20. Jahrhundert brachte radikale Neuerungen (Stravinsky, Schönberg) und erweiterte Klangfarben.<br>Heute lebt klassische Musik in Konzertsälen weiter und inspiriert auch Filmkomponisten und moderne Ensembles.",
    musicians: ["Beethoven", "Bach", "Mozart", "Mahler", "Stravinsky"],
    image: "Blogs/Images/klassisch.png",
    author: { name: "Nicolas Manser", photo: "Blogs/Images/Nicolas.png" },
  },

  Indie: {
    shortDesc: "Unabhängig und experimentell.",
    intro:
      "Indie-Musik steht für kreative Freiheit jenseits des Mainstreams - roher Sound, ehrliche Texte und eine DIY-Einstellung prägen diese vielfältige Szene.",
    shortHistory:
      "Als Gegenbewegung zur kommerziellen Musikindustrie entstanden, brachte Indie seit den 1980ern wegweisende Künstler hervor.<br>R.E.M. und The Smiths prägten den frühen Sound.<br>Indie hat sich seither in zahllose Subgenres aufgespalten.",
    history:
      "Indie steht für Unabhängigkeit vom großen Plattenkonzern.<br>In den 1980ern begann es mit Post-Punk und College Rock (R.E.M., The Smiths).<br>Die 1990er sahen die Lo-Fi-Bewegung (Pavement) und Britpop (Oasis), die beide unterschiedliche Facetten von DIY zeigten.<br>Die 2000er brachten die Garage Rock Revival (The Strokes) und digitale Veröffentlichungen, die neue Wege öffneten.<br>Heute reicht Indie von Folk (Bon Iver) bis zu experimentellem Pop (St. Vincent), vereint durch künstlerische Autonomie und oft kleine Labels.",
    musicians: [
      "Arctic Monkeys",
      "The Strokes",
      "Vampire Weekend",
      "Tame Impala",
      "Florence + The Machine",
    ],
    image: "Blogs/Images/indie.png",
    author: { name: "Nicolas Manser", photo: "Blogs/Images/Nicolas.png" },
  },

  Metal: {
    shortDesc: "Heavy Riffs und extreme Kraft.",
    intro:
      "Metal ist die kraftvollste und intensivste Form von Rockmusik - mit verzerrten Gitarren, donnernden Drums und oft dunklen, epischen Themen.",
    shortHistory:
      "In den 1970ern aus Hard Rock entstanden, entwickelte sich Metal zu einem globalen Phänomen.<br>Black Sabbath und Led Zeppelin legten den Grundstein.<br>Bis heute schätzen Fans die rohe Energie und Virtuosität.",
    history:
      "Metal entstand Anfang der 1970er aus Hard Rock (Black Sabbath, Led Zeppelin).<br>In den 1980ern erlebte es Speed Metal (Metallica) und Glam Metal (Mötley Crüe).<br>Die 1990er brachten Extreme wie Death Metal (Cannibal Corpse) und Black Metal (Mayhem), während Alternative Metal (Tool) weitere Hörer gewann.<br>Im 21. Jahrhundert diversifizierte sich Metal in Metalcore (Bring Me The Horizon), Djent (Meshuggah) und zahlreiche andere Subgenres.<br>Metal-Festivals wie Wacken ziehen Hunderttausende Fans an und halten die Szene lebendig.",
    musicians: [
      "Metallica",
      "Iron Maiden",
      "Black Sabbath",
      "Slipknot",
      "Nightwish",
    ],
    image: "Blogs/Images/metal.png",
    author: { name: "Nicolas Manser", photo: "Blogs/Images/Nicolas.png" },
  },

  Latin: {
    shortDesc: "Rhythmus, Tanz und Sonne.",
    intro:
      "Lateinamerikanische Musik ist pure Lebensfreude - mitreißende Rhythmen, leidenschaftliche Melodien und eine reiche kulturelle Vielfalt von Mexiko bis Argentinien.",
    shortHistory:
      "Aus der Verschmelzung europäischer, afrikanischer und indigener Traditionen entstand Latinmusik.<br>Tango, Salsa und Bossa Nova prägten zuerst die Region.<br>Heute feiern Clubs weltweit Reggaetón und Bachata.",
    history:
      "Latin-Musik vereint Stile wie Salsa, Reggaetón und Bossa Nova.<br>Ihre Wurzeln liegen in indigenen, afrikanischen und europäischen Traditionen.<br>Die 1920er–40er sahen den Aufstieg von Tango (Carlos Gardel) und Rumba.<br>In den 1950er–70er brachten Bossa Nova (João Gilberto), Salsa (Celia Cruz) und Latin Jazz (Tito Puente) weltweiten Ruhm.<br>Die 1990er führten Reggaetón (Daddy Yankee) ein, das in Clubs einen Durchbruch feierte.<br>Heute dominieren Stars wie Shakira, Bad Bunny und Marc Anthony die Charts und vermischen traditionelle Klänge mit Pop und Urban Styles.",
    musicians: [
      "Shakira",
      "Bad Bunny",
      "Marc Anthony",
      "Buena Vista Social Club",
      "Carlos Santana",
    ],
    image: "Blogs/Images/latin.png",
    author: { name: "Nicolas Manser", photo: "Blogs/Images/Nicolas.png" },
  },

  "Lo-Fi": {
    shortDesc: "Chillige, verrauschte Beats.",
    intro:
      "Lo-Fi ist die perfekte Hintergrundmusik für entspannte Momente - mit warmen, analogen Klängen und beruhigenden Rhythmen, die zum Chillen einladen.",
    shortHistory:
      "Aus der Hip-Hop-Produktion hervorgegangen, wurde Lo-Fi in den 2010ern zum Soundtrack für Studierende und Entspannungssuchende.<br>Streams wie „lofi hip hop radio“ machten es viral.<br>Sein warmer, rauschiger Klang wirkt beruhigend.",
    history:
      "Lo-Fi Hip-Hop entstand als entspannter Beat-Stil mit bewusstem Rauschen und leichter Imperfektion.<br>Seine Wurzeln liegen im Boom Bap der 1990er (J Dilla, Nujabes).<br>In den 2010ern verbreiteten YouTube-Channels wie ChilledCow ununterbrochene Lo-Fi-Streams.<br>Charakteristisch sind sampelbasierte Beats, Jazz-Einflüsse und gedämpfte Percussion.<br>Heute ist Lo-Fi eine globale Community mit zahlreichen Produzenten, Podcasts und Playlists – perfekt zum Lernen und Entspannen.",
    musicians: ["Nujabes", "J Dilla", "ChilledCow", "Idealism", "Joji"],
    image: "Blogs/Images/lo-fi.png",
    author: { name: "Nicolas Manser", photo: "Blogs/Images/Nicolas.png" },
  },

  Country: {
    shortDesc: "Folkige Balladen aus USA.",
    intro:
      "Country-Musik erzählt Geschichten vom einfachen Leben - von Herzschmerz und harter Arbeit, von kleinen Städten und der Weite Amerikas.",
    shortHistory:
      "In den ländlichen Regionen der USA aus Folk und Bluegrass entstanden.<br>Johnny Cash und Dolly Parton wurden zu Ikonen.<br>Country verbindet Tradition mit modernen Einflüssen.",
    history:
      "Country hat Wurzeln in amerikanischem Folk und Bluegrass der 1920er (Jimmie Rodgers).<br>In den 1940ern–50ern prägten Honky-Tonk (Hank Williams) und Rockabilly (Johnny Cash) den Sound.<br>Die 1960er–70er brachten Outlaw Country (Willie Nelson) und Country Rock (Eagles).<br>Die 1990er führten den Neo-Traditionalismus (Garth Brooks) ein, bevor Pop-Elemente (Shania Twain, Taylor Swift) das Genre erweiterten.<br>Heute verschmilzt Country mit Pop und Hip-Hop (Lil Nas X), während Nashville das Herz der Szene bleibt.",
    musicians: [
      "Johnny Cash",
      "Dolly Parton",
      "Garth Brooks",
      "Taylor Swift",
      "Chris Stapleton",
    ],
    image: "Blogs/Images/country.png",
    author: { name: "Nicolas Manser", photo: "Blogs/Images/Nicolas.png" },
  },

  RnB: {
    shortDesc: "Soul, Funk und Groove.",
    intro:
      "R&B ist die perfekte Verschmelzung von Soul, Funk und Pop - mit glatten Grooves, emotionalen Vocals und zeitlosen Melodien.",
    shortHistory:
      "Aus dem Rhythm & Blues der 1940er hervorgegangen, entwickelte sich R&B zu einem Genre reich an Emotion und Groove.<br>Aretha Franklin und Stevie Wonder setzten frühe Maßstäbe.<br>Heute prägen moderne Stars den urbanen Sound.",
    history:
      "R&B entstand aus Rhythm & Blues der 1940er und brachte klassischen Soul (Ray Charles, Aretha Franklin) hervor.<br>In den 1970ern prägten Funk (Stevie Wonder) und Disco die Tanzflächen.<br>Die 1980er–90er entwickelten New Jack Swing (Bobby Brown) und Contemporary R&B (Mariah Carey).<br>In den 2000ern entstand Neo-Soul (Erykah Badu), bevor Urban Contemporary (The Weeknd, SZA) die Charts dominierte.<br>Heute mischt R&B Elemente aus Hip-Hop, Pop und Elektronik und bleibt eine treibende Kraft im Mainstream.",
    musicians: [
      "Aretha Franklin",
      "Stevie Wonder",
      "Usher",
      "Alicia Keys",
      "The Weeknd",
    ],
    image: "Blogs/Images/r&b.png",
    author: { name: "Nicolas Manser", photo: "Blogs/Images/Nicolas.png" },
  },

  Blues: {
    shortDesc: "Melancholisch und soulful.",
    intro:
      "Der Blues ist die Wurzel der modernen Popmusik - mit seinen einfachen, aber tiefgreifenden Strukturen und der Kunst, Schmerz in Schönheit zu verwandeln.",
    shortHistory:
      "Im späten 19. Jahrhundert im amerikanischen Süden entstanden.<br>Robert Johnson und B.B. King prägten erste Stile.<br>Der Blues legte den Grundstein für Jazz, Rock und Soul.",
    history:
      "Der Blues entstand im späten 19. Jh. im Süden der USA aus afrikanischen und europäischen Traditionen.<br>Delta Blues (Robert Johnson) der 1920er–30er war roh und emotional.<br>In den 1940ern–50ern entwickelte sich der elektrische Chicago Blues (Muddy Waters), der Gitarren in den Vordergrund rückte.<br>Die 1960er brachten das britische Blues-Revival (Eric Clapton), das das Genre global machte.<br>Heute lebt Blues in traditionellen und modernen Formen weiter und beeinflusst Rock, Jazz und Pop nachhaltig.",
    musicians: [
      "B.B. King",
      "Muddy Waters",
      "Robert Johnson",
      "Eric Clapton",
      "Stevie Ray Vaughan",
    ],
    image: "Blogs/Images/blues.png",
    author: { name: "Nicolas Manser", photo: "Blogs/Images/Nicolas.png" },
  },

  Reggae: {
    shortDesc: "Entspannt mit Offbeat-Rhythmen.",
    intro:
      "Reggae ist mehr als Musik – es ist eine Philosophie des Friedens, der Einheit und des Widerstands, getragen von ikonischen Offbeat-Rhythmen und basslastigen Grooves.",
    shortHistory:
      "In den 1960ern in Jamaika entstanden.<br>Bob Marley machte Reggae international bekannt.<br>Seine Botschaften von Liebe und Gleichheit leben weiter.",
    history:
      "Reggae entstand in den 1960ern in Jamaika als Nachfolger von Ska und Rocksteady.<br>Charakteristisch sind synkopierte Offbeats und sozialkritische Texte.<br>In den 1970ern dominierte Roots Reggae (Bob Marley), der Rastafari-Ideale verbreitete.<br>Die 1980er brachten Dancehall (Yellowman) mit schnellerem Beat.<br>Heute existiert Reggae neben modernen Formen wie Reggae Fusion (Sean Paul) und bleibt besonders in karibischen und afrikanischen Ländern populär.",
    musicians: [
      "Bob Marley",
      "Peter Tosh",
      "Jimmy Cliff",
      "Toots Hibbert",
      "Burning Spear",
    ],
    image: "Blogs/Images/reggae.png",
    author: { name: "Nicolas Manser", photo: "Blogs/Images/Nicolas.png" },
  },

  Funk: {
    shortDesc: "Groovig und rhythmusbetont.",
    intro:
      "Funk ist reiner Groove – mit betonten Basslines, synkopierten Rhythmen und einer Energie, die einfach nicht stillsitzen lässt.",
    shortHistory:
      "In den späten 1960ern aus Soul hervorgegangen.<br>James Brown definierte den Funk mit „Funky Drummer“.<br>Funk legte den Grundstein für Disco und Hip-Hop.",
    history:
      "Funk entwickelte sich Ende der 1960er aus Soul. James Brown’s Band definierte den Sound mit prägnantem Bass und Schlagzeug.<br>Die 1970er waren die Blütezeit mit Parliament-Funkadelic und Sly & The Family Stone.<br>In den 1980ern entstand Electro-Funk (Prince), das Synthesizer in den Vordergrund rückte.<br>Heute lebt Funk in Samples des Hip-Hop weiter und moderne Acts wie Bruno Mars und Vulfpeck halten den Groove lebendig.",
    musicians: [
      "James Brown",
      "George Clinton",
      "Prince",
      "Sly & The Family Stone",
      "Chic",
    ],
    image: "Blogs/Images/funk.png",
    author: { name: "Nicolas Manser", photo: "Blogs/Images/Nicolas.png" },
  },

  Gospel: {
    shortDesc: "Spirituell und erhaben.",
    intro:
      "Gospel-Musik ist der Sound der Seele – kraftvolle Vocals, jubelnde Chöre und eine tiefe spirituelle Inbrunst, die selbst Nicht-Gläubige berührt.",
    shortHistory:
      "In afroamerikanischen Kirchen entstanden.<br>Mahalia Jackson wurde zur Stimme des Glaubens.<br>Gospel beeinflusste Soul und R&B nachhaltig.",
    history:
      "Gospel hat Wurzeln in afroamerikanischen Kirchen und prägt mit kraftvollen Chören und emotionalem Gesang.<br>Seine Ursprünge liegen in Spirituals und Worksongs der Sklavenzeit.<br>Die 1930er–40er sahen den Aufstieg von Mahalia Jackson.<br>In den 1950ern brachten Sam Cooke und die Soul Stirrers modernen Gospel ins Radio.<br>Heute verschmilzt Gospel mit Pop und R&B (Kirk Franklin) und bleibt ein wichtiger Teil der afroamerikanischen Kultur.",
    musicians: [
      "Mahalia Jackson",
      "Kirk Franklin",
      "Aretha Franklin",
      "Neville Brothers",
      "The Clark Sisters",
    ],
    image: "Blogs/Images/gospel.png",
    author: { name: "Nicolas Manser", photo: "Blogs/Images/Nicolas.png" },
  },

  Ska: {
    shortDesc: "Uptempo mit Bläser-Sounds.",
    intro:
      "Ska ist pure Energie – schnelle Rhythmen, tanzbare Offbeats und freche Bläsersätze machen es zur perfekten Party-Musik.",
    shortHistory:
      "Ende der 1950er in Jamaika geboren.<br>The Skatalites prägten den Sound.<br>Revival-Wellen brachten Ska in UK und USA zurück.",
    history:
      "Ska entstand Ende der 1950er in Jamaika als Vorläufer von Rocksteady und Reggae.<br>Die erste Welle (1960er) brachte The Skatalites.<br>In den 1970ern–80ern in Großbritannien (The Specials, Madness) verschmolz Ska mit Punk.<br>Die dritte Welle (1990er USA) mit No Doubt und Reel Big Fish führte Ska-Punk ein.<br>Heute lebt Ska in Nischenfestivals und Indie-Clubs weiter.",
    musicians: [
      "The Skatalites",
      "Toots & The Maytals",
      "Madness",
      "The Specials",
      "Jimmy Cliff",
    ],
    image: "Blogs/Images/ska.png",
    author: { name: "Nicolas Manser", photo: "Blogs/Images/Nicolas.png" },
  },

  Disco: {
    shortDesc: "Glitzernd und tanzorientiert.",
    intro:
      "Disco ist der Sound der 1970er Nachtclubs – glitzernd, sexy und unwiderstehlich tanzbar, mit treibenden Beats und opulenten Streicherarrangements.",
    shortHistory:
      "In New York und Philadelphia entstanden.<br>Studio 54 machte Disco weltberühmt.<br>Nach dem ‚Disco Sucks‘-Backlash feierte das Genre ein Revival.",
    history:
      "Disco prägte die 1970er mit Four-on-the-Floor-Beats und opulenten Arrangements.<br>Filme wie ‚Saturday Night Fever‘ machten John Travolta zur Ikone.<br>Der späte Backlash (Disco Demolition Night) konnte den Sound nicht begraben.<br>Disco lebt in House und modernen Pop-Produktionen weiter und erlebt durch Künstler wie Dua Lipa ein neues Comeback.",
    musicians: ["Bee Gees", "Donna Summer", "Gloria Gaynor", "Chic", "ABBA"],
    image: "Blogs/Images/disco.png",
    author: { name: "Nicolas Manser", photo: "Blogs/Images/Nicolas.png" },
  },

  Punk: {
    shortDesc: "Roh, schnell und provokativ.",
    intro:
      "Punk ist Rebellion in musikalischer Form – roher Sound, politische Texte und eine DIY-Einstellung, die die Musikindustrie herausforderte.",
    shortHistory:
      "Mitte der 1970er als Gegenbewegung zum Kommerz-Rock entstanden.<br>The Ramones definierten den Sound in New York.<br>Sex Pistols lösten in UK Skandale aus.",
    history:
      "Punk entstand Mitte der 1970er als rebellische Gegenbewegung zum kommerziellen Rock.<br>Die Ramones und Sex Pistols brachten kurze, direkte Songs.<br>Die zweite Welle (Hardcore, Post-Punk) erweiterte die musikalische Palette.<br>In den 1990ern erreichte Pop-Punk (Green Day) neue Massen, während Emo (My Chemical Romance) persönliche Texte in den Fokus rückte.<br>Heute lebt Punk in Underground-Szenen und Fusion-Genres weiter.",
    musicians: [
      "The Ramones",
      "Sex Pistols",
      "The Clash",
      "Dead Kennedys",
      "The Damned",
    ],
    image: "Blogs/Images/punk.png",
    author: { name: "Nicolas Manser", photo: "Blogs/Images/Nicolas.png" },
  },

  Ambient: {
    shortDesc: "Atmosphärisch und beruhigend.",
    intro:
      "Ambient-Musik schafft Räume zum Träumen und Entspannen – sphärische Klangteppiche, die mehr Stimmung als Struktur haben und den Hörer in andere Welten entführen.",
    shortHistory:
      "In den 1970ern von Brian Eno geprägt.<br>Soundscape-Konzepte brachten neue Hörer.<br>Ambient wird heute als Fokus- und Schlafmusik geschätzt.",
    history:
      "Ambient wurde in den 1970ern von Brian Eno geprägt und setzt auf Klangtexturen statt Melodien oder Rhythmen.<br>Die 1980er sahen New Age und Space Music.<br>In den 1990ern entstand Ambient Techno (The Orb) und Isolationism (Thomas Köner).<br>Heute erlebt Ambient eine Renaissance als „Focus Music“ und Schlafbegleiter, während Künstler wie Aphex Twin und Nils Frahm die Grenzen des Genres erweitern.",
    musicians: [
      "Brian Eno",
      "Aphex Twin",
      "Stars of the Lid",
      "Moby",
      "Harold Budd",
    ],
    image: "Blogs/Images/ambient.png",
    author: { name: "Nicolas Manser", photo: "Blogs/Images/Nicolas.png" },
  },
};

window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(location.search);
  const genre = params.get("genre") || "Rock";
  const data = contentMap[genre];
  const art = document.querySelector(".article-detail");
  art.dataset.genre = genre;
  art.querySelector(".genre-title").textContent = genre;
  art.querySelector(".short-desc").textContent = data.shortDesc;
  art.querySelector(".intro-text").innerHTML = `<p>${data.intro}</p>`;
  art.querySelector(".short-history").innerHTML = `<p>${data.shortHistory}</p>`;
  art.querySelector(".full-history").innerHTML = `<p>${
    data.history
  }</p><p><strong>Berühmte Musiker:</strong> ${data.musicians.join(", ")}</p>`;

  const img = art.querySelector("img");
  img.src = data.image;
  img.alt = genre;

  const authorImg = art.querySelector(".author-info img");
  authorImg.src = data.author.photo;
  authorImg.alt = data.author.name;
  art.querySelector(".author-name").textContent = "Autor: " + data.author.name;

  document.querySelectorAll(".slide-down").forEach((container) => {
    const btn = container.querySelector(".slide-down-toggle");
    const panel = container.querySelector(".slide-down-content");

    btn.addEventListener("click", () => {
      if (!container.classList.contains("active")) {
        panel.style.display = "block";
        panel.style.height = "0";
        panel.style.opacity = "0";
        requestAnimationFrame(() => {
          panel.style.height = panel.scrollHeight + "px";
          panel.style.opacity = "1";
        });
        panel.addEventListener("transitionend", function done(e) {
          if (e.propertyName === "height") {
            panel.style.height = "auto";
            panel.removeEventListener("transitionend", done);
          }
        });
        container.classList.add("active");
      } else {
        panel.style.height = panel.scrollHeight + "px";
        panel.offsetHeight;
        panel.style.height = "0";
        panel.style.opacity = "0";
        panel.addEventListener("transitionend", function done(e) {
          if (e.propertyName === "height") {
            panel.style.display = "none";
            container.classList.remove("active");
            panel.removeEventListener("transitionend", done);
          }
        });
      }
    });
  });
});
