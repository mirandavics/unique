import { HTMLInputTypeAttribute, ReactElement } from 'react';

export interface TextFieldProps {
  label: string;
  onChange?: (event: any) => void;
  helperText?: string;
  disabled?: boolean;
  icon?: ReactElement;
  onClickIcon?: () => void;
  defaultValue?: any;
  value?: any;
  type?: HTMLInputTypeAttribute;
  multiline?: boolean;
  rows?: number;
  required?: boolean;
  name: string;
}
