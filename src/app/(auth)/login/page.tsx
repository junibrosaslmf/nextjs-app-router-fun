import axios from "axios";

type Props = {}

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default async function page({ }: Props) {
  await wait(5000);

  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/1');

  return (
    <div>{JSON.stringify(data)}</div>
  )
}