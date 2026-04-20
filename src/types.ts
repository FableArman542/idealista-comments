export interface UserComment {
    id: string;
    listingId: string;
    userId: string;
    nickname: string;
    text: string;
    topics: string[];
    likes: number;
    likedBy: string[];
    timestamp: any;
    replies?: UserComment[];
    parentId?: string | null;
    isAnonymous?: boolean;
}

export interface PropertyInfo {
    id: string | null;
    title: string;
}
