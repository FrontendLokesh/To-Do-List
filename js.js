let form = document.getElementsByTagName("form")[0];
let text = document.getElementsByClassName("item")[0];

form.addEventListener("submit",(value)=>{
    
    let input1 = value.target.quote.value;
    let name1 =value.target.name.value;
    let checkstatus =false;
    var get = JSON.parse(localStorage.getItem("detail")) ??[];
    for(let oldData of get){
        if(oldData.input == input1){
            checkstatus=true;
            break;
        }
    } 
    if(checkstatus == true){
        alert("This value is already exit \n Please Enter a new value")
    }else{
    get.push({
        'name':name1,
        'input':input1
    })
    localStorage.setItem("detail",JSON.stringify(get))
    value.target.reset();
}
    callback();
    value.preventDefault();
    
})
let callback =()=>{
    var get = JSON.parse(localStorage.getItem("detail"))??[];
    let old ='';
    get.forEach((event,index)=>{
        old += `
        <div class="main">
        <div class="cross" onclick="remove(${index})">&times;</div>
        <h2>Quote</h2>
        <div class="box1">${event.input}</div>
        <div class="box2">${event.name}</div>
        </div>
        `   
    });
    text.innerHTML = old;
}
let remove =(newEvent)=>{
    var get = JSON.parse(localStorage.getItem("detail"))??[];
    get.splice(newEvent,1)
    
    localStorage.setItem("detail",JSON.stringify(get))
    callback();
}
let allClear=()=>{
    localStorage.clear()
    callback();
    localStorage.setItem("detail",JSON.stringify(get))
}
callback();