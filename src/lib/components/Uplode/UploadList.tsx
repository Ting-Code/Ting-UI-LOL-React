import React from 'react'
import { UploadFile } from './Upload'
import {Icon} from '../Icon/Icon'
import {Progress} from "../Progress/Progress";

interface UploadListProps {
  fileList: UploadFile[];
  onRemove: (_file: UploadFile) => void;
}

const UploadList: React.FC<UploadListProps> = (props) => {
  const {
    fileList,
    onRemove,
  } = props

  return (
    <ul className="viking-upload-list">
      {fileList.map(item => {
        return (
          <li className="viking-upload-list-item" key={item.uid}>
            <span className={`file-name file-name-${item.status}`}>
              <Icon name="edit"/>
              {item.name}
            </span>
            <span className="file-status">
              {(item.status === 'uploading' || item.status === 'ready') && <Icon name="edit" spin />}
              {item.status === 'success' && <Icon name="edit"/>}
              {item.status === 'error' && <Icon name="edit"/>}
            </span>
            <span className="file-actions">
              <Icon name="edit" onClick={() => { onRemove(item)}}/>
            </span>
            {item.status === 'uploading' &&
            <Progress
              percent={item.percent || 0}
            />
            }
          </li>
        )
      })}
    </ul>
  )
}

export {UploadList};