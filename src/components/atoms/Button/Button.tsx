import React from 'react';
import { ButtonSize, ButtonType } from './type';

interface Props {
  children?: React.ReactNode;
  color: string;
  icon: string;
  onClick: () => void;
  size: ButtonSize;
  type: ButtonType;
  wide: boolean;
  width: string;
}

const Button: React.FC<Props> = ({
  children,
  color,
  icon,
  onClick,
  size,
  wide,
  width,
}) => {
  return (
    <input type="button" onClick={onClick} style={{ width }}>
      {children}
    </input>
  );
};
