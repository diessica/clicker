const play = "play"
const pause = "pause"
const volume_get = "volume_get"
const volume_set = "volume_set"
const playback_get = "playback_get"

module.exports = (socket, io) => {
    console.log("client connected, o/")

    socket.on(play, () => io.emit(`${play}_done`))
    socket.on(pause, () => io.emit(`${pause}_done`))
    socket.on(volume_get, () => io.emit(volume_get))
    socket.on(`${volume_get}_done`, volume =>
        io.emit(`${volume_get}_done`, volume)
    )
    socket.on(volume_set, volume => io.emit(`${volume_set}_done`, volume))
    socket.on(volume_get, () => io.emit(volume_get))
    socket.on(playback_get, () => io.emit(playback_get))
    socket.on(`${playback_get}_done`, playback =>
        io.emit(`${playback_get}_done`, playback)
    )

    socket.on("disconnect", () => console.log("client disconnected :("))
}
