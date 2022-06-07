import React, { useCallback, useState } from "react";
import { styled } from "src/v2/stitches.config";

const BareInputWrapper = styled("span", {
  position: "relative",
  display: "inline-block",
});

const LayoutCalculator = styled("span", {
  visibility: "hidden",
});

const BareInputStyled = styled("input", {
  appearance: "none",
  all: "unset",
  position: "absolute",
  width: "100%",
  left: 0,
  top: "50%",
  transform: "translateY(-50%)",
  "&::-webkit-inner-spin-button": {
    display: "none",
  },
  "&:invalid": {
    color: "#ff4343",
  },
});

function BareInput(
  props: React.InputHTMLAttributes<HTMLInputElement>,
  ref: React.Ref<HTMLInputElement>
) {
  const [value, setValue] = useState(String(props.value) ?? "");
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      props.onChange?.(e);
      setValue(e.target.value.slice(0, props.maxLength));
    },
    [props.onChange]
  );

  return (
    <BareInputWrapper>
      <LayoutCalculator aria-hidden>{String(value)}</LayoutCalculator>
      <BareInputStyled ref={ref} value={value} {...props} onChange={onChange} />
    </BareInputWrapper>
  );
}

export default React.forwardRef(BareInput);
