import { capitalize } from './helpers'

const greetUser = (name) => {
  console.log(`Hello ${capitalize(name)}`)
}

greetUser("evanina")
