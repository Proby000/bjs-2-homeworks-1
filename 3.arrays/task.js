function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((elem, i) => elem === arr2[i]);
}

function getUsersNamesInAgeRange(user, gender) {
    let result = user.filter(elem => elem.gender.includes(gender)).map(elem => elem.age).reduce((acc, i, idx, arr) => {
        acc += i;
        if (idx === arr.length - 1) {
            return acc / arr.length;
        }
        return acc;
    }, 0)

    return user === 0 ? 0 : result;
}

