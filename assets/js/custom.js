function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    let results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

let channelName = getUrlParameter('channel');
let romName = getUrlParameter('rom');
let size = getUrlParameter('size');
let modreset = getUrlParameter('mod-reset');
let modgame = getUrlParameter('mod-game');
let showmessages = getUrlParameter('show-messages');

if (!channelName) {
    alert('channel name not found in URL. ie: ?channel=MrCoolStreamer');
}

if (!romName) {
    alert('rom name not found in URL. ie: &rom=invasion');
}

function isInt(value) {
    let x;
    if (isNaN(value)) {
        return false;
    }
    x = parseFloat(value);
    return (x | 0) === x;
}

let nes;

function loadRom() {
    let url;

    try {
        url = './roms/' + romName + '.nes';
    } catch (e) {
        console.log('rom not found');
        return;
    }

    let request = new XMLHttpRequest();
    request.responseType = 'arraybuffer';

    request.onload = function () {
        console.log('Loading done.');
        run(request.response);
    };

    request.onerror = function (e) {
        console.log('failed to load.');
    };

    request.open('GET', url, true);
    request.send(null);

    console.log('Loading rom image...')
}

function run(buffer) {
    let rom;
    try {
        rom = new NesJs.Rom(buffer);
    } catch (e) {
        console.log(e.toString());
        return;
    }

    console.log('Rom Header info');

    nes = new NesJs.Nes();

    nes.setRom(rom);

    nes.setDisplay(new NesJs.Display(document.getElementById('mainCanvas')));

    try {
        nes.setAudio(new NesJs.Audio());
    } catch (e) {
        console.log('Disables audio because this browser does not seem to support WebAudio.');
    }

    window.onkeydown = function (e) {
        nes.handleKeyDown(e);
    };
    window.onkeyup = function (e) {
        nes.handleKeyUp(e);
    };

    console.log('bootup.');
    nes.bootup();

    console.log('runs.');
    nes.run();
}

function pressPadButton(key) {
    if (nes === undefined)
        return;

    nes.pad1.pressButton(key);
}

function releasePadButton(key) {
    if (nes === undefined)
        return;

    nes.pad1.releaseButton(key);
}