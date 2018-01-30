# CLICKER

> a web remote control for the players out there! ✨

![Clicker hands-on](https://user-images.githubusercontent.com/5303585/35593912-b3f6f09a-0611-11e8-94e9-a8217e826b08.gif)

## Motivation

In a nutshell, I had to desperately get up the bed to turn down the volume of an episode of a TV show I was watching online and that got me really mad at the universe. So I've built Clicker, a JavaScript application powered by [socket.io](https://socket.io/) and [React](https://reactjs.org/) – for fun and profit.

## How to setup your Clickr

Since this is a JavaScript application, make sure you have [Node.js](https://nodejs.org/en/) installed.

Then `git clone` this repository or [download the package](https://github.com/diessica/remote-controller/archive/master.zip), and go to the project's folder using your terminal. If you've called it `clicker`, just:

```sh
$ cd clicker
```

### 1. get the server running 💻

You'll need to install the project's dependencies and start the server.

```sh
$ cd server
$ npm install
$ npm start
```

> The server will start under `https://localhost:4001`.

### 2. set up the front-end 📱

Again, installing dependencies and starting the server, but in the `client` folder.

```sh
$ cd client
$ npm install
$ npm start
```

> The front-end will start under `https://localhost:3000`.

Remember to set up the **server's external IP** environment variable (`REACT_APP_SERVER_IP`) in the `.env` file so Clicker will connect to it instead of `localhost`. After that, you should be able to use Clicker in any device connected your network, such as your smartphone!

### 3. set up in the target player 📺

It's time to get the external player ready for Clicker! The website's player should react to the following events triggered by Clicker:

* `play_done`
* `pause_done`
* `volume_set_done`

To get Clicker to know about the initial player state, it's important to react to `volume_get`, `volume_get_done`, `volume_set_done`, `playback_get` as well.

The code below shows an integration with the JW Player, a popular web player, by making use of [its API](https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/), exposed in the website's `window` object.

```js
const socket = io("https://localhost:4001")

socket.on("play_done", () => {
    window.jwplayer().play()
})
socket.on("pause_done", () => {
    window.jwplayer().pause()
})
socket.on("volume_get", () => {
    const volume = window.jwplayer().getVolume()
    socket.emit("volume_get_done", volume)
})
socket.on("volume_set_done", volume => {
    window.jwplayer().setVolume(volume)
})
socket.on("playback_get", () => {
    const playback = window.jwplayer().getState()
    socket.emit("playback_get_done", playback)
})
```

That code should be appended to the website along with the [socket.io client](https://github.com/socketio/socket.io-client). You can use browser extensions such [Custom Style Script](https://addons.mozilla.org/en-US/firefox/addon/custom-style-script/), for Firefox, or [Custom JavaScript for websites](https://chrome.google.com/webstore/detail/custom-javascript-for-web/poakhlngfciodnhlhhgnaaelnpjljija?hl=en), for Chrome, to achieve that.

The final example is provided below.

<details>

```js
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.4/socket.io.js"></script>
<script>
    const socket = io("https://localhost:4001")

    socket.on("play_done", () => {
        window.jwplayer().play()
    })
    socket.on("pause_done", () => {
        window.jwplayer().pause()
    })
    socket.on("volume_get", () => {
        const volume = window.jwplayer().getVolume()
        socket.emit("volume_get_done", volume)
    })
    socket.on("volume_set_done", volume => {
        window.jwplayer().setVolume(volume)
    })
    socket.on("playback_get", () => {
        const playback = window.jwplayer().getState()
        socket.emit("playback_get_done", playback)
    })
</script>
```

<summary>
See final script
</summary>
</details>

<br />

✨ **Have fun!**

## License

MIT
