// objeler farklı adreslere sahip oldugu icin degerler bakimindan karsilastirilamaz

const obj1 = { message:"lorem"};
const obj2 = { message:"lorem"};

const val1 = "lorem";
const val2 = "lorem";

if(val1 == val2){ console.log("Degerler esit")};
if(obj1 == obj2){ console.log("Objeler esit")}



// Yeni obje olusturma ve deger atama
// new ile veya {} ile olusturulan objeler object.prototype i kalitim alir.
let country = {
    name : "Turkiye",
    language : "Turkish"
}

let country2 = new Object()
country2.name = "Egypt"
country2.language = "Arabic"

console.log(country.name + "  "  + country2.name)



// kalitim i belirtmek icin bir baska obje olusturma yontemi olan object.create() kullanilabilir.
let noInheritence = Object.create(null)         // kalitim icermez
let standartObject = Object.create(Object.prototype)        //klasik objeyi kalitim alir.
let countryObject = Object.create(country)      //country i kalitim alir





// object key-value operasyonlari
// degerlere erismek
console.log("Value erisim yontem 1 = . ile ", obj1.message);
console.log("Value erisim yontem 2 = [] ile ", obj1["message"])
//bilgiyi degistirme
obj1.message = "degisen bilgi"
console.log("Bilgiyi degistirme : " , obj1.message)
//objeye yeni eleman ekleme
obj1.age = 34
console.log("Objeye bilgi ekleme : ", obj1.age)
//anahtar-key bilgilerine erismek
keys = Object.keys(obj1)
console.log("Keys : ", keys)
//keys.forEach(item => {
//     console.log(item)
// })
//value bilgilerine erismek
console.log("Value degerlerine erismek : ", Object.values(obj1))
// objeden veri silme ;
delete obj1["message"]
console.log(obj1.message)



// computes property kullanimi :
function objectify(key, value){
    return {
        [key] : value
    }
}
objectify("name", "seyma")




// kompleks objelerin kullanimi :
let server_info = {
    users : [
        {name : "ayse", age : 30},
        {name : "elif", age : 25}
    ],

    settings : {
        version : 1.2,
        DNS : "105.xx.xx.xx"
    },
    block_list : ["a", "b"]
}
console.log("Kompleks object : ============")
console.log("server_info.block_list[0] : ", server_info.block_list[0])
console.log("server_info.settings[\"version\"] : ",server_info.settings["version"])
console.log("server_info.users[0].name : ",server_info.users[0].name)





// obje metotlari : 
console.log(Object.keys(obj1)) // Key’lerden oluşan bir array döner(return).
console.log(Object.values(obj1)) // Value’lardan oluşan bir array döner.
console.log(Object.entries(obj1)) // [key, value] çiftlerinden oluşan bir array döner. 




// JSON icin : 
// const json_file = require("json_file.json")
// document.getElementById("demo").innerHTML = JSON.stringify(obj1); // obje string e cevirilir ve demo id' sine basilir.
// let stringobj = JSON.stringify(person) ; 
// let newPerson = JSON.parse(stringobj) // stringify in tersi olarak, string i objeye cevirir.




// objelere metot ekleme ;
let user1 = {
    firstname : "Seyma",
    surname : "Atmaca",
    programming : true,
    languages : ["Python", "JS"],
    isFullName : function() {
        return `${this.firstname}  ${this.surname}`
    }
}

console.log("Object metods : ", user1.isFullName())



// sinifa prototype ile fonksiyon ekleme ;
function Insan(name, age) {
    this.name = name,
    this.age = age
} 

Insan.prototype.yeni = () => {console.log("Yeni fonskiyon")}
let person = new Insan("ayse", 30)
person.yeni()




// Object ve Array Destructuring işlemleri 
let settings = {
    userName : "lorem",
    password : "ıpsum",
    isActive : true,
    ip : "192.168.1.7",
    serverName : "google.com"
}


// bilgileri cikartip bir degisken olarak kullanabiliyoruz. 
// kalan bilgileri settings_info icine atiyor
let {userName : user_name, password, isActive, ...settings_info} = settings
console.log("Destructuring : ", user_name, isActive, settings_info)


let scores = [100,200,300,400]
let [scores_1, score_2, ...scores_] = scores
console.log("Array destructuring : ", scores_1, scores_)
