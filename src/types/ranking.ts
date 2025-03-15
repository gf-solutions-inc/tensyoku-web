import { JobType } from "@/constants/tags";
import { RecruitTag } from "@/constants/tags";
import { CircleType } from "@/constants/circles";

export type ComparisonData = {
    logoUrl: string;
    rating: string;
    ratingCircle: CircleType;
    jobCount: string;
    jobCountCircle: CircleType;
    area: string;
    areaCircle: CircleType;
};

export type FeaturedJob = {
    hiringType: string;
    title: string;
    description: string;
    salary: string;
    workHours: string;
    tags: RecruitTag[];
};

export type RankingCompany = {
    id: number;
    name: string;
    description: string;
    features: string[];
    imageUrl: string;
    rankFlagUrl: string;
    featuredJob: FeaturedJob;
    areaImageUrl: string;
    jobTypes: JobType[];
    link: string;
    comparisonData?: ComparisonData;
};
