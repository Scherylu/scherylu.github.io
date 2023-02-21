export interface Competition {
    count: number;
    filters: {
        season: number;
    };
    competition: {
        id: number;
        name: string;
        code: string;
        type: string;
        emblem: string;
    }
    season: {
        id: number;
        startDate: string;
        endDate: string;
        currentMatchday: number;
        winner: string;
    };
    teams: Array<Team>;
}

export interface Team   {
    area: {
        id: number;
        name: string;
        code: string;
        flag: string;
    };
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
    address: string;
    website: string;
    founded: number;
    clubColors: string;
    venue: string;
    runningCompetitions: [];
    coach: {
        id: number;
        firstName: string;
        lastName: string;
        name: string;
        dateOfBirth: string;
        nationality: string;
        contract: {
            start: string;
            until: string;
        }
    };
    squad: Array<Squad>;
    staff: [];
    lastUpdated: Date;
}

export interface Squad  {
    id: number;
    firstName: string;
    lastName: string;
    name: string;
    position: string;
    dateOfBirth: string;
    nationality: string;
    shirtNumber: number;
    marketValue: number;
    contract: {
        start: string;
        until: string;
    }
}

export interface Field {
    attackers: Array<SelectPlayer>;
    midfielders: Array<SelectPlayer>;
    defenders: Array<SelectPlayer>;
    goalkeepers: Array<SelectPlayer>;
    coach:string;
}

export interface SelectPlayer {
    position:string;
    name:string;
}