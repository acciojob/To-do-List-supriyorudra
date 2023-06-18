//your code here

const inputBox = document.getElementById('newTodoInput');
const lists = document.getElementById('todoList');

let todoLists = [];

function addItems(){
	if (input.value!=="") {
		todoLists.push(input.value);
	}
}

lists.innerHTML = todoLists.map(list =>{
	`
		<li>${list}</li>
	`
})
