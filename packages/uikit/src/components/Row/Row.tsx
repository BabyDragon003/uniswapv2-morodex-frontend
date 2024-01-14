import { AtomBox, AtomBoxProps } from "@pancakeswap/ui";

export const Row = ({
  width = "100%",
  alignItems = "center",
    width={width}
    alignItems={alignItems}
    justifyContent={justifyContent}
    padding={padding}
    {...props}
  />
);

export const AutoRow = (props: AtomBoxProps) => <Row flexWrap="wrap" {...props} />;

export const RowFixed = (props: AtomBoxProps) => <Row width="fit" flexWrap="wrap" {...props} />;

export const RowBetween = (props: AtomBoxProps) => <Row flexWrap="wrap" justifyContent="space-between" {...props} />;
