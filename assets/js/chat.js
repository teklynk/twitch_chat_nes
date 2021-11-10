function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    let results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

let channelName = getUrlParameter('channel');
let romName = getUrlParameter('rom');

function isInt(value) {
    var x;
    if (isNaN(value)) {
        return false;
    }
    x = parseFloat(value);
    return (x | 0) === x;
}

const client = new tmi.Client({
    channels: [channelName]
});

client.connect().catch(console.error);

client.on('chat', (channel, user, message, self) => {
    if (user['message-type'] === 'chat') {

        let timeLength = 100;

        messagePart2 = message.split(' ')[1];

        if (isInt(messagePart2)) {
            if (parseInt(messagePart2) < 5) {
                timeLength = parseInt(messagePart2 + '000');
            }
        }

        if (message.startsWith("!r")) {
            pressPadButton(NesJs.Joypad.BUTTONS.RIGHT);

            setTimeout(function () {
                releasePadButton(NesJs.Joypad.BUTTONS.RIGHT);
            }, timeLength);

            console.log('!r');
        }

        if (message.startsWith("!l")) {
            pressPadButton(NesJs.Joypad.BUTTONS.LEFT);

            setTimeout(function () {
                releasePadButton(NesJs.Joypad.BUTTONS.LEFT);
            }, timeLength);

            console.log('!l');
        }

        if (message.startsWith("!u")) {
            pressPadButton(NesJs.Joypad.BUTTONS.UP);

            setTimeout(function () {
                releasePadButton(NesJs.Joypad.BUTTONS.UP);
            }, timeLength);

            console.log('!u');
        }

        if (message.startsWith("!d")) {
            pressPadButton(NesJs.Joypad.BUTTONS.DOWN);

            setTimeout(function () {
                releasePadButton(NesJs.Joypad.BUTTONS.DOWN);
            }, timeLength);

            console.log('!d');
        }

        if (message.startsWith("!a")) {
            pressPadButton(NesJs.Joypad.BUTTONS.A);

            setTimeout(function () {
                releasePadButton(NesJs.Joypad.BUTTONS.A);
            }, 100);

            console.log('!a');
        }

        if (message.startsWith("!b")) {
            pressPadButton(NesJs.Joypad.BUTTONS.B);

            setTimeout(function () {
                releasePadButton(NesJs.Joypad.BUTTONS.B);
            }, 100);

            console.log('!b');
        }

        if (message.startsWith("!start")) {
            pressPadButton(NesJs.Joypad.BUTTONS.START);

            setTimeout(function () {
                releasePadButton(NesJs.Joypad.BUTTONS.START);
            }, 100);

            console.log('!start');
        }

        if (message.startsWith("!select")) {
            pressPadButton(NesJs.Joypad.BUTTONS.SELECT);

            setTimeout(function () {
                releasePadButton(NesJs.Joypad.BUTTONS.SELECT);
            }, 100);

            console.log('!select');
        }

    }
});