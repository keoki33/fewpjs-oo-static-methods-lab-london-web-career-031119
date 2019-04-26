class Formatter {
  static capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  static sanitize(s) {
    return s.replace(/[^A-Za-z0-9-'" "]+/g, '');
  }
  static titleize(s) {
    let wordsArray = s.split(" ")
    wordsArray = wordsArray.map(g => this.sanitize(g))
    let newArray = []
    const matches = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    newArray.push(this.capitalize(wordsArray.shift()))

    wordsArray.forEach((x) => {
      if (matches.includes(x)) {
        newArray.push(x)
      } else {
        newArray.push(this.capitalize(x))
      }
    })


    return newArray.join(" ")
    // console.log(wordsArray)
    // console.log(newArray)
    return newArray

  }


}

Formatter.titleize("The do!!g ate the cat")


// split all words into array
// upcase first word and put into new array
// iterate through rest words
// if word matches list push into array
// if does not match upcase then push
//  'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', and 'from'