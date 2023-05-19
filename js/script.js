let box_left = document.querySelector('.box_left')
let box_midle = document.querySelector('.box_midle')
let box_right = document.querySelector('.box_right')
let form = document.querySelector('form')
let inputName = document.querySelector('.names')
let inputAge = document.querySelector('.ages')
let data

fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(use => {
        data = use.users
        filter()
    })


function reload(arr, cont) {
    cont.innerHTML = ''
    for (let item of arr) {
        let elem = document.createElement('div')
        let names = document.createElement('div')
        let ages = document.createElement('div')
        let h1 = document.createElement('h1')
        let span = document.createElement('span')
        let h6 = document.createElement('h6')

        elem.classList.add('elem')
        names.classList.add('names')
        ages.classList.add('ages')

        h1.innerHTML = item.firstName
        span.innerHTML = 'Age'
        h6.innerHTML = item.age

        cont.append(elem)
        elem.append(names, ages)
        names.append(h1)
        ages.append(span, h6)
    }
}


function filter() {
    let left = data.filter((user) => {
        return user.age < 25;
    });
    reload(left, box_left)
    let midle = data.filter((user) => {
        return user.age < 50 && user.age > 25;
    });
    reload(midle, box_midle)
    let right = data.filter((user) => {
        return user.age > 50;
    });
    reload(right, box_right)


}


form.onsubmit = (event) => {
    event.preventDefault();
    

    if (inputName.value.length !== 0 && inputAge.value.length !== 0) {
        fetch('https://dummyjson.com/users/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                firstName: inputName.value,
                age: inputAge.value
            }
        )
    })
        .then(res => res.json())
        .then(edit => {
            console.log(edit);
            data.push(edit)
            console.log(data);
            filter()
            
        })

    }


}



