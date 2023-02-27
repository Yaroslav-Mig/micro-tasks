import { Currency } from './Currency';
import { Students } from './Student';
import { Todos } from './Todos';

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
			<Todos/>
    </div>
  );
};
