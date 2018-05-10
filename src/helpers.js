const capitalize = (word) => {
  // debugger
  return word[0].toUpperCase() + word.substr(1).toLowerCase()
}

const anotherFunction = () => {
  console.log("This is private to this file, i.e. we're not exporting it")
}

export { capitalize }
