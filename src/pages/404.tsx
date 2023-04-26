import Link from "next/link";
import { Home } from "react-feather";

export default function FourOhFour() {
  return (
    <div className="flex flex-col text-2xl">
      <h1>
        This is embarrassing, we couldn&apos;t find what you want, but you can
        try other resources:
      </h1>
      <ul>
        <li>
          <Link href="/" passHref className="flex items-center">
            <Home size={24} />
            &nbsp;Go back home
          </Link>
        </li>
      </ul>
    </div>
  );
}
