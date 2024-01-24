let btn = document.querySelector("button");
let input = document.querySelector("#date");
let p_tag = document.querySelector("p");
let date = new Date() ;

console.log(date);

let currentYear = date.getFullYear();
let currentMonth = date.getMonth() + 1;
let currentDay = date.getDate();

btn.addEventListener("click", () => {
   
    let x = input.value;
    x = x.split("-");

    let birth_year = currentYear - x[0];
    let birth_month = currentMonth - x[1];
    let birth_day = currentDay - x[2];

    if (birth_day < 0) 
    {
        birth_month--; 
        birth_day += 30;
        birth_year--;
    }

    if(birth_month < 0)
    {
        birth_day++;
        birth_month += 12;
    }

    if(birth_year < 0)
    {
        birth_year = "0";
    }
    p_tag.innerText = birth_year + " years " + " " + birth_month + " months " + " " + birth_day + " days";
});
