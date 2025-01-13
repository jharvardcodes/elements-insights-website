import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { useAdmin } from '../contexts/AdminContext';
import { EditableContent } from './EditableContent';

interface EditableButtonProps extends Omit<ButtonProps, 'children'> {
  pageName: string;
  contentKey: string;
  defaultValue: string;
  onClick?: () => void;
}

export const EditableButton: React.FC<EditableButtonProps> = ({
  pageName,
  contentKey,
  defaultValue,
  onClick,
  ...buttonProps
}) => {
  return (
    <Button
      {...buttonProps}
      onClick={onClick}
    >
      <EditableContent
        pageName={pageName}
        contentKey={contentKey}
        defaultValue={defaultValue}
        variant="button"
      />
    </Button>
  );
};
