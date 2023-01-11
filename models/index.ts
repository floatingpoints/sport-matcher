interface Group {
    id: number,
    name: string,
    sport: string,
    area: string,
    description: string,
    image: string,
}

interface GroupEvent {
    id: number,
    groupId: number,
    groupName: string,
    time: Date,
    location: string,
    going: number,
}