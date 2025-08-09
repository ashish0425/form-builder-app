export type FieldType = 'text' | 'number' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'date';

export interface ValidationRule {
  type: 'required' | 'minLength' | 'maxLength' | 'email' | 'password';
  value?: number | string;
  message: string;
}

export interface FormField {
  id: string;
  type: FieldType;
  label: string;
  required: boolean;
  defaultValue: string | string[];
  validations: ValidationRule[];
  options?: string[]; // for select, radio
  isDerived?: boolean;
  parentFields?: string[];
  formula?: string;
}

export interface FormSchema {
  id: string;
  name: string;
  fields: FormField[];
  createdAt: string;
}

export interface FormState {
  currentForm: FormSchema | null;
  savedForms: FormSchema[];
  previewData: Record<string, any>;
}