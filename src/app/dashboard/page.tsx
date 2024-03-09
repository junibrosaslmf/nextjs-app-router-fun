import { AuthRequiredError } from "@/lib/exceptions";

type Props = {}

const session = null;

export default function page({ }: Props) {
  if (!session) throw new AuthRequiredError();

  return (
    <div>page</div>
  )
}