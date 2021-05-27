import React from "react";
import {CodeBox} from "../../components/CodeBox/CodeBox";
import { Progress } from "../../../lib/components/Progress/Progress";



const ProgressBase:React.FC = () => {
  const code = `
`

  return (
    <CodeBox
      title="基础使用"
      description={<p> </p>}
      defaultVisible={true}
      code={code}>
      <Progress percent={20}/>
    </CodeBox>
  )
}


export {ProgressBase};