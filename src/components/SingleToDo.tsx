import React, { useState, useRef, useEffect } from "react";
import { Draggable } from "react-beautiful-dnd";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
import { ToDo } from "../model";
import "./styles.css";

const SingleToDo = ({
  index,
  toDo,
  toDos,
  setToDos,
}: {
  index: number;
  toDo: ToDo;
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editToDo, setEdiToDo] = useState<string>(toDo.toDo);

  const handleEdit = () => {
    if (!edit && !toDo.isDone) {
      setEdit(!edit);
    }
  };

  const handleDelete = (id: number) => {
    setToDos(toDos.filter((toDo) => toDo.id !== id));
  };

  const handleDone = (id: number) => {
    setToDos(
      toDos.map((toDo) =>
        toDo.id === id ? { ...toDo, isDone: !toDo.isDone } : toDo
      )
    );
  };

  const handleEditSubmit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setToDos(
      toDos.map((toDo) => (toDo.id === id ? { ...toDo, toDo: editToDo } : toDo))
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <Draggable draggableId={toDo.id.toString()} index={index}>
      {(provided, snapshot) => (
          <form
            className={`to-dos__single ${snapshot.isDragging ? "drag" : ""}`}
            onSubmit={(e) => {
              handleEditSubmit(e, toDo.id);
            }}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {edit ? (
              <input
                ref={inputRef}
                value={editToDo}
                onChange={(e) => setEdiToDo(e.target.value)}
                className="to-dos__single--text"
              />
            ) : toDo.isDone ? (
              <s className="to-dos__single--text">{toDo.toDo}</s>
            ) : (
              <span className="to-dos__single--text">{toDo.toDo}</span>
            )}

            <div>
              {" "}
              <span className="icon" onClick={() => handleEdit()}>
                <AiFillEdit />
              </span>
              <span className="icon" onClick={() => handleDelete(toDo.id)}>
                <AiFillDelete />
              </span>
              <span className="icon" onClick={() => handleDone(toDo.id)}>
                <MdOutlineDone />
              </span>
            </div>
          </form>
        )
      }
    </Draggable>
  );
};

export default SingleToDo;
