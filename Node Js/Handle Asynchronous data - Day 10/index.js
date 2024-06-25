const waitingData=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(20)
    },2000)
})
waitingData.then((data)=>{
    console.log(data)
})