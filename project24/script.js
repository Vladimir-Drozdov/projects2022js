//arguments
const tt = function (a, b, c, d) {
   console.log(arguments);
   console.log(arguments[2])
}
tt(1, 2, 3, 4);

//Функция-конструктор
const Wizard = function (a, b, c) {
   this.a = a;
   this.b = b;
   this.c = c;
   this.g = function () {
      return this.a + this.c;
   }
}
Wizard.prototype.fire = function () {
   const d = this.a + this.b;
   return d;
}
const wise = new Wizard(1, 2, 'rrr');
const wiser = new Wizard(4, 5, 'gh');
console.log(wise.fire === wiser.fire);//true
console.log(wise.g === wiser.g);//false
console.log('wise.fire:', wise.fire());
console.log('wiser.fire:', wiser.fire());
console.log(wise);
console.log(wise instanceof Wizard);//true