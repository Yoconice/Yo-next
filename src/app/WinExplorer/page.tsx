"use client";
import { useRef, useState } from "react";
import {
  Tree,
  Button,
  Input,
  Space,
  Tooltip,
  Splitter,
} from "antd";
import {
  FolderOutlined,
  HomeOutlined,
  ReloadOutlined,
  PlusOutlined,
  DeleteOutlined,
  LeftOutlined,
  RightOutlined,
  FolderTwoTone,
  FolderAddTwoTone,
  LayoutOutlined,
} from "@ant-design/icons";

import styles from "./page.module.css";


export default function WinExplorerPage() {
  const [selectedKey, setSelectedKey] = useState<string>("e");
  const [address, setAddress] = useState<string>("E:\\ProjectFiles\\");

  const inputRef = useRef(null);
  const [folderName, setFolderName] = useState("");

  const handleClick = () => {
    inputRef.current.click();
  };

  const onChange = (e) => {
    const files = e.target.files;
    if (!files.length) return;
    const relPath = files[0].webkitRelativePath;
    const name = relPath.split("/")[0];
    setFolderName(name);
    console.log("内部所有文件", files);
  };

  return (
    <div className={styles.container}>
      <Space>
        <Button icon={<LeftOutlined />} size="small" />
        <Button icon={<RightOutlined />} size="small" />
        <Button icon={<ReloadOutlined />} size="small">
          刷新
        </Button>
        <Tooltip title="新建文件夹">
          <Button icon={<PlusOutlined />} size="small">
            新建
          </Button>
        </Tooltip>
        <Button icon={<LayoutOutlined />} size="small">
          C盘
        </Button>
        <Button icon={<LayoutOutlined />} size="small">
          D盘
        </Button>
        <Button icon={<LayoutOutlined />} size="small">
          E盘
        </Button>
      </Space>
      <div>
        <div>
          <Button onClick={handleClick}>选择文件夹</Button>
          <p>已选：{folderName}</p>
          <input
            ref={inputRef}
            type="file"
            // webkitdirectory
            multiple
            style={{ display: "none" }}
            onChange={onChange}
          />
        </div>
      </div>
      <Space.Compact>
        <Button icon={<FolderAddTwoTone />}>读取</Button>
        <Input
          prefix={<FolderTwoTone />}
          placeholder="选择文件夹地址"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Button type="primary" icon={<ReloadOutlined />}>
          刷新
        </Button>
      </Space.Compact>

      <Splitter
        style={{ height: 200, boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
      >
        <Splitter.Panel defaultSize="30%" min="20%" max="70%">
          left
        </Splitter.Panel>
        <Splitter.Panel>right</Splitter.Panel>
      </Splitter>
    </div>
  );
}
