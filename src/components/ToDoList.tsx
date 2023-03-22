import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { ToDo } from "../model";
import SingleToDo from "./SingleToDo";
import "./styles.css";

const ToDoList = ({
  toDos,
  setToDos,
  completedToDos,
  setCompletedToDos,
}: {
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
  completedToDos: ToDo[];
  setCompletedToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}) => {
  return (
    <div className="container">
      <Droppable droppableId="ToDosList">
        {(provided, snapshot) => (
          <div
            className={`to-dos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="to-dos__heading">Active Tasks</span>
            {toDos.map((toDo, index) => (
              <SingleToDo
                index={index}
                toDo={toDo}
                key={toDo.id}
                toDos={toDos}
                setToDos={setToDos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="ToDosRemove">
        {(provided, snapshot) => (
          <div
            className={`to-dos ${
              snapshot.isDraggingOver ? "dragcomplete" : "remove"
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="to-dos__heading">Completed Tasks</span>
            {completedToDos.map((toDo, index) => (
              <SingleToDo
                index={index}
                toDo={toDo}
                key={toDo.id}
                toDos={completedToDos}
                setToDos={setCompletedToDos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default ToDoList;
