export default function Page() {
  const A = 123;
  const fungsi = (x, y) => {
    return 2 * x + y;
  };
  return <div>{fungsi(A, 9)}</div>;
}
