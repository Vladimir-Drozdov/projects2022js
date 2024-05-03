
async function mounted() {
   console.log(111)
   const res = await fetch('/api/server');
   this.servers = await res.json();
   let name = document.querySelector('.list-group-item');
   let status = document.querySelector('.strong');
   let circle = document.querySelector('.spinner-border');
   console.log(this.servers[0]);
   for (let server of this.servers) {
      let li = document.createElement('li');
      name.insertAdjacentElement('beforebegin', li);
      let strong = document.createElement('strong');
      li.insertAdjacentElement('afterend', strong);
      li.innerText = server.name;
      if (li.innerText !== '') {
         circle.remove();
      }
      strong.innerText = server.status;
   }
   name.remove();
   status.remove();
};
mounted();

