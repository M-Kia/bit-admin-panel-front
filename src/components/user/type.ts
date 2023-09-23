import { DefaultValues } from "react-hook-form";

export type FormValues = {
  email: string;
  password: string;
}

export const defaultValues: DefaultValues<FormValues> = {
  email: "",
  password: "",
}