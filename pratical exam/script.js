// Task Manager JavaScript

let tasks = [];
let taskIdCounter = 1;
let editingId = null;

// Load tasks from local storage on page load
document.addEventListener("DOMContentLoaded", function () {
  loadTasks();
  displayTasks();
});

// Add task form submission
document.getElementById("taskForm").addEventListener("submit", handleSubmit);

// Filter and search event listeners
document
  .getElementById("filterPriority")
  .addEventListener("change", displayTasks);
document.getElementById("search").addEventListener("input", displayTasks);

// Function to handle form submission (add or update)
function handleSubmit(e) {
  e.preventDefault();
  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();
  const dueDate = document.getElementById("dueDate").value;
  const priority = document.getElementById("priority").value;

  // Validation
  if (!title || !dueDate) {
    alert("Please provide a title and due date.");
    return;
  }

  if (editingId) {
    // Update existing task
    const task = tasks.find((t) => t.id === editingId);
    task.title = title;
    task.description = description;
    task.dueDate = dueDate;
    task.priority = priority;
    editingId = null;
    const submitBtn = document.querySelector('#taskForm button[type="submit"]');
    submitBtn.textContent = "Add Task";
  } else {
    // Add new task
    const task = {
      id: taskIdCounter++,
      title: title,
      description: description,
      dueDate: dueDate,
      priority: priority,
    };
    tasks.push(task);
  }

  saveTasks();
  displayTasks();
  clearForm();
}

// Function to display tasks
function displayTasks() {
  const taskList = document.getElementById("taskList");
  const filterPriority = document.getElementById("filterPriority").value;
  const searchTerm = document.getElementById("search").value.toLowerCase();

  taskList.innerHTML = "";

  const filteredTasks = tasks.filter((task) => {
    const matchesPriority =
      filterPriority === "all" || task.priority === filterPriority;
    const matchesSearch =
      task.title.toLowerCase().includes(searchTerm) ||
      task.description.toLowerCase().includes(searchTerm);
    return matchesPriority && matchesSearch;
  });

  filteredTasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = "task";
    li.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.description}</p>
      <p>Due Date: ${task.dueDate}</p>
      <p class="priority ${task.priority}">Priority: ${task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}</p>
      <div class="actions">
        <button class="edit" onclick="editTask(${task.id})">Edit</button>
        <button class="delete" onclick="deleteTask(${task.id})">Delete</button>
      </div>
    `;
    taskList.appendChild(li);
  });
}

// function to edit task
function editTask(id) {
  const task = tasks.find((t) => t.id === id);
  if (!task) return;

  editingId = id;
  document.getElementById("title").value = task.title;
  document.getElementById("description").value = task.description;
  document.getElementById("dueDate").value = task.dueDate;
  document.getElementById("priority").value = task.priority;

  // Change form button to update
  const submitBtn = document.querySelector('#taskForm button[type="submit"]');
  submitBtn.textContent = "Update Task";
}

// Function to delete a task
function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  saveTasks();
  displayTasks();
}

// Function to save tasks to local storage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("taskIdCounter", taskIdCounter);
}

// Function to load tasks from local storage
function loadTasks() {
  const savedTasks = localStorage.getItem("tasks");
  const savedCounter = localStorage.getItem("taskIdCounter");

  if (savedTasks) {
    tasks = JSON.parse(savedTasks);
  }

  if (savedCounter) {
    taskIdCounter = parseInt(savedCounter);
  }
}

// Function to clear the form
function clearForm() {
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("dueDate").value = "";
  document.getElementById("priority").value = "low";
}
