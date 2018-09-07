function getDocumentFonts() {
    const allFonts = fontList.concat(extendedFontList);
    const result = allFonts.filter(font => document.fonts.check(`small "${font}"`));

    if (allFonts.length === result.length) {
        return "all";
    }

    return result;
}

// inspiration: https://www.kirupa.com/html5/detect_whether_font_is_installed.htm
function getCanvasFonts() {
    // creating our in-memory Canvas element where the magic happens
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
     
    // the text whose final pixel size I want to measure
    var text = "abcdefghijklmnopqrstuvwxyz0123456789";
     
    // specifying the baseline font
    context.font = "72px monospace";
     
    // checking the size of the baseline text
    var baselineSize = context.measureText(text);

    return fontList.concat(extendedFontList).filter(fontName => {
        // specifying the font whose existence we want to check
        context.font = "72px '" + fontName + "', monospace";

        // checking the size of the font we want to check
        const newSize = context.measureText(text);

        //
        // If the size of the two text instances is the same, the font does not exist because it is being rendered
        // using the default sans-serif font
        //
        return (newSize.width !== baselineSize.width) || (newSize.height !== baselineSize.height);
    });
}

const codecs1 = ['video/mp4;codecs="avc1.42E01E, mp4a.40.2"', 'video/mp4;codecs="avc1.58A01E, mp4a.40.2"', 'video/mp4;codecs="avc1.4D401E, mp4a.40.2"', 'video/mp4;codecs="avc1.64001E, mp4a.40.2"', 'video/mp4;codecs="mp4v.20.8, mp4a.40.2"', 'video/mp4;codecs="mp4v.20.240, mp4a.40.2"', 'video/3gpp;codecs="mp4v.20.8, samr"', 'video/ogg;codecs="theora, vorbis"', 'video/ogg;codecs="theora, speex"', 'audio/ogg;codecs=vorbis', 'audio/ogg;codecs=speex', 'audio/ogg;codecs=flac', 'video/ogg;codecs="dirac, vorbis"', 'video/x-matroska;codecs="theora, vorbis"', 'video/mp4; codecs="avc1.42E01E"', 'audio/mp4; codecs="mp4a.40.2"', 'audio/mpeg;codecs="mp3"', 'video/webm; codecs="vorbis,vp8"']
const codecs2 = ['video/ogg; codecs="theora"', 'video/mp4; codecs="avc1.42E01E"', 'video/webm; codecs="vp8, vorbis"'];
const codecs3 = ['video/mp4;codecs="avc1.4d400d,mp4a.40.2"', 'video/mp4; codecs="avc1.42E01E,mp4a.40.2"'];

function getCanPlayTypes() {
    var v = document.createElement("video");

    return codecs1.concat(codecs2).concat(codecs3).filter(codec => v.canPlayType(codec));
}

function getIsTypeSupported() {
    return {
        mediaKeys: {
            "com.apple.fps.1_0": window.WebKitMediaKeys && WebKitMediaKeys.isTypeSupported("com.apple.fps.1_0","video/mp4")
        },
        mediaSource: codecs1.concat(codecs2).concat(codecs3).filter(codec => MediaSource.isTypeSupported(codec))
    };
}

function getWebRTCFP(done) {
    if (!window.RTCPeerConnection) {
        done(null);
        return;
    }

    const c = new RTCPeerConnection({
        iceServers: [{urls: "stun:stun.l.google.com:19302?transport=udp"}]
    }, {optional: [{RtpDataChannels: true}]});
    
    c.onicecandidate = result => {
        if (result.candidate !== null) {
            done(result.candidate.candidate);
        }
    };
    c.createDataChannel("");
    // c.createOffer(a => {
    //     c.setLocalDescription(a, () => {}, () => {})
    // }, () => {});

    c.createOffer().then(a => {
        c.setLocalDescription(a, () => {}, () => {})
    });
}

function getInuputFP(done) {
    document.body.addEventListener('touchstart', e => {
        if (e.touches) {
            done({
                type: 'touch',
                length: e.touches.length,
                force: e.touches[0].force,
                radiusX: e.touches[0].radiusX,
                radiusY: e.touches[0].radiusY,
                rotationAngle: e.touches[0].rotationAngle
            });
        }
    });
    let maxWheelDelta = 0;
    document.body.addEventListener('wheel', e => {
        if (e.wheelDelta > maxWheelDelta) {
            maxWheelDelta = e.wheelDelta;
        }

        setTimeout(() => {
            done({
                type: 'wheel',
                maxWheelDelta: maxWheelDelta,
            });
        }, 1000);
    });
    document.body.addEventListener('click', e => {
        done({
            type: 'click',
            button: e.button,
            buttons: e.buttons,
            which: e.which
        });
    });
}

function createDOMFP() {
    function extract(rec) {
        return {
            x: rec.x,
            y: rec.y,
            width: rec.width,
            height: rec.height
        };
    }

    return {
        relative: Array.from(document.getElementById('box').getClientRects()).map(extract),
        absolute: Array.from(document.getElementById('absolute-box').getClientRects()).map(extract)
    };
}

function getVoices() {
    if (!window.speechSynthesis) {
        return null;
    }

    return speechSynthesis.getVoices().map(voice => {
        const result = {
            name: voice.name,
            lang: voice.lang,
            voiceURI: voice.voiceURI.replace('com.apple.speech.synthesis.voice.', '')
        };

        if (voice.default) {
            result.default = true;
        }

        if (!voice.localService) {
            result.external = true;
        }

        return result;
    });
}

function systemColors() {
    const colors = ["ActiveCaption", "AppWorkspace", "Background", "ButtonFace", "ButtonHighlight", "ButtonShadow", "ButtonText", "CaptionText", "GrayText", "Highlight", "HighlightText", "InactiveBorder", "InactiveCaption", "InactiveCaptionText", "InfoBackground", "InfoText", "Menu", "MenuText", "Scrollbar", "ThreeDDarkShadow", "ThreeDFace", "ThreeDHighlight", "ThreeDLightShadow", "ThreeDShadow", "Window", "WindowFrame", "WindowText", "ActiveBorder"];

    return colors.map(color => {
        document.body.style.backgroundColor = color;

        return {
            name: color,
            value: window.getComputedStyle(document.body).backgroundColor
        };
    });
}

function getMimeTypes() {
    return Array.from(navigator.mimeTypes).map(mt => {
        return {
            descirption: mt.description,
            type: mt.type,
            suffixes: mt.suffixes,
            plugin: mt.enabledPlugin ? {
                name: mt.enabledPlugin.name,
                filename: mt.enabledPlugin.filename,
                description: mt.enabledPlugin.description,
                mimeType: mt.enabledPlugin[0] ? mt.enabledPlugin[0].type : null
            } : null
        }
    });
}

function getOpenDatabase() {
    try {
        return !!window.openDatabase("test", "1.0", "test", 1024);
    } catch(e) {
        return null;
    }
}

function getGamepads() {
    if (!navigator.getGamepads) {
        return null;
    }

    return Array.from(navigator.getGamepads()).map(gamepad => {
        if (!gamepad) {
            return null;
        }

        return {
            id: gamepad.id,
            buttons: gamepad.buttons.length,
            axes: gamepad.axes.length
        }
    });
}

function getCPUBenchmark() {
    var _speedconstant = 8.9997e-9; //if speed=(c*a)/t, then constant=(s*t)/a and time=(a*c)/s
    var d = new Date();
    var amount = 150000000;
    var estprocessor = 1.7; //average processor speed, in GHZ
    console.log("JSBenchmark by Aaron Becker, running loop "+amount+" times.     Estimated time (for "+estprocessor+"ghz processor) is "+(Math.round(((_speedconstant*amount)/estprocessor)*100)/100)+"s");
    for (var i = amount; i>0; i--) {} 
    var newd = new Date();
    var accnewd = Number(String(newd.getSeconds())+"."+String(newd.getMilliseconds()));
    var accd = Number(String(d.getSeconds())+"."+String(d.getMilliseconds())); 
    var di = accnewd-accd;
    //console.log(accnewd,accd,di);
    if (d.getMinutes() != newd.getMinutes()) {
    di = (60*(newd.getMinutes()-d.getMinutes()))+di}
    const spd = ((_speedconstant*amount)/di);
    console.log("Time: "+Math.round(di*1000)/1000+"s, estimated speed: "+Math.round(spd*1000)/1000+"GHZ");

    return Math.round(spd*1000)/1000 + "GHZ";
}

const data = {
    window: {
        devicePixelRatio: window.devicePixelRatio,
        localStorage: hasLocalStorage(),
        sessionStorage: hasSessionStorage(),
        indexedDB: hasIndexedDB(),
        openDatabase: getOpenDatabase(),
        reducedMotion: window.matchMedia("prefers-reduced-motion").matches,
    },
    // console: {
    //     // memory: console.memory// not in wk
    // },
    document: {
        fonts: getDocumentFonts(),
    },
    // performance: {
    //     memory: performance.memory,// not in wk
    // },
    navigator: {
        appName: navigator.appName,
        appCodeName: navigator.appCodeName,
        appVersion: navigator.appVersion,
        mimeTypes: getMimeTypes(),
        cookieEnabled: navigator.cookieEnabled,
        language: navigator.language,
        languages: navigator.languages,
        userAgent: navigator.userAgent,
        plugins: getRegularPlugins(),
        platform: navigator.platform,
        doNotTrack: navigator.doNotTrack,
        hardwareConcurrency: navigator.hardwareConcurrency,//not in wk but there is a pollyfil
        // maxTouchPoints: navigator.maxTouchPoints,//not in wk, covered by getTouchSupport
        // mediaCapabilities: navigator.mediaCapabilities,//not in wk
        mediaDevices: null,//async
        // deviceMemory: navigator.deviceMemory,//not in wk
        // connection: navigator.connection,//not in wk
        onLine: navigator.onLine,
        // keyboard: navigator.keyboard,//not in wk
        // nfc: navigator.nfc,//not in wk
        // permissions: navigator.permissions,// probably can't be used in this case, not in wk
        // presentation: navigator.presentation,// not in wk
        product: navigator.product,
        productSub: navigator.productSub,
        // storage: navigator.storage,//not in wk
        vendor: navigator.vendor,
        vendorSub: navigator.vendorSub,
        // xr: navigator.xr,//not in wk
        // webkitPersistentStorage: navigator.webkitPersistentStorage,//not in wk
        // webkitTemporaryStorage: navigator.webkitTemporaryStorage//not in wk
        // getBattery: navigator.getBattery,//not in wk
        getGamepads: getGamepads(),//async
        // getInstalledRelatedApps: navigator.getInstalledRelatedApps,//not in wk
        // getVRDisplays: navigator.getVRDisplays,//not in wk
        javaEnabled: navigator.javaEnabled()
    },
    screen: {
        width: screen.width,
        height: screen.height,
        availWidth: screen.availWidth,
        availHeight: screen.availHeight,
        colorDepth: screen.colorDepth,
        pixelDepth: screen.pixelDepth,
        // keepAwake: screen.keepAwake,//not in wk
        availLeft: screen.availLeft,
        availTop: screen.availTop,
        // deviceXDPI: screen.deviceXDPI,//not in wk
    },
    canvas2d: getCanvasFp(),
    webgl: getWebglFp(),
    canvasFonts: getCanvasFonts(),
    jsFonts: null,//async
    canPlayType: getCanPlayTypes(),
    timezoneOffset: (new Date()).getTimezoneOffset(),
    audio: null,//async
    webrtc: [],//async
    dateTimeFormat: Intl.DateTimeFormat().resolvedOptions(),
    input: [],//async
    touchSupport: getTouchSupport(),
    typesSupported: getIsTypeSupported(),
    voices: null,//async
    dom: createDOMFP(),
    systemColors: systemColors(),
    cpuBenchmark: getCPUBenchmark()
};

audioKey(fingerprint => {
    data.audio = fingerprint;
    console.log('audio done');
});

enumerateDevicesKey(devices => {
    data.navigator.mediaDevices = devices;
    console.log('mediaDevices done');
});

jsFontsKey(fonts => {
    data.jsFonts = fonts;
    console.log('js fonts done');
});

getWebRTCFP(candidate => {
    if (candidate) {
        data.webrtc.push(candidate);
        console.log('webrtc done');
    }
});

getInuputFP(i => {
    const alreadyExists = data.input.some(input => input.type === i.type);

    if (!alreadyExists) {
        data.input.push(i);
    }
});

// avoid interfering with cpu benchmark
setTimeout(() => {
    navigator.getHardwareConcurrency(cores => {
        data.navigator.hardwareConcurrency = cores;
        console.log('cpu cores done', cores);
    }, (min, max, cores) => console.log(min, max, cores));
}, 2000);

// getting voices in chrome is a bit unstable - returns empty list couple of times
const voiceInterval = setInterval(() => {
    data.voices = getVoices();

    if (data.voices && data.voices.length) {
        console.log('voices done', data.voices.length);
        clearInterval(voiceInterval);
    }
}, 300);

// make sure that we start at the top
window.scrollTo(0,0);

console.log(data);
//console.log(JSON.stringify(data, null, 2));

const link = document.getElementById('link');
const textarea = document.getElementById('result');

// give it 5sec for everyting to settle
setTimeout(() => {
    const resultString = JSON.stringify(data, null, 2);
    const blobURL = window.URL.createObjectURL(new Blob([resultString], {type: 'text/json'}));

    link.setAttribute('href', blobURL);
    link.innerText = 'Click to download';
}, 5000);
