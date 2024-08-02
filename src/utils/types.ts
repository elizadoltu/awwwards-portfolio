export interface KeywordDetails {
    domain: string;
    keywords: string[];
}

export interface Description {
    general: string;
    depth: string;
}

export interface DateDetails {
    month: string;
    year: string;
}

export interface ProjectData {
    number: string;
    name: string;
    details: KeywordDetails[];
    skills: string[];
    description: Description[];
    date: DateDetails[];
    image: string;
}
export interface Data {
    data: ProjectData[];
}