"use client";
import "./Folder.css";
import Image from "next/image";
interface FolderProps {
  folderName: string | null;
  owner: Owner | null;
}
interface Owner {
  profileImageSource: string;
  name: string;
}
export default function Folder({ folderName, owner }: FolderProps) {
  const { profileImageSource = "", name = "" } = owner || {};
  //   const folderInfo = () => {
  //     return <div></div>;
  //   };

  return (
    <div className="folder">
      <Image
        className="owner-img"
        width={60}
        height={60}
        src={profileImageSource}
        alt="프로필 이미지"
      />
      <div>@{name}</div>
      <h1>{folderName}</h1>
    </div>
  );
}
