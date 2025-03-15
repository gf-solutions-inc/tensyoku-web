import Image from "next/image";
import Link from "next/link";
import { getTagStyle } from "@/constants/tags";
import { RankingCompany } from "@/types/ranking";
import OfficialSiteButton from "./OfficialSiteButton";

export default function RankingSection({ companies }: { companies: RankingCompany[] }) {
    return (
        <div className="container px-[20px]">
            <h2 id="heading-2" className="heading2 normal mt-[40px] text-center text-[20px] font-bold leading-[1.25] text-black">
                介護会社<strong className="text-[#1fb0a8]">ランキング</strong>
            </h2>

            <div className="mt-[30px]">
                <div className="tabs flex">
                    <div className="tab active bg-[#1fb0a8] text-white rounded-t-[4px] text-[16px] font-bold py-[8px] text-center flex-grow">転職</div>
                </div>
                <div className="border-b border-[#e0e0e0] mb-[22px] -mr-[20px] -ml-[20px]"></div>
            </div>

            {companies.map((company, index) => (
                <div key={index} className="card p-[10px_0_20px] border border-[#e0e0e0] rounded-[8px] mb-[20px] relative">
                    {/* ヘッダー */}
                    <div className="head ml-[60px] mb-[12px]">
                        <Link href={company.link} target="_blank">
                            <h3 className="heading font-bold text-[20px] leading-[150%] underline mb-[4px]">{company.name}</h3>
                        </Link>
                        <Image
                            src={company.rankFlagUrl}
                            alt={`${company.id}位`}
                            width={40}
                            height={40}
                            className="icon absolute left-[8px] top-[-4px]"
                            style={{ width: "auto" }}
                        />
                    </div>
                    <div className="description w-[calc(100%-24px)] mx-[12px] font-bold text-[14px] leading-[1.5] text-[#eb5757] mb-[16px]">
                        {company.description}
                    </div>

                    {/* メインコンテンツ */}
                    <div className="middle bg-[#f7f7ff] p-[20px_12px]">
                        <Link href={company.link} target="_blank">
                            <div className="img ml-[10%] mr-[10%] w-[80%] mb-[16px]">
                                <Image src={company.imageUrl} alt={`${company.name}の画像`} width={336} height={280} />
                            </div>
                        </Link>
                        <div>
                            {/* 特徴 */}
                            {company.features.map((feature, idx) => (
                                <p key={idx} className="point good text-[14px] mb-[4px] leading-[1.5] pl-[28px] relative">
                                    <span className="absolute left-0 top-0 w-[20px] h-[20px]">
                                        <Image
                                            src={`./img/bi_check-all.svg`} // basePathを使う
                                            alt="" // 空のalt属性（装飾的な画像のため）
                                            width={20}
                                            height={20}
                                            className="block" // または inline-blockなど。必要に応じて。
                                        />
                                    </span>
                                    {feature}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* ピックアップ求人例 */}
                    <div className="bg-[#f7f7ff] p-[10px]">
                        <h2 className="normal text-[20px] font-bold leading-[1.25] text-center text-black">
                            <Image
                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMDEyMzMgMTcuNTI4M0w2Ljc3MTQ3IDE3LjczMDFMNi44NDg5MiAxOC4wMzQ3TDkuMzgyOTUgMjhINy4zODYyNUwyLjA5NjU3IDcuMjAyMDdMNC40NDM5MSA2LjM1OTU3TDQuNTExODYgNi4zMzUxOEw0LjU3MDE0IDYuMjkyNTZDNy44Nzc2NSAzLjg3Mzg4IDkuNzgyNjUgMy4zMjUxNiAxMS4wNDggMy41NDM3OEMxMi4yOTI5IDMuNzU4ODcgMTMuMDgyIDQuNzI5NCAxNC4xMjkzIDYuMDE3MzVDMTQuMTQ0NCA2LjAzNTk2IDE0LjE1OTYgNi4wNTQ2NCAxNC4xNzQ4IDYuMDczMzhDMTUuMjA2OSA3LjM0MjM1IDE2LjQ0MTkgOC44MTUwMiAxOC41NjMzIDkuNDc3NzVDMjAuNjc0OCAxMC4xMzc0IDIzLjU2MzYgOS45NjgzOCAyNy44NjU0IDguMjU0NDdDMjQuNDI2IDEzLjIzMzEgMjIuMTgwNSAxNS42MzE2IDIwLjU4ODQgMTYuNjMyOUMxOS43OTkzIDE3LjEyOTEgMTkuMjA3OSAxNy4yNTc5IDE4LjczMTggMTcuMjIxMkMxOC4yNDg4IDE3LjE4NCAxNy44MTA4IDE2Ljk3MTQgMTcuMzMyNyAxNi42NDJDMTcuMDk3MyAxNi40Nzk3IDE2Ljg2MzggMTYuMjk3NSAxNi42MTE5IDE2LjEwMTFMMTYuNTk4NCAxNi4wOTA1QzE2LjM0NTQgMTUuODkzMiAxNi4wNzUzIDE1LjY4MjkgMTUuNzg5MSAxNS40ODY2QzE1LjIxMzggMTUuMDkxOCAxNC41NDc2IDE0LjczNDMgMTMuNzI4OSAxNC42MDI2QzEyLjA3NTYgMTQuMzM2NiAxMC4wMDc4IDE1LjAxNzcgNy4wMTIzMyAxNy41MjgzWk0yOC4wODE3IDguMjA2MDZDMjguMDgxNyA4LjIwNjA2IDI4LjA4MTQgOC4yMDU5OSAyOC4wODA5IDguMjA1NzlMMjguMDgxNyA4LjIwNjA2WiIgZmlsbD0iI0ZGQzAwMCIgc3Ryb2tlPSIjMzMzMzMzIi8+Cjwvc3ZnPgo="
                                alt=""
                                width={30}
                                height={30}
                                className="inline mr-[4px] relative"
                                style={{ top: "4px" }}
                            />
                            ピックアップ求人例
                        </h2>

                        {/* 白色のカードを作る */}
                        <Link
                            href={company.link}
                            target="_blank"
                            className="bg-white p-[12px] mt-[12px] mb-[16px] rounded-[8px] block"
                            style={{ border: "1px solid #ccc" }}
                        >
                            <div className="mb-[12px]">
                                <span
                                    className="text-[12px] text-white rounded-[100px] leading-[1] py-[4px] px-[8px] mr-[8px]"
                                    style={{ background: "#54aea8" }}
                                >
                                    {company.featuredJob.hiringType}
                                </span>
                            </div>

                            <p className="normal text-[16px] leading-[1.3] underline mb-[12px] font-bold" style={{ color: "#02403c" }}>
                                {company.featuredJob.title}
                            </p>

                            <div className="text-[12px] text-[#666] leading-[1.2] mb-[12px] overflow-hidden line-clamp-2">
                                {company.featuredJob.description}
                            </div>

                            <p className="text-[14px] leading-[1.5] text-[#333] mb-[12px]">
                                <Image src="./img/money.svg" alt="" width={16} height={16} className="w-[16px] h-[16px] mr-[4px] inline-block" />
                                {company.featuredJob.salary}
                            </p>

                            <p className="text-[14px] leading-[1.5] text-[#333] mb-[12px]">
                                <Image src="./img/time.svg" alt="" width={16} height={16} className="w-[16px] h-[16px] mr-[4px] inline-block" />
                                {company.featuredJob.workHours}
                            </p>

                            <div>
                                {company.featuredJob.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className={`tag inline-block leading-[1] p-[4px] text-[12px] rounded-[4px] mr-[4px] mb-[4px] ${getTagStyle(tag)}`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </Link>
                    </div>

                    <OfficialSiteButton link={company.link} className="mb-[26px]" />

                    {/* 対応地域 */}
                    <h4 className="text-[13px] leading-[1.5] font-bold mx-[15px_15px_15px_18px] mb-[15px] before:content-[''] before:w-[2px] before:mr-[8px] before:border-l-[2px] before:border-[#1fb0a8]">
                        対応地域
                    </h4>
                    <div className="area-image ml-[10%] mr-[10%] w-[80%] mb-[16px]">
                        <Image src={company.areaImageUrl} alt={`${company.name}の対応地域画像`} width={381} height={472} />
                    </div>

                    {/* 対応職種 */}
                    <h4 className="text-[13px] leading-[1.5] font-bold mx-[15px_15px_15px_18px] mb-[15px] before:content-[''] before:w-[2px] before:mr-[8px] before:border-l-[2px] before:border-[#1fb0a8]">
                        対応職種
                    </h4>
                    <div className="tags mx-[15px] mb-[15px]">
                        {company.jobTypes.map((jobType, idx) => (
                            <span
                                key={idx}
                                className="tag text-[#1fb0a8] border border-[#1fb0a8] rounded-[4px] bg-transparent p-[6px] mr-[6px] mb-[6px] inline-block text-center text-[13px] leading-[1]"
                            >
                                {jobType}
                            </span>
                        ))}
                    </div>
                    <OfficialSiteButton link={company.link} />
                </div>
            ))}
        </div>
    );
}
