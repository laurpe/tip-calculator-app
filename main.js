const bill = document.querySelector("#bill");

bill.addEventListener("change", (event) => {
    console.log(event.target.value);
});

//tee radiobuttonit, silloin ei tarvitse seurata erikseen joka ikisen nappulan painamista

const numberOfPeople = document.querySelector("#number-of-people");

numberOfPeople.addEventListener("change", (event) => {
    console.log(event.target.value);
});
