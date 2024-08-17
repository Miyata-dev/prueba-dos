// Promise = An Object that manages asynchronous operations.
//                    Wrap a Promise Object around {asynchronous code}
//                    "I promise to return a value"
//                    PENDING -> RESOLVED or REJECTED
//                   new Promise((resolve, reject) => {asynchronous code})

const walkDog = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;
      if (dogWalked) {
        resolve("you walk the dog");
      } else {
        reject("you didn't walked the dog.");
      }
    }, 1500);
  });
}

const cleanTheKitchen = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cleaned = false;
      if (cleaned) {
        resolve("You clean the kitchen");
      } else {
        reject("You didn't clean the kitchen");
      }
    }, 2500);
  });
}

const takeOutTrash = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const tookOutTrash = true;
      if (tookOutTrash) {
        resolve("you take out the trash");
      } else {
        reject("you didn't take out the trash.")
      }
    }, 500);
  });
}

walkDog()
  .then(value => {
    console.log(value)
    return cleanTheKitchen();
  })
  .then(value => {
    console.log(value)
    return takeOutTrash();
  })
  .then(value => {
    console.log(value);
    console.log("you finished all the chores");
  })
  .catch(err => console.log(err));

//callback hell
/* walkDog(() => {
  cleanTheKitchen(() => {
    takeOutTrash(() => console.log("all completed"))
  })
}); */
