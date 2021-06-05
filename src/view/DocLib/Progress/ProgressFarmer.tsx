import React from "react";
import {CodeBox} from "../../components/CodeBox/CodeBox";
import { Progress } from "../../../lib";

const ProgressFarmer:React.FC = () => {
  const code = `<Progress percent={20} frame={true}/>
<Progress percent={50} frame={true}/>
<Progress percent={80} frame={true}/>`

  return (
    <CodeBox
      title="固定边框"
      description={<p><code>frame</code>属性定义固定边框样式</p>}
      defaultVisible={false}
      code={code}>
      <Progress percent={20} frame={true}/>
      <Progress percent={50} frame={true}/>
      <Progress percent={80} frame={true}/>
    </CodeBox>
  )
}


export {ProgressFarmer};