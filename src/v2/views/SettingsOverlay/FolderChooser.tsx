import React, { useState } from "react";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import { remote } from "electron";
import {
  ActionableTextBoxWrapper,
  TextBox,
} from "src/v2/components/ui/ActionableTextBox";
import { FolderOpen } from "@material-ui/icons";

interface FolderChooserProps<T extends FieldValues = FieldValues>
  extends UseControllerProps<T> {}

export default function FolderChooser<T extends FieldValues = FieldValues>(
  props: FolderChooserProps<T>
) {
  const { field } = useController(props);
  const [value, setValue] = useState<string>(field.value);

  const onClick = async () => {
    const { filePaths } = await remote.dialog.showOpenDialog(
      remote.getCurrentWindow(),
      {
        properties: ["openDirectory"],
        defaultPath: field.value,
      }
    );
    if (filePaths && filePaths.length > 0) {
      field.onChange(filePaths[0]);
      field.onBlur();
      setValue(filePaths[0]);
    }
  };

  return (
    <ActionableTextBoxWrapper onClick={onClick} tabIndex={0}>
      <TextBox>{value}</TextBox>
      <FolderOpen />
    </ActionableTextBoxWrapper>
  );
}
