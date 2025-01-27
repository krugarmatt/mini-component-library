import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ id, label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect id={id} value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      {displayedValue}
      <Icon id={"chevron-down"} size={24} strokeWidth={2} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};
  display: inline-flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 18.75px;
  gap: 18px;
  position: relative;
  padding: 8px 12px 8px 16px;

  :hover {
    color: ${COLORS.black};
  }
`;

const NativeSelect = styled.select`
  border-radius: inherit;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  appearance: none;
  border: 0;
  padding: 0;
  background-color: transparent;
  text-indent: -9999px;
`;

export default Select;
