import Image from "next/image";

export default function Hero() {
    return (
        <div className="w-full">
            <div className="base-image">
                <Image src="./img/assets/header.png" alt="メインの画像" width={856} height={476} priority />
            </div>
            {/* <p className="caution text-[10px] text-[#666] leading-[1.2] text-center pt-[10px]">※当サイトは一部広告収益を得て運営しております。</p> */}
        </div>
    );
}
