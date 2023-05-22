import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import createTask from "../../graphgl/mutations/create_tasks";
import project from "../../graphgl/queries/project";

export const modalStyles = {
  content: {
    maxWidth: "600px",
    minWidth: "500px",
    maxHeight: "80%",
    borderRadius: "5px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "1px solid #E2EAF1",
    backgroundColor: "#FFFFFF",
    padding: "25px 45px 25px 35px",
  },
  overlay: {
    zIndex: 2,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
};

export const Input = styled.input`
  margin: 5px;
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 0.7rem;
  right: 0.7rem;
  color: #d6d9dc;
  font-size: 2rem;
  cursor: pointer;
  user-select: none;
  margin: 5px;
  &::before {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    height: 1rem;
    content: "✕";
  }
`;

export const DontDestroyButton = styled.button`
  color: white;
  background-color: green;
  padding: 8px;
  margin-top: 30px;
  font-size: 20px;
  border-radius: 12px;
`;

export const DestroyButton = styled.button`
  color: white;
  background-color: red;
  padding: 8px;
  margin-left: 30px;
  font-size: 20px;
  border-radius: 12px;
`;

export const StyledTitle = styled.h1`
  font-size: 25px;
  color: black;
`;

export const useCreateTask = ({ title, description, deadlineAt, setIsOpen, setTitle, setDescription, projectId }) => {
  const [mutation, mutationState] = useMutation(createTask, {
    refetchQueries: [{ query: project, variables: { id: projectId } }],
    onCompleted: (data) => {
      setIsOpen(false);
      setTitle("");
      setDescription("");
      console.log(`Задача ${data?.createTask?.task?.title} создана!`);
    },
  });
  const mutate = async () => {
    const createTaskInput = {
      title,
      description,
      deadlineAt: new Date(deadlineAt).toISOString(),
      projectId: Number(projectId),
    };
    try {
      await mutation({ variables: { input: createTaskInput } });
    } catch (error) {
      console.error(error);
    }
  };
  return [mutate, mutationState];
};

const ModalWindowCreateTask = ({ isOpen = false, setIsOpen = () => {}, projectId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadlineAt, setDeadlineAt] = useState("");
  const now = new Date();
  // Устанавливаем минимальное значение для input элемента
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");
  const hour = now.getHours().toString().padStart(2, "0");
  const minute = now.getMinutes().toString().padStart(2, "0");
  const minDateTime = `${year}-${month}-${day}T${hour}:${minute}`;
  const [createtask] = useCreateTask({
    title,
    description,
    deadlineAt,
    setIsOpen,
    setTitle,
    setDescription,
    projectId,
  });
  return (
    <Modal
      style={{
        content: { ...modalStyles.content },
        overlay: { ...modalStyles.overlay },
      }}
      isOpen={isOpen}
      shouldCloseOnOverlayClick
      onRequestClose={() => setIsOpen(false)}
    >
      <CloseButton onClick={() => setIsOpen(false)} />
      <StyledTitle>Create Task</StyledTitle>
      <div>
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      </div>
      <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
      <input
        type="datetime-local"
        id="myDateTime"
        value={deadlineAt}
        onChange={(event) => setDeadlineAt(event.target.value)}
        min={minDateTime}
      />
      <DontDestroyButton onClick={() => setIsOpen(false)}>No, I dont like it pls stop</DontDestroyButton>
      <DestroyButton onClick={createtask}>CREATE PLS PLS PLS!!!</DestroyButton>
    </Modal>
  );
};

Modal.setAppElement("body");

export default ModalWindowCreateTask;
