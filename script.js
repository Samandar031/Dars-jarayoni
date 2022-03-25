"use strict";

// juma 25.03.2022 16:12

// const Person = function (ism, yosh) {
//   this.ism = ism;
//   this.yosh = yosh;
// };

// let Uqituvchi = function (ism, yosh, oyligi, tili) {
//   Person.call(this, ism, yosh);
//   this.oyligi = oyligi;
//   this.tili = tili;
// };

// Person.prototype.yoshiHisobla = function () {
//   return 2022 - this.yosh;
// };

// Uqituvchi.prototype.oylikHisobla = function () {
//   return (this.oyligi * 100) / 1200000;
// };

// let umid = new Uqituvchi("Umid", 26, 4000000, "o'zbek");
// console.log(umid);
// console.log(umid.oylikHisobla());

// let aziz = new Uqituvchi("Aziz", 20, 5000000, "russia");
// console.log(aziz);
// console.log(aziz.oylikHisobla());

// let jamshid = new Person("Jamshid", 22);
// console.log(jamshid);
// console.log(jamshid.yoshiHisobla());

// Person.prototype = Object.create(Uqituvchi.prototype);

// 11111111111111111111111111111111111111111111111111111111

// class Ali {
//   constructor(ism, yosh, qovun, tarvuz) {
//     this.ism = ism;
//     this.yosh = yosh;
//     this.quvun = qovun;
//     this.tarvuz = tarvuz;
//   }
// }

// class Vali extends Ali {
//   constructor(ism, yosh, qovun, tarvuz, pomidor, bodring) {
//     super(ism, yosh, qovun, tarvuz);
//     this.pomidor = pomidor;
//     this.bodring = bodring;
//   }
// }

// console.log(Vali);

// let umid = new Vali("1", "2", "3", "4", "5", "6");
// console.log(umid);

// 111111111111111111111111111111111111111111111111111

// class Redmi {
//   constructor(nomi, narxi, rangi, joyi, yili) {
//     this.nomi = nomi;
//     this.narxi = narxi;
//     this.rangi = rangi;
//     this.joyi = joyi;
//     this.yili = yili;
//   }
//   yili() {
//     return 2022 - this.yili;
//   }
// }

// class Iphone extends Redmi {
//   constructor(nomi, narxi, rangi, joyi, hotirasi, tezligi, size) {
//     super(nomi, narxi, rangi, joyi, yili);
//     this.hotirasi = hotirasi;
//     this.tezligi = tezligi;
//     this.size = size;
//   }
// }

// class Nokia extends Redmi {
//   constructor(nomi, narxi, rangi, joyi) {
//     super(nomi);
//     this.yili = yili;
//   }
// }

// let samsung = new Iphone(
//   "Samsung",
//   "1.2 ming $",
//   "grey",
//   "Amerika",
//   2019,
//   "128Gb",
//   "5G",
//   "12x18"
// );
// console.log(samsung);

// let nokia = new Nokia(
//   "Samsung",
//   "1.2 ming $",
//   "grey",
//   "Amerika",
//   "128Gb",
//   "5G",
//   "12x18"
// );
// console.log(nokia);
// console.log(samsung.yili());

// prototype ?
//

// 2222222222222222222222222222222222222222222222222222222222

// const Person = {
//   hisobla() {
//     return 2022 - this.yosh;
//   },
//   qosh(ism, yosh) {
//     this.ism = ism;
//     this.yosh = yosh;
//   },
// };
// obyekt

// const Student = Object.create(Person);
// console.log(Student);
// ichidagi hamma funcsiyani prototypega o'tkazadi
// constructor funksiya bo'ldi

// Student.qosh = function (ism, yosh, fakultet) {
//   Person.qosh.call(this, ism, yosh);
//   this.fakultet = fakultet;
// };
// console.log(Student.qosh);

// Student.tanish = function () {
//   console.log(`I am ${this.ism}`);
// };

// const umid = Object.create(Student);
// console.log(umid);

// umid.qosh("umid", 20, "ali");
// console.log(umid);

// 222222222222222222222222222222222222222222222222222222222

// 1 public turdagi filtlar
// 2 protectd qilingan havfsizligi qilingan
// 3 private

class University {
  #nomi;
  #pinCode;
  constructor(nomi, soni) {
    this.#nomi = nomi;
    this.soni = soni;
    this.#pinCode = 1111;
  }
  parolUzgar(val) {
    this.#pinCode = "12" + val + "12";
    //keladigan ma'lumotni hashlayapdi oldidan va orqasidan qo'yib baribir databasega kira olmaydi
  }
  parolUchun(val) {
    this.parolUzgar(val);
  }
  #nomiUzgar(val) {
    this.#nomi = val;
  }
  #nomiAli(val) {
    this.#nomiUzgar(val);
  }
  zaynab(val) {
    this.#nomiAli(val);
  }
}
const tatu = new University("TATU", 1050);
// tatu.pinCode = 2222;
tatu.parolUchun(5555);

// tatu.nomiAli("salom");
tatu.zaynab("qoday");

console.log(tatu);

// o'rtacha havfsizlik

class Fak extends University {
  constructor(nomi, soni, sun) {
    super(nomi, soni);
    this.sun = sun;
  }
}

const Ali = new Fak("s", "a", "b");
console.log(Ali);
