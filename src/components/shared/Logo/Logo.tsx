import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <h2 className="text-3xl font-semibold text-black">
          <span className="text-orange-500 hover:text-orange-600">Virtu</span>
          Desk
        </h2>
      </Link>
    </div>
  );
};

export default Logo;
