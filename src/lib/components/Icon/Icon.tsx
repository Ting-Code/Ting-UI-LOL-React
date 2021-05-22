import * as React from 'react';
import classNames from "classnames";


let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('./icons', true, /\.svg$/));} catch (error) {console.log(error);}


interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = ({className, name, ...restProps}) => {
  return (
    <svg
      className={classNames('ting-icon', className)}
      {...restProps}
    >
      <use xlinkHref={'#' + name}/>
    </svg>
  );
};

export default Icon;