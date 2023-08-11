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

export interface IButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'prefix'> {
  styleType?: 'primary' | 'default' | 'danger' | 'link';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Button(props: IButtonProps) {
  const { className, children, loading, disabled, suffix, prefix, onClick, ...ret } = props;

  const btnCls = React.useMemo<string>(() => {
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
