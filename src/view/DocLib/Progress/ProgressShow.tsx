import React from "react";
import {CodeBox} from "../../components/CodeBox/CodeBox";
import { Progress } from "../../../lib";

const ProgressShow:React.FC = () => {
  const code = `<Progress percent={20} showText={true}/>
<Progress percent={50} showText={true} theme="当前进度"/>`

  return (
    <CodeBox
      title="显示进度"
      description={<p><code>showText</code>属性决定是否显示进度，<code>theme</code>属性可自定义文字</p>}
      defaultVisible={false}
      code={code}>
      <Progress percent={20} showText={true}/>
      <Progress percent={50} showText={true} theme="当前进度"/>
    </CodeBox>
  )
}


export {ProgressShow};