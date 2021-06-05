import React, { FC } from 'react'
import classNames from "classnames";

interface ProgressProps {
  percent: number;
  strokeHeight?: number;
  showText?: boolean;
  styles?: React.CSSProperties;
  theme?: string;
  frame?: boolean;
}

const Progress: FC<ProgressProps> = (props) => {
  const {percent, strokeHeight, showText, styles, theme, frame} = props
  const barClasses = classNames(`ting-progress-bar`, {
    "ting-progress-frame": frame
  })
  const BackgroundClasses = classNames(`ting-progress-bar-outer`, {
    "ting-progress-background": frame
  })
  return (
    <div className={barClasses} style={ styles }>
      <div className={BackgroundClasses} style={{ height: `${strokeHeight}px`}}>
        <div className="ting-progress-bar-inner" style={{width: `${percent}%`}}>
          {showText && <span className="inner-text">{`${percent}%` + theme}</span>}
        </div>
      </div>
    </div>
  )
}

Progress.defaultProps = {
  strokeHeight: 15,
  showText: true,
  theme: "",
  frame: false
}
export { Progress }
export type { ProgressProps }

