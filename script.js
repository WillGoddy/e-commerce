// alert ('Welcome back my dude')
var produit=document.getElementsByClassName("box")


for( let i=0; i<produit.length; i++){
    let btnplus= produit[i].children[5].children[1]
    let btnMoins= produit[i].children[5].children[0]
    let quantité= produit[i].children[3].children[1]
    let Apayer= produit[i].children[4].children[1]
    let PU= produit[i].children[2].children[1]
    let prixU= parseInt (PU.innerText)
    let qty= parseInt(quantité.innerText)
    
    btnplus.addEventListener("click",function(){
        qty++
        quantité.innerText=qty
        Apayer.innerText=PU.innerText*qty
        somme()
    })

    
    btnMoins.addEventListener("click",function(){
        if(qty>0){
            qty--
        quantité.innerText=qty
        Apayer.innerText=PU.innerText*qty
        }
        somme()
    })
    
}

    let totalPrice = document.getElementById("afficher")
    console.log(totalPrice)

function somme (){
    let sum = 0
    let totalU=document.getElementsByClassName("price")
    for( let i=0; i<totalU.length; i++){
        let totaux= parseInt(totalU[i].innerText)
        sum = sum + totaux
        console.log(sum);
        
    }
    totalPrice.innerHTML=sum
}
var likeButtons = document.getElementsByClassName("likebtn");

for (let i = 0; i < likeButtons.length; i++) {
    likeButtons[i].addEventListener("click", function () {
        if (this.style.backgroundColor === "red") {
            this.style.backgroundColor = "black";
            this.style.color = "white";
        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";
        }
    });
}
var effacer =document.getElementsByClassName("poubbtn")

for( let i=0; i<effacer.length; i++){
    effacer[i].addEventListener("click", function(){
        let produit = this.closest(".box")
        produit.remove()
    })
}
