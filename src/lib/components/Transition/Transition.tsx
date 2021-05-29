import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right' | 'zoom-in-open' | 'zoom-in-x' | 'zoom-in-y';

interface TransitionProps {
  animation?: AnimationName,
  wrapper? : boolean,
}

const Transition: React.FC<TransitionProps & CSSTransitionProps> = (props) => {
  const {
    children,
    className,
    animation,
    wrapper,
    ...restProps
  } = props

  return (
    <CSSTransition
      classNames = {animation}
      {...restProps}
    >
      {wrapper ? <div className={className}>{children}</div> : children}
    </CSSTransition>
  )
}
Transition.defaultProps = {
  unmountOnExit: true,
  appear: true,
}

export {Transition}
export type { TransitionProps }
