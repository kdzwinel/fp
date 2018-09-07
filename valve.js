// stuff from https://github.com/Valve/fingerprintjs2
var fontList = [
    'Andale Mono', 'Arial', 'Arial Black', 'Arial Hebrew', 'Arial MT', 'Arial Narrow', 'Arial Rounded MT Bold', 'Arial Unicode MS',
    'Bitstream Vera Sans Mono', 'Book Antiqua', 'Bookman Old Style',
    'Calibri', 'Cambria', 'Cambria Math', 'Century', 'Century Gothic', 'Century Schoolbook', 'Comic Sans', 'Comic Sans MS', 'Consolas', 'Courier', 'Courier New',
    'Geneva', 'Georgia',
    'Helvetica', 'Helvetica Neue',
    'Impact',
    'Lucida Bright', 'Lucida Calligraphy', 'Lucida Console', 'Lucida Fax', 'LUCIDA GRANDE', 'Lucida Handwriting', 'Lucida Sans', 'Lucida Sans Typewriter', 'Lucida Sans Unicode',
    'Microsoft Sans Serif', 'Monaco', 'Monotype Corsiva', 'MS Gothic', 'MS Outlook', 'MS PGothic', 'MS Reference Sans Serif', 'MS Sans Serif', 'MS Serif', 'MYRIAD', 'MYRIAD PRO',
    'Palatino', 'Palatino Linotype',
    'Segoe Print', 'Segoe Script', 'Segoe UI', 'Segoe UI Light', 'Segoe UI Semibold', 'Segoe UI Symbol',
    'Tahoma', 'Times', 'Times New Roman', 'Times New Roman PS', 'Trebuchet MS',
    'Verdana', 'Wingdings', 'Wingdings 2', 'Wingdings 3'
]
var extendedFontList = [
    'Abadi MT Condensed Light', 'Academy Engraved LET', 'ADOBE CASLON PRO', 'Adobe Garamond', 'ADOBE GARAMOND PRO', 'Agency FB', 'Aharoni', 'Albertus Extra Bold', 'Albertus Medium', 'Algerian', 'Amazone BT', 'American Typewriter',
    'American Typewriter Condensed', 'AmerType Md BT', 'Andalus', 'Angsana New', 'AngsanaUPC', 'Antique Olive', 'Aparajita', 'Apple Chancery', 'Apple Color Emoji', 'Apple SD Gothic Neo', 'Arabic Typesetting', 'ARCHER',
    'ARNO PRO', 'Arrus BT', 'Aurora Cn BT', 'AvantGarde Bk BT', 'AvantGarde Md BT', 'AVENIR', 'Ayuthaya', 'Bandy', 'Bangla Sangam MN', 'Bank Gothic', 'BankGothic Md BT', 'Baskerville',
    'Baskerville Old Face', 'Batang', 'BatangChe', 'Bauer Bodoni', 'Bauhaus 93', 'Bazooka', 'Bell MT', 'Bembo', 'Benguiat Bk BT', 'Berlin Sans FB', 'Berlin Sans FB Demi', 'Bernard MT Condensed', 'BernhardFashion BT', 'BernhardMod BT', 'Big Caslon', 'BinnerD',
    'Blackadder ITC', 'BlairMdITC TT', 'Bodoni 72', 'Bodoni 72 Oldstyle', 'Bodoni 72 Smallcaps', 'Bodoni MT', 'Bodoni MT Black', 'Bodoni MT Condensed', 'Bodoni MT Poster Compressed',
    'Bookshelf Symbol 7', 'Boulder', 'Bradley Hand', 'Bradley Hand ITC', 'Bremen Bd BT', 'Britannic Bold', 'Broadway', 'Browallia New', 'BrowalliaUPC', 'Brush Script MT', 'Californian FB', 'Calisto MT', 'Calligrapher', 'Candara',
    'CaslonOpnface BT', 'Castellar', 'Centaur', 'Cezanne', 'CG Omega', 'CG Times', 'Chalkboard', 'Chalkboard SE', 'Chalkduster', 'Charlesworth', 'Charter Bd BT', 'Charter BT', 'Chaucer',
    'ChelthmITC Bk BT', 'Chiller', 'Clarendon', 'Clarendon Condensed', 'CloisterBlack BT', 'Cochin', 'Colonna MT', 'Constantia', 'Cooper Black', 'Copperplate', 'Copperplate Gothic', 'Copperplate Gothic Bold',
    'Copperplate Gothic Light', 'CopperplGoth Bd BT', 'Corbel', 'Cordia New', 'CordiaUPC', 'Cornerstone', 'Coronet', 'Cuckoo', 'Curlz MT', 'DaunPenh', 'Dauphin', 'David', 'DB LCD Temp', 'DELICIOUS', 'Denmark',
    'DFKai-SB', 'Didot', 'DilleniaUPC', 'DIN', 'DokChampa', 'Dotum', 'DotumChe', 'Ebrima', 'Edwardian Script ITC', 'Elephant', 'English 111 Vivace BT', 'Engravers MT', 'EngraversGothic BT', 'Eras Bold ITC', 'Eras Demi ITC', 'Eras Light ITC', 'Eras Medium ITC',
    'EucrosiaUPC', 'Euphemia', 'Euphemia UCAS', 'EUROSTILE', 'Exotc350 Bd BT', 'FangSong', 'Felix Titling', 'Fixedsys', 'FONTIN', 'Footlight MT Light', 'Forte',
    'FrankRuehl', 'Fransiscan', 'Freefrm721 Blk BT', 'FreesiaUPC', 'Freestyle Script', 'French Script MT', 'FrnkGothITC Bk BT', 'Fruitger', 'FRUTIGER',
    'Futura', 'Futura Bk BT', 'Futura Lt BT', 'Futura Md BT', 'Futura ZBlk BT', 'FuturaBlack BT', 'Gabriola', 'Galliard BT', 'Gautami', 'Geeza Pro', 'Geometr231 BT', 'Geometr231 Hv BT', 'Geometr231 Lt BT', 'GeoSlab 703 Lt BT',
    'GeoSlab 703 XBd BT', 'Gigi', 'Gill Sans', 'Gill Sans MT', 'Gill Sans MT Condensed', 'Gill Sans MT Ext Condensed Bold', 'Gill Sans Ultra Bold', 'Gill Sans Ultra Bold Condensed', 'Gisha', 'Gloucester MT Extra Condensed', 'GOTHAM', 'GOTHAM BOLD',
    'Goudy Old Style', 'Goudy Stout', 'GoudyHandtooled BT', 'GoudyOLSt BT', 'Gujarati Sangam MN', 'Gulim', 'GulimChe', 'Gungsuh', 'GungsuhChe', 'Gurmukhi MN', 'Haettenschweiler', 'Harlow Solid Italic', 'Harrington', 'Heather', 'Heiti SC', 'Heiti TC', 'HELV',
    'Herald', 'High Tower Text', 'Hiragino Kaku Gothic ProN', 'Hiragino Mincho ProN', 'Hoefler Text', 'Humanst 521 Cn BT', 'Humanst521 BT', 'Humanst521 Lt BT', 'Imprint MT Shadow', 'Incised901 Bd BT', 'Incised901 BT',
    'Incised901 Lt BT', 'INCONSOLATA', 'Informal Roman', 'Informal011 BT', 'INTERSTATE', 'IrisUPC', 'Iskoola Pota', 'JasmineUPC', 'Jazz LET', 'Jenson', 'Jester', 'Jokerman', 'Juice ITC', 'Kabel Bk BT', 'Kabel Ult BT', 'Kailasa', 'KaiTi', 'Kalinga', 'Kannada Sangam MN',
    'Kartika', 'Kaufmann Bd BT', 'Kaufmann BT', 'Khmer UI', 'KodchiangUPC', 'Kokila', 'Korinna BT', 'Kristen ITC', 'Krungthep', 'Kunstler Script', 'Lao UI', 'Latha', 'Leelawadee', 'Letter Gothic', 'Levenim MT', 'LilyUPC', 'Lithograph', 'Lithograph Light', 'Long Island',
    'Lydian BT', 'Magneto', 'Maiandra GD', 'Malayalam Sangam MN', 'Malgun Gothic',
    'Mangal', 'Marigold', 'Marion', 'Marker Felt', 'Market', 'Marlett', 'Matisse ITC', 'Matura MT Script Capitals', 'Meiryo', 'Meiryo UI', 'Microsoft Himalaya', 'Microsoft JhengHei', 'Microsoft New Tai Lue', 'Microsoft PhagsPa', 'Microsoft Tai Le',
    'Microsoft Uighur', 'Microsoft YaHei', 'Microsoft Yi Baiti', 'MingLiU', 'MingLiU_HKSCS', 'MingLiU_HKSCS-ExtB', 'MingLiU-ExtB', 'Minion', 'Minion Pro', 'Miriam', 'Miriam Fixed', 'Mistral', 'Modern', 'Modern No. 20', 'Mona Lisa Solid ITC TT', 'Mongolian Baiti',
    'MONO', 'MoolBoran', 'Mrs Eaves', 'MS LineDraw', 'MS Mincho', 'MS PMincho', 'MS Reference Specialty', 'MS UI Gothic', 'MT Extra', 'MUSEO', 'MV Boli',
    'Nadeem', 'Narkisim', 'NEVIS', 'News Gothic', 'News GothicMT', 'NewsGoth BT', 'Niagara Engraved', 'Niagara Solid', 'Noteworthy', 'NSimSun', 'Nyala', 'OCR A Extended', 'Old Century', 'Old English Text MT', 'Onyx', 'Onyx BT', 'OPTIMA', 'Oriya Sangam MN',
    'OSAKA', 'OzHandicraft BT', 'Palace Script MT', 'Papyrus', 'Parchment', 'Party LET', 'Pegasus', 'Perpetua', 'Perpetua Titling MT', 'PetitaBold', 'Pickwick', 'Plantagenet Cherokee', 'Playbill', 'PMingLiU', 'PMingLiU-ExtB',
    'Poor Richard', 'Poster', 'PosterBodoni BT', 'PRINCETOWN LET', 'Pristina', 'PTBarnum BT', 'Pythagoras', 'Raavi', 'Rage Italic', 'Ravie', 'Ribbon131 Bd BT', 'Rockwell', 'Rockwell Condensed', 'Rockwell Extra Bold', 'Rod', 'Roman', 'Sakkal Majalla',
    'Santa Fe LET', 'Savoye LET', 'Sceptre', 'Script', 'Script MT Bold', 'SCRIPTINA', 'Serifa', 'Serifa BT', 'Serifa Th BT', 'ShelleyVolante BT', 'Sherwood',
    'Shonar Bangla', 'Showcard Gothic', 'Shruti', 'Signboard', 'SILKSCREEN', 'SimHei', 'Simplified Arabic', 'Simplified Arabic Fixed', 'SimSun', 'SimSun-ExtB', 'Sinhala Sangam MN', 'Sketch Rockwell', 'Skia', 'Small Fonts', 'Snap ITC', 'Snell Roundhand', 'Socket',
    'Souvenir Lt BT', 'Staccato222 BT', 'Steamer', 'Stencil', 'Storybook', 'Styllo', 'Subway', 'Swis721 BlkEx BT', 'Swiss911 XCm BT', 'Sylfaen', 'Synchro LET', 'System', 'Tamil Sangam MN', 'Technical', 'Teletype', 'Telugu Sangam MN', 'Tempus Sans ITC',
    'Terminal', 'Thonburi', 'Traditional Arabic', 'Trajan', 'TRAJAN PRO', 'Tristan', 'Tubular', 'Tunga', 'Tw Cen MT', 'Tw Cen MT Condensed', 'Tw Cen MT Condensed Extra Bold',
    'TypoUpright BT', 'Unicorn', 'Univers', 'Univers CE 55 Medium', 'Univers Condensed', 'Utsaah', 'Vagabond', 'Vani', 'Vijaya', 'Viner Hand ITC', 'VisualUI', 'Vivaldi', 'Vladimir Script', 'Vrinda', 'Westminster', 'WHITNEY', 'Wide Latin',
    'ZapfEllipt BT', 'ZapfHumnst BT', 'ZapfHumnst Dm BT', 'Zapfino', 'Zurich BlkEx BT', 'Zurich Ex BT', 'ZWAdobeF', 'Proxima Nova']
const mathtagFonts = ["AR DARLING", "Earwig Factory", "Minya Nouvelle", "Burnstown Dam", "Sybil Green", "Stereofidelic", "Urdu Typesetting", "Blue Highway Linocut", "Credit Valley", "Velvenda Cooler", "Mufferaw", "Huxtable", "Boopee", "Kefa", "Nanum Myeongjo", "LuzSans-Book", "Castro Script PERSONAL USE ONLY", "8514oem", "Gentium Book Basic", "Sitka Subheading", "Mishafi", "Wickenden Cafe NDP", "Jenna Sue", "Symusic", "Monotxt", "CG Omega", "Reprise Metronome", "CAMPBELL", "MAXIMO", "IRIS", "HUNTSON", "AcadEref", "Lucida Grande CY", "Tall Paul", "Simply*Glamorous", "Australian Sunrise", "Photoshop Large", "Circus", "Outright Televism", "Contribute_FREE-version", "KENDRIC", "HGP-AGothic2-Latin1K", "AVGmdBU", "ReservoirGrunge", "FIRSTHOME", "LYNN", "BRODY", "Bergamot Ornaments", "Return To Sender", "Bleeding Cowboys", "LCD", "Goudy", "Oxford", "Budmo Jiggler", "Alba Matter", "Denmark", "Girls are Weird", "Channel Left-Slanted", "Traveling _Typewriter", "Teletype", "Cuckoo", "MARKETPRO", "ABIGAIL", "JACKIE", "Carnivalee Freakshow", "NewZurica", "OldCentury", "LongIsland", "Fontdinerdotcom Sparkly", "PAINTSTROKE", "Mona Lisa Recut", "Times New Roman Symbol", "ESRI Enviro Hazard Incident", "TextilePiEF", "Edda", "EcuyerDAX", "Bodoni PosterCompressed", "MapInfo Cartographic", "ESRI NIMA City Graphic LN", "Virtual DJ", "MS SystemEx", "AdineKirnberg-Script", "Exmouth", "OPENCLASSIC", "Sweetly Broken", "English Essay", "Jenkins v2.0", "Architects Daughter", "Taffy", "Weltron Urban", "1942 report", "Fat", "Rod Transparent", "SimSun-PUA", "Before the Rain Swashes DEMO", "Abraham Lincoln", "Opus Japanese Chords", "Agent Orange", "Almonte Snow", "Luciano", "HenryMorganHand", "KG Skinny Latte", "CANDY INC.", "Tango BT", "GrutchShaded", "Segoe Media Center Semibold", "Kiev", "Lobster 1.3", "Tabitha", "Bimini", "OptimusPrinceps", "Ostrich Sans Dashed Medium", "DK Crayon Crumble", "DYMObvba", "28 Days Later", "Engaged", "always * forever", "Loki Cola", "Connecticut", "Pea Ellie Bellie", "Utah", "MICR", "Things We Said", "Stars & Stripes", "Rope MF", "Lato Hairline", "GilliesGotDLig", "Antique Olive CompactPS", "CaslonNo540SwaD", "SF Movie Poster", "CaslonAntT", "Josefin Slab", "PegsannaHMK", "Impact Label Reversed", "Ubuntu", "Oh {Photo} Shoot!", "Deftone Stylus", "CluffHmk", "Incised901 BdCn BT", "Respective 2.0", "Parry Hotter", "NotnorvalHmk", "odstemplik", "Ethnocentric", "Miserably Lose", "SAS Monospace", "Stonehenge", "BethsCuteHmk", "BixAntiqueScriptHmk", "MicrogrammaDMedExt", "StarbabeHmk", "FFF Tusj", "BoogieWoogieHmk", "Star Jedi Hollow", "Eight Fifteen", "Ribbon", "Helsinki Narrow", "San Diego", "Jewels", "Baskerville-Old-Face", "OCR-A", "OttumHmk", "Mr and Mrs Popsicle", "Symbol Tiger Expert", "URWAlcuinT", "DynameBlackSSK", "Monster Paparazzi", "My Own Topher", "LainieDaySH", "Duchess", "New England Engraved", "Bitstream Vera Serif", "Hand Of Sean", "HeiT", "Vive", "Penmanship Print", "Spicy Sushi Roll", "Jennifer Lynne", "Minion Pro SmBd Ital", "Cumberland AMT", "Expose", "Everytime I Miss You", "Katy Berry", "A Red Bucket", "Walkway RevOblique", "Impregnable Personal Use Only", "Salsa Mangos BTN Lt", "Geo 957", "dearJoe4", "Janda Apple Cobbler Solid", "Sketch Rockwell", "Shit Happens", "jailbIrD JenNA", "Firefly Castle", "Tonight's the Night", "Jellyka BeesAntique Handwriting", "REALVIRTUE", "USPS4CB", "Swis721 WGL4 BT", "Beautiful Every Time", "GOST Common", "Highland Perk", "ChunkFive Roman", "ArabBruD", "Rebekah's Birthday"];

function jsFontsKey(done) {
    // doing js fonts detection in a pseudo-async fashion
    return setTimeout(function () {
        // a font will be compared against all the three default fonts.
        // and if it doesn't match all 3 then that font is not available.
        var baseFonts = ['monospace', 'sans-serif', 'serif']

        fontList = fontList.concat(extendedFontList)

        // remove duplicate fonts
        fontList = fontList.filter(function (font, position) {
            return fontList.indexOf(font) === position
        })

        // we use m or w because these two characters take up the maximum width.
        // And we use a LLi so that the same matching fonts can get separated
        var testString = 'mmmmmmmmmmlli'

        // we test using 72px font size, we may use any size. I guess larger the better.
        var testSize = '72px'

        var h = document.getElementsByTagName('body')[0]

        // div to load spans for the base fonts
        var baseFontsDiv = document.createElement('div')

        // div to load spans for the fonts to detect
        var fontsDiv = document.createElement('div')

        var defaultWidth = {}
        var defaultHeight = {}

        // creates a span where the fonts will be loaded
        var createSpan = function () {
            var s = document.createElement('span')
            /*
             * We need this css as in some weird browser this
             * span elements shows up for a microSec which creates a
             * bad user experience
             */
            s.style.position = 'absolute'
            s.style.left = '-9999px'
            s.style.fontSize = testSize

            // css font reset to reset external styles
            s.style.fontStyle = 'normal'
            s.style.fontWeight = 'normal'
            s.style.letterSpacing = 'normal'
            s.style.lineBreak = 'auto'
            s.style.lineHeight = 'normal'
            s.style.textTransform = 'none'
            s.style.textAlign = 'left'
            s.style.textDecoration = 'none'
            s.style.textShadow = 'none'
            s.style.whiteSpace = 'normal'
            s.style.wordBreak = 'normal'
            s.style.wordSpacing = 'normal'

            s.innerHTML = testString
            return s
        }

        // creates a span and load the font to detect and a base font for fallback
        var createSpanWithFonts = function (fontToDetect, baseFont) {
            var s = createSpan()
            s.style.fontFamily = "'" + fontToDetect + "'," + baseFont
            return s
        }

        // creates spans for the base fonts and adds them to baseFontsDiv
        var initializeBaseFontsSpans = function () {
            var spans = []
            for (var index = 0, length = baseFonts.length; index < length; index++) {
                var s = createSpan()
                s.style.fontFamily = baseFonts[index]
                baseFontsDiv.appendChild(s)
                spans.push(s)
            }
            return spans
        }

        // creates spans for the fonts to detect and adds them to fontsDiv
        var initializeFontsSpans = function () {
            var spans = {}
            for (var i = 0, l = fontList.length; i < l; i++) {
                var fontSpans = []
                for (var j = 0, numDefaultFonts = baseFonts.length; j < numDefaultFonts; j++) {
                    var s = createSpanWithFonts(fontList[i], baseFonts[j])
                    fontsDiv.appendChild(s)
                    fontSpans.push(s)
                }
                spans[fontList[i]] = fontSpans // Stores {fontName : [spans for that font]}
            }
            return spans
        }

        // checks if a font is available
        var isFontAvailable = function (fontSpans) {
            var detected = false
            for (var i = 0; i < baseFonts.length; i++) {
                detected = (fontSpans[i].offsetWidth !== defaultWidth[baseFonts[i]] || fontSpans[i].offsetHeight !== defaultHeight[baseFonts[i]])
                if (detected) {
                    return detected
                }
            }
            return detected
        }

        // create spans for base fonts
        var baseFontsSpans = initializeBaseFontsSpans()

        // add the spans to the DOM
        h.appendChild(baseFontsDiv)

        // get the default width for the three base fonts
        for (var index = 0, length = baseFonts.length; index < length; index++) {
            defaultWidth[baseFonts[index]] = baseFontsSpans[index].offsetWidth // width for the default font
            defaultHeight[baseFonts[index]] = baseFontsSpans[index].offsetHeight // height for the default font
        }

        // create spans for fonts to detect
        var fontsSpans = initializeFontsSpans()

        // add all the spans to the DOM
        h.appendChild(fontsDiv)

        // check available fonts
        var available = []
        for (var i = 0, l = fontList.length; i < l; i++) {
            if (isFontAvailable(fontsSpans[fontList[i]])) {
                available.push(fontList[i])
            }
        }

        // remove spans from DOM
        h.removeChild(fontsDiv)
        h.removeChild(baseFontsDiv)

        done(available)
    }, 1)
}

function getRegularPlugins() {
    var plugins = []
    if (navigator.plugins) {
        // plugins isn't defined in Node envs.
        for (var i = 0, l = navigator.plugins.length; i < l; i++) {
            if (navigator.plugins[i]) { plugins.push(navigator.plugins[i]) }
        }
    }
    // sorting plugins only for those user agents, that we know randomize the plugins
    // every time we try to enumerate them
    // if (this.pluginsShouldBeSorted()) {
    //     plugins = plugins.sort(function (a, b) {
    //         if (a.name > b.name) { return 1 }
    //         if (a.name < b.name) { return -1 }
    //         return 0
    //     })
    // }
    return plugins.map(plugin => {
        var mimeTypes = Array.from(plugin).map(mt => {
            return {
                type: mt.type,
                sufixes: mt.suffixes
            };
        });
        return {
            name: plugin.name,
            description: plugin.description,
            mimeTypes
        }
    }, this)
}

function hasSessionStorage() {
    try {
        return !!window.sessionStorage
    } catch (e) {
        return true // SecurityError when referencing it means it exists
    }
}

// https://bugzilla.mozilla.org/show_bug.cgi?id=781447
function hasLocalStorage() {
    try {
        return !!window.localStorage
    } catch (e) {
        return true // SecurityError when referencing it means it exists
    }
}

function hasIndexedDB() {
    try {
        return !!window.indexedDB
    } catch (e) {
        return true // SecurityError when referencing it means it exists
    }
}

function getTouchSupport() {
    var maxTouchPoints = 0
    var touchEvent = false
    if (typeof navigator.maxTouchPoints !== 'undefined') {
        maxTouchPoints = navigator.maxTouchPoints
    } else if (typeof navigator.msMaxTouchPoints !== 'undefined') {
        maxTouchPoints = navigator.msMaxTouchPoints
    }
    try {
        document.createEvent('TouchEvent')
        touchEvent = true
    } catch (_) { /* squelch */ }
    var touchStart = 'ontouchstart' in window
    return [maxTouchPoints, touchEvent, touchStart]
}

function getCanvasFp() {
    var result = []
    // Very simple now, need to make it more complex (geo shapes etc)
    var canvas = document.createElement('canvas')
    canvas.width = 2000
    canvas.height = 200
    canvas.style.display = 'inline'
    var ctx = canvas.getContext('2d')
    // detect browser support of canvas winding
    // http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
    // https://github.com/Modernizr/Modernizr/blob/master/feature-detects/canvas/winding.js
    ctx.rect(0, 0, 10, 10)
    ctx.rect(2, 2, 6, 6)
    result.push('canvas winding:' + ((ctx.isPointInPath(5, 5, 'evenodd') === false) ? 'yes' : 'no'))

    ctx.textBaseline = 'alphabetic'
    ctx.fillStyle = '#f60'
    ctx.fillRect(125, 1, 62, 20)
    ctx.fillStyle = '#069'
    // https://github.com/Valve/fingerprintjs2/issues/66
    // if (this.options.dontUseFakeFontInCanvas) {
    // ctx.font = '11pt Arial'
    // } else {
    ctx.font = '11pt no-real-font-123'
    // }
    ctx.fillText('Cwm fjordbank glyphs vext quiz, \ud83d\ude03', 2, 15)
    ctx.fillStyle = 'rgba(102, 204, 0, 0.2)'
    ctx.font = '18pt Arial'
    ctx.fillText('Cwm fjordbank glyphs vext quiz, \ud83d\ude03', 4, 45)

    // canvas blending
    // http://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas/
    // http://jsfiddle.net/NDYV8/16/
    ctx.globalCompositeOperation = 'multiply'
    ctx.fillStyle = 'rgb(255,0,255)'
    ctx.beginPath()
    ctx.arc(50, 50, 50, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.fill()
    ctx.fillStyle = 'rgb(0,255,255)'
    ctx.beginPath()
    ctx.arc(100, 50, 50, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.fill()
    ctx.fillStyle = 'rgb(255,255,0)'
    ctx.beginPath()
    ctx.arc(75, 100, 50, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.fill()
    ctx.fillStyle = 'rgb(255,0,255)'
    // canvas winding
    // http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
    // http://jsfiddle.net/NDYV8/19/
    ctx.arc(75, 75, 75, 0, Math.PI * 2, true)
    ctx.arc(75, 75, 25, 0, Math.PI * 2, true)
    ctx.fill('evenodd')

    if (canvas.toDataURL) { result.push('canvas fp:' + canvas.toDataURL()) }
    return result;
}

function getWebglCanvas() {
    var canvas = document.createElement('canvas')
    var gl = null
    try {
        gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    } catch (e) { /* squelch */ }
    if (!gl) { gl = null }
    return gl
}

function getWebglFp() {
    var gl
    var fa2s = function (fa) {
        gl.clearColor(0.0, 0.0, 0.0, 1.0)
        gl.enable(gl.DEPTH_TEST)
        gl.depthFunc(gl.LEQUAL)
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
        return '[' + fa[0] + ', ' + fa[1] + ']'
    }
    var maxAnisotropy = function (gl) {
        var ext = gl.getExtension('EXT_texture_filter_anisotropic') || gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic') || gl.getExtension('MOZ_EXT_texture_filter_anisotropic')
        if (ext) {
            var anisotropy = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
            if (anisotropy === 0) {
                anisotropy = 2
            }
            return anisotropy
        } else {
            return null
        }
    }
    gl = getWebglCanvas()
    if (!gl) { return null }
    // WebGL fingerprinting is a combination of techniques, found in MaxMind antifraud script & Augur fingerprinting.
    // First it draws a gradient object with shaders and convers the image to the Base64 string.
    // Then it enumerates all WebGL extensions & capabilities and appends them to the Base64 string, resulting in a huge WebGL string, potentially very unique on each device
    // Since iOS supports webgl starting from version 8.1 and 8.1 runs on several graphics chips, the results may be different across ios devices, but we need to verify it.
    var result = []
    var vShaderTemplate = 'attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}'
    var fShaderTemplate = 'precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}'
    var vertexPosBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer)
    var vertices = new Float32Array([-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0])
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
    vertexPosBuffer.itemSize = 3
    vertexPosBuffer.numItems = 3
    var program = gl.createProgram()
    var vshader = gl.createShader(gl.VERTEX_SHADER)
    gl.shaderSource(vshader, vShaderTemplate)
    gl.compileShader(vshader)
    var fshader = gl.createShader(gl.FRAGMENT_SHADER)
    gl.shaderSource(fshader, fShaderTemplate)
    gl.compileShader(fshader)
    gl.attachShader(program, vshader)
    gl.attachShader(program, fshader)
    gl.linkProgram(program)
    gl.useProgram(program)
    program.vertexPosAttrib = gl.getAttribLocation(program, 'attrVertex')
    program.offsetUniform = gl.getUniformLocation(program, 'uniformOffset')
    gl.enableVertexAttribArray(program.vertexPosArray)
    gl.vertexAttribPointer(program.vertexPosAttrib, vertexPosBuffer.itemSize, gl.FLOAT, !1, 0, 0)
    gl.uniform2f(program.offsetUniform, 1, 1)
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexPosBuffer.numItems)
    try {
        result.push(gl.canvas.toDataURL())
    } catch (e) {
        /* .toDataURL may be absent or broken (blocked by extension) */
    }
    result.push({extensions: gl.getSupportedExtensions()})
    result.push('webgl aliased line width range:' + fa2s(gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE)))
    result.push('webgl aliased point size range:' + fa2s(gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)))
    result.push('webgl alpha bits:' + gl.getParameter(gl.ALPHA_BITS))
    result.push('webgl antialiasing:' + (gl.getContextAttributes().antialias ? 'yes' : 'no'))
    result.push('webgl blue bits:' + gl.getParameter(gl.BLUE_BITS))
    result.push('webgl depth bits:' + gl.getParameter(gl.DEPTH_BITS))
    result.push('webgl green bits:' + gl.getParameter(gl.GREEN_BITS))
    result.push('webgl max anisotropy:' + maxAnisotropy(gl))
    result.push('webgl max combined texture image units:' + gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS))
    result.push('webgl max cube map texture size:' + gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE))
    result.push('webgl max fragment uniform vectors:' + gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS))
    result.push('webgl max render buffer size:' + gl.getParameter(gl.MAX_RENDERBUFFER_SIZE))
    result.push('webgl max texture image units:' + gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS))
    result.push('webgl max texture size:' + gl.getParameter(gl.MAX_TEXTURE_SIZE))
    result.push('webgl max varying vectors:' + gl.getParameter(gl.MAX_VARYING_VECTORS))
    result.push('webgl max vertex attribs:' + gl.getParameter(gl.MAX_VERTEX_ATTRIBS))
    result.push('webgl max vertex texture image units:' + gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS))
    result.push('webgl max vertex uniform vectors:' + gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS))
    result.push('webgl max viewport dims:' + fa2s(gl.getParameter(gl.MAX_VIEWPORT_DIMS)))
    result.push('webgl red bits:' + gl.getParameter(gl.RED_BITS))
    result.push('webgl renderer:' + gl.getParameter(gl.RENDERER))
    result.push('webgl shading language version:' + gl.getParameter(gl.SHADING_LANGUAGE_VERSION))
    result.push('webgl stencil bits:' + gl.getParameter(gl.STENCIL_BITS))
    result.push('webgl vendor:' + gl.getParameter(gl.VENDOR))
    result.push('webgl version:' + gl.getParameter(gl.VERSION))

    try {
        // Add the unmasked vendor and unmasked renderer if the debug_renderer_info extension is available
        var extensionDebugRendererInfo = gl.getExtension('WEBGL_debug_renderer_info')
        if (extensionDebugRendererInfo) {
            result.push('webgl unmasked vendor:' + gl.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL))
            result.push('webgl unmasked renderer:' + gl.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL))
        }
    } catch (e) { /* squelch */ }

    if (!gl.getShaderPrecisionFormat) {
        return result;
    }

    ['FLOAT', 'INT'].forEach((numType) => {
        ['VERTEX', 'FRAGMENT'].forEach((shader) => {
            ['HIGH', 'MEDIUM', 'LOW'].forEach((numSize) => {
                ['precision', 'rangeMin', 'rangeMax'].forEach((key) => {
                    var format = gl.getShaderPrecisionFormat(gl[shader + '_SHADER'], gl[numSize + '_' + numType])[key]
                    if (key !== 'precision') {
                        key = 'precision ' + key
                    }
                    var line = ['webgl ', shader.toLowerCase(), ' shader ', numSize.toLowerCase(), ' ', numType.toLowerCase(), ' ', key, ':', format]
                    result.push(line.join(''))
                })
            })
        })
    })
    return result;
}

function audioKey(done) {
    var AudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext

    if (AudioContext == null) {
        return done(null)
    }

    var context = new AudioContext(1, 44100, 44100)

    var oscillator = context.createOscillator()
    oscillator.type = 'triangle'
    oscillator.frequency.setValueAtTime(10000, context.currentTime)

    var compressor = context.createDynamicsCompressor();

    [
        ['threshold', -50],
        ['knee', 40],
        ['ratio', 12],
        ['reduction', -20],
        ['attack', 0],
        ['release', 0.25]
    ].forEach(function (item) {
        if (compressor[item[0]] !== undefined && typeof compressor[item[0]].setValueAtTime === 'function') {
            compressor[item[0]].setValueAtTime(item[1], context.currentTime)
        }
    });

    var oncompleteTimeout = setTimeout(function () {
        return done(null)
    }, 1000)

    context.oncomplete = function (event) {
        clearTimeout(oncompleteTimeout)
        var fingerprint = event.renderedBuffer.getChannelData(0)
            .slice(4500, 5000)
            .reduce(function (acc, val) { return acc + Math.abs(val) }, 0)
            .toString()
        oscillator.disconnect()
        compressor.disconnect()

        return done(fingerprint)
    }

    oscillator.connect(compressor)
    compressor.connect(context.destination)
    oscillator.start(0)
    context.startRendering()
}

function enumerateDevicesKey(done) {
    if (!navigator.mediaDevices) {
        done(null);
        return;
    }

    navigator.mediaDevices.enumerateDevices()
        .then(devices => {
            const enumerateDevicesFp = devices.map(device => {
                return {
                    deviceId: device.deviceId,
                    groupId: device.groupId,
                    kind: device.kind,
                    label: device.label
                }
            });
            return done(enumerateDevicesFp)
        })
        .catch(function (e) {
            return done(null);
        });
}