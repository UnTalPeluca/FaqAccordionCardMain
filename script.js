var acc = document.getElementsByClassName("acc-button");
var opened = [];
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function (){
        this.classList.toggle("active")
        let panel = this.nextElementSibling;
        if(panel.style.display === "block"){
            acc[i].firstElementChild.style.fontWeight = 'normal'
            acc[i].querySelector('img').classList.remove('rotated'); 
            panel.style.display = "none";
        } else {
            const buttons = Object.entries(acc)
            buttons.forEach(function(element){
                element[1].querySelector('img').classList.remove('rotated');
                element[1].firstElementChild.style.fontWeight = 'normal'
                element[1].nextElementSibling.style.display = "none";
            })
            panel.style.display = "block";
            acc[i].firstElementChild.style.fontWeight = 'bold';
            acc[i].querySelector('img').classList.add('rotated');          
        }
    })}