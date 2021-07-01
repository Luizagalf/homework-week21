submit.onclick = function (event) {
    event.preventDefault();
    let nickname = document.getElementById('animal').value;

    let sex = document.getElementsByName("sex");
    let selectedSex;
    for(let i = 0; i < sex.length; i++) {
        if(sex[i].checked)
        selectedSex = sex[i].value;
    }

    let breed = document.getElementsByName("breed");
    let selectedBreed;
    for(let i = 0; i < breed.length; i++) {
        if(breed[i].selected)
        selectedBreed = breed[i].text;
    }

    let meal = document.getElementsByName("meal");
    let selectedMeals = "";
    for(let i = 0; i < meal.length; i++) {
        if(meal[i].checked) {
        selectedMeal = meal[i].labels[0].textContent;
        selectedMeals += `${selectedMeal}; `;
        }
    }

    class Cat {
        constructor(n, t, s, m) {
            this.nickname = n;
            this.type = t;
            this.sex = s;
            this.meal = m;
        } 
    }
    let animal = new Cat(nickname, selectedBreed, selectedSex, selectedMeals);
    document.getElementById("result").innerHTML += `Данные сохранены`;
    console.log(animal);
    
    fetch("https://httpbin.org/post", {
            method: "POST",
            body: new FormData(document.getElementById("form"))
        })
        .then(Response => Response.json())
        .then(animal => {
            console.log(animal);
        })
        .catch(error => console.log(error));
    document.getElementById("form").reset();
}