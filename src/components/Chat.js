import Image from "next/image";
import Link from "next/link";

export default function Chat() {
  return (
    <Link
      href="https://wa.me/1234567890"
      className="fixed bottom-14 right-10 z-10 cursor-pointer content-center"
    >
      {/* <span className='text-black'>Hubungi Kami</span> */}
      {/* <br /> */}
      <Image
        src="/images/wa.png"
        height={50}
        width={50}
        alt="WhatsApp Chat"
        className="mx-auto"
      />
    </Link>
  );
}
