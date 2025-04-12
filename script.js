body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f5f7fa;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
}

h1 {
  text-align: center;
  color: #333;
}

.input-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.input-group input[type="text"],
.input-group input[type="date"],
.input-group select {
  flex: 1 1 100%;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

.input-group button {
  padding: 0.6rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  flex: 1 1 100%;
}

.input-group button:hover {
  background-color: #0056b3;
}

#taskList {
  list-style: none;
  padding: 0;
}

#taskList li {
  background: #f0f0f0;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.task-info {
  flex: 1;
}

.task-priority.low {
  color: green;
}
.task-priority.medium {
  color: orange;
}
.task-priority.high {
  color: red;
  font-weight: bold;
}

.task-buttons button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin-left: 0.5rem;
}

.task-buttons button:hover {
  color: #007bff;
}

.completed .task-info {
  text-decoration: line-through;
  color: gray;
}

.progress-container {
  background: #ddd;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.progress-bar {
  height: 10px;
  width: 0;
  background-color: #28a745;
  transition: width 0.3s ease;
  }
