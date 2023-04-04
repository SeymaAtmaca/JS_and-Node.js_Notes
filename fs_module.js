const fs = require('fs')


// fs.readFile('fs_not.txt', 'utf-8', (err, res) => {
//     if(err) console.log(err);
//     console.log(res);
// })


// klasöre yazma
// fs.writeFile('fs_not.txt', 'sonradan eklenen not', 'utf-8', (err, res)=> {
//     if(err) console.log(err)
//     console.log("Yazım işlemi tamamlandı");
//     fs.readFile('fs_not.txt', 'utf-8', (err, res) => {
//         console.log(res)
//     })
// })


// klasör oluşturmak
// fs.mkdir('new', (err,res) => {
//     console.log(res)
// })

//klasör silme
// fs.rmdir('new', (err, res) => {
//     console.log(res)
// })