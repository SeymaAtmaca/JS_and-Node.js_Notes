// let name ;

// try{
//     name.forEach(name => {
//         console.log(name)
//     });
// } catch(error) {
//     console.log(error)
//     console.log("error catch block")
// } finally {
//     console.log("message for after try-catch block processes")
// }

// console.log("after error message")






// throw ile ozel hata mesajlari olustur
try{
    if (prompt("Age : ").length == 0 ) {
        throw("Please enter your age.")
    }
}catch(err) {
    console.log(err)
}