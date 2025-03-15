import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="fixed z-[999] top-0 left-0 bg-white w-full shadow-md">
            <div className="content h-[64px] md:h-[64px] flex items-center mx-auto max-w-[1280px]">
                <Link href="/" className="nuxt-link-active">
                    <Image
                        src="/img/logo.5053282.svg"
                        alt="ヘッダーの画像"
                        width={240}
                        height={30}
                        className="logo h-[30px] md:h-[30px] w-auto ml-[16px] md:ml-[30px] xl:ml-0"
                    />
                </Link>
            </div>
        </header>
    );
}
