import { FC, ReactElement } from "react";

interface IProps {
  clearState: () => void;
}

const Oops: FC<IProps> = (): ReactElement => <h3>Oops</h3>;

export { Oops };
