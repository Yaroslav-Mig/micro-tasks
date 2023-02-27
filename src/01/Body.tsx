import { Currency } from './Currency';
import { Students } from './Student';
import { Albums } from './Albums';

type BodyProps = {
  title: string;
};

export const Body = (props: BodyProps) => {
  return (
    <div>
      <span>{props.title}</span>
      <Students />
      <hr />
      <Currency />
      <Albums />
    </div>
  );
};
