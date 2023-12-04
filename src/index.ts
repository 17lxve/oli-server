import { server } from './app'
import { config } from 'dotenv'
if (process.env.NODE_ENV !== 'production'){
    config();
}

const port = process.env.PORT || 2001

server.listen(port, async () => {
    console.log(`Server listening on http://localhost:${port}`)
})