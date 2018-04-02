

document.querySelectorAll(".criteria").forEach(function(element) {
           var clicked = false;

   element.addEventListener("click", function(e) {
       if(!clicked) {
           clicked = true;
           e.target.childNodes[1].insertAdjacentHTML("beforeend", '<i class="fas fa-check"></i>');
           e.target.classList.add("selected")
            return;
            
       }
       if(clicked) {
           clicked = false;
           var node = e.target.childNodes[1].children[1];
           e.target.classList.remove("selected");
           if(node) {
               node.parentNode.removeChild(node);
           }
           
       }
       
       
   })
});

document.querySelectorAll(".toggle").forEach(function(element) {
    element.addEventListener("click", function(e) {
       document.querySelector(`#${e.target.attributes[1].nodeValue}-list`).style.display = document.querySelector(`#${e.target.attributes[1].nodeValue}-list`).style.display === 'none' ? '' : 'none';
    });
});
