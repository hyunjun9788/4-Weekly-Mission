// useFolderState.ts
"use client";
import { useState } from "react";
import { LinkAddModal } from "../app/folder/page";

export const useFolderState = () => {
  const [folderName, setFolderName] = useState("");
  const [menusId, setAllMenuId] = useState<number | undefined>(undefined);
  const [subUrl, setSubUrl] = useState("");
  const [addModal, setAddModal] = useState<LinkAddModal>({
    linkModal: false,
    folderAddModal: false,
    shareAddModal: false,
    editAddModal: false,
    deleteAddModal: false,
    linkDeleteModal: false,
    dataUrl: "",
  });
  const [linkInput, setLinkInput] = useState<string>("");

  return {
    folderName,
    setFolderName,
    menusId,
    setAllMenuId,
    subUrl,
    setSubUrl,
    addModal,
    setAddModal,
    linkInput,
    setLinkInput,
  };
};
