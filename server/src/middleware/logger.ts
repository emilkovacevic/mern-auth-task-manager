import { format } from 'date-fns'
import { v4 } from 'uuid'
import fs from 'fs'
import fsPromises from 'fs'
import path from 'path'
import {Request, Response, NextFunction} from 'express'
const uuid = v4
const fsPromise  = fsPromises.promises

export const logEvents = async (message: string , logFileName: string) => {
    const dateTime = format(new Date(), 'yyyyMMdd\tHH:mm:ss')
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`

    try {
        if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
            await fsPromise.mkdir(path.join(__dirname, '..', 'logs'))
        }
        await fsPromise.appendFile(path.join(__dirname, '..', 'logs', logFileName), logItem)
    } catch (err) {
        console.log(err)
    }
}

export const logger = (req: Request, res:Response, next:NextFunction ) => {
    logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, 'reqLog.log')
    console.log(`${req.method} ${req.path}`)
    next()
}
