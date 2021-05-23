import React, {useEffect, useState} from "react";
import { CSSTransition } from "react-transition-group"
import {CSSTransitionProps} from "react-transition-group/CSSTransition";


type AnimationName = "horizontal" | "vertical" | "origin"

interface TransitionProps  {
  animation?: AnimationName,
  wrapper? : boolean,
  timeout: number
}

const Spread: React.FC<TransitionProps & CSSTransitionProps> = (props) => {
  const {
    children,
    classNames,
    animation,
    wrapper,
    timeout,
    ...restProps
  } = props

  const [horizontalTransition, setHorizontalTransition] = useState(`300ms width ease-in-out`)
  const [verticalTransition, setVerticalTransition] = useState(`300ms height ease-in-out`)
  const [originTransition, setOriginTransition] = useState(`300ms all ease-in-out`)


  useEffect(() => {
    setHorizontalTransition(`${+timeout}ms width ease-in-out`)
    setVerticalTransition(`${+timeout}ms height ease-in-out`)
    setOriginTransition(`${+timeout}ms all ease-in-out`)
  }, [timeout])


  const [oldOverflow, setOldOverflow] = useState<string>('')


  const beforeEnter = (el: HTMLElement) => {
    if (animation === "horizontal") {
      el.style.transition = horizontalTransition;
      el.style.width = '0';
    } else if(animation === "vertical"){
      el.style.transition = verticalTransition;
      el.style.height = '0';
    }else {
      el.style.transition = originTransition;
      el.style.height = '0';
      el.style.width = '0';

    }
  }
  const enter = (el:HTMLElement) => {
    console.log(el.scrollWidth);
    setOldOverflow(el.style.overflow)
    if (animation === "horizontal" && el.scrollWidth !== 0) {
      el.style.width = el.scrollWidth + 'px';
    } else if(animation === "vertical" && el.scrollHeight !== 0){
      el.style.height = el.scrollHeight + 'px';
    }else {
      el.style.height = el.scrollHeight + 'px';
      el.style.width = el.scrollWidth + 'px';
    }
    el.style.overflow = 'hidden';
  }
  const afterEnter = (el:HTMLElement) => {
    el.style.transition = '';
    el.style.overflow = oldOverflow;
    if( animation === "horizontal"){
      el.style.width = ''
    }else if(animation === 'vertical'){
      el.style.height = ''
    }else {
      el.style.width = ''
      el.style.height = ''
    }
  }
  const beforeLeave = (el:HTMLElement) => {
    setOldOverflow(el.style.overflow)
    if (animation === "horizontal") {
      el.style.width = el.scrollWidth + 'px';
    } else if(animation === "vertical"){
      el.style.height = el.scrollHeight + 'px';
    }else {
      el.style.width = el.scrollWidth + 'px';
      el.style.height = el.scrollHeight + 'px';
    }
    el.style.overflow = 'hidden';
  }
  const leave = (el:HTMLElement) => {
    if (animation === "horizontal") {
      if (el.scrollWidth !== 0) {
        el.style.transition = horizontalTransition;
        el.style.width = '0';
      }
    } else if(animation === 'vertical'){
      if (el.scrollHeight !== 0) {
        el.style.transition = verticalTransition;
        el.style.height = '0';
      }
    }else {
      if (el.scrollHeight !== 0 || el.scrollWidth !== 0) {
        el.style.transition = originTransition;
        el.style.height = '0';
        el.style.width = '0';
      }
    }
  }

  return (
    <CSSTransition
      timeout={timeout}
      classNames = { classNames}
      onEnter={el => beforeEnter(el)}
      onEntering={el => enter(el)}
      onEntered={el => afterEnter(el)}
      onExit={el => beforeLeave(el)}
      onExiting={el =>leave(el)}
      onExited={el => afterEnter(el)}
      {...restProps}
    >
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  )
}


Spread.defaultProps = {
  unmountOnExit: true,
  appear: true,
  wrapper: true
}

export {Spread}