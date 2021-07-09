import { Ability } from "src/app/adventurer";

export const abilityData: Ability[] =[
    //Profession Abilties
    {name:'Temp Work',types:['Profession','Assistant'],primaryTags:['Energy 14'],secondaryTags:['Charged Action 8 hours'],tertiaryTags:['Limited 1'],description:'Find and work a temporary, day-long job in any town or city you find yourself in. These jobs pay 1d4 times 5 tins per day, multiplied by your tier plus 1.'},
    {name:'Coin Acquisition',types:['Profession','Criminal'],primaryTags:['Energy 14'],secondaryTags:['Charged Action 8 hours'],tertiaryTags:['Limited 1'],description:'Spend an entire day in any town or city you find yourself in acquiring people\'s coins by less-than-legitimate means. Make a non-resilience single-character characteristic contest of your choice, with the target value based on your tier. If you succeed, you earn 1d4 times 10 tins, multiplied by your tier plus 1. If you fail, you must face the consequences of your actions. In most situations, you must pay off your own bounty(your tier multiplied by 100 tins) or spend a number of weeks in jail equal to your tier(minimum 1 night).'},

    //Lineage Abilties

    //Cossim Abilties
    {name:'Auto-Stabilize',types:['Lineage','Cossim','Deathless Being'],primaryTags:['Energy 3','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1'],description:'You suffer the bleedout staus: gain the stable status.'},
    {name:'Shift',types:['Lineage','Cossim','Fitful Existence'],primaryTags:['Energy 3','Combat'],secondaryTags:['Reaction'],tertiaryTags:[],description:'Global: move up to 1 tile.'},
    {name:'Nova Counter',types:['Lineage','Cossim','Nova Rebound'],primaryTags:['Energy X','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1'],description:'You lose endurance due to a melee attack ability: the character that used the attack ability takes 2x energy damage.'},
    {name:'Flash',types:['Lineage','Cossim','Dazing Brilliance'],primaryTags:['Energy 6','Combat'],secondaryTags:['Action'],tertiaryTags:['Range 2 Sphere','Limited 1'],description:'Target characters, excluding yourself, suffer -2 lethality and -2 defence until the beginning of your next end phase. Target characters, excluding yourself, are incapacitated for an instant. In addition to any other potential effects, this causes the target character to lose focus on all of their focus abilities.'},
    {name:'Cosmic Sight',types:['Lineage','Cossim','Cosmic Visions'],primaryTags:['Energy 2','Combat'],secondaryTags:['Action'],tertiaryTags:['Limited 1'],description:'You gain truesight for 1 minute.'},
    
    //Girt Abilities
    {name:'Pouch Dust',types:['Lineage','Girt','Cunning Tactics'],primaryTags:['Energy 0','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Melee','Limited 1'],description:'Global: a target character suffers -2 lethality and -2 defence until the end of this combat.'},
    {name:'Foolproof Sale',types:['Lineage','Girt','The Perfect Pitch'],primaryTags:['Energy 12'],secondaryTags:['Charged Action 15 minutes'],tertiaryTags:['Limited 1'],description:'You sell an item to the target character for its full common price. If the character cannot afford the item, they will offer all of the money thay have on them.'},
    
    //Derge Abilities
    {name:'Surge',types:['Lineage','Derge','Unstoppable Fury'],primaryTags:['Energy 10','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1'],description:'Your act phase ends: take another act phase.'},
    {name:'Savage Trance',types:['Lineage','Derge','Savage Instincts'],primaryTags:['Energy 3','Combat'],secondaryTags:['Stance'],tertiaryTags:[],description:'Gain +2 combat speed and +2 lethality.'},
    
    //Hjark Abilities
    {name:'Martial Trance',types:['Lineage','Hjark','Martial Tradition'],primaryTags:['Energy 3','Combat'],secondaryTags:['Stance'],tertiaryTags:[],description:'Gain +2 defence and +2 resistance.'},
    {name:'Singular Strike',types:['Lineage','Hjark','Legendary Strike'],primaryTags:['Energy 5','Combat'],secondaryTags:['Attack Modifier'],tertiaryTags:['Limited 1'],description:'Gain +4 lethality and +4 force.'},
    {name:'Hasty Preparations',types:['Lineage','Hjark','Battlefield Maintenance'],primaryTags:['Energy 2','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1'],description:'Combat begins: you may prepare your gear.'},
    
    //Ingra Abilities
    {name:'True Strikes',types:['Lineage','Ingra','Aspect of the Vulture'],primaryTags:['Energy 2','Combat'],secondaryTags:['Stance'],tertiaryTags:[],description:'Apply +1 precision to all of your attack contests.'},
    {name:'Sway',types:['Lineage','Ingra','Graceful Form'],primaryTags:['Energy 0','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 2','Blitz'],description:'Global: move up to 1 tile.'},
    
    //Marr Abilities
    {name:'Stumble',types:['Lineage','Marr','Practical Survival'],primaryTags:['Energy 5','Combat'],secondaryTags:['Reaction'],tertiaryTags:[],description:'You are targeted by an ability: move up to 1 tile.'},
    {name:'Follow',types:['Lineage','Marr','Sidekick'],primaryTags:['Energy 4','Combat'],secondaryTags:['Reaction'],tertiaryTags:[],description:'When an ally character ends their move phase and you could move to a space adjacent to them: move up to your movement towards that character. You must end your movement adjacent to that character.'},
    
    //Selk Abilities
    {name:'Planned Action',types:['Lineage','Selk','Combat Deduction'],primaryTags:['Energy 0','Combat'],secondaryTags:['Stance'],tertiaryTags:['Limited 1'],description:'Gain the relaxed 2 boon. If you are tier 6 or higher, gain the relaxed 4 boon instead.'},
    {name:'Reset',types:['Lineage','Selk','Lightning Recovery'],primaryTags:['Energy 0','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1'],description:'You gain the recharging status: move the triggering status.'},
    {name:'Move Command',types:['Lineage','Selk','Commanding Presence'],primaryTags:['Energy 3','Combat'],secondaryTags:['Action'],tertiaryTags:['Range 5'],description:'A target character within range moves up to their movement.'},
    {name:'Clarity',types:['Lineage','Selk','Purity of Focus'],primaryTags:['Energy 2','Combat'],secondaryTags:['Transformation'],tertiaryTags:['Limited 1'],description:'Gain +1 focus slots.'},

    //Vyld Abilities 
    {name:'Combat Breather',types:['Lineage','Vyld','Martial Endurance'],primaryTags:['Energy 0','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1'],description:'When your act phase begins: Restore energy equal to 4 plus twice your tier.'},
    {name:'Express Mutations',types:['Lineage','Vyld','Spontaneous Mutations'],primaryTags:['Energy 0','Combat'],secondaryTags:['Transformation'],tertiaryTags:[],description:'At the beginning of every round (including when this ability was used), randomly gain either +1 lethality, +1 force, +1 defence, or +1 resistance. At the beginning of each of your turn end phases, your energy is reduced by 4 plus your tier.'},
    
    //Global Abilites


    //Characteristic Abilities

    //Physical Power Abilities
    {name:'Shove',types:['Characteristic','Physical Power','Athletic Form'],primaryTags:['Energy 4','Combat'],secondaryTags:['Action'],tertiaryTags:['Melee'],description:'Move a target 1 tile directly away from you. Cannot target characters that are a larger size than you.'},
    {name:'Grab',types:['Characteristic','Physical Power','Athletic Form'],primaryTags:['Energy 6','Combat'],secondaryTags:['Action'],tertiaryTags:['Melee','Focus 10'],description:'You and Your target\'s movement is set to 0. You must have one free hand to use this ability. That hand becomes unusable while focusing on this ability. The effects of this ability end if the target becomes invalid.'},
    {name:'Exert',types:['Characteristic','Physical Power','Perfect Form'],primaryTags:['Energy 6','Combat'],secondaryTags:['Reaction'],tertiaryTags:[],description:'Your attack ability resolves or you take part in a physical power characteristic contest: apply +1 Exertion to the triggering contest.'},

    //Physical Acuity Abilities
    {name:'Rush',types:['Characteristic','Physical Acuity','Honed Agility'],primaryTags:['Energy 2x','Combat'],secondaryTags:['Reaction'],tertiaryTags:[],description:'your move phase ends: move up to x tiles (up to your movement).'},
    {name:'Quick Action',types:['Characteristic','Physical Acuity','Absolute Agility'],primaryTags:['Energy 4','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1'],description:'Global: use an action ability.'},
    {name:'Leap',types:['Characteristic','Physical Acuity','Absolute Agility'],primaryTags:['Energy 2x','Combat'],secondaryTags:['Action'],tertiaryTags:[],description:'Jump up to x tiles (up to your movement) away from your current position, as long as there are no obstructions directly between you and your destination. Ignore the effects of all tiles between you and your destination.'},
    
    //Physical Resilience Abilities
    {name:'Brace',types:['Characteristic','Physical Resilience','Thick Skin'],primaryTags:['Energy 3','Combat'],secondaryTags:['Stance'],tertiaryTags:[],description:'Gain +3 resistance.'},
    {name:'Bulwark',types:['Characteristic','Physical Resilience','Stone Skin'],primaryTags:['Energy 6','Combat'],secondaryTags:['Counter'],tertiaryTags:[],description:'Gain the Hardened boon.'},
    
    //Mental Power Abilities
    {name:'Deduce',types:['Characteristic','Mental Power','Advanced Cognition'],primaryTags:['Energy 1','Combat'],secondaryTags:['Action'],tertiaryTags:['Range 3'],description:'Target a charater within range, and select one characteristic. You learn the target character\'s score for that characteristic.'},
    {name:'Forgesight',types:['Characteristic','Mental Power','Advanced Cognition'],primaryTags:['Energy 2'],secondaryTags:['Charged Action 1 minute'],tertiaryTags:['Limited 1'],description:'After this ability resolves, you may apply +1 Precision to any one future contest that occurs within the next 24 hours. You can only have one instance of this bonus.'},
    {name:'Frantic Foresight',types:['Characteristic','Mental Power','Ascended Cognition'],primaryTags:['Energy 4','Combat'],secondaryTags:['Reaction'],tertiaryTags:[],description:'When you partake in any contest: apply +1 Precision to the contest.'},
    
    //Mental Acuity Abilities
    {name:'Close Call',types:['Characteristic','Mental Acuity','Advanced Wit'],primaryTags:['Energy 4','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1'],description:'You would lose endurance points: negate the loss of endurance points.'},
    {name:'Effortless Rebuttal',types:['Characteristic','Mental Acuity','Perfect Wit'],primaryTags:['Energy 0'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1'],description:'You enter a mental acuity contestwith another character: win the contest.'},
    
    //Mental Resilience Abilities
    {name:'Resist Ailment',types:['Characteristic','Mental Resilience','Iron Will'],primaryTags:['Energy 0','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 2'],description:'You suffer an ailment: Remove that ailment.'},
    {name:'Ignore Pain',types:['Charateristic','Mental Resilience','Perfect Will'],primaryTags:['Energy 6','Combat'],secondaryTags:['Stance'],tertiaryTags:[],description:'You are immune to the bleedout status.'},
    
]