# Twitch Chat-NES OBS overlay

### What is this?

This is a "Twitch Plays" overlay that allows Twitch chat to control an NES game that is running inside a OBS browser source.
The overlay is connects to your Twitch chat and listens for specific chat commands like: !u, !d, !l, !r, !a, !b to control the NES game.

### [Try it here](https://twitch-chat-nes.pages.dev/)

### Chat Commands

- **!u** : d-pad up
- **!d** : d-pad down
- **!l** : d-pad left
- **!r** : d-pad right
- **!a** : A button
- **!b** : B button
- **!start** : Start
- **!game** : Changes the game. ie: !game invasion

**Pro Tip:** You can add a number to the end of a command to change how long the button is pressed. The max value is 10. This can help with some games that require the player to move across the screen or hold down the fire button. Examples: !r 4, !a 5, !d 8


### Want to modify the CSS?

You can add this CSS to the OBS browser source and modify it to suit your needs.
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
- If you have Python installed on your machine, you can run a simple http web server using python. Example: python -m http.server 8000 --bind 127.0.0.1.
- Host this project on a VPS like: Linode, Amazon, Digital Ocean.