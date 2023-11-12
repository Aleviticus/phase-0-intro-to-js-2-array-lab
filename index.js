const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push('Ralph');
    return name;
}

function destructivelyPrependCat(name) {
    cats.unshift('Bob');
    return name;
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    return [...cats, name];   
}

function prependCat(name) {
    return [name, ...cats]
}
function removeLastCat() {
    const newCats = [...cats]
    newCats.pop()
    return newCats;
}
function removeFirstCat() {
    const newCats = [...cats]
    newCats.shift()
    return newCats;
}