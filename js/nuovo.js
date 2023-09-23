
const ulElement = document.querySelector(".ulElement")

for (let i = 1; i <= 100; i++) {
    console.log(i)
    let singoloQuadrato = document.createElement("li")
    // singoloQuadrato.classList.add("bg-success ext-center aling-center")
    // let singoloQuadrato = `<li class="text-center aling-center">${i}</li> `;
    // ulElement.innerHTML += singoloQuadrato;
    // singoloQuadrato.classList.add("bg-primary,text-center,align-center");
    singoloQuadrato.classList.add("bg-primary")
    singoloQuadrato.classList.add("text-center");
    singoloQuadrato.classList.add("align-center");
    ulElement.append(singoloQuadrato)
    singoloQuadrato.innerHTML = i

    if ( i % 3 === 0 ) {
        console.log("Fizz")
    //     const singoloQuadrato = `<li class="bg-success text-center aling-center">${i}</li> `;
    // ulElement.innerHTML += singoloQuadrato;
    // let  singoloQuadrato = document.createElement("li")
    singoloQuadrato.classList.add("bg-success")
    singoloQuadrato.innerHTML = "Fizz";
    singoloQuadrato.classList.remove("bg-primary")
    }

    if ( i % 5 === 0 ) {
        console.log("Buzz")
        // let singoloQuadrato = `<li class="bg-warning text-center aling-center">${i}</li> `;
        // ulElement.innerHTML += singoloQuadrato;
        // let  singoloQuadrato = document.createElement("li")
        singoloQuadrato.classList.add("bg-warning")
        singoloQuadrato.innerHTML = "Buzz";
        singoloQuadrato.classList.remove("bg-primary","bg-success")
    }

    
    if ( i % 5 === 0  &&  i % 3 === 0 ) {
        console.log("FizzBuzz")
        // let singoloQuadrato = `<li class="bg-danger text-center aling-center">${i}</li> `;
        // ulElement.innerHTML += singoloQuadrato;
        // let  singoloQuadrato = document.createElement("li")
        singoloQuadrato.classList.add("bg-danger")
        singoloQuadrato.innerHTML = "FizzBuzz";
        singoloQuadrato.classList.remove("bg-primary","bg-success","bg-warning")
    }

}


//tabellina
for (let i = 0; i <= 10; i++) {
console.log(`8 x ${i} = ${ 8*i}`) 	
}