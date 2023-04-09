import { TextField, TextFieldProps } from "@mui/material";
import { Control, useController } from "react-hook-form";

//extend TextFieldProps
export type InputFieldProps = TextFieldProps & {
    name: string
    control: Control<any>
}

export function InputField({
    name,
    control,
    onChange: externalOnChange, //prevent overrride outside
    onBlur: externalOnBlur,     //prevent overrride outside
    ref: externalRef,           //prevent overrride outside
    value: externalOnValue,     //prevent overrride outside
    ...rest }: InputFieldProps) {

    //Get info from input and show UI react hook form
    const {
        field: { onChange, onBlur, value, ref },
        fieldState: { error }
    } = useController({
        name,
        control
    })

    //render UI: MUI, Ant Design, Bootstrap, Custom UI
    return (
        <TextField
            fullWidth
            error={!!error}
            helperText={error?.message}
            size="small"
            margin="normal"
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            inputRef={ref}  //focus control dau tien co loi
            {...rest}
        />
    )
}