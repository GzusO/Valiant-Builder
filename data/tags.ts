export interface Tag {
    name: string;
    displayFormat: string; //Name[x] where [] is optional and value inside modifiable.
    description: string;
}

export const tagData: Tag[] = [
    {name:'Energy',displayFormat:'Energy [X]',description:'The energy it costs to use the ability. The use cost is reduced by the finesse of the character using the ability, down to a minimum of 1. Abilities with no cost “denoted as “Energy -” always have a total cost of 0, which cannot be modified. Abilities may include a variable x in their cost, which is decided by the user (must be at least 1). Such abilities are called variable cost abilities Effects that alter ability energy costs alter the final cost.'},
    {name:'Combat',displayFormat:'Combat',description:'Whether the ability can be used in combat. Combat abilities can be used outside of combat by converting turns to time at a ratio of 5 seconds per turn.'},
    {name:"Action",displayFormat:'Action',description:"Abilities that can normally only be used during a character\'s act phase."},
    {name:'Attack Modifier',displayFormat:'Attack Modifier',description:'Abilities that can be used by a character to modify one of their attack abilities, applied when the attack ability is used (before selecting targets). The effects on an attack modifier exist during their triggering attack\'s contest and effect application, unless otherwise stated. Normally, only one attack modifier can be applied to an attack ability.'},
    {name:'Charged Action',displayFormat:'Charged Action [x]',description:'Charged action abilities resolve at the beginning of the user’s act phase (before equipped weapons can be swapped) x rounds after they are used. A character with unresolved or resolving charged action abilities skips their act phase. If you become incapacitated, all of your unresolved charged action abilities fail to resolve.'},
    {name:'Reaction',displayFormat:'Reaction',description:'Abilities that rely on triggers to be used. The triggers and effects of reaction abilities are formatted as trigger: effect. There are various predefined triggers. When applied to non-combat abilities, the trigger is used in a similar way. Whenever the event defined by the trigger resolves, the ability may be used then (and only then).'},
    {name:'Stance',displayFormat:'Stance',description:'Abilities that can only be used during the begin phase of a round. The effects of stances are active for as long as they are maintained. If the character becomes incapacitated, all of their current stances end. The cost of the stance must be paid again during the begin phase of each round to maintain the stance effects (there is no pause in the stances effects if maintained). Stances consume a focus slot while in use and cannot be used without an available focus slot. A character may only have one stance active at any time.'},
    {name:'Transformation',displayFormat:'Transformation',description:'Abilities that can only be used during the begin phase of a round. The effects of transformations are active until the combat ends. A character may only have one transformation active at any time.'},
    {name:'Attack',displayFormat:'Attack',description:'An ability that involves an attack contest between the user and a target or targets.'},
    {name:'Focus',displayFormat:'Focus [X]',description:'An ability that has continuous effects that must be actively maintained by the user using a focus slot. If the user takes x or more total energy damage during a single turn or becomes incapacitated while maintaining focus, the ability effects end. If no x is defined, focus cannot be lost due to energy damage. Focus abilities with a target only require the target to be valid until the ability resolves. Focus only needs to be maintained once the ability has resolved.'},
    {name:'Indirect',displayFormat:'Indirect',description:'An ability that is not blocked by obstacles between the user and the target. This allows abilities to target something as long as the target’s location is known, or range abilities with a shape to affect characters through barriers.'},
    {name:'Limited',displayFormat:'Limited [X] [Daily]',description:'An ability that can only be used x times (regardless of whether the ability resolves) during every combat, and freely outside of combat. Limited daily abilities can only be used x times before they need to be restored, most commonly via the Rest ability'},
    {name:'Melee',displayFormat:'Melee',description:'An action that can only target anything within reach. Normally, only adjacent tiles are within reach.'},
    {name:'Range',displayFormat:'Range [X]',description:'An ability that can target something up to x tiles away.'},
    {name:'Shape',displayFormat:'Shape [X]',description:'An ability that effects an area of the defined shape with a size of x. When the ability resolves, all characters within the shape are considered targeted by the ability. If the ability cannot target another tile, use your tile as the origin for the shape.'},
    {name:'Slow',displayFormat:'Slow',description:'An ability that can only be used during a character\'s act phase and only if they had not moved during their turn.'},
    {name:'Blitz',displayFormat:'Blitz',description:'An ability that cannot be used as a trigger for other abilities. This includes the effects of this ability, such as energy reductions, ailments caused, or movement performed.'},
    {name:'Melee',displayFormat:'Melee [X]',description:'An action that can target something up to x tiles away. If no x is defined, it defaults to 1.'},
];

export const weaponTags: Tag[] =[
    {name:'Heavy',displayFormat:'Heavy',description:'Weapons that are bulky or unwieldly. Characters wielding heavy weapons suffer -1 movement.'},
    {name:'Reach',displayFormat:'Reach [X]',description:'Melee attacks with these weapons can target creatures 1 + x tiles away with their melee abilities.'},
    {name:'Two-Handed',displayFormat:'Two-Handed',description:'Weapons that require two hands in order to perform any of the weapon’s abilities. Two-handed weapons can still be held in one hand, but none of their abilities can be used unless they are held in both hands.'},
    {name:'Unwieldly',displayFormat:'Unwieldly',description:'Weapons that are bulky and difficult to handle in close quarters. Range attack abilities attached to this weapon cannot target adjacent characters.'},
];

