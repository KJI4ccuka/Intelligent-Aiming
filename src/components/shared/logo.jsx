import Image from 'next/image';
import Link from 'next/link';

const Logo = ({ width, height }) => {
  return (
    <Link href="/">
      <Image width={width} height={height} alt="IA Logo" src="/images/logo.png" />
    </Link>
  );
};

export default Logo;
