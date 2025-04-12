import { Group, Input, InputLabel } from "./form-input.styles";

const FormInput = ({ label, ...inputOptions }) => {
  return (
    <Group>
      <Input {...inputOptions} />

      {label && (
        <InputLabel
          shrink={inputOptions.value.length }
        >
          {label}
        </InputLabel>
      )}
    </Group> 
  );
};

export default FormInput;
