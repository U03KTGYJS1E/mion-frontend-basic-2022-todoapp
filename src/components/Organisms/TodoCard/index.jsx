import React, { useState, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import { AddTaskButton } from "../../Atoms/AddTaskButton/index";
import { Task } from "../../Molecules/task/index";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";

export const TodoCard = () => {
  const AlertHandlerContext = useAlertHandlerContext();
  const [taskList, setTaskList] = useState([]);

  const onAddTaskButtonClick = () => {
    const newTask = {
      name: "",
      initializing: true,
    };
    setTaskList([...taskList, newTask]);
  };

  const onTaskComplete = (index) => {
    let newTaskList = taskList.filter((value, Index) => Index !== index);
    setTaskList(newTaskList);
  };

  const onTaskNameChange = (value, index) => {
    const newTaskList = [...taskList];
    if (value === "") {
      newTaskList.splice(index, 1);
      AlertHandlerContext.setAlert("タスクの名前が設定されていません。");
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
  //Local Storage

  useEffect(() => {
    const latest = JSON.parse(localStorage.getItem("storage"));
    if (latest === null) return;
    setTaskList(latest);
  }, []);

  useEffect(() => {
    localStorage.setItem("storage", JSON.stringify(taskList));
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
  gap: 10px;
`;

const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
`;
