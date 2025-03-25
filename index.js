

let paraf = ''

if (process.argv.length > 1){

    for (let i = 2; i < process.argv.length ; i++){
        paraf += ` ${process.argv[i]}`
        
    }
    

console.log(paraf)

}else{
    console.log('Hello Boolean')
}



