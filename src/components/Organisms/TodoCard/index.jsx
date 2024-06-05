import React, { useState, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import { AddTaskButton } from "../../Atoms/AddTaskButton/index";
import { Task } from "../../Molecules/task/index";

export const TodoCard = () => {
  const [taskList, setTaskList] = useState([]);

  const onAddTaskButtonClick = () => {
    const newTask = {
      name: "",
      initializing: true,
    };
    setTaskList([...taskList, newTask]);
  };

  const onTaskComplete = (index) => {
    let newTaskList = taskList.filter((value, index) => index != index);
    setTaskList(newTaskList);
  };

  const onTaskNameChange = (value, index) => {
    let newTaskList = [...taskList];
    if (value === "") {
      newTaskList.splice(index, 1);
    } else {
      newTaskList.splice(index, 1, {
        name: value,
        initializing: false,
      });
    }
    setTaskList(newTaskList);
  };

  useEffect(() => {
    const Tasks = localStorage.getItem("tasks");
    if (Tasks !== null) {
      const parseTaskList = JSON.parse(Tasks);
      setTaskList(parseTaskList);
    }
  }, []);

  useEffect(() => {
    const stringifyTaskList = JSON.stringify(taskList);
    localStorage.setItem("tasks", stringifyTaskList);
  }, [taskList]);

  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick} />
      <StyledTaskList>
        {taskList.map((task, index) => (
          <Task
            key={index}
            onTaskComplete={() => onTaskComplete(index)}
            onTaskNameChange={(value) => onTaskNameChange(value, index)}
            taskName={task.name}
            defaultIsEditing={task.initializing}
          />
        ))}
      </StyledTaskList>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  background-color: ${COLOR.LIGHT_BLACK};
  border-radius: 4px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;

  & > * {
    margin-top: 10px;
  }
`;
