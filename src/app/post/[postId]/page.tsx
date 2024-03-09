
type Props = {
  params: {
    postId: string,
  },
  searchParams: {
    keyword: string
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