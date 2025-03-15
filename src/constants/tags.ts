export const RECRUIT_TAGS = {
    INEXPERIENCED: "未経験",
    TRANSPORTATION_ALLOWANCE: "交通費有",
    TRAINING_SYSTEM: "研修制度有",
    SOCIAL_INSURANCE: "社会保険",
    QUALIFICATION_SUPPORT: "資格支援",
    MIDDLE_SENIOR: "ミドル・シニア活躍中",
    PAID_LEAVE: "有給休暇",
    NO_EDUCATION_REQUIREMENT: "学歴不問",
    SUNDAY_OFF: "日曜休み",
    FRIENDLY_WORKPLACE: "アットフォームな職場",
    BLANK_OK: "ブランク",
} as const;

export const JOB_TYPES = {
    CARE_WORKER: "介護職",
    CARE_MANAGER: "ケアマネージャー",
    LIFE_CONSULTANT: "生活相談員",
    SERVICE_PROVIDER: "サービス提供責任者",
    OTHERS: "その他",
    MEDICAL_CLERK: "医療事務・受付・クラーク",
} as const;

export type RecruitTag = (typeof RECRUIT_TAGS)[keyof typeof RECRUIT_TAGS];
export type JobType = (typeof JOB_TYPES)[keyof typeof JOB_TYPES];

export const getTagStyle = (tag: RecruitTag) => {
    switch (tag) {
        case RECRUIT_TAGS.INEXPERIENCED:
            return "text-[#ff7527] border border-[#ff7527]";
        case RECRUIT_TAGS.TRANSPORTATION_ALLOWANCE:
        case RECRUIT_TAGS.SOCIAL_INSURANCE:
            return "text-[#4e63b6] border border-[#4e63b6]";
        case RECRUIT_TAGS.QUALIFICATION_SUPPORT:
        case RECRUIT_TAGS.TRAINING_SYSTEM:
        case RECRUIT_TAGS.BLANK_OK:
        case RECRUIT_TAGS.SUNDAY_OFF:
        case RECRUIT_TAGS.FRIENDLY_WORKPLACE:
            return "text-[#77b74f] border border-[#77b74f]";
        default:
            return "text-[#7757fb] border border-[#7757fb]";
    }
};
