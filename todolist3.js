function addMore(){
	document.getElementById('error').innerHTML="";


	let name=document.getElementById('name').value;
	document.getElementById('name').innerHTML="";
	if(name==''){
		document.getElementById('error').innerHTML="Please add the value";
	}else{
		let box=document.getElementById('box');

		let li=document.createElement('li');
        
        var checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.value = 1;
            checkbox.name = "todo[]";
        
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(name));
        box.appendChild(li); 




		//for delete button
		let a=document.createElement('a');
		a.textContent="X";
		a.href="javascript:void(0)";
		a.className="remove";
		li.appendChild(a);
		box.appendChild(li);



		document.getElementById('name').value="";
	}
}
let btn=document.querySelector('ul');
btn.addEventListener('click',function(e){
	// let box=
	let box=document.getElementById('box');
	let li=e.target.parentNode;
	box.removeChild(li);
});