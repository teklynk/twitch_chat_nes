const client = new tmi.Client({
    channels: [channelName]
});

client.connect().catch(console.error);

console.log(client.readyState());

client.on('chat', (channel, user, message, self) => {
    if (user['message-type'] === 'chat') {

        // ignore messages that do not start with !
        if (self || !message.startsWith('!')) return;

        let timeLength = 100; // default
        let commandInteger;

        // split on spaces, grab the first item.
        commandInteger = message.split(' ')[1];

        // check if second part of message is an integer
        if (isInt(commandInteger)) {
            if (parseInt(commandInteger) <= 10) {
                timeLength = parseInt(commandInteger + '00');
            }
        }

        // output of user name and message
        function showUserCommand() {
            if (showmessages === 'true') {
                document.getElementById('chatCommand').innerText = user.username + ': ' + message;
            } else {
                document.getElementById('chatCommand').innerText = "";
            }
        }

        // D-Pad controls

        // check if message/command length is less than 5 characters
        if (message.length <= 5) {

            // right
            if (message.startsWith("!r")) {
                pressPadButton(NesJs.Joypad.BUTTONS.RIGHT);

                setTimeout(function () {
                    releasePadButton(NesJs.Joypad.BUTTONS.RIGHT);
                }, timeLength);
                showUserCommand();
            }

            // left
            if (message.startsWith("!l")) {
                pressPadButton(NesJs.Joypad.BUTTONS.LEFT);

                setTimeout(function () {
                    releasePadButton(NesJs.Joypad.BUTTONS.LEFT);
                }, timeLength);
                showUserCommand();
            }

            // up
            if (message.startsWith("!u")) {
                pressPadButton(NesJs.Joypad.BUTTONS.UP);

                setTimeout(function () {
                    releasePadButton(NesJs.Joypad.BUTTONS.UP);
                }, timeLength);
                showUserCommand();
            }

            // down
            if (message.startsWith("!d")) {
                pressPadButton(NesJs.Joypad.BUTTONS.DOWN);

                setTimeout(function () {
                    releasePadButton(NesJs.Joypad.BUTTONS.DOWN);
                }, timeLength);
                showUserCommand();
            }

            // a
            if (message.startsWith("!a")) {
                pressPadButton(NesJs.Joypad.BUTTONS.A);

                setTimeout(function () {
                    releasePadButton(NesJs.Joypad.BUTTONS.A);
                }, timeLength);
                showUserCommand();
            }

            // b
            if (message.startsWith("!b")) {
                pressPadButton(NesJs.Joypad.BUTTONS.B);

                setTimeout(function () {
                    releasePadButton(NesJs.Joypad.BUTTONS.B);
                }, timeLength);
                showUserCommand();
            }
        }

        // start
        if (message === "!start") {
            pressPadButton(NesJs.Joypad.BUTTONS.START);

            setTimeout(function () {
                releasePadButton(NesJs.Joypad.BUTTONS.START);
            }, 100);
        }

        // select
        if (message === "!select") {
            pressPadButton(NesJs.Joypad.BUTTONS.SELECT);

            setTimeout(function () {
                releasePadButton(NesJs.Joypad.BUTTONS.SELECT);
            }, 100);
        }

        // Mods only commands
        if (modreset === 'true' && (user.mod || user.username.toLowerCase() === channelName.toLowerCase())) {
            resetGame();
        } else if (modreset === 'false') {
            resetGame();
        }

        if (modgame === 'true' && (user.mod || user.username.toLowerCase() === channelName.toLowerCase())) {
            changeGame();
        } else if (modgame === 'false') {
            changeGame();
        }

        function resetGame() {
            // reset game
            if (message === "!reset") {
                setTimeout(function () {
                    window.location.reload();
                }, 100);
            }
        }

        function changeGame() {
            // change game
            if (message.startsWith("!game")) {
                // split on spaces, grab the first item.
                let gameName = message.split(' ')[1];
                let channelName = getUrlParameter('channel');
                let size = getUrlParameter('size');
                let modreset = getUrlParameter('mod-reset');
                let modgame = getUrlParameter('mod-game');
                let showmessages = getUrlParameter('show-messages');
                let srcURL = window.location.protocol + "//" + window.location.host + window.location.pathname;
                if (gameName) {
                    setTimeout(function () {
                        window.location.href = srcURL + "?channel=" + channelName.toLowerCase() + "&size=" + size + "&rom=" + gameName + "&mod-reset=" + modreset + "&mod-game=" + modgame + "&show-messages=" + showmessages;
                    }, 100);
                }
            }
        }
    }
});