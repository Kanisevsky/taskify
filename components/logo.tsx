import Image from 'next/image';
import Link from 'next/link';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';

const headingFont = localFont({
  src: '../public/fonts/CalSans-SemiBold.woff',
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover: opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image
          src="/images/trello-logo.svg"
          height={40}
          width={90}
          alt="Logo"
        />
        {/* <p
          className={cn('text-lg text-neutral-700 pb-1', headingFont.className)}
        >
          Taskify
        </p> */}
      </div>
    </Link>
  );
};
