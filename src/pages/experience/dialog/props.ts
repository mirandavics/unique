import { MouseEventHandler } from "react";

export interface ExperienceModel {
  job: any;
  description: any;
  companyName: any;
}

export interface ExperienceDialogProps {
  open: boolean;
  close: MouseEventHandler<HTMLButtonElement>;
  action: (model: ExperienceModel | any) => any;
  model: ExperienceModel;
}
