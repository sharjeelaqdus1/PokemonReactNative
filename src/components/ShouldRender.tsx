import React, {ReactNode} from 'react';

type ShouldRenderProps = {
  condition: boolean;
  children: ReactNode;
  // You don't need to explicitly mention children here
};

const ShouldRender: React.FC<ShouldRenderProps> = ({condition, children}) => {
  return condition ? <>{children}</> : null;
};

export default ShouldRender;
