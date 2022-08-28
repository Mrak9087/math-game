import './counter.css';

interface ICounter {
  name: string;
  count: number;
  classColor: string;
}

const Counter = ({ name, count, classColor }: ICounter) => {
  return (
    <div className={`counter ${classColor}`}>
      <h3>{name}</h3>
      <div>{count}</div>
    </div>
  );
};

export default Counter;
