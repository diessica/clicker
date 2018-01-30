const pem = require("https-pem")
const server = require("https").createServer(pem, (req, res) =>
    res.end("i am working :)")
)
const io = require("socket.io")(server)
const playerSocket = require("./socket")

server.listen(4001, () => {
    console.log(`listening on port 4001 :)`)
})

io.on("connection", socket => playerSocket(socket, io))
