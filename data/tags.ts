export interface Tag {
    name: string;
    displayFormat: string; //Name[x] where [] is optional and value inside modifiable.
    description: string;
}

export const tagData: Tag[] = [
    {
        name: 'Action',
        displayFormat: '[Slow] Action',
        description: 'Abilities that can normally only be used during a character’s act phase. A character can usually use two action abilities during each of their act phases. If an action ability is a slow action ability, it requires two available actions to use. This also means slow actions can normally only be used during a character’s act phase. Each individual action ability an only be used once per turn. Multiple action abilities with the same name count as different abilities, allowing characters to use the (functionally) the same action ability twice in a turn in certain scenarios, such as when dual-wielding weapons or when they have multiple instances of the same gear item prepared.'
    },
    {
        name: 'Slow Action',
        displayFormat: '[Slow] Action',
        description: 'Abilities that can normally only be used during a character’s act phase. A character can usually use two action abilities during each of their act phases. If an action ability is a slow action ability, it requires two available actions to use. This also means slow actions can normally only be used during a character’s act phase. Each individual action ability an only be used once per turn. Multiple action abilities with the same name count as different abilities, allowing characters to use the (functionally) the same action ability twice in a turn in certain scenarios, such as when dual-wielding weapons or when they have multiple instances of the same gear item prepared.'
    },
    {
        name: 'Attack Modifier',
        displayFormat: 'Attack Modifier',
        description: 'Abilities used to modify attack abilities. When a character uses an attack ability, they additionally use an attack modifier ability. Normally only one attack modifier ability can be applied to an attack ability.'
    },
    {
        name: 'Reaction',
        displayFormat: 'Reaction',
        description: 'Abilities that rely on various triggers to be used. The triggers and effects of reaction abilities are formatted as trigger: effect. A character can usually use 2 reaction abilities during each round, with uses refreshing at the beginning of the round. There are two predefined reaction triggers that are commonly used, Counter and Global. The Counter trigger can be used by characters when they are targeted by an ability. The Global trigger can be used by character during the beginning or end of another character’s turn or at any step of any character’s ability usage.'
    },
    {
        name: 'Stance',
        displayFormat: 'Stance [x]',
        description: 'Abilities that can only be used during the beginning round. Stance abilities require x focus to maintain, and their effects are active until the beginning of the next round. A character may normally only maintain one stance ability. If a character is able to maintain multiple stance abilities, all maintained stance abilities must be unique.'
    },
    {
        name: 'Transformation',
        displayFormat: 'Transformation',
        description: 'Abilities that can only be used during the beginning of a round. The effects of transformations are active until the combat ends. A character may normally only have one transformation active at any time. If a character is able to have multiple active transformation abilities, all active transformation abilities must be unique.'
    },
    {
        name: 'Strategy',
        displayFormat: 'Strategy',
        description: 'Abilities that can only be used during the beginning of the first round of combat. The effects of strategy abilities are present until either combat ends of the character that used the ability is downed. A character may normally only use one strategy ability per combat.'
    },

    {
        name: 'Shape',
        displayFormat: 'Shape [Type] [x]',
        description: 'An ability that effects an area rather than a single tile, object, or character. These abilities target a tile which is used as the origin point for the ability. The effects of the ability are then applied to everything within the ability’s shape at an area size of x. Shape abilities do not target anything other than the origin point.'
    },
    {
        name: 'Attack',
        displayFormat: 'Attack',
        description: 'An ability that involves a user attacking on or more targets. Attack abilities that target exposed characters result in a direct hit.'
    },
    {
        name: 'Blitz',
        displayFormat: 'Blitz',
        description: 'An ability that cannot be used as a trigger for other abilities at any point during the ability resolution. This includes the effects of this ability, such as damage dealt, ailments caused, or movement performed.'
    },
    {
        name: 'Focused',
        displayFormat: 'Focused [x]',
        description: 'An ability that has continuous effects that must be maintained. Focused abilities require x focus to maintain, and their effects are active for as long as they are maintained. Focused abilities with a target only require the target to be valid while the ability resolves. The effects can then be maintained on the target at any range.'
    },
    {
        name: 'Indirect',
        displayFormat: 'Indirect',
        description: 'An ability that does not need unobstructed line of sight to the target. The user of an indirect ability only needs to know where the target is to target it with an indirect ability.'
    },
    {
        name: 'Limited',
        displayFormat: 'Limited [x]',
        description: 'An ability that can only be used x times during a combat.'
    },
    {
        name: 'Range',
        displayFormat: 'Range [x] - [y]',
        description: 'An ability that can target something no less than x tiles from the user and no more than y tiles from the user. If only one value is defined, that value is both the minimum and maximum range of the ability.'
    },

    {
        name: 'Heavy',
        displayFormat: 'Heavy',
        description: 'Weapons that are bulky and difficult to carry. Characters wielding heavy weapons have their movement reduced by 2 for as long as they wield the weapon.'
    },
    {
        name: 'Two-Handed',
        displayFormat: 'Two-Handed',
        description: 'Weapons that require two hands in order to perform any of the weapon’s abilities. Two-handed weapons can still be held in one hand, but none of their attached abilities can be used unless there is another free hand available.'
    },


];

