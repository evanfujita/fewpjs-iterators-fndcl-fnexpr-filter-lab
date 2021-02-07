function findMatching (array, name) {
    let result = array.filter( driver => {
       return driver.toUpperCase() == name.toUpperCase()
    })
    return result;
}

let fuzzyMatch = (array, string) => {
    let result = array.filter(driver => {
        return driver.includes(string)
        
    })
    return result
}

function matchName (array, name) {
    return array.filter (driver => driver.name === name)
}

