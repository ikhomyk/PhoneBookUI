export interface Contact {
    id: string;
    userId: string;
    isFavorite: boolean;
    firstName: string,
    lastName: string,
    phoneNumber: string
    gitHubUrl: string,
    instagramUrl: string
};

enum ContactType {
    Home,
    Work,
    Other
};