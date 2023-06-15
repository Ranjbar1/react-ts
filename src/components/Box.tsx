import { css } from '@emotion/react';
import { SerializedStyles } from '@emotion/react';
interface BoxProps {
  children: JSX.Element;
}
const StyledDiv: any | React.CSSProperties | undefined | SerializedStyles = css(
  {
    color: 'white',
    backgroundColor: 'navy',
  }
);
const BoxStyle: React.CSSProperties | undefined = {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  margin: '0 5rem',
};

export default function Box({ children }: BoxProps): JSX.Element {
  return (
    <div css={StyledDiv} style={StyledDiv}>
      {children}
    </div>
  );
}
