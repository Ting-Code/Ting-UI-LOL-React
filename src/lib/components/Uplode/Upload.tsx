import React, {useRef, useState} from "react";
import axios from "axios";
import {UploadList} from "./UploadList";
import {Dragger} from "./Dragger";

type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error'
interface UploadFile {
  uid: string;
  size: number;
  name: string;
  status?: UploadFileStatus;
  percent?: number; //百分比
  raw?: File;
  response?: any;
  error?: any;
}
interface UploadProps {
  action: string;
  defaultFileList?: UploadFile[];
  beforeUpload? : (file: File) => boolean | Promise<File>;
  onProgress?: (percentage: number, file: File) => void;
  onSuccess?: (data: any, file: File) => void;
  onError?: (err: any, file: File) => void;
  onChange?: (file: File) => void;
  onRemove?: (file: UploadFile) => void;
  headers?: {[key: string]: any };
  name?: string;
  data?: {[key: string]: any };
  withCredentials?: boolean;
  accept?: string;
  multiple?: boolean;
  drag?: boolean;
}

const Upload: React.FC<UploadProps> = (props) => {
  const {action, defaultFileList, beforeUpload, onProgress, onSuccess,
    onError, onChange, onRemove, name, headers, data, withCredentials,
    accept, multiple, children, drag,} = props
  const [ fileList, setFileList ] = useState<UploadFile[]>(defaultFileList || [])
  const fileInput = useRef<HTMLInputElement>(null)
  const updateFileList = (updateFile: UploadFile, updateObj: Partial<UploadFile>) => {
    setFileList(prevList => {
      return prevList.map(file => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj }
        } else {
          return file
        }
      })
    })
  }
  const handleClick = () => {
    if(fileInput.current){
      fileInput.current.click()
    }
  }
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //获取文件
    const filed = e.target.files
    if(!filed){return}
    //上传函数
    uploadFile(filed)
    if(fileInput.current){
      fileInput.current.value = ''
    }
  }
  const uploadFile = (filed: FileList) => {
    //转为文件数组
    let postFiles = Array.from(filed)
    postFiles.forEach(file => {
      if(!beforeUpload){
        post(file)
      }else {
        const result = beforeUpload(file)
        if(result && result instanceof Promise){
          result.then(processedFile => {
            post(processedFile)
          })
        }else if(result){
          post(file)
        }
      }
    })
  }
  const handleRemove = (file: UploadFile) => {
    setFileList((prevList) => {
      return prevList.filter(item => item.uid !== file.uid)
    })
    if (onRemove) {
      onRemove(file)
    }
  }
  const post = (file: File) => {
    let _file: UploadFile = {
      uid: Date.now() + 'upload-file',
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file
    }
    setFileList(prevState => {
      return [_file, ...prevState]
    })
    const formData = new FormData()
    //上传文件（文件名， value）
    formData.append(name || file.name, file)
    if(data){
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key])
      })
    }
    axios.post(action, formData, {
      headers: {
        ...headers,
        'Content-Type': 'multipart/from-data'
      },
      withCredentials,
      onUploadProgress: (e) => {
        //计算百分比
        let percentage = Math.round((e.loaded * 100) / e.total) || 0;
        if (percentage < 100) {
          updateFileList(_file, { percent: percentage, status: 'uploading'})
          if (onProgress) {
            //调用onProgress回调
            onProgress(percentage, file)
          }
        }
      }
    }).then(resp => {
      updateFileList(_file, {status: 'success', response: resp.data})
      if (onSuccess) {onSuccess(resp.data, file)}
      if (onChange) {onChange(file)}
    }).catch(err => {
      updateFileList(_file, { status: 'error', error: err})
      if (onError) {onError(err, file)}
      if (onChange) {onChange(file)}
    })
  }

  return (
    <div className="ting-upload-component">
      <div>

        <div className="viking-upload-input"
             style={{display: 'inline-block'}}
             onClick={handleClick}>
          {drag ?
            <Dragger onFile={(files) => {uploadFile(files)}}>
              {children}
            </Dragger>:
            children
          }
        <input
          className={"ting-fileInput"}
          style={{display: 'none'}}
          ref={fileInput}
          onChange={handleFileChange}
          type="file"
          accept={accept}
          multiple={multiple}
        />
      </div>

      <UploadList
        fileList={fileList}
        onRemove={handleRemove}
      />
    </div>
    </div>
  )
}
Upload.defaultProps = {
  name: 'file'
}

export {Upload};
export type { UploadFileStatus, UploadFile, UploadProps };
