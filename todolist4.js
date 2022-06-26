var list=document.getElementById("todo-list");
var addBtn=document.getElementById("todo-btn");
var addInput=document.getElementById("todo-input");
function createTodo(){

    var text=addInput.value;

    if(text==""){
        document.getElementById('error').innerHTML="Please add the value";
        return;
    }
    var li=document.createElement('li');

    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");

    var paragraph = document.createElement('p');
    paragraph.textContent = text;
    paragraph.classList.add("paragraph");

    var remove = document.createElement('span');
    remove.innerHTML="*";
    remove.classList.add("remove");

    li.appendChild(checkbox);
    li.appendChild(paragraph);
    li.appendChild(remove);
    list.appendChild(li);
    addInput.value="";
}
function removeTodos(removeElemet){
    removeElemet.parentElement.remove();
}
function toggleComplete(element){
    if(element.checked===true){
        element.parentElement.style.background="red";
    }else{
        element.parentElement.style.background="#8794b9";
    }
}
list.addEventListener("click",function(event){
    switch(event.target.tagName){
        case "P":
            showEditInput();
            break;
        case "SPAN":
            removeTodos(event.target);
            break;
    }
});
list.addEventListener("change",function(event){
    if(event.target.tagName==="INPUT"&&event.target.type==="checkbox"){
        toggleComplete(event.target);
    }
});


addBtn.addEventListener("click",createTodo);








// function addMore(){
// 	document.getElementById('error').innerHTML="";


// 	let name=document.getElementById('name').value;
// 	document.getElementById('name').innerHTML="";
// 	if(name==''){
// 		document.getElementById('error').innerHTML="Please add the value";
// 	}else{
// 		let box=document.getElementById('box');

// 		let li=document.createElement('li');
        
        // var checkbox = document.createElement('input');
        //     checkbox.type = "checkbox";
        //     checkbox.value = 1;
        //     checkbox.name = "todo[]";
        //     checkbox.classList.add("checkbox");
        
//         li.appendChild(checkbox);
//         li.appendChild(document.createTextNode(name));
//         box.appendChild(li); 




// 		//for delete button
// 		let a=document.createElement('a');
// 		a.textContent="X";
// 		a.href="javascript:void(0)";
// 		a.className="remove";
// 		li.appendChild(a);
// 		box.appendChild(li);



// 		document.getElementById('name').value="";
// 	}
// }
// function toggleComplete(inputElement){
//     if(inputElement.checked===true){
//         inputElement.parentElement.classList.add("highlight");
//     }
// }
// var list=document.getElementById('box');
// list.addEventListener("change",function(event){
//     if(event.target.tagName==="INPUT"&&event.target.type==="checkbox"){
//         toggleComplete(event.target);
//     }
// });
// let btn=document.querySelector('ul');
// btn.addEventListener('click',function(e){
// 	// let box=
//     if(event.target.tagName=="a"){
//         let box=document.getElementById('box');
// 	let li=e.target.parentNode;
// 	box.removeChild(li);
//     }
	
// });