# To-Do App

This is a simple CRUD to-do application built with React. It allows users to manage tasks by adding, removing, and updating them.

## Project Structure

- **src/**: Contains all the source code for the application.
  - **App.js**: The main component that renders the Sidebar and ItemList components.
  - **Sidebar.js**: A simple sidebar component.
  - **ItemList.js**: Maps over the tasks and renders an ItemCard for each task.
  - **ItemCard.js**: Displays individual task details.
  - **tasksData.js**: Contains an array of task objects used as test data.

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Week-14-Assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install React Scripts**
   ```bash
   npm install react-scripts
   ```

4. **Run the application**
   ```bash
   npm start
   ```

5. **Open your browser** and navigate to `http://localhost:3000` to see the app in action.

## Features

- Display a list of tasks with their completion status.
- Modular React components for easy maintenance and scalability.

## Future Enhancements

- Add functionality to add, edit, and delete tasks.
- Implement state management to handle dynamic updates.

## Contributing

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.
