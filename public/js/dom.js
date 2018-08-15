
fetch(null,'GET','/checkauth',(err, obj) => {
    if(err){
        console.log(err);
    }
    console.log(typeof obj);
    if(obj){
        console.log(obj);
    }else{
        console.log(obj);
    }
});
