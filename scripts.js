let equalColumns = function(){
   let columns = document.getElementsByClassName("col");

   var length = columns.length;
   var height = 0;

   for (let i = 0; i < length; i++){
       columns[i].style.height = "auto"
   }

   for (let i = 0; i < length; i++){
       if (columns[i].clientHeight > height){
           height = columns[i].clientHeight;
           console.log(height)
       }
   }
   for(let i = 0; i < length; i++){
       columns[i].style.height = height + "px";
   }
   
}
equalColumns();
window.addEventListener("resize", equalColumns, true)