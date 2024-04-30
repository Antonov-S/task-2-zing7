import Image from "next/image";

import { NAV_LOGO } from "../../lib/constants";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <Image
        src={NAV_LOGO}
        alt="Roooby`s logo"
        priority={true}
        width={93}
        height={25}
        className="mx-1 md:mx-2.5"
      />
    </Link>
  );
}

export default Logo;
