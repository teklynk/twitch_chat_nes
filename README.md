# Twitch Chat-NES OBS overlay

### What is this?

This is a "Twitch Plays" overlay that allows Twitch chat to control an NES game that is running inside OBS browser source.
The overlay is connected to your Twitch chat and listening for specific commands like: !u, !d, !l, !r, !a, !b to control the NES game.

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

### If you would like to use your own NES Roms, you will need to install and run this project locally or on your own server. 

### Install and Run your own instance

- Set up a simple NGINX web server on your local machine. 
- Host this project on a VPS like: Linode, Amazon, Digital Ocean
- Use XAMPP, WampServer.
- If you have Python installed on your machine, you can run a simple http web server using python. Example: python -m http.server 8000 --bind 127.0.0.1.
