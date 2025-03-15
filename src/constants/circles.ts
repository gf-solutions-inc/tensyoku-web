export const CIRCLE_TYPES = {
    CIRCLE: "丸",
    DOUBLE_CIRCLE: "二重丸",
} as const;

export type CircleType = (typeof CIRCLE_TYPES)[keyof typeof CIRCLE_TYPES];

export const getCircleImageUrl = (type: CircleType) => {
    switch (type) {
        case CIRCLE_TYPES.CIRCLE:
            return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTUiIGN5PSIxNSIgcj0iMTQiIHN0cm9rZT0iI0YyOTk0QSIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo=";
        case CIRCLE_TYPES.DOUBLE_CIRCLE:
            return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTUiIGN5PSIxNSIgcj0iMTQiIHN0cm9rZT0iI0VCNTc1NyIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxjaXJjbGUgY3g9IjE1IiBjeT0iMTUiIHI9IjEwIiBzdHJva2U9IiNFQjU3NTciIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K";
        default:
            return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTUiIGN5PSIxNSIgcj0iMTQiIHN0cm9rZT0iI0YyOTk0QSIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo=";
    }
};
