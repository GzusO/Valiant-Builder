import { Ability } from "src/app/adventurer";

export const abilityData: Ability[] =[
    //Profession Abilties
    {name:'Temp Work',types:['Profession','Assistant'],primaryTags:['Energy 14'],secondaryTags:['Charged Action 8 hours'],tertiaryTags:['Limited 1'],description:'Find and work a temporary, day-long job in any town or city you find yourself in. These jobs pay 1d4 times 5 tins per day, multiplied by your tier plus 1.',tier:0},
    {name:'Coin Acquisition',types:['Profession','Criminal'],primaryTags:['Energy 14'],secondaryTags:['Charged Action 8 hours'],tertiaryTags:['Limited 1'],description:'Spend an entire day in any town or city you find yourself in acquiring people\'s coins by less-than-legitimate means. Make a non-resilience single-character characteristic contest of your choice, with the target value based on your tier. If you succeed, you earn 1d4 times 10 tins, multiplied by your tier plus 1. If you fail, you must face the consequences of your actions. In most situations, you must pay off your own bounty(your tier multiplied by 100 tins) or spend a number of weeks in jail equal to your tier(minimum 1 night).',tier:0},

    //Lineage Abilties

    //Cossim Abilties
    {name:'Auto-Stabilize',types:['Lineage','Cossim','Deathless Being'],primaryTags:['Energy 3','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1'],description:'You suffer the bleedout staus: gain the stable status.',tier:0},
    {name:'Shift',types:['Lineage','Cossim','Fitful Existence'],primaryTags:['Energy 3','Combat'],secondaryTags:['Reaction'],tertiaryTags:[],description:'Global: move up to 1 tile.',tier:0},
    {name:'Nova Counter',types:['Lineage','Cossim','Nova Rebound'],primaryTags:['Energy X','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1'],description:'You lose endurance due to a melee attack ability: the character that used the attack ability takes 2x energy damage.',tier:0},
    {name:'Flash',types:['Lineage','Cossim','Dazing Brilliance'],primaryTags:['Energy 6','Combat'],secondaryTags:['Action'],tertiaryTags:['Range 2 Sphere','Limited 1'],description:'Target characters, excluding yourself, suffer -2 lethality and -2 defence until the beginning of your next end phase. Target characters, excluding yourself, are incapacitated for an instant. In addition to any other potential effects, this causes the target character to lose focus on all of their focus abilities.',tier:0},
    {name:'Cosmic Sight',types:['Lineage','Cossim','Cosmic Visions'],primaryTags:['Energy 2','Combat'],secondaryTags:['Action'],tertiaryTags:['Limited 1'],description:'You gain truesight for 1 minute.',tier:0},
    
    //Girt Abilities
    {name:'Pouch Dust',types:['Lineage','Girt','Cunning Tactics'],primaryTags:['Energy 0','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Melee','Limited 1'],description:'Global: a target character suffers -2 lethality and -2 defence until the end of this combat.',tier:0},
    {name:'Foolproof Sale',types:['Lineage','Girt','The Perfect Pitch'],primaryTags:['Energy 12'],secondaryTags:['Charged Action 15 minutes'],tertiaryTags:['Limited 1'],description:'You sell an item to the target character for its full common price. If the character cannot afford the item, they will offer all of the money thay have on them.',tier:0},
    
    //Derge Abilities
    {name:'Surge',types:['Lineage','Derge','Unstoppable Fury'],primaryTags:['Energy 10','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1'],description:'Your act phase ends: take another act phase.',tier:0},
    {name:'Savage Trance',types:['Lineage','Derge','Savage Instincts'],primaryTags:['Energy 3','Combat'],secondaryTags:['Stance'],tertiaryTags:[],description:'Gain +2 combat speed and +2 lethality.',tier:0},
    
    //Hjark Abilities
    {name:'Martial Trance',types:['Lineage','Hjark','Martial Tradition'],primaryTags:['Energy 3','Combat'],secondaryTags:['Stance'],tertiaryTags:[],description:'Gain +2 defence and +2 resistance.',tier:0},
    {name:'Singular Strike',types:['Lineage','Hjark','Legendary Strike'],primaryTags:['Energy 5','Combat'],secondaryTags:['Attack Modifier'],tertiaryTags:['Limited 1'],description:'Gain +4 lethality and +4 force.',tier:0},
    {name:'Hasty Preparations',types:['Lineage','Hjark','Battlefield Maintenance'],primaryTags:['Energy 2','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1'],description:'Combat begins: you may prepare your gear.',tier:0},
    
    //Ingra Abilities
    {name:'True Strikes',types:['Lineage','Ingra','Aspect of the Vulture'],primaryTags:['Energy 2','Combat'],secondaryTags:['Stance'],tertiaryTags:[],description:'Apply +1 precision to all of your attack contests.',tier:0},
    {name:'Sway',types:['Lineage','Ingra','Graceful Form'],primaryTags:['Energy 0','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 2','Blitz'],description:'Global: move up to 1 tile.',tier:0},
    
    //Marr Abilities
    {name:'Stumble',types:['Lineage','Marr','Practical Survival'],primaryTags:['Energy 5','Combat'],secondaryTags:['Reaction'],tertiaryTags:[],description:'You are targeted by an ability: move up to 1 tile.',tier:0},
    {name:'Follow',types:['Lineage','Marr','Sidekick'],primaryTags:['Energy 4','Combat'],secondaryTags:['Reaction'],tertiaryTags:[],description:'When an ally character ends their move phase and you could move to a space adjacent to them: move up to your movement towards that character. You must end your movement adjacent to that character.',tier:0},
    
    //Selk Abilities
    {name:'Planned Action',types:['Lineage','Selk','Combat Deduction'],primaryTags:['Energy 0','Combat'],secondaryTags:['Stance'],tertiaryTags:['Limited 1'],description:'Gain the relaxed 2 boon. If you are tier 6 or higher, gain the relaxed 4 boon instead.',tier:0},
    {name:'Reset',types:['Lineage','Selk','Lightning Recovery'],primaryTags:['Energy 0','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1'],description:'You gain the recharging status: move the triggering status.',tier:0},
    {name:'Move Command',types:['Lineage','Selk','Commanding Presence'],primaryTags:['Energy 3','Combat'],secondaryTags:['Action'],tertiaryTags:['Range 5'],description:'A target character within range moves up to their movement.',tier:0},
    {name:'Clarity',types:['Lineage','Selk','Purity of Focus'],primaryTags:['Energy 2','Combat'],secondaryTags:['Transformation'],tertiaryTags:['Limited 1'],description:'Gain +1 focus slots.',tier:0},

    //Vyld Abilities 
    {name:'Combat Breather',types:['Lineage','Vyld','Martial Endurance'],primaryTags:['Energy 0','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1'],description:'When your act phase begins: Restore energy equal to 4 plus twice your tier.',tier:0},
    {name:'Express Mutations',types:['Lineage','Vyld','Spontaneous Mutations'],primaryTags:['Energy 0','Combat'],secondaryTags:['Transformation'],tertiaryTags:[],description:'At the beginning of every round (including when this ability was used), randomly gain either +1 lethality, +1 force, +1 defence, or +1 resistance. At the beginning of each of your turn end phases, your energy is reduced by 4 plus your tier.',tier:0},
    
    //Global Abilites


    //Characteristic Abilities

    //Physical Power Abilities
    {name:'Shove',types:['Characteristic','Physical Power','Athletic Form'],primaryTags:['Energy 4','Combat'],secondaryTags:['Action'],tertiaryTags:['Melee'],description:'Move a target 1 tile directly away from you. Cannot target characters that are a larger size than you.',tier:0},
    {name:'Grab',types:['Characteristic','Physical Power','Athletic Form'],primaryTags:['Energy 6','Combat'],secondaryTags:['Action'],tertiaryTags:['Melee','Focus 10'],description:'You and Your target\'s movement is set to 0. You must have one free hand to use this ability. That hand becomes unusable while focusing on this ability. The effects of this ability end if the target becomes invalid.',tier:0},
    {name:'Exert',types:['Characteristic','Physical Power','Perfect Form'],primaryTags:['Energy 6','Combat'],secondaryTags:['Reaction'],tertiaryTags:[],description:'Your attack ability resolves or you take part in a physical power characteristic contest: apply +1 Exertion to the triggering contest.',tier:0},

    //Physical Acuity Abilities
    {name:'Rush',types:['Characteristic','Physical Acuity','Honed Agility'],primaryTags:['Energy 2x','Combat'],secondaryTags:['Reaction'],tertiaryTags:[],description:'your move phase ends: move up to x tiles (up to your movement).',tier:0},
    {name:'Quick Action',types:['Characteristic','Physical Acuity','Absolute Agility'],primaryTags:['Energy 4','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1'],description:'Global: use an action ability.',tier:0},
    {name:'Leap',types:['Characteristic','Physical Acuity','Absolute Agility'],primaryTags:['Energy 2x','Combat'],secondaryTags:['Action'],tertiaryTags:[],description:'Jump up to x tiles (up to your movement) away from your current position, as long as there are no obstructions directly between you and your destination. Ignore the effects of all tiles between you and your destination.',tier:0},
    
    //Physical Resilience Abilities
    {name:'Brace',types:['Characteristic','Physical Resilience','Thick Skin'],primaryTags:['Energy 3','Combat'],secondaryTags:['Stance'],tertiaryTags:[],description:'Gain +3 resistance.',tier:0},
    {name:'Bulwark',types:['Characteristic','Physical Resilience','Stone Skin'],primaryTags:['Energy 6','Combat'],secondaryTags:['Counter'],tertiaryTags:[],description:'Gain the Hardened boon.',tier:0},
    
    //Mental Power Abilities
    {name:'Deduce',types:['Characteristic','Mental Power','Advanced Cognition'],primaryTags:['Energy 1','Combat'],secondaryTags:['Action'],tertiaryTags:['Range 3'],description:'Target a charater within range, and select one characteristic. You learn the target character\'s score for that characteristic.',tier:0},
    {name:'Forgesight',types:['Characteristic','Mental Power','Advanced Cognition'],primaryTags:['Energy 2'],secondaryTags:['Charged Action 1 minute'],tertiaryTags:['Limited 1'],description:'After this ability resolves, you may apply +1 Precision to any one future contest that occurs within the next 24 hours. You can only have one instance of this bonus.',tier:0},
    {name:'Frantic Foresight',types:['Characteristic','Mental Power','Ascended Cognition'],primaryTags:['Energy 4','Combat'],secondaryTags:['Reaction'],tertiaryTags:[],description:'When you partake in any contest: apply +1 Precision to the contest.',tier:0},
    
    //Mental Acuity Abilities
    {name:'Close Call',types:['Characteristic','Mental Acuity','Advanced Wit'],primaryTags:['Energy 4','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1'],description:'You would lose endurance points: negate the loss of endurance points.',tier:0},
    {name:'Effortless Rebuttal',types:['Characteristic','Mental Acuity','Perfect Wit'],primaryTags:['Energy 0'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1'],description:'You enter a mental acuity contestwith another character: win the contest.',tier:0},
    
    //Mental Resilience Abilities
    {name:'Resist Ailment',types:['Characteristic','Mental Resilience','Iron Will'],primaryTags:['Energy 0','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 2'],description:'You suffer an ailment: Remove that ailment.',tier:0},
    {name:'Ignore Pain',types:['Charateristic','Mental Resilience','Perfect Will'],primaryTags:['Energy 6','Combat'],secondaryTags:['Stance'],tertiaryTags:[],description:'You are immune to the bleedout status.',tier:0},
    

    //Class Abilties
    
    //Aspirant Abilities
    {name:'Alchemical Toxins',types:['Class','Alchemical Experimentations','Aspirant'],primaryTags:['Energy 4'],secondaryTags:['Charged Action 10 minutes'],tertiaryTags:['Limited 1'],description:'All attached abilities of a target weapon gain your choice of bonus attack equal to half of your tier (rounded down, minimum 1) or bonus energy damage equal to your tier (minimum 1). The effects end when the next combat ends or after 4 hours if no combat occurs.',tier:0},
    {name:'Alchemical Brew',types:['Class','Alchemical Experimentations','Aspirant'],primaryTags:['Energy 0'],secondaryTags:['Charged Action 10 minutes'],tertiaryTags:['Limited 2'],description:'Restore energy equal to 3 plus your tier to either yourself or a nearby character.',tier:0},
    {name:'Alchemical Bomb',types:['Class','Alchemical Experimentations','Aspirant'],primaryTags:['Energy 3','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Range 5 Sphere','Limited 2'],description:'Attack: 2, Energy Damage: 3',tier:0},
    {name:'Forceful Strike',types:['Class','Aspirant','Pugilism'],primaryTags:['Energy 3','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Melee'],description:'Attack: 2, Energy Damage: 6, This ability gains 3 energy damage for every character tier above 0.',tier:0},
    {name:'Lethal Strike',types:['Class','Aspirant','Pugilism'],primaryTags:['Energy 3','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Melee'],description:'Attack: 5, Energy Damage: 2, This ability gains 2 attack for every character tier above 0.',tier:0},
    {name:'Frenzy',types:['Class','Aspirant','Frenzied Combatant'],primaryTags:['Energy 4','Combat'],secondaryTags:['Transformation'],tertiaryTags:[],description:'You gain +2 lethality, +2 force, +2 defence, and +2 resistance. At the beginning of each of your turn begin phases, your energy is reduced by 4 plus your tier.',tier:0},
    {name:'Consume Focus',types:['Class','Aspirant','Frenzied Combatant'],primaryTags:['Energy 0','Combat'],secondaryTags:['Transformation'],tertiaryTags:[],description:'Set your focus slots to 0, immediately ending any of your maintained focus abilities. Gain lethality, force, defence, and resistance equal to consumed focus slots until combat ends.',tier:0},
    {name:'Ascendant Binding',types:['Class','Aspirant','Ascendant Bond'],primaryTags:['Energy 3','Combat'],secondaryTags:['Action'],tertiaryTags:['Range 2'],description:'This ability requires your Ascendant to be alive. The target suffers -5 movement and takes energy damage at the beginning of each of their turns equal to 1 plus your tier. If the target is targeted with any attack, your Ascendant dies. The target is immune to its own attack effects that target itself, allowing it to break itself free.',tier:0},
    {name:'Ascendant Charge',types:['Class','Aspirant','Ascendant Bond'],primaryTags:['Energy 3','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Attack','Range 2'],description:'A character enters a tile within range: target that character with this attack and set the target character\'s movement to 0 until the end of the current phase. Attack: 2, Energy Damage: 3, This ability requires your Ascendant to be alive. After using this ability, your Ascendant dies.',tier:0},
    {name:'Ascendant Sacrifice',types:['Class','Aspirant','Ascendant Bond'],primaryTags:['Energy 0','Combat'],secondaryTags:['Reaction'],tertiaryTags:[],description:'You suffer the Bleedout status: gain the stable status. This ability requires your Ascendant to be alive. After using this ability, your Ascendant dies.',tier:0},
    {name:'Identify Mark',types:['Class','Aspirant','Marked Prey'],primaryTags:['Energy 0','Combat'],secondaryTags:['Action'],tertiaryTags:['Limited 1','Range'],description:'Once you’ve marked a target character, that character remains marked until you die or they die. You can always track marked characters given there are tracks to follow. You can identify a marked character as long as you can see them, even if they are disguised (this excludes invisible characters). You gain +1 lethality and +2 force in any attack abilities you use that target the marked character. If you mark a character while you already have another character marked, the previous character’s mark clear (you can only ever have one character marked).',tier:0},
    {name:'Consume Mark',types:['Class','Aspirant','Marked Prey'],primaryTags:['Energy 0','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1'],description:'You kill your marked character: restore energy equal to 4 plus your tier.',tier:0},
    {name:'Blood Infused Strike',types:['Class','Aspirant','Charged Blood'],primaryTags:['Energy 2','Combat'],secondaryTags:['Attack Modifier'],tertiaryTags:[],description:'Gain +1 lethality and +2 force. You suffer Stressed 1 until the end of combat.',tier:0},
    {name:'Blood Lash',types:['Class','Aspirant','Charged Blood'],primaryTags:['Energy 0','Combat'],secondaryTags:['Melee Counter'],tertiaryTags:[],description:'Take the triggering attack\'s energy damage again. Deal energy damage to your attack equal to twice the energy damage their attack dealt to you.',tier:0},
    {name:'Blood Regeneration',types:['Class','Aspirant','Charged Blood'],primaryTags:['Energy 0'],secondaryTags:['Charged Action 5 minutes','Focus 1'],tertiaryTags:[],description:'Reduce your death resistance by 1 and restore energy equal to 8 plus twice your tier.',tier:0},
    {name:'Blood Transfusion',types:['Class','Aspirant','Charged Blood'],primaryTags:['Energy 0'],secondaryTags:['Charged Action 5 minutes','Focus 1'],tertiaryTags:['Limited 1'],description:'Reduce your own energy by up to half of your current energy. Restore the energy of another nearby character by the energy you lost due to this abilitie\'s effects.',tier:0},
    {name:'Deadly Waltz',types:['Class','Aspirant','Daring Flair'],primaryTags:['Energy 4','Combat'],secondaryTags:['Reaction'],tertiaryTags:[],description:'You move into a tile adjacent to another character: swap places with that character. This ability does not end your movement, allowing you to continue moving after using it.',tier:0},
    {name:'Exit Stage',types:['Class','Aspirant','Daring Flair'],primaryTags:['Energy 4','Combat'],secondaryTags:['Reaction'],tertiaryTags:[],description:'You kill a character: move a number of tiles up to your movement.',tier:0},
    {name:'Divine Guidance',types:['Class','Aspirant','Touched Mind'],primaryTags:['Energy 0'],secondaryTags:[],tertiaryTags:['Limited 1'],description:'You are possibly granted some directive, insight, or other sort of guidance by a greater power.',tier:0},
    
]