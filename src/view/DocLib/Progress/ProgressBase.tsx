import React from "react";
import {CodeBox} from "../../components/CodeBox/CodeBox";
import { Progress } from "../../../lib";

const ProgressBase:React.FC = () => {
const code = `<Progress percent={20}/>
<Progress percent={50}/>
<Progress percent={80} strokeHeight={30}/>`

  return (
    <CodeBox
      title="基础使用"
      description={<p><code>percent</code>属性定义进度条进度，<code>strokeHeight</code>可自定义高度</p>}
      defaultVisible={true}
      code={code}>
      <Progress percent={20}/>
      <Progress percent={50}/>
      <Progress percent={80} strokeHeight={30}/>
    </CodeBox>
  )
}


export {ProgressBase};