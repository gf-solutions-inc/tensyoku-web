import Image from "next/image";
import Link from "next/link";
import { RankingCompany } from "@/types/ranking";
import { getCircleImageUrl } from "@/constants/circles";

export default function ComparisonTable({ companies }: { companies: RankingCompany[] }) {
    return (
        <div className="container px-[20px]">
            <h2 id="heading-1" className="heading2 normal mt-[40px] text-center text-[20px] font-bold leading-[1.25] text-black">
                人気サービス<strong className="text-[#1fb0a8]"> TOP3 </strong>早見表
            </h2>

            <div className="mt-[30px]">
                <div className="tabs flex">
                    <div className="tab active bg-[#1fb0a8] text-white rounded-t-[4px] text-[16px] font-bold py-[8px] text-center flex-grow">転職</div>
                </div>
            </div>

            <table className="w-full bg-white border border-[#e0e0e0] table-fixed">
                <thead>
                    <tr>
                        <td className="w-[87px] border border-[#e0e0e0] text-[12px] font-bold p-[8px] text-center whitespace-nowrap"></td>
                        <td className="border border-[#e0e0e0] text-[12px] font-bold p-[8px] text-center whitespace-nowrap">満足度</td>
                        <td className="border border-[#e0e0e0] text-[12px] font-bold p-[8px] text-center whitespace-nowrap">求人数</td>
                        <td className="border border-[#e0e0e0] text-[12px] font-bold p-[8px] text-center whitespace-nowrap">地域</td>
                        <td className="w-[75px] border border-[#e0e0e0] text-[12px] font-bold p-[8px] text-center whitespace-nowrap">リンク</td>
                    </tr>
                </thead>
                <tbody>
                    {companies.map((company, index) => {
                        const comparisonData = company.comparisonData;
                        if (!comparisonData) return <></>;
                        return (
                            <tr key={index}>
                                <td className="w-[70px] border border-[#e0e0e0] text-[12px] text-center h-[62px] p-[8px]">
                                    <Link href={company.link} target="_blank" className="flex flex-col items-center">
                                        <div className="logo w-[66px] h-[33px] grid object-contain">
                                            <Image src={comparisonData.logoUrl} alt={`${company.name}のロゴ画像`} width={140} height={60} />
                                        </div>
                                        <span className="name text-[10px] font-bold underline">{company.name}</span>
                                    </Link>
                                </td>
                                <td className="border border-[#e0e0e0] text-[12px] text-center h-[62px]">
                                    <Image
                                        src={getCircleImageUrl(comparisonData.ratingCircle)}
                                        alt={comparisonData.ratingCircle}
                                        width={30}
                                        height={30}
                                        style={{ width: "auto", display: "inline" }}
                                    />
                                    <span className="text text-[12px] block text-center mt-[4px]">{comparisonData.rating}</span>
                                </td>
                                <td className="border border-[#e0e0e0] text-[12px] text-center h-[62px]">
                                    <Image
                                        src={getCircleImageUrl(comparisonData.jobCountCircle)}
                                        alt={comparisonData.jobCountCircle}
                                        width={30}
                                        height={30}
                                        style={{ width: "auto", display: "inline" }}
                                    />
                                    <span className="text text-[12px] block text-center mt-[4px]">{comparisonData.jobCount}</span>
                                </td>
                                <td className="border border-[#e0e0e0] text-[12px] text-center h-[62px]">
                                    <Image
                                        src={getCircleImageUrl(comparisonData.areaCircle)}
                                        alt={comparisonData.areaCircle}
                                        width={30}
                                        height={30}
                                        style={{ width: "auto", display: "inline" }}
                                    />
                                    <span className="text text-[12px] block text-center mt-[4px]">{comparisonData.area}</span>
                                </td>
                                <td className="w-[58px] border border-[#e0e0e0] text-[12px] text-center h-[62px] p-[8px]">
                                    <Link
                                        href={company.link}
                                        target="_blank"
                                        className="button inline-block pt-[8px] bg-[#1fb0a8] text-white rounded-[4px] leading-[1.25] text-center text-[12px] font-bold w-[48px] h-[47px] no-underline"
                                    >
                                        公式
                                        <br />
                                        リンク
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
