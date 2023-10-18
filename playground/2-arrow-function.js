// Normal definition using function keyword
const squareWithFunctionKeyword = function(x) {
    return x * x
}

// Function definition using arrow function
const squareUsingArrowFunction = (x) => {
    return x * x
}

// Function definition with shorhand 
const squareWithShorthandSyntax = (x) => x * x

console.log(squareWithShorthandSyntax(3))

const event = {
    name: 'Dance Party',
    guestList: ['M', 'N', 'O'],
    // This format will allow us to use this keyword
    // printGuestList: function() {
    //     console.log('Guest list is for: ' + this.name)
    // }

    // Arrow Function doesn't allow to use this keyword
    // printGuestList: () => {
    //     console.log('Guest list is for: ' + this.name)
    // }

    // Ideal format for setting up methods for objects
    printGuestList() {
        console.log('Guest list is for: ' + this.name)

        // Standard function won't work here because it is not in its scope to understand name field
        this.guestList.forEach(function(guest) {
            console.log('Guest ' + guest + ' is visiting ' + this.name)
        })

        // Instead, we've to use arrow functions that do bind the name field to the one that we have under the main object
        this.guestList.forEach((guest) => {
            console.log('Guest ' + guest + ' is visiting ' + this.name)
        })
    }
}

event.printGuestList()