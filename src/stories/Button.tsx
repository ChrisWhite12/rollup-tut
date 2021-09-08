import './button.css';
import React from 'react'
import Button from '@mui/material/Button'

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button1 = ({
  label,
  ...props
}: ButtonProps) => {
  return (
    <Button variant='outlined' size='large'>
      MUI BUTTON, HELLO {label}
    </Button>
  );
};

export default Button1
