fetch('./footer.html')// нельзя файл
   .then((response) => {
      return response.text();
   })
   .then((data) => {
      console.log(data);
   })

console.log(10);