import React, {useEffect, useRef, useState} from "react";
import './style.scss'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import classNames from "classnames";
import {Button} from "../../../lib";


interface ICodeProps {
  title: string
  description: React.ReactElement
  defaultVisible?: boolean // 代码默认是否展开
  code: string;
  className?: string;
}


const CodeBox:React.FC<ICodeProps> = (props) => {
  const [height, setHeight] = useState(0)
  const [computedHeight, setComputedHeight] = useState(0)
  const [showCode, setShowCode] = useState('展示代码')
  const toggle = () => {
    if (height === 0) {
      setHeight(computedHeight)
      setShowCode('隐藏代码')
    } else {
      setHeight(0)
      setShowCode('展示代码')
    }
  }
  const codePer = useRef<HTMLDivElement>(null)
  useEffect(() => {
    setComputedHeight((codePer.current as HTMLDivElement).clientHeight);
  },[])
  useEffect(() => {
    if(props.defaultVisible){
      setHeight(computedHeight)
      setShowCode('隐藏代码')
    }
  }, [computedHeight, props.defaultVisible])
  //const html = Prism.highlight(props.code, Prism.languages.html, "html")
  const classes = classNames('reveal-container', props.className)
  return (
    <div className={classes}>
      <h2>{props.title}</h2>
      <div>{props.description}</div>
      {/*展示代码的地方*/}
      <div className="fold-code">
        <div className="demo-wrapper">
          {props.children}
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
            <Button types="glory" size="sm">{showCode}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export {CodeBox}