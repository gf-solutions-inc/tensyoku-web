"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ComparisonTable from "@/components/ComparisonTable";
import RankingSection from "@/components/RankingSection";
import Footer from "@/components/Footer";
import { rankingData } from "@/data/rankingData";

export default function Home() {
    const [activeSection, setActiveSection] = useState<"comparison" | "ranking">("comparison");

    // 上位3社のデータを比較表用に抽出
    const top3Companies = rankingData.slice(0, 3);

    useEffect(() => {
        const handleScroll = () => {
            const comparisonElement = document.getElementById("heading-1");
            const rankingElement = document.getElementById("heading-2");

            if (!comparisonElement || !rankingElement) return;

            const comparisonPosition = comparisonElement.getBoundingClientRect().top;
            const rankingPosition = rankingElement.getBoundingClientRect().top;
            const threshold = 200;

            if (rankingPosition < threshold) {
                setActiveSection("ranking");
            } else if (comparisonPosition < threshold) {
                setActiveSection("comparison");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80; // ヘッダーの高さを考慮
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="background">
            <div className="sticky-content side-bar">
                <div className="tocs">
                    <p className={`toc ${activeSection === "comparison" ? "active" : ""}`} onClick={() => scrollToSection("heading-1")}>
                        介護求人会社の早見表
                    </p>
                    <p className={`toc ${activeSection === "ranking" ? "active" : ""}`} onClick={() => scrollToSection("heading-2")}>
                        介護求人会社のランキング
                    </p>
                </div>
            </div>
            <div className="main">
                <Header />
                <main>
                    <Hero />
                    <ComparisonTable companies={top3Companies} />
                    <RankingSection companies={rankingData} />
                    <Footer />
                </main>
            </div>
        </div>
    );
}
