import React from "react";
import {CodeBox} from "../../components/CodeBox/CodeBox";
import { Progress } from "../../../lib";



const ProgressBase:React.FC = () => {
  const code = `
`

  return (
    <CodeBox
      title="基础使用"
      description={<p> </p>}
      defaultVisible={true}
      code={code}>
      <Progress percent={20} frame/>
      <Progress percent={50}/>
      <Progress percent={80}/>

    </CodeBox>
  )
}


export {ProgressBase};