import React, { useState } from "react";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";

function App() {
  const [tasks, setTasks] = useState([
    { text: "Buy groceries", category: "Food" },
    { text: "Finish homework", category: "Study" },
    { text: "Clean room", category: "Cleaning" },
  ]);

  const [categories, setCategories] = useState(["All", "Food", "Study", "Cleaning"]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (task) => {
    setTasks([...tasks, task]);
  };

  const handleTaskDelete = (taskText) => {
    setTasks(tasks.filter((task) => task.text !== taskText));
  };

  const filteredTasks =
    selectedCategory === "All" ? tasks : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My Tasks</h2>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <TaskList tasks={filteredTasks} onDelete={handleTaskDelete} />
      <NewTaskForm categories={categories.slice(1)} onTaskFormSubmit={handleTaskFormSubmit} />
    </div>
  );
}

export default App;
