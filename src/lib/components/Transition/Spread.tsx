import React, {useEffect, useRef, useState} from "react";
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

  const [horizontalTransition, setHorizontalTransition] = useState(`300ms width ease-in-out, 300ms padding-left ease-in-out, 300ms padding-right ease-in-out`)
  const [verticalTransition, setVerticalTransition] = useState(`300ms height ease-in-out, 300ms padding-top ease-in-out, 300ms padding-bottom ease-in-out`)
  const [originTransition, setOriginTransition] = useState(`300ms all ease-in-out`)
  const spread = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setHorizontalTransition(`${+timeout}ms width ease-in-out, ${+timeout}ms margin-left ease-in-out, ${+timeout}ms margin-right ease-in-out`)
    setVerticalTransition(`${+timeout}ms height ease-in-out, ${+timeout}ms margin-top ease-in-out, ${+timeout}ms margin-bottom ease-in-out`)
    setOriginTransition(`${+timeout}ms all ease-in-out`)
  }, [timeout])

  const [oldPaddingLeft, setOldPaddingLeft] = useState<string>('')
  const [oldPaddingRight, setOldPaddingRight] = useState<string>('')
  const [oldPaddingTop, setOldPaddingTop] = useState<string>('')
  const [oldPaddingBottom, setOldPaddingBottom] = useState<string>('')
  const [oldOverflow, setOldOverflow] = useState<string>('')


  const beforeEnter = (el: HTMLElement) => {
    if (animation === "horizontal") {
      el.style.transition = horizontalTransition;
      setOldPaddingLeft(el.style.paddingLeft)
      setOldPaddingRight(el.style.paddingRight)
      el.style.width = '0';
      el.style.paddingLeft = '0';
      el.style.paddingRight = '0';
    } else if(animation === "vertical"){
      el.style.transition = verticalTransition;
      setOldPaddingTop(el.style.paddingTop)
      setOldPaddingBottom(el.style.paddingBottom)
      el.style.height = '0';
      el.style.paddingTop = '0';
      el.style.paddingBottom = '0';
    }else {
      el.style.transition = originTransition;
      setOldPaddingTop(el.style.paddingTop)
      setOldPaddingBottom(el.style.paddingBottom)
      setOldPaddingLeft(el.style.paddingLeft)
      setOldPaddingRight(el.style.paddingRight)
      console.log(el.style.paddingTop, el.style.paddingBottom, el.style.paddingLeft, el.style.paddingRight)

      el.style.height = '0';
      el.style.paddingTop = '0';
      el.style.paddingBottom = '0';
      el.style.width = '0';
      el.style.paddingLeft = '0';
      el.style.paddingRight = '0';
    }
  }
  const enter = (el:HTMLElement) => {
    setOldOverflow(el.style.overflow)
    if (animation === "horizontal") {
      if (el.scrollWidth !== 0) {
        el.style.width = el.scrollWidth + 'px';
      } else {
        el.style.width = '';
      }
      el.style.paddingLeft = oldPaddingLeft;
      el.style.paddingRight = oldPaddingRight;

    } else if(animation === "vertical"){
      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + 'px';
      } else {
        el.style.height = '';
      }
      el.style.paddingTop = oldPaddingTop;
      el.style.paddingBottom = oldPaddingBottom;
    }else {
      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + 'px';
      } else {
        el.style.height = '';
      }
      if (el.scrollWidth !== 0) {
        el.style.width = el.scrollWidth + 'px';
      } else {
        el.style.width = '';
      }
      el.style.paddingTop = oldPaddingTop;
      el.style.paddingBottom = oldPaddingBottom;
      el.style.paddingLeft = oldPaddingLeft;
      el.style.paddingRight = oldPaddingRight;
      console.log(oldPaddingTop, oldPaddingBottom, oldPaddingLeft, oldPaddingRight)
    }
    el.style.overflow = 'hidden';
  }
  const afterEnter = (el:HTMLElement) => {
    el.style.transition = '';
    el.style.overflow = oldOverflow;
    if(  animation === "horizontal"){
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
      setOldPaddingLeft(el.style.paddingLeft)
      setOldPaddingRight(el.style.paddingRight)
      el.style.width = el.scrollWidth + 'px';
    } else if(animation === "vertical"){
      setOldPaddingTop(el.style.paddingTop)
      setOldPaddingBottom(el.style.paddingBottom)
      el.style.height = el.scrollHeight + 'px';
    }else {
      setOldPaddingLeft(el.style.paddingLeft)
      setOldPaddingRight(el.style.paddingRight)
      el.style.width = el.scrollWidth + 'px';
      setOldPaddingTop(el.style.paddingTop)
      setOldPaddingBottom(el.style.paddingBottom)
      el.style.height = el.scrollHeight + 'px';
    }
    el.style.overflow = 'hidden';
  }
  const leave = (el:HTMLElement) => {
    if (animation === "horizontal") {
      if (el.scrollWidth !== 0) {
        el.style.transition = horizontalTransition;
        el.style.width = '0';
        el.style.paddingLeft = '0';
        el.style.paddingRight = '0';
      }
    } else if(animation === 'vertical'){
      if (el.scrollHeight !== 0) {
        el.style.transition = verticalTransition;
        el.style.height = '0';
        el.style.paddingTop = '0';
        el.style.paddingBottom = '0';
      }
    }else {
      if (el.scrollHeight !== 0 || el.scrollWidth !== 0) {
        el.style.transition = originTransition;
        el.style.height = '0';
        el.style.paddingTop = '0';
        el.style.paddingBottom = '0';
        el.style.width = '0';
        el.style.paddingLeft = '0';
        el.style.paddingRight = '0';
      }
    }
  }
  const afterLeave = (el:HTMLElement) => {
    el.style.transition = '';
    el.style.overflow = oldOverflow;
    if (animation === "horizontal") {
      el.style.width = '';
      el.style.paddingLeft = oldPaddingLeft;
      el.style.paddingRight = oldPaddingRight;
    } else if(animation === 'vertical') {
      el.style.height = '';
      el.style.paddingTop = oldPaddingTop;
      el.style.paddingBottom = oldPaddingBottom;
    } else {
      el.style.width = '';
      el.style.paddingLeft = oldPaddingLeft;
      el.style.paddingRight = oldPaddingRight;
      el.style.height = '';
      el.style.paddingTop = oldPaddingTop;
      el.style.paddingBottom = oldPaddingBottom;
      console.log(oldPaddingTop, oldPaddingBottom, oldPaddingLeft, oldPaddingRight)

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
      onExiting={el => leave(el)}
      onExited={el => afterLeave(el)}
      {...restProps}
    >
      {wrapper ? <div ref={spread}>{children}</div> : children}
    </CSSTransition>
  )
}


Spread.defaultProps = {
  unmountOnExit: true,
  appear: true,
  wrapper: true
}

export {Spread}