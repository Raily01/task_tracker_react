import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import createProject from "../../graphgl/mutations/create_projects";
import projects from "../../graphgl/queries/projects";

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

export const useCreateProject = ({ name, description, setIsOpen, setName, setDescription }) => {
  const [mutation, mutationState] = useMutation(createProject, {
    refetchQueries: [{ query: projects }],
    onCompleted: (data) => {
      setIsOpen(false);
      setName("");
      setDescription("");
      console.log(`Проект ${data?.createProject?.project?.name} создан!`);
    },
  });
  const mutate = async () => {
    const createProjectInput = {
      name,
      description,
    };
    try {
      await mutation({ variables: { input: createProjectInput } });
    } catch (error) {
      console.error(error);
    }
  };
  return [mutate, mutationState];
};

const ModalWindowCreate = ({ isOpen = false, setIsOpen = () => {} }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [createproject] = useCreateProject({ name, description, setIsOpen, setName, setDescription });
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
      <StyledTitle>Create Project</StyledTitle>
      <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
      <DontDestroyButton onClick={() => setIsOpen(false)}>No, I dont like it pls stop</DontDestroyButton>
      <DestroyButton onClick={createproject}>CREATE PLS PLS PLS!!!</DestroyButton>
    </Modal>
  );
};

Modal.setAppElement("body");

export default ModalWindowCreate;
