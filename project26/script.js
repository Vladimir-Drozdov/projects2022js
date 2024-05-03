class Guitar{
   constructor(first, second) {
      this.first=first;
      this.second=second;
   }
   person = 'keg';
   say() {
      console.log(`hello ${this.person}`);
   }
   play=()=> {
      console.log(`buy ${this.person}`);
   }
}
const guit=new Guitar(1,2)
console.log(guit.first);
guit.say()
guit.play();