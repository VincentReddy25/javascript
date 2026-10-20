
let prms = new Promise((resolve, reject) => {
    setTimeout(() => {
        let data = true;

        if (data) {
            resolve("Data received");
        } else {
            reject("Error occurred");
        }
    }, 2000);
});

prms
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err));

