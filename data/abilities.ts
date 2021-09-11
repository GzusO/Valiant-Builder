import { Ability } from "src/app/Ability";

export const abilityData: Ability[] =[
    //Characteristic Abilities
    //Physical Power
    {name:'Overpower',types:['Powerful Build','Characteristic'],primaryTags:['Energy 2'],secondaryTags:['Attack Modifier'],tertiaryTags:[],description:'This ability gains the blitz tag.',tier:4,attack:0,energyDamage:0,scaling:''},

    //Physical Acuity
    {name:'Rush',types:['Quick Feet'],primaryTags:['Energy 3','Combat'],secondaryTags:['Reaction'],tertiaryTags:[],description:'Your move phase ends: move.',tier:2,attack:0,energyDamage:0,scaling:''},
    {name:'Quick Action',types:['Improved Dexterity'],primaryTags:['Energy 2','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1'],description:'Global: use an action ability.',tier:4,attack:0,energyDamage:0,scaling:''},

    //Physical Resilience
    {name:'Close Call',types:['Natural Defence'],primaryTags:['Energy 2','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1'],description:'You would lose endurance points: negate the loss of endurance points.',tier:2,attack:0,energyDamage:0,scaling:''},
    {name:'Deflect',types:['Reinforced Body'],primaryTags:['Energy 3'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1'],description:'You are targeted by an attack ability: ignore all effects of the triggering ability.',tier:4,attack:0,energyDamage:0,scaling:''},

    //Mental Power
    {name:'Deduce',types:['Deduction'],primaryTags:['Energy 1','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Range 7'],description:'The target character begins their turn: You learn the value of one attribute for the target character.',tier:2,attack:0,energyDamage:0,scaling:''},
    {name:'Foresight',types:['Deduction'],primaryTags:['Energy 0'],secondaryTags:['Charged Action 1 Minute'],tertiaryTags:['Limited 1 Daily'],description:'After this ability resolves, select one ability either you or a nearby ally can use. When you or an ally use that ability, it costs 0 energy. This cannot not affect variable cost abilities.',tier:2,attack:0,energyDamage:0,scaling:''},

    //Mental Resilience
    {name:'Resist Ailment',types:['Mental Fortitude'],primaryTags:['Energy 0','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1'],description:'You suffer an ailment: remove that ailment.',tier:2,attack:0,energyDamage:0,scaling:''},
    {name:'Brace',types:['Tested Psyche'],primaryTags:['Energy 0','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1'],description:'Counter: halve the energy damage of the triggering attack ability.',tier:4,attack:0,energyDamage:0,scaling:''},


    //Lineage

    //Cossim
    {name:'Cosmic Sight',types:['Cosmic Visions'],primaryTags:['Energy 0','Combat'],secondaryTags:['Action'],tertiaryTags:['Limited 1 Daily'],description:'You gain truesight for 1 minute.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Cosmic Flash',types:['Dazing Brilliance'],primaryTags:['Energy 3','Combat'],secondaryTags:['Action'],tertiaryTags:['Sphere 1',' Limited 1'],description:'Target characters, excluding yourself, suffer the blind ailment until the end of their next turn.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Auto-Stabilize',types:['Deathless Being'],primaryTags:['Energy 0','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1 Daily'],description:'You suffer the down status: gain the stable status.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Shift',types:['Fitful Existence'],primaryTags:['Energy 2','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Range 1'],description:'The round begin phase ends: move instantaneously to an unoccupied tile within range.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Nova Counter',types:['Nova Rebound'],primaryTags:['Energy x','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1'],description:'You lose endurance due to an attack ability: the character that used the triggering attack ability takes 2x energy damage.',tier:0,attack:0,energyDamage:0,scaling:''},

    //Girt
    {name:'Pouch Dust',types:['Cunning Tactics'],primaryTags:['Energy 0','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1',' Melee'],description:'Global: a target character suffers -1 finesse until the end of this combat.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Foolproof Sale',types:['The Perfect Pitch'],primaryTags:['Energy 0'],secondaryTags:['Charged Action 15 minutes'],tertiaryTags:['Limited 1 Daily'],description:'You sell an item to the target character for its full common price. If the character cannot afford the item, they will offer all of the money they have on them.',tier:0,attack:0,energyDamage:0,scaling:''},

    //Derge
    {name:'Savage Trance',types:['Savage Instincts'],primaryTags:['Energy 0','Combat'],secondaryTags:['Transformation'],tertiaryTags:[],description:'Set your focus slots to 0, immediately ending all of your focus and stance abilities. Gain +1 finesse and +1 movement.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Surge',types:['Unstoppable Fury'],primaryTags:['Energy 10','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1'],description:'Your act phase ends: take another act phase.',tier:0,attack:0,energyDamage:0,scaling:''},

    //Hjark
    {name:'Hasty Preparations',types:['Battlefield Maintenance'],primaryTags:['Energy 2','Combat'],secondaryTags:['Reaction'],tertiaryTags:[],description:'Combat begins: you may prepare your gear.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Singular Strike',types:['Glory Seeker'],primaryTags:['Energy 10','Combat'],secondaryTags:['Action'],tertiaryTags:['Limited 1',' Recharge 1'],description:'Use any non-variable cost attack ability, ignoring the energy cost and usage restrictions. The attack ability deals double energy damage and a direct hit reduces the target’s endurance by an additional point.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Martial Trance',types:['Martial Tradition'],primaryTags:['Energy 2','Combat'],secondaryTags:['Stance'],tertiaryTags:[],description:'Whenever your energy is reduced by any means, reduce it by 1 less. This cannot decrease the energy reduction below 0.',tier:0,attack:0,energyDamage:0,scaling:''},

    //Ingra
    {name:'Harry',types:['Aspect of the Vulture'],primaryTags:['Energy 1','Combat'],secondaryTags:['Stance'],tertiaryTags:['Limited 1'],description:'When you use this ability, select an enemy character. Ignore the slow tag on attack abilities as long as they target only that character.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Sway',types:['Graceful Form'],primaryTags:['Energy 0','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Blitz',' Limited 3'],description:'Any character ends their turn: move up to 1 tile.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Runic Decor',types:['Runeweaver'],primaryTags:['Energy 0','Combat'],secondaryTags:['Charged Action 5 Minutes'],tertiaryTags:['Limited 3 Daily'],description:'Cover a person or object in cosmetic glowing runes that last for 24 hours. These runes emit no useable light, but can be seen even in total darkness.',tier:0,attack:0,energyDamage:0,scaling:''},

    //Marr
    {name:'Change Position',types:['Malleable Reality'],primaryTags:['Energy 2','Combat'],secondaryTags:['Reaction'],tertiaryTags:[],description:'Combat begins: move.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Stumble',types:['Practical Survival'],primaryTags:['Energy 0','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1'],description:'You are targeted by an ability: move up to 1 tile.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Follow',types:['Sidekick'],primaryTags:['Energy 2','Combat'],secondaryTags:['Reaction'],tertiaryTags:[],description:'An ally character finishes moving: move to a tile adjacent to the target character. If you cannot reach a tile adjacent to the target character this ability fails to resolve.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Brilliant Solution',types:['Flash of Brilliance'],primaryTags:['Energy 0'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1 Daily'],description:'You must make a contest outside of combat: treat the d4 contest roll as a 4.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Simple Crafts',types:['Simple Means'],primaryTags:['Energy 0'],secondaryTags:['Charged Action 5 Minutes'],tertiaryTags:['Limited 3 Daily'],description:'Create one homemade Tool (Simple) item. The item falls apart after 24 hours.',tier:0,attack:0,energyDamage:0,scaling:''},

    //Selk
    {name:'Rehearsed Action',types:['Combat Deduction'],primaryTags:['Energy 0','Combat'],secondaryTags:['Stance'],tertiaryTags:['Limited 1'],description:'Action abilities you use during your act phase cost 0 energy. This does not affect variable cost abilities.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Move Command',types:['Commanding Presence'],primaryTags:['Energy 3','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Range 10'],description:'A target character begins their move phase: the target character gains +3 movement until the end of their move phase.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Clarity',types:['Purity of Focus'],primaryTags:['Energy 2','Combat'],secondaryTags:['Transformation'],tertiaryTags:[],description:'Gain +1 focus slot.',tier:0,attack:0,energyDamage:0,scaling:''},

    //Vyld
    {name:'Combat Breather',types:['Martial Endurance'],primaryTags:['Energy 0','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1 Daily'],description:'When your turn begins: Restore 10 energy.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Express Mutations',types:['Spontaneous Mutations'],primaryTags:['Energy 0','Combat'],secondaryTags:['Transformation'],tertiaryTags:[],description:'Gain your choice of +1 lethality or +1 defence. The boon you choose lasts until the end of combat. At the end of each of your turns, your energy is reduced by 3.',tier:0,attack:0,energyDamage:0,scaling:''},




    //Weapon Abilities
    {name:'Bash',types:['Weapon','Club','Axe'],primaryTags:['Energy 3','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Melee'],description:'',tier:0,attack:2,energyDamage:6,scaling:'This ability gains 2 energy damage for every weapon tier above 0.'},
    {name:'Crush',types:['Weapon','Club'],primaryTags:['Energy 5','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Melee','Blitz'],description:'',tier:0,attack:2,energyDamage:6,scaling:'This ability gains 2 energy damage for every weapon tier above 0.'},
    {name:'Shield Bash',types:['Weapon','Shield'],primaryTags:['Energy 3','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Melee'],description:'',tier:0,attack:0,energyDamage:4,scaling:'This ability gains 2 energy damage for every weapon tier above 0.'},
    {name:'Slash',types:['Weapon','Blade','Axe','Bladed Polearm','Hybrid Polearm'],primaryTags:['Energy 3','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Melee'],description:'',tier:0,attack:4,energyDamage:4,scaling:'This ability gains 1 attack and 1 energy damage for every weapon tier above 0.'},
    {name:'Thrust',types:['Weapon','Blade','Polearm','Hybrid Polearm'],primaryTags:['Energy 3','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Melee'],description:'',tier:0,attack:6,energyDamage:2,scaling:'This ability gains 2 attack for every wepon tier above 0.'},
    
    {name:'Heavy Bash',types:['Weapon','Heavy Club','Heavy Axe'],primaryTags:['Energy 5','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Melee','Slow'],description:'',tier:0,attack:4,energyDamage:8,scaling:'This ability gains 1 attack and 3 energy damage for every weapon tier above 0.'},
    {name:'Heavy Crush',types:['Weapon','Heavy Club'],primaryTags:['Energy 8','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Melee','Slow','Blitz'],description:'',tier:0,attack:4,energyDamage:8,scaling:'This ability gains 1 attack and 3 energy damage for every weapon tier above 0.'},
    {name:'Heavy Shield Bash',types:['Weapon','Heavy Shield'],primaryTags:['Energy 5','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Melee'],description:'',tier:0,attack:0,energyDamage:6,scaling:'This ability gains 3 energy damage for every weapon tier above 0.'},
    {name:'Heavy Slash',types:['Weapon','Heavy Blade','Heavy Axe','Heavy Bladed Polearm','Heavy Hybrid Polearm'],primaryTags:['Energy 5','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Melee','Slow'],description:'',tier:0,attack:6,energyDamage:6,scaling:'This ability gains 2 attack and 2 energy damage for every weapon tier above 0.'},
    {name:'Heavy Thrust',types:['Weapon','Heavy Blade','Heavy Polearm','Heavy Hybrid Polearm'],primaryTags:['Energy 5','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Melee','Slow'],description:'',tier:0,attack:8,energyDamage:4,scaling:'This ability gains 3 attack and 1 energy damage for every wepon tier above 0.'},

    {name:'Great Bash',types:['Weapon','Great Club','Great Axe'],primaryTags:['Energy 8','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Melee','Slow','Recharge 1'],description:'',tier:0,attack:6,energyDamage:10,scaling:'This ability gains 2 attack and 4 energy damage for every weapon tier above 0.'},
    {name:'Great Crush',types:['Weapon','Great Club'],primaryTags:['Energy 12','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Melee','Slow','Recharge 1','Blitz'],description:'',tier:0,attack:6,energyDamage:10,scaling:'This ability gains 2 attack and 4 energy damage for every weapon tier above 0.'},
    {name:'Great Slash',types:['Weapon','Great Blade','Great Axe','Great Bladed Polearm'],primaryTags:['Energy 8','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Melee','Slow','Recharge 1'],description:'',tier:0,attack:8,energyDamage:8,scaling:'This ability gains 3 attack and 3 energy damage for every weapon tier above 0.'},
    {name:'Great Thrust',types:['Weapon','Great Blade','Great Polearm'],primaryTags:['Energy 8','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Melee','Slow','Recharge 1'],description:'',tier:0,attack:10,energyDamage:6,scaling:'This ability gains 4 attack and 2 energy damage for every wepon tier above 0.'},

    {name:'Arrow',types:['Weapon','Bow'],primaryTags:['Energy 3','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Range 7','Limited 4'],description:'',tier:0,attack:2,energyDamage:6,scaling:'This ability gains 2 energy damage for every weapon tier above 0.'},
    {name:'Quarrel',types:['Weapon','Crossbow'],primaryTags:['Energy 3','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Range 7','Limited 4'],description:'',tier:0,attack:4,energyDamage:4,scaling:'This ability gains 1 attack and 1 energy damage for every weapon tier above 0.'},
    {name:'Shot',types:['Weapon','Gun','Arcane Gun'],primaryTags:['Energy 3','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Range 7','Limited 4'],description:'',tier:0,attack:6,energyDamage:2,scaling:'This ability gains 2 attack for every weapon tier above 0.'},
        
    {name:'Heavy Arrow',types:['Weapon','Heavy Bow'],primaryTags:['Energy 5','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Range 10','Slow','Limited 3'],description:'',tier:0,attack:4,energyDamage:8,scaling:'This ability gains 1 attack and 3 energy damage for every weapon tier above 0.'},
    {name:'Heavy Quarrel',types:['Weapon','Heavy Crossbow'],primaryTags:['Energy 5','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Range 10','Slow','Limited 3'],description:'',tier:0,attack:6,energyDamage:6,scaling:'This ability gains 2 attack and 2 energy damage for every weapon tier above 0.'},
    {name:'Heavy Shot',types:['Weapon','Heavy Gun','Arcane Heavy Gun'],primaryTags:['Energy 5','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Range 10','Slow','Limited 3'],description:'',tier:0,attack:8,energyDamage:4,scaling:'This ability gains 3 attack and 1 energy damage for every weapon tier above 0.'},
     
    {name:'Great Arrow',types:['Weapon','Great Bow'],primaryTags:['Energy 8','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Range 15','Slow','Recharge 1','Limited 2'],description:'',tier:0,attack:6,energyDamage:10,scaling:'This ability gains 2 attack and 4 energy damage for every weapon tier above 0.'},
    {name:'Great Quarrel',types:['Weapon','Great Crossbow'],primaryTags:['Energy 8','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Range 15','Slow','Recharge 1','Limited 2'],description:'',tier:0,attack:8,energyDamage:8,scaling:'This ability gains 3 attack and 3 energy damage for every weapon tier above 0.'},
    {name:'Great Shot',types:['Weapon','Great Gun','Arcane Great Gun'],primaryTags:['Energy 8','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Range 15','Slow','Recharge 1','Limited 2'],description:'',tier:0,attack:10,energyDamage:6,scaling:'This ability gains 4 attack and 2 energy damage for every weapon tier above 0.'},

    {name:'Block',types:['Weapon','Shield'],primaryTags:['Energy 2','Combat'],secondaryTags:['Reaction'],tertiaryTags:[],description:'Counter: Gain +5 Defence during the contest of the triggering attack ability.',tier:0,attack:0,energyDamage:0,scaling:'This ability gives an additional 2 Defence for every weapon tier above 0.'},
    {name:'Heavy Block',types:['Weapon','Heavy Shield'],primaryTags:['Energy 3','Combat'],secondaryTags:['Reaction'],tertiaryTags:[],description:'Counter: Gain +7 Defence during the contest of the triggering attack ability.',tier:0,attack:0,energyDamage:0,scaling:'This ability gives an additional 3 Defence for every weapon tier above 0.'},
    
    //Gear Abilities 
    //Tier 0
    {name:'Alarm System',types:['Gear','Alarm System'],primaryTags:['Energy 0','Combat'],secondaryTags:['Charged Action 5 minutes'],tertiaryTags:['Limited 1 Daily'],description:'Set up an alarm perimeter of up to 100 ft. that lasts for 10 hours. Any character crossing the perimeter sounds the alarm. This ability can also be used to pick up the alarms, restoring one of this gear\'s consumable uses.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Lantern',types:['Gear','Lantern'],primaryTags:['Energy 0','Combat'],secondaryTags:['Action'],tertiaryTags:[],description:'While wearing or wielding the lantern you can set it alight, providing light in a 5 tile (25 ft.) sphere. You can use this action to extinguish the lantern.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Trauma Kit',types:['Gear','Trauma Kit'],primaryTags:['Energy 0','Combat'],secondaryTags:['Action'],tertiaryTags:['Melee'],description:'Target character gains the stable status.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Pavise Shield',types:['Gear','Pavise Shield'],primaryTags:['Energy 2','Combat'],secondaryTags:['Action'],tertiaryTags:['Limited 1'],description:'Plant the shield between your own and an adjacent tile, creating cover. This ability can also be used to pick up a planted Pavise, restoring one of this gear\'s consumable uses.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Fire Bomb',types:['Gear','Fire Bomb'],primaryTags:['Energy 3','Combat'],secondaryTags:['Action'],tertiaryTags:['Range 5 Sphere 1','Limited 2'],description:'Target characters suffer the burning 1 ailment.',tier:0,attack:0,energyDamage:0,scaling:''},
    
    //Tier 1
    {name:'Caffeinated Brew',types:['Gear','Caffeinated Brew'],primaryTags:['Energy 0','Combat'],secondaryTags:['Action'],tertiaryTags:['Melee','Limited 1 Daily'],description:'Restore energy equal to 4 plus your tier to the target character.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Caltrops',types:['Gear','Caltrops'],primaryTags:['Energy 0'],secondaryTags:['Action'],tertiaryTags:['Melee','Limited 1'],description:'Drop caltrops on a target tile that last ntil the end of this combat. Any character that enters that tile takes energy damage equal to 4 plus twice your tier.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Flare',types:['Gear','Flare'],primaryTags:['Energy 0','Combat'],secondaryTags:['Action'],tertiaryTags:['Range 5','Limited 1'],description:'Light and toss a flare to a tile in range, creating a bright light in a 10 tile (50 ft.) radius at that tile. This light lasts for 12 turns (1 minute).',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Smokescreen',types:['Gear','Smokescreen'],primaryTags:['Energy 0','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Range 1 Sphere','Limited 1'],description:'Global: The target area become opaque for 12 turns (1 minute).',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Ingest Syrhja',types:['Gear','Syrjha'],primaryTags:['Energy 0','Combat'],secondaryTags:['Action'],tertiaryTags:['Limited 1 Daily'],description:'Reduce your Death Resistance by 1 and gain +2 Movement for the next hour.',tier:1,attack:0,energyDamage:0,scaling:''},
    
    //Tier 2
    {name:'Parachute',types:['Gear','Parachute'],primaryTags:['Energy 0','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1 Daily'],description:'While you are falling: Slow your fall to 25 tiles per turn (25 ft. per second). Take no energy damage when you land.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Stun Bomb',types:['Gear','Stun Bomb'],primaryTags:['Energy 3','Combat'],secondaryTags:['Action'],tertiaryTags:['Range 5','Limited 1'],description:'The target character is incapacitated for an instant. In addition to any other potential effects, this causes the target character to lose focus on all of their focus abilities.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Witch-Hunter Charm',types:['Gear','Witch-Hunter Charm'],primaryTags:['Energy 2','Combat'],secondaryTags:['Attack Modifier'],tertiaryTags:[],description:'End one focus ability of your choice that the target is maintaining.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Ingest Crystalline',types:['Gear','Crystalline'],primaryTags:['Energy 0','Combat'],secondaryTags:['Action'],tertiaryTags:['Limited 1 Daily'],description:'You have unlimited focus slots and suffer -3 Finesse for the next hour. After one hour, you restore to yourself energy equal to 3 plus your tier.',tier:2,attack:0,energyDamage:0,scaling:''},
    

    //Tier 3
    {name:'Arcane Flare',types:['Gear','Arcane Flare'],primaryTags:['Energy 0','Combat'],secondaryTags:['Action'],tertiaryTags:['Range 5','Limited 1'],description:'Light and toss a flare to a tile in range, creating a bright light in a 20 tile (100 ft.) radius at that tile. This light lasts for 1 hour and can burn in any environments.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Draining Toxin',types:['Gear','Draining Toxin'],primaryTags:['Energy 4'],secondaryTags:['Charged Action 10 minutes'],tertiaryTags:['Limited 1 Daily'],description:'All attached abilities of a target weapon gain +2 energy damage until the end of the next combat. This bonus ends when you resolve the Rest ability.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Lethal Toxin',types:['Gear','Lethal Toxin'],primaryTags:['Energy 4'],secondaryTags:['Charged Action 10 minutes'],tertiaryTags:['Limited 1 Daily'],description:'All attached abilities of a target weapon gain +2 attack until the end of the next combat. This bonus ends when you resolve the Rest ability.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Ingest Mindbreak',types:['Gear','Mindbreak'],primaryTags:['Energy 0','Combat'],secondaryTags:['Action'],tertiaryTags:['Limited 1 Daily'],description:'You gain +2 Lethality, Force, and Finesse and suffer -2 Resistance for the next hour. After one hour, your energy is reduced by half of your total energy(rounded down).',tier:3,attack:0,energyDamage:0,scaling:''},
    
    //Enchantment Abilities
    //Tier 0
    {name:'Cast Light',types:['Enchantment','Light-Casting'],primaryTags:['Energy 0','Combat'],secondaryTags:['Action'],tertiaryTags:[],description:'Set this weapon alight, providing light in a 3 tile (15 ft.) sphere. You can also use this action to extinguish the light.',tier:0,attack:0,energyDamage:0,scaling:''},
    
    //Tier 3
    {name:'Null Storage',types:['Enchantment','Null Storage'],primaryTags:['Energy 0','Combat'],secondaryTags:['Reaction'],tertiaryTags:[],description:'Global: While wielding this item, stow it away in a personal pocket space. You can use this ability at any time to pull the item back into an empty hand.',tier:2,attack:0,energyDamage:0,scaling:''},
    
];