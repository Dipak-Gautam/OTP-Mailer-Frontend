import { Control, Controller, FieldError } from "react-hook-form";
import TextField from "@mui/material/TextField";

interface TextInputControllersProp {
  label: string;
  name: string;
  control: Control<any>;
  error: FieldError | undefined;
  type?: string;
}

const TextInputControllers = ({
  label,
  name,
  control,
  error,
  type,
}: TextInputControllersProp) => {
  return (
    <div className="text-slate-500 dark:text-white w-full">
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            type={type && "password"}
            error={error && true}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            label={label}
            variant="standard"
            fullWidth
            sx={{
              backgroundColor: "transparent",
              "& .MuiInputBase-input": {
                color: "black",
              },
              "& .MuiInputLabel-root": {
                color: "black",
                fontSize: 13,
              },
              "& .MuiInput-underline:before": {
                borderBottomColor: "black",
              },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "black",
              },
              "& input::-webkit-autofill": {
                WebkitBoxShadow: "0 0 0 1000px transparent inset !important",
                WebkitTextFillColor: "black",
                backgroundColor: "transparent !important",
              },
              "& input::-webkit-contacts-auto-fill-button": {
                display: "none !important",
              },
            }}
            autoComplete="off"
          />
        )}
      />

      <div className="text-red-500 text-xs h-3 ">
        {error && <p>{error && `${error.message}`}</p>}
      </div>
    </div>
  );
};

export default TextInputControllers;
