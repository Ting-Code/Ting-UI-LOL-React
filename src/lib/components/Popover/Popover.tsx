import React, {useState, useRef, useEffect} from "react";
import classNames from "classnames";

interface PopoverProps {
  position: 'top' | 'bottom' | 'left' | 'right';
  trigger: 'click' | 'hover';
  content?: React.ReactNode
}

const Popover: React.FC<PopoverProps> = (props) => {
  const {position, trigger, content, children} = props;
  const [visible, setVisible] = useState(false)
  const visibleRef = useRef(visible);
  const contentWrapper = useRef<HTMLDivElement>(null)
  const triggerWrapper = useRef<HTMLDivElement>(null)
  const popover = useRef<HTMLDivElement>(null)

  const contentWrapperClass = classNames('ting-popover-content', 'ting-popover-zindex', {
    [`position-${position}`]: true,
  })

  useEffect(() => {
    if (trigger === 'click') {
      popover.current!.addEventListener('click', onClick)
    } else {
      popover.current!.addEventListener('mouseenter', open)
      popover.current!.addEventListener('mouseleave', close)
    }
    return () => {
      const div = document.querySelector('.ting-popover-content')
      if(div && div.parentElement){
        div.parentElement.removeChild(div)
      }
    }
    /*eslint-disable*/
  }, [])
  useEffect(() => {
    visibleRef.current = visible;
    if(visible){
      setTimeout(() => {
        //挂载后append到body
        positionContent()
        document.addEventListener('click', onClickDocument)
        window.addEventListener("scroll", close, true);
      })
    }else {
      const div = document.querySelector('.ting-popover-content')
      if(div && div.parentElement){
        div.parentElement.removeChild(div)
      }
    }
    /*eslint-disable*/
  }, [visible])
  const onClick = (e: Event) => {
    if (triggerWrapper.current && triggerWrapper.current.contains(e.target as Element)) {
      if(visibleRef.current) {
        close()
      }else {
        open()
      }
    }
  }
  const open = () => {
    setVisible(true)
  }
  const close = () => {
    setVisible(false)
    document.removeEventListener('click', onClickDocument)
    window.removeEventListener("scroll", close, true)
  }
  const positionContent = () => {
    if(contentWrapper.current && triggerWrapper.current){
      document.body.appendChild(contentWrapper.current)
      const {width, height, top, left} = triggerWrapper.current.getBoundingClientRect()
      const {height: height2} = contentWrapper.current.getBoundingClientRect()
      const positions = {
        top: {
          top: top + window.scrollY,
          left: left + window.scrollX
        },
        bottom: {
          top: top + height + window.scrollY,
          left: left + window.scrollX
        },
        left: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX
        },
        right: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + width + window.scrollX
        }
      }
      contentWrapper.current.style.top = positions[position].top + 'px'
      contentWrapper.current.style.left = positions[position].left + 'px'
    }
  }
  //关闭popover  的事件
  const onClickDocument = (e: Event) => {
    if (popover.current && (popover.current === e.target || popover.current!.contains(e.target as Element))) {
      return
    }
    if (contentWrapper.current && (contentWrapper.current === e.target || contentWrapper.current.contains(e.target as Element))) {
      return
    }
    close()
  }
  const changeVisible = () => {
    if(visible){
      return (
        <div ref={contentWrapper} className={contentWrapperClass}>
          <p>{content}</p>
        </div>
      )
    }else {
      return (
        <div style={{display: "none"}} ref={contentWrapper} className={contentWrapperClass}>
          <p>{content}</p>
        </div>
      )
    }
  }
  return (
    <div className="ting-popover" ref={popover}>
      {changeVisible()}
      <div ref={triggerWrapper} className="ting-popover-trigger">
        {children}
      </div>
    </div>
  )
}

Popover.defaultProps = {
  trigger: 'click',
  position: 'top'
}

export {Popover}

