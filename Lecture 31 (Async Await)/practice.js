
function prom() {
    let pr = new Promise((resolve,reject) => {
        setTimeout(()=> {
            const i = false;
            if(i) {
                resolve("resolved the promise");
            } else {
                reject("rejected the promise");
            }
        },5000)
    })
    return pr;
}; 

async function promise() {
    
    try {
        const data = await prom();
        console.log(data);
    }
    catch(error) {
        console.log(error);
    }
}

promise();