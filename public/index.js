
const burger 	= document.querySelector("#burger") ;
const menu 	= document.querySelector("#menu").classList ;
const x_icon  = document.querySelector("#x_icon") ;



burger.addEventListener('click',() => {
	menu.toggle("hidden");

})

x_icon.addEventListener('click',()  => {
    menu.toggle("hidden")
})



