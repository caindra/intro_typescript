const skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; //optional
}

const strider: Character = {
    name: 'Caindra',
    hp: 707,
    skills: ['Bash', 'Counter']
};

strider.hometown = 'Hoenn';

console.table(strider);

export {};