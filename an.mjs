const numberTest = (number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number >= 10) {
        resolve("valid number")
      } else {
        reject("invalid number")
      }
    }, 1000)
  })
}

/* numberTest(9)
  .then(value => console.log(value))
  .catch(value => console.log(value)) */

const call = async () => {
  try {
    const value =  await numberTest(6);
    console.log(value)
  } catch(e) {
    console.log(e)
  }
}

await call();