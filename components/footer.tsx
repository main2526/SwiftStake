import { House, UsersRound, Coins } from "lucide-react";
import Link from "next/link";
export default function ManagerOptions() {
  return (
    <div className="flex  justify-evenly">
      <Link href="/">
        <House size={34} />
      </Link>

      <Link href="/agencycenter">
        <UsersRound size={34} />
      </Link>

      <Link href="/bet" >
        <Coins size={34} />
      </Link>
    </div>
  );
}
