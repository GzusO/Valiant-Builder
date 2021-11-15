import { Archetype, Class } from "src/app/class/Class";

export const classData: Class[] = [
    {
        name: 'Aspirant',
        description: 'Aspirants are those who have only recently begun adventuring. Whether they be a fresh valiant or a runaway dreaming of grandeur, they all begin as aspirants.',
        uniqueFeatureName: '',
        abilities: [],
        archetypes: []
    },
    {
        name: 'Warrior',
        description: 'Warriors are all manner of fighting folk that rely on physical prowess and trusty armaments to overcome their enemy. While the quality of a warrior’s arms and armor is incredibly important, it’s the powerful combat techniques they utilize that set them apart from common foot-soldiers. Outside of combat, warriors use their discipline to provide order to both their parties and common folk in times of chaos and uncertainty. Their physical prowess also serves as its own solution to many obstacles one might face during an adventure.',
        uniqueFeatureName: 'Techniques',
        abilities: [],
        archetypes: []
    },
    {
        name: 'Arcanist',
        description: 'Arcanists manipulate arcane forces and energies, wielding terrifying, mystical might. The title of Arcanist is broad, encompassing masterful artificers, powerful warlocks, and experimenting eccentrics. Outside of combat, arcanists use all manner of arcane tricks and tools to solve complicated problems.',
        uniqueFeatureName: 'Repertoire',
        abilities: [],
        archetypes: []
    },
    {
        name: 'Specialist',
        description: 'Specialists are tactical savants that directly manipulate the flow of battle. Whether it be neutralizing key threats, emboldening their own allies, or generally maintaining an advantageous position, specialists act as potent force multipliers. Outside of combat, specialists act as capable leaders and silver-tongued infiltrators.',
        uniqueFeatureName: 'Strategies',
        abilities: [],
        archetypes: []
    },
];

export const archetypeData: Archetype[] = [
    //Aspirant
    {
        name: 'Alchemist',
        description: 'You’ve a knack for brewing various tinctures. With a little creativity, you could probably put the more toxic or volatile ones to good use.',
        class: 'Aspirant',
        abilities: []
    },
    {
        name: 'Arcist',
        description: 'A term referring to a person with innate arcane abilities who can sense the arcane fabrics that permeate everything. While some become powerful arcanists, most succumb to madness.',
        class: 'Aspirant',
        abilities: []
    },
    {
        name: 'Ascendant Bonded',
        description: 'Infrequently, ambient energies manifest into peculiar sentient entities known as an ascendants. Ascendants require some sort of host to survive, else they burn up their available energy soon after forming. You are one such host. Ascendants manifest about their host as small sprites, taking on shapes both familiar and otherworldly. They can communicate with their hosts to a limited degree.',
        class: 'Aspirant',
        abilities: []
    },
    {
        name: 'Blood Fanatic',
        description: 'There’s something strange going on with your blood. Whether it’s hereditary, a freak mutation, or something unspeakable that was done to you (or worse, you did to yourself), your blood contains a significant amount of arcane energy. You can leverage this to great effect, as the cost of your own health.',
        class: 'Aspirant',
        abilities: []
    },
    {
        name: 'Hunter',
        description: 'Before your turn to valiancy, you were a capable hunter. Tracking prey is second-nature, be it beast or otherwise.',
        class: 'Aspirant',
        abilities: []
    },
    {
        name: 'Investigator',
        description: 'You\'ve a knack for finding the truth.',
        class: 'Aspirant',
        abilities: []
    },
    {
        name: 'Laborer',
        description: 'You\'re simple and dependable, which just so happen to be extremely sought-after traits in a valiant.',
        class: 'Aspirant',
        abilities: []
    },
    {
        name: 'Maniac',
        description: 'You’re crazy, plainly and simply. If it weren’t for you taking up valiancy, you’d probably be blathering about on some street corner, given you weren’t arrested for some heinous crime.',
        class: 'Aspirant',
        abilities: []
    },
    {
        name: 'Performer',
        description: 'To you, a melee is less a bloody struggle for survival than it is performative art. If it weren’t for how effective your techniques were, you could be accused for not taking any of this seriously.',
        class: 'Aspirant',
        abilities: []
    },
    {
        name: 'Pugilist',
        description: 'Most valiants consider unarmed combat suicide, but there are a handful of valiant legends who achieved great things with flesh alone.',
        class: 'Aspirant',
        abilities: []
    },
    {
        name: 'Rogue',
        description: 'You’re sly and conniving. If it weren’t for you being a valiant, these could be seen as negative traits.',
        class: 'Aspirant',
        abilities: []
    },
];