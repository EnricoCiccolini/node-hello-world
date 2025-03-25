
//prova senza metodi 

// let paraf = ''

// if (process.argv.length > 2){

//     for (let i = 2; i < process.argv.length ; i++){
//         paraf += ` ${process.argv[i]}`
        
//     }
    

// console.log(paraf)

// }else{
//     console.log('Hello Boolean')
// }

// prova con metodi 

const words =process.argv.slice(2)

if(!words.length){
    
    console.log('Hello Boolean')
}else{

    console.log(words.join(' '))

}
