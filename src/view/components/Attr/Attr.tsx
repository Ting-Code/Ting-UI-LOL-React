import React from "react";
import './style.scss'
import {it} from "jest-circus";

interface AttrProps {
  data: { params: string; desc: string; type: string; select: string;default: string }[];
  title:string
}

const Attr:React.FC<AttrProps> = (props) => {
  const columns = [
    {title: '属性'},
    {title: '说明'},
    {title: '类型'},
    {title: '可选值'},
    {title: '默认值'},
  ]
  return (
    <div className="attr">
      <h2>{props.title}</h2>
      <table className="attr-table">
        <thead>
        <tr>
          {columns.map((item, index) => (
              <th className="attr-title" key={index}>{item.title}</th>
            ))}
        </tr>
        </thead>
        <tbody>
        {
          props.data.map((item, index) => (
          <tr>
            {
              Object.keys(item).map((key, index) => (
                <td className="attr-title td">{item[key as keyof typeof item]}</td>
              ))
            }
          </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  )
}

export {Attr}