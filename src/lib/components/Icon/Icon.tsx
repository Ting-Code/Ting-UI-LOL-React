import * as React from 'react';
import './importAllIcons';
import './icon.scss';

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('./icons', true, /\.svg$/));} catch (error) {console.log(error);}


interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = ({className, name, ...restProps}) => {
  function classes(...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ');
  }
  return (
    <svg
      className={classes('ting-icon', className)}
      {...restProps}
    >
      <use xlinkHref={`#${name}`}/>
    </svg>
  );
};

export default Icon;