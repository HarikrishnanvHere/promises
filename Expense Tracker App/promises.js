const posts = [];
const timeArr = [];

function printpost(){
    for(let i=0;i<posts.length;i++){
        console.log(posts[i].title);
    }
}

function createPost(post){
    return new Promise ( (resolve, reject) => {
        setTimeout( ()=> {
            posts.push(post)
            resolve();
        },2000);
        
    })
}

function updateTime(){
    return new Promise( (resolve,reject) =>{
        setTimeout ( ()=> {
            timeArr.push(new Date);
            resolve();
        },1000);
    })
}

createPost({title: "POST1"}).then(()=>{updateTime()});
createPost({title: "POST3"}).then(()=>{updateTime()});
createPost({title: "POST2"}).then(()=>{updateTime()});
console.log(timeArr);
console.log(posts);


  
