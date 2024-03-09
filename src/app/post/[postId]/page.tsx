
type Props = {
  params: {
    postId: string,
  },
  searchParams: {
    keyword: string
  }
}

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}


export async function generateMetadata({
  params
}: Props) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
  const data = (await res.json() as Post);

  return {
    title: data.title
  }
}

export default function page({ params, searchParams }: Props) {
  return (
    <div>
      <div>{params.postId}</div>
      <div>{searchParams.keyword}</div>
    </div>
  )
}