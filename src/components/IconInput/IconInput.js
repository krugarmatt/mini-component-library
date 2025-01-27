import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    borderWidth: 1,
    fontSize: 14,
    iconSize: 16,
    height: 24,
  },
  large: {
    borderWidth: 2,
    fontSize: 18,
    iconSize: 24,
    height: 36,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = STYLES[size];

  return (
    <Wrapper
      style={{
        "--border-width": `${styles.borderWidth}px`,
        "--font-size": `${styles.fontSize}px`,
        "--icon-size": `${styles.iconSize}px`,
        "--height": `${styles.height}px`,
        "--width": `${styles.width}px`,
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper>
        <Icon
          id={icon}
          size={styles.iconSize}
          strokeWidth={styles.borderWidth}
        />
      </IconWrapper>
      <Input type="text" placeholder={placeholder} width={width} />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: inline-flex;
  align-items: center;
  color: ${COLORS.gray700};
  position: relative;

  :hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.span`
  position: absolute;
  left: 0;
`;

const Input = styled.input`
  border: none;
  border-bottom: var(--border-width) solid ${COLORS.black};
  color: inherit;
  height: var(--height);
  font-size: var(--font-size);
  font-weight: 700;
  outline-offset: 2px;
  padding-left: var(--height);
  width: var(--width);

  ::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
