import {pipeline, Transform } from 'stream'


const upper  = new Transform({
        transform(chk , encoding , callback){
            callback(null, chk.toString().toUpperCase())
        }
    })


    console.log("type something here... ")


    process.stdin.pipe(upper).pipe(process.stdout)


    // >>> somehow it works fine!!!!