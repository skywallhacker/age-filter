let box_left = document.querySelector('.box_left')
let box_midle = document.querySelector('.box_midle')
let box_right = document.querySelector('.box_right')
let form = document.querySelector('form')
let inputName = document.querySelector('.names')
let inputAge = document.querySelector('.ages')

let users = [
    { name: 'John', age: 21, },
    { name: 'Lenny', age: 18, },
    { name: 'Andrew', age: 43, },
    { name: 'Peter', age: 81, },
    { name: 'Anna', age: 47, },
    { name: 'Albert', age: 76, },
]


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

        h1.innerHTML = item.name
        span.innerHTML = 'Age'
        h6.innerHTML = item.age

        cont.append(elem)
        elem.append(names, ages)
        names.append(h1)
        ages.append(span, h6)
    }
}

let left = users.filter((user) => {
    return user.age < 25;
});
reload(left, box_left)
let midle = users.filter((user) => {
    return user.age < 50 && user.age > 25;
});
reload(midle, box_midle)
let right = users.filter((user) => {
    return user.age > 50;
});
reload(right, box_right)

console.log(users);

form.onsubmit = (event) => {
    event.preventDefault();
    let list = {
        name: inputName.value,
        age: inputAge.value
    }

    if (inputName.value.length !== 0 && inputAge.value.length !== 0) {
        users.push(list)
    }
    console.log(users);
    let left = users.filter((user) => {
        return user.age < 25;
    });
    reload(left, box_left)
    let midle = users.filter((user) => {
        return user.age < 50 && user.age > 25;
    });
    reload(midle, box_midle)
    let right = users.filter((user) => {
        return user.age > 50;
    });
    reload(right, box_right)
}


