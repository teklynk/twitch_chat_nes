# Twitch Chat-NES OBS overlay

### What is this?

This is a "Twitch Plays" overlay that allows Twitch chat to control an NES game that is running inside a OBS browser
source. The overlay is connected to your Twitch chat and listens for specific chat commands like: !u, !d, !l, !r, !a, !b
to control the NES game.

This project uses [TMI.JS](https://tmijs.com/), [NES-JS](https://github.com/takahirox/nes-js) and plain old javascript,
css, html.

### [Try it here](https://twitch-chat-nes.pages.dev/)

### Screenshots

![sample1](https://github.com/teklynk/twitch_chat_nes/blob/main/screenshots/Screenshot%20from%202021-12-24%2003-08-32.png?raw=true)

### Chat Commands

- **!u** : d-pad up
- **!d** : d-pad down
- **!l** : d-pad left
- **!r** : d-pad right
- **!a** : A button
- **!b** : B button
- **!start** : Start
- **!select** : Select
- **!game** : Changes the game. ie: !game invasion
- **!reset** : Reloads the browser source and game.

**Pro Tip:** You can add a number to the end of a command to change how long the button is pressed. The max value is 10.
This can help with some games that require the player to move across the screen or hold down the fire button.
Examples: !r 4, !a 5, !d 8

### Keyboard

Arrow keys, Z, X, Enter

### Want to modify the CSS?

You can add this CSS to the OBS browser source and modify it for your needs.

```
#mainCanvas {
    border: 0;
    width: 640px;
    height: 480px;
    border-radius: 10px;
}

#chatCommand {
    color: white; 
    top: 550px;
    position: absolute;
    left: 30px;
    text-shadow: 1px 1px black;
}
```

### If you would like to use your own NES Roms, you will need to install and run this project locally or on your own server.

### Run your own instance

- Set up a simple NGINX web server on your local machine.
- Use XAMPP, WampServer locally on your machine.
- If you have Python installed on your machine, you can run a simple http web server using python. Example: python -m
  http.server 8000 --bind 127.0.0.1.
- Host this project on a VPS like: Linode, Amazon, Digital Ocean.

### Notes:

- Not all NES roms will work. Some have graphical and/or audio issues and/or a very slow frame rate. Test your own ROMs
  first to see how well they work in a browser.
- Sometimes TMI.js fails to connect to Twitch chat. In which case, you will need to refresh your browser source until it
  successfully connects.
- Not all games play the same way. Sometimes the chat commands interact with the game differently. Such as "!a" may
  actually start the game even though the game displays "Start" on the screen. Just remember how it was to play an NES game for the first time and trying to figure out if
  you need to press Start, Select, A, B... game controls and instructions are not consistent across NES games.
- There is no way to collect stats or high scores from the game/rom. I do not think this will ever be possible. Twitch
  chat is simply playing an NES game and no more than that.
- There is no way to save a game or load a game save. This may be something to consider if you are planning to have an
  epic 24hr "Twitch Plays" stream. If you need to restart the browser source or OBS while streaming, then the game will
  reset.