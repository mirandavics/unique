import { MouseEventHandler } from 'react';

export interface ExperienceModel {
  job: string;
  description: string;
  companyName: string;
}

export interface ExperienceDialogProps {
  open: boolean;
  close: MouseEventHandler<HTMLButtonElement>;
  action: (model: ExperienceModel | any) => unknown;
  model: ExperienceModel;
}
