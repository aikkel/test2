// Get references to HTML elements
const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

// Function to create a new task item with a "Remove" button
function createTaskItem(text) {
    const taskItem = document.createElement('li');
    
    const taskText = document.createElement('span');
    taskText.textContent = text;
    taskItem.appendChild(taskText);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-button');

    // Event listener to remove the task when the button is clicked
    removeButton.addEventListener('click', () => {
        taskItem.remove();
    });

    taskItem.appendChild(removeButton);
    return taskItem;
}

// Event listener for adding tasks
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !=='') {
        const taskItem = createTaskItem(taskText);
        taskList.appendChild(taskItem);
        taskInput.value=''; // Clear the input field
    }
});


// Event listener for removing tasks (using event delegation)
taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-button')) {
        const taskItem = e.target.parentElement;
        taskItem.remove();
    }
});
