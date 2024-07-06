import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const WrapperContainer: FC<Props> = ({ children }) => {
  return (
    <main className="flex items-center flex-col overflow-clip min-h-screen">
      <div className="max-w-7xl w-full h-fit px-5">{children}</div>
    </main>
  );
};

export default WrapperContainer;
