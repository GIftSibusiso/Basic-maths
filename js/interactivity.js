const button = document.querySelector("button");

for ( let i=0; i<10; i++ ) {
    document.querySelector(".btn"+i).addEventListener("click", () => {
        document.querySelector("p").innerHTML += i;
    })
}

document.querySelector(".btnC").addEventListener("click", () => {
    document.querySelector("p").innerHTML = "";
})
