import Link from "next/link";
import Image from "next/image";

interface OfficialSiteButtonProps {
    link: string;
    className?: string;
}

export default function OfficialSiteButton({ link, className = "" }: OfficialSiteButtonProps) {
    return (
        <Link
            href={link}
            target="_blank"
            className={`button bg-[#1fb0a8] text-white rounded-[4px] leading-[1] py-[18px] text-center text-[16px] font-bold w-
                        [calc(100%-30px)] block mx-[16px] my-[15px] no-underline relative overflow-hidden mb-[26px] flex items-center justify-center ${className}`}
        >
            <span
                style={{
                    position: "absolute",
                    top: "-180px",
                    width: "30px",
                    height: "100%",
                    backgroundColor: "#fff",
                    animation: "shine-btn 4s ease-in-out infinite",
                    content: "",
                    display: "inline-block",
                    left: "0",
                }}
            ></span>
            公式サイトを見る
            <Image src="./img/link.svg" alt="" width={14} height={14} className="w-[14px] h-[14px] ml-[8px] inline-block" />
        </Link>
    );
}
