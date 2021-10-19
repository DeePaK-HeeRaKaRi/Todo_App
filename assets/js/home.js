function addTask(){
    var name1=document.getElementById('name').value
    var sub =document.getElementById('submit').value
    var result = name1 + ' '+ sub
    document.getElementById('display').textContent=result;
    console.log(result)
}
 
console.log("hello world")