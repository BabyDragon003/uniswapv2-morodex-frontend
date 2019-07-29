
export const AutoColumn = ({ gap, justify, ...props }: AtomBoxProps & { justify?: any }) => (
  <AtomBox display="grid" gridAutoRows="auto" justifyItems={justify} rowGap={gap} {...props} />
);
