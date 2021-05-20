import React, {useEffect, useRef, useState} from "react";
import './style.scss'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


interface ICodeProps {
  title: string
  description: string
  defaultVisible?: boolean // 代码默认是否展开
  code: string;
}


const CodeBox:React.FC<ICodeProps> = (props) => {
  const [height, setHeight] = useState(0)
  const [computedHeight, setComputedHeight] = useState(0)
  const toggle = () => {
    if (height === 0) {
      setHeight(computedHeight)
    } else {
      setHeight(0)
    }
  }
  const codePer = useRef<HTMLDivElement>(null)
  useEffect(() => {
    setComputedHeight((codePer.current as HTMLDivElement).clientHeight);
  },[])
  useEffect(() => {
    if(props.defaultVisible){
      setHeight(computedHeight)
    }
  }, [computedHeight, props.defaultVisible])
  //const html = Prism.highlight(props.code, Prism.languages.html, "html")
  return (
    <div className="reveal-container">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      {/*展示代码的地方*/}
      <div className="fold-code">
        <div className="demo-wrapper">
          <pre>{props.children}</pre>
        </div>
        <div className="per-wrapper">
          <div className="per-content" style={{height:height+'px'}}>
            {/*<pre ref={codePer} className="language-html" dangerouslySetInnerHTML={{__html: html}} />*/}
            <div ref={codePer} id="code-wrapper">
              <SyntaxHighlighter customStyle={{fontSize: 14, whiteSpace: 'break-spaces'}}
                                 language={'jsx'}
                                 style={a11yDark}
                                 wrapLines={true}>
                {props.code.replace(/^\s+|\s+$/g, '')}
              </SyntaxHighlighter>
            </div>
          </div>
          <div className="demo-block-control" onClick={() => {toggle()}}>
            <svg className="down">
              <use xlinkHref="#icon-React"> </use>
            </svg>
          </div>
        </div>




      </div>
    </div>
  )
}

export {CodeBox}