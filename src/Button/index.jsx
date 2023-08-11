import * as React from 'react';
import { styled } from 'styled-components';
const Component = styled.button`
  /* 清除默认样式 */
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 0;
  background: transparent;
  appearance: none;
  -webkit-appearance: none;
  &:focus {
    outline: none;
  }
`;
function Button(props) {
  const { className, children, loading, disabled, suffix, prefix, onClick, ...ret } = props;
  const btnCls = React.useMemo(() => {
    return '';
  }, []);
  return (
    <Component className={btnCls} {...ret}>
      {prefix}
      {children}
      {suffix}
    </Component>
  );
}
export default Button;
