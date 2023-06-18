//your code here

const inputBox = document.getElementById('newTodoInput');
const lists = document.getElementById('todoList');

let todoLists = [];

function addItems(){
	if (inputBox.value!=="") {
		todoLists.push(inputBox.value);
		inputBox.value = "";
		lists.innerHTML = todoLists.map(list =>{
			return (`
				<li>${list}</li>
			`)
		})
	}
}


