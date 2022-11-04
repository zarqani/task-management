
import { v4 as uuid } from 'uuid';
import { createContext, useReducer, useContext } from "react";

const TaskContext = createContext();

function taskReducer(state, action) {
  switch (action.type) {
    case 'add': {
        const newTask = {id: uuid(), status: 'todo', ...action.payload};
      return {tasks: [newTask, ...state.tasks]}
    }
    case 'edit': {
        let updatedTasks = [...state.tasks];
        updatedTasks = updatedTasks.filter(item => item.id !== action.payload.id);
      return {tasks: [action.payload, ...updatedTasks]};
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function TaskProvider({children}) {
  const [state, dispatch] = useReducer(taskReducer, {tasks: []});
  const value = {state, dispatch};
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
}

function useTask() {
  const context = useContext(TaskContext)
  if (context === undefined) {
    throw new Error('useTask must be used within a TaskProvider')
  }
  return context
}

export {TaskProvider, useTask};