import io from "socket.io-client"

const SERVER_URL = process.env.REACT_APP_SERVER_IP || "localhost"

export default io(`https://${SERVER_URL}:4001/`)
