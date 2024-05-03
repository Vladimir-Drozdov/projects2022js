class Pp{
   constructor(a, b) {
      this.a=a;
      this.b = b;
   }
   say() {
      console.log(this.a + this.b);
   }
}
const small = new Pp(3, 4);
small.say();