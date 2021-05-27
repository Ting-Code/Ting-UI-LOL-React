import React from "react";
import {CodeBox} from "../../components/CodeBox/CodeBox";
import {Upload} from "../../../lib/components/Uplode/Upload";



const UploadBase:React.FC = () => {
  const code = `
`

  return (
    <CodeBox
      title="基础使用"
      description={<p> </p>}
      defaultVisible={true}
      code={code}>
      <Upload action="aaaa"/>
    </CodeBox>
  )
}


export {UploadBase};