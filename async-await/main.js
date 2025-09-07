//task 1
// async function hello() {
//     console.log("Hello")
//     await new Promise(resolve => {
//         setTimeout(resolve, 2000);
//     });
//     console.log("GoodBye!")
// }

// hello()

// task 2 
// async function countdown() {
//     console.log("3");
//     // YOUR CODE HERE - wait 1 second
//     await new Promise(resolve => {
//         setTimeout(resolve, 1000)
//     })
//     console.log("2");
//     // YOUR CODE HERE - wait 1 second
//     await new Promise(resolve => {
//         setTimeout(resolve, 1000)
//     })
//     console.log("1");
//     // YOUR CODE HERE - wait 1 second
//     await new Promise(resolve => {
//         setTimeout(resolve, 1000)
//     })
//     console.log("GO!");
// }

// countdown();


//Task 3
// async function loading() {
//     console.log("Loading.");
//     // YOUR CODE HERE - wait 1 second
//     await new Promise(resolve => {
//         setTimeout(resolve, 1000);
//     });
//     console.log("Loading..");
//     // YOUR CODE HERE - wait 1 second
//     await new Promise(resolve => {
//         setTimeout(resolve, 1000);
//     });
//     console.log("Loading...");
//     // YOUR CODE HERE - wait 1 second
//     await new Promise(resolve => {
//         setTimeout(resolve, 1000);
//     });
//     console.log("Done!");
// }

// loading();


// task 4
// async function broken() {
//     console.log("Start");
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     console.log("End");
// }

// broken();

//task 5
async function morning() {
    console.log("Wake up");
    // Wait 2 seconds
    await new Promise(resolve => {
        setTimeout(resolve, 2000);
    });
    console.log("Brush teeth");
    // Wait 1 second
    await new Promise(resolve => {
        setTimeout(resolve, 1000);
    });
    console.log("Eat breakfast");
}

// Don't forget to call it!
morning()