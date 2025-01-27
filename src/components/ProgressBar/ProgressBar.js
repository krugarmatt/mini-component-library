/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    wrapperRadius: 4,
    trackRadius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    wrapperRadius: 4,
    trackRadius: 4,
  },
  large: {
    height: 24,
    padding: 4,
    wrapperRadius: 8,
    trackRadius: 4,
  },
}

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];
  const progress = value < 0 ? 0 : value > 100 ? 100 : value;

  return (
    <Wrapper
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress}
      style={{
        "--height": `${styles.height}px`,
        "--padding": `${styles.padding}px`,
        "--wrapper-radius": `${styles.wrapperRadius}px`,
        "--track-radius": `${styles.trackRadius}px`,
        "--progress": `${progress}%`,
      }}
    >
      <Track>
        <Progress />
      </Track>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--wrapper-radius);
  height: var(--height);
  overflow: hidden;
  padding: var(--padding);
  max-width: 370px;
`;

const Track = styled.div`
  border-radius: min(var(--track-radius), var(--wrapper-radius));
  height: 100%;
  overflow: hidden;
`;

const Progress = styled.div`
  background-color: ${COLORS.primary};
  height: inherit;
  width: var(--progress);
`;

export default ProgressBar;
