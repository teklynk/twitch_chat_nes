var nes;

function loadRom() {
    var url;

    if (!romName) {
        alert('rom name not found in URL. ie: &rom=invasion');
    } else {
        url = './roms/' + romName + '.nes';
    }

    var request = new XMLHttpRequest();
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
    try {
        var rom = new NesJs.Rom(buffer);
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
        console.log('Disables audio because this browser does not seems to support WebAudio.');
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