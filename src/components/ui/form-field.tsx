import { cn } from "@/lib/utils";
import type { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from "react";

interface BaseFieldProps {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  className?: string;
  hint?: string;
}

type InputFieldProps = BaseFieldProps &
  InputHTMLAttributes<HTMLInputElement> & { type?: string };

type TextareaFieldProps = BaseFieldProps &
  TextareaHTMLAttributes<HTMLTextAreaElement>;

type SelectFieldProps = BaseFieldProps &
  SelectHTMLAttributes<HTMLSelectElement> & {
    options: Array<{ value: string; label: string }>;
    placeholder?: string;
  };

const labelClasses = "block mb-1.5 text-sm font-semibold text-brand-midnight";
const inputBase =
  "w-full rounded-lg border border-brand-mist bg-white px-4 py-2.5 text-sm text-body placeholder:text-body/40 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-indigo focus:border-brand-indigo aria-invalid:border-red-400 aria-invalid:focus:ring-red-400";

export function InputField({
  id,
  label,
  error,
  required,
  className,
  hint,
  ...props
}: InputFieldProps) {
  const errorId = error ? `${id}-error` : undefined;
  const hintId = hint ? `${id}-hint` : undefined;
  const descBy = [errorId, hintId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={cn("flex flex-col", className)}>
      <label htmlFor={id} className={labelClasses}>
        {label}
        {required && <span className="ml-1 text-red-500" aria-hidden="true">*</span>}
      </label>
      {hint && (
        <p id={hintId} className="mb-1.5 text-xs text-body/60">
          {hint}
        </p>
      )}
      <input
        id={id}
        required={required}
        aria-required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={descBy}
        className={cn(inputBase)}
        {...props}
      />
      {error && (
        <p id={errorId} className="mt-1.5 text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function TextareaField({
  id,
  label,
  error,
  required,
  className,
  hint,
  ...props
}: TextareaFieldProps) {
  const errorId = error ? `${id}-error` : undefined;
  const hintId = hint ? `${id}-hint` : undefined;
  const descBy = [errorId, hintId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={cn("flex flex-col", className)}>
      <label htmlFor={id} className={labelClasses}>
        {label}
        {required && <span className="ml-1 text-red-500" aria-hidden="true">*</span>}
      </label>
      {hint && (
        <p id={hintId} className="mb-1.5 text-xs text-body/60">
          {hint}
        </p>
      )}
      <textarea
        id={id}
        required={required}
        aria-required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={descBy}
        className={cn(inputBase, "resize-y min-h-[120px]")}
        {...props}
      />
      {error && (
        <p id={errorId} className="mt-1.5 text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function SelectField({
  id,
  label,
  error,
  required,
  className,
  hint,
  options,
  placeholder,
  ...props
}: SelectFieldProps) {
  const errorId = error ? `${id}-error` : undefined;
  const hintId = hint ? `${id}-hint` : undefined;
  const descBy = [errorId, hintId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={cn("flex flex-col", className)}>
      <label htmlFor={id} className={labelClasses}>
        {label}
        {required && <span className="ml-1 text-red-500" aria-hidden="true">*</span>}
      </label>
      {hint && (
        <p id={hintId} className="mb-1.5 text-xs text-body/60">
          {hint}
        </p>
      )}
      <select
        id={id}
        required={required}
        aria-required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={descBy}
        className={cn(inputBase, "cursor-pointer")}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={errorId} className="mt-1.5 text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

interface CheckboxFieldProps {
  id: string;
  name?: string;
  value?: string;
  label: React.ReactNode;
  error?: string;
  className?: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
}

export function CheckboxField({
  id,
  label,
  error,
  className,
  required,
  ...props
}: CheckboxFieldProps) {
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id={id}
          required={required}
          aria-required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={errorId}
          className="mt-0.5 h-4 w-4 cursor-pointer rounded border-brand-mist text-brand-indigo focus:ring-2 focus:ring-brand-indigo focus:ring-offset-1"
          {...props}
        />
        <label htmlFor={id} className="cursor-pointer text-sm leading-relaxed text-body/80">
          {label}
        </label>
      </div>
      {error && (
        <p id={errorId} className="ml-7 text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

