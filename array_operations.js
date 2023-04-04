let arr = [1,2,3,4,5]

// basa eleman ekleme unshift
arr.unshift(0);
console.log("Unshift : ", arr)

// sona eleman ekleme : push
arr.push(6);
console.log("Push : ", arr)


// bastan eleman silme : shift
arr.shift()
console.log("Shift :", arr)

// sondan eleman silme : pop 
arr.pop()
console.log("Pop : ", arr)

//  konumdan eleman veya elemanlar silme : splice
arr.splice(1,1)
console.log("Splice : ", arr)

arr.splice(1,2)
console.log("Splice : ", arr)

//lokasyon bilgisi almak . indexOf()
console.log("IndexOf : ",arr.indexOf(1))


//array i kopyalamak : slice yada [...arr];
const copy_arr = arr.slice()
console.log("slice : ", copy_arr)

const cpy_arr = [...arr]
console.log("[...arr] : ",cpy_arr)


//string e çevitrme : 
console.log("toString : ", arr.toString());
console.log("Join : ",arr.join(" * "));


// index bilgisine göre öge eklemek: splice(index, 0 , value)
arr.splice(1,0,10)
console.log("splice ile ekleme : ",arr)



// var mı sorgusu : includes()
console.log(arr.includes(1))



//birlestirme : concat 
ar = [1,2,3]
console.log(arr.concat(ar))


// array in içinden belli bir kısmı kesme : splice()
info = ["ayse", "derya", "selin", "ece", "gülhan"]

let new_info = info.splice(1,3)
console.log("Info : ", info)
console.log("new_info : ", new_info)

// index bilgisi alma
console.log(info.indexOf("ayse"))


// bir array in kopyasını oluşturmak. slice() 
// Normal = ile yaparsak bu, kopyalanan değişkeni de değiştiriyor
// burada slice yerine [...info] da kullanılabilirdi. buna es6 deniyor.
let copyItems = info.slice()
copyItems.pop()
console.log("CopyItems : ", copyItems, " info : ", info)

// es6 ile birden fazla array i tek array de birleştirme
let all_info = [...info, ...new_info]
console.log("all_info : ", all_info)


// string e çevirme
console.log("\ntoString : ", all_info.toString())
console.log("join : ", all_info.join(" , "))


// istenen index bilgisine öge ekleme
all_info.splice(3,0,"ali")
console.log("splice öge ekleme : ", all_info)



// for-each kullanımı 
const malzemeler = ["yumurta", "un", "süt"];
malzemeler.forEach(function(malzeme, malzemeIndeksi) {
    console.log(malzeme, malzemeIndeksi);
});
// console.log() fonksiyonu her bir malzeme için ayrı ayrı çalışacağından çıktı olarak tüm malzemeleri (ve indekslerini) alt alta görürüz.




// map kullanımı
const nums = [1,2,3]
const double_nums = nums.map(function(num){
    return num * 2 
})
console.log("\n","map : ", double_nums)



// some kullanımı 
// t-f doner
const try_some = nums.some(function(num){
    return num < 2
})
console.log("\nSome : ", try_some)




// every kullanımı
const try_every = nums.every(function(num){
    return num < 4
})
console.log("\nevery : ", try_every)



// filter kullanımı : 
const try_filter = nums.filter(function(num){
    return num < 2
})
console.log("\nfilter : ", try_filter)




//find kullanımı
// koşulu sağlayan birden fazla eleman varsa ilkini döndürür
const try_find = nums.find(function(num){
    return num == 2
})
console.log("\nFind : ", try_find)


const numss = [2,3,6,1,1]
// sort kullanımı 
numss
console.log("\nsort : ", numss.sort())






// filter ile sadece isstenen bilgilerin listeye eklenmesi 
const deneme = [1,25,6,9,3,5]

const new_deneme = deneme.filter( (num ) => {
    if( num % 5 == 0) {return num}
}); console.log(new_deneme)



// map ile array in yapısını degiştirmek
const names = ["ayse","fatma"]
const new_names = names.map(name => {
    {
        return {username : name, format : `${name[0]}.`, new : `${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`}
    }
}); console.log(new_names)



let result = 0
const a = [1,1,2,2,3]
var singleNumber = function(a){
    for( let i = 0; i< nums.length ; i++) {
        result ^= nums[i]
        console.log(result)
    }
}

singleNumber(a)