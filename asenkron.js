// ====================== callback kullanımı ======================

// const books = [{name:"book1", author:"yazar1"},
//                 {name:"book2", author:"yazar2"}]

// const printBooks = () => {
//     books.map( (book) => {
//         console.log(book.name);
//     })
// }


// const addBook = (newBook, callback) => {
//     books.push(newBook);
//     callback();
// }

// const new_book = {name: "book3", author:"yazar2"}
// addBook(new_book, printBooks);

// ==================================================================








// ====================== promise kullanımı =========================

// const books = [{name:"book1", author:"yazar1"},
//                 {name: "book2", author:"yazar2"},
//                 {name: "book3", author:"yazar3"}]

// const print_books = () => {
//     books.map( (book) => {
//         console.log(book.name)
//     })
// }

// const addBook = (newbook, ) => {
//     const promise = new Promise((response, reject) => {
//         books.push(newbook);
//         //response();
//         reject();
//     });
//    return promise;
// }



// addBook({name:"book4", author:"yazar1"})
//     .then( () => {
//         console.log("Veriler kaydedildi");
//         print_books();
//     }).catch( () => {
//         console.log("Bir hata oluştu")
//     })


// ========================================================================================================================================






// ================================================================ async - await dersi ===================================================
// ard arda promise yapısı, Burada then ile getData dan bir olumlu ceap gelmezse clear çalışmaz 

const getdata = (data) => {
    console.log("Veriler alınıyor ..")
    const promise = new Promise((response, reject) => {
        if (data) {
            response("Veriler alındı ..")
        } else {
            reject("Veriler alınamadı .. ")
        }
    })
    return promise
}

const clearData = (data) => {
    console.log("Veriler temizleniyor");
    const promise = new Promise((response, reject) => {
        if (data) {
            response("Veriler silindi")
        } else {
            reject("Veriler silinemedi")
        }
    })
    return promise
}




// promise yapısı ile __________

// getdata(false)
//     .then((ret) => {
//         console.log(ret)
//         return clearData(true)
//     }).then( (ret) => {
//         console.log(ret)
//     }).catch( (ret_catch) => {
//         console.log(ret_catch)
//     })

// async - await , promise lerin karşılanmasının başka bir yöntemi




// async - await yapısı ile ___________

// async function getInfo() {
//     try {
//         const getdataInfo = await getdata(true);
//         console.log(getdataInfo);
//         const clenadataInfo = await clearData(false); // getdata işlemi bitene kadar bekler
//         console.log(clenadataInfo);
//     } catch (error) {       // aync - await yapısında hataların yakalanması için try - catch yöntemi kullanılır.
//         console.log(error)
//     }
// }

// getInfo();

// ==========================================================================================================================


const books = [{ name: "book1", author: "yazar1" },
{ name: "book2", author: "yazar2" },
{ name: "book3", author: "yazar1" }]

const listBooks = () => {
    books.map((book) => {
        console.log(book.name)
    })
}
const addBook = (newBook) => {
    
    return new Promise( (response, reject ) => {
        if(newBook){
            response("Veri alındı, kaydedildi");
            books.push(newBook);

        }else {
            reject("Veri alınamadı");
        }
    })
}


async function add_and_list(newBook) {
    try {
        const add = await addBook(newBook);
        console.log(add);
        await listBooks();
        
    }
    catch (error) {
        console.log(error)
    }

}
add_and_list({ name: "book4", author: "yazar2" })

