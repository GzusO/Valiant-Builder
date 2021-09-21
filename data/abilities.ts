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
    {name:'Foresight',types:['Deduction'],primaryTags:['Energy -'],secondaryTags:['Charged Action 1 Minute'],tertiaryTags:['Limited 1 Daily'],description:'After this ability resolves, select one ability either you or a nearby ally can use. When you or an ally use that ability, change its base energy cost to 0. This cannot not affect variable cost abilities. This effect lasts until the ability is used or you resolve the Rest ability.',tier:2,attack:0,energyDamage:0,scaling:''},

    //Mental Resilience
    {name:'Resist Ailment',types:['Mental Fortitude'],primaryTags:['Energy 0','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1'],description:'You suffer an ailment: remove that ailment.',tier:2,attack:0,energyDamage:0,scaling:''},
    {name:'Brace',types:['Tested Psyche'],primaryTags:['Energy 0','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1'],description:'Counter: halve the energy damage of the triggering attack ability.',tier:4,attack:0,energyDamage:0,scaling:''},


    //Lineage

    //Cossim
    {name:'Cosmic Sight',types:['Cosmic Visions'],primaryTags:['Energy -','Combat'],secondaryTags:['Action'],tertiaryTags:['Limited 1 Daily'],description:'You gain truesight for 1 minute.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Cosmic Flash',types:['Dazing Brilliance'],primaryTags:['Energy 3','Combat'],secondaryTags:['Action'],tertiaryTags:['Sphere 1',' Limited 1'],description:'Target characters, excluding yourself, suffer the blind ailment until the end of their next turn.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Auto-Stabilize',types:['Deathless Being'],primaryTags:['Energy -','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1 Daily'],description:'You suffer the down status: gain the stable status.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Shift',types:['Fitful Existence'],primaryTags:['Energy 2','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Range 1'],description:'The round begin phase ends: move instantaneously to an unoccupied tile within range.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Nova Counter',types:['Nova Rebound'],primaryTags:['Energy x','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1'],description:'You lose endurance due to an attack ability: the character that used the triggering attack ability takes 2x energy damage.',tier:0,attack:0,energyDamage:0,scaling:''},

    //Girt
    {name:'Pouch Dust',types:['Cunning Tactics'],primaryTags:['Energy 0','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1',' Melee'],description:'Global: a target character suffers -1 finesse until the end of this combat.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Foolproof Sale',types:['The Perfect Pitch'],primaryTags:['Energy -'],secondaryTags:['Charged Action 15 minutes'],tertiaryTags:['Limited 1 Daily'],description:'You sell an item to the target character for its full common price. If the character cannot afford the item, they will offer all of the money they have on them.',tier:0,attack:0,energyDamage:0,scaling:''},

    //Derge
    {name:'Savage Trance',types:['Savage Instincts'],primaryTags:['Energy 0','Combat'],secondaryTags:['Transformation'],tertiaryTags:[],description:'Set your focus slots to 0, immediately ending all of your focus and stance abilities. Gain +1 finesse and +1 movement.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Surge',types:['Unstoppable Fury'],primaryTags:['Energy 10','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1'],description:'Your act phase ends: take another act phase.',tier:0,attack:0,energyDamage:0,scaling:''},

    //Hjark
    {name:'Hasty Preparations',types:['Battlefield Maintenance'],primaryTags:['Energy 2','Combat'],secondaryTags:['Reaction'],tertiaryTags:[],description:'Combat begins: you may prepare your gear.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Singular Strike',types:['Glory Seeker'],primaryTags:['Energy 10','Combat'],secondaryTags:['Charged Action 1 Turn'],tertiaryTags:['Limited 1'],description:'Use any non-variable cost attack ability, changing its base energy cost to 0 and ignoring usage restrictions. The attack ability deals double energy damage and a direct hit reduces the target’s endurance by an additional point.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Martial Trance',types:['Martial Tradition'],primaryTags:['Energy 2','Combat'],secondaryTags:['Stance'],tertiaryTags:[],description:'Whenever your energy is reduced by any means, reduce it by 1 less. This cannot decrease the energy reduction below 0.',tier:0,attack:0,energyDamage:0,scaling:''},

    //Ingra
    {name:'Harry',types:['Aspect of the Vulture'],primaryTags:['Energy 1','Combat'],secondaryTags:['Stance'],tertiaryTags:['Limited 1'],description:'When you use this ability, select an enemy character. Ignore the slow tag on attack abilities as long as they target only that character.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Sway',types:['Graceful Form'],primaryTags:['Energy 0','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Blitz',' Limited 3'],description:'Any character ends their turn: move up to 1 tile.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Runic Decor',types:['Runeweaver'],primaryTags:['Energy -','Combat'],secondaryTags:['Charged Action 5 Minutes'],tertiaryTags:['Limited 3 Daily'],description:'Cover a person or object in cosmetic glowing runes that last for 24 hours. These runes emit no useable light, but can be seen even in total darkness.',tier:0,attack:0,energyDamage:0,scaling:''},

    //Marr
    {name:'Change Position',types:['Malleable Reality'],primaryTags:['Energy 2','Combat'],secondaryTags:['Reaction'],tertiaryTags:[],description:'Combat begins: move.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Stumble',types:['Practical Survival'],primaryTags:['Energy 0','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1'],description:'You are targeted by an ability: move up to 1 tile.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Follow',types:['Sidekick'],primaryTags:['Energy 2','Combat'],secondaryTags:['Reaction'],tertiaryTags:[],description:'An ally character finishes moving: move to a tile adjacent to the target character. If you cannot reach a tile adjacent to the target character this ability fails to resolve.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Brilliant Solution',types:['Flash of Brilliance'],primaryTags:['Energy -'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1 Daily'],description:'You must make a contest outside of combat: treat the d4 contest roll as a 4.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Simple Crafts',types:['Simple Means'],primaryTags:['Energy -'],secondaryTags:['Charged Action 5 Minutes'],tertiaryTags:['Limited 3 Daily'],description:'Create one homemade Tool (Simple) item. The item falls apart after 24 hours.',tier:0,attack:0,energyDamage:0,scaling:''},

    //Selk
    {name:'Rehearsed Action',types:['Combat Deduction'],primaryTags:['Energy 0','Combat'],secondaryTags:['Stance'],tertiaryTags:['Limited 1'],description:'Action abilities you use during your act have their base energy cost changed to 0 energy. This does not affect variable cost abilities.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Move Command',types:['Commanding Presence'],primaryTags:['Energy 3','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Range 10'],description:'A target character begins their move phase: the target character gains +3 movement until the end of their move phase.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Clarity',types:['Purity of Focus'],primaryTags:['Energy 2','Combat'],secondaryTags:['Transformation'],tertiaryTags:[],description:'Gain +1 focus slot.',tier:0,attack:0,energyDamage:0,scaling:''},

    //Vyld
    {name:'Combat Breather',types:['Martial Endurance'],primaryTags:['Energy 0','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1 Daily'],description:'When your turn begins: Restore 10 energy.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Express Mutations',types:['Spontaneous Mutations'],primaryTags:['Energy 0','Combat'],secondaryTags:['Transformation'],tertiaryTags:[],description:'Gain your choice of +1 lethality or +1 defence. The boon you choose lasts until the end of combat. At the end of each of your turns, your energy is reduced by 3.',tier:0,attack:0,energyDamage:0,scaling:''},

    //Professions
    {name:'Disease Treatment',types:['Physician'],primaryTags:['Energy -'],secondaryTags:['Charged Action 1 Hour'],tertiaryTags:['Limited 1 Daily'],description:'Prevent a single disease affecting a character other than yourself from progressing or transmitting for 24 hours.',tier:0,attack:0,energyDamage:0,scaling:''},

    //Class

    //Aspirant
    {name:'Alchemical Toxins',types:['Alchemical Experimentations'],primaryTags:['Energy -'],secondaryTags:['Charged Action 10 Minutes'],tertiaryTags:['Limited 1 Daily'],description:'A target weapon gains one of the following bonuses to its attached attack abilities until the end of the next combat or until you resolve the Rest ability: • Lethal Toxin: This ability gains 1 attack • Coursing Toxin: The target suffers the poison 1 ailment • Paralyzing Toxin: The target suffers -1 movement until the end of their next move phase',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Alchemical Brew',types:['Alchemical Experimentations'],primaryTags:['Energy -'],secondaryTags:['Charged Action 10 Minutes'],tertiaryTags:['Limited 1 Daily'],description:'Restore energy equal to 10 plus twice your tier to either yourself or a nearby character.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Alchemical Bomb',types:['Alchemical Experimentations'],primaryTags:['Energy 3','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack',' Limited 1',' Range 5',' Sphere 1'],description:'',tier:0,attack:4,energyDamage:6,scaling:''},
    {name:'Arcane Fractures',types:['Arcane Mind'],primaryTags:['Energy 0','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack',' Range 7'],description:'This ability may target 2 additional characters. This ability always targets yourself in addition to its other targets.',tier:0,attack:6,energyDamage:10,scaling:''},
    {name:'Arcane Overdrive',types:['Arcane Mind'],primaryTags:['Energy 3','Combat'],secondaryTags:['Attack Modifier'],tertiaryTags:[],description:'This ability deals an additional 6 energy damage.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Ascendant Binding',types:['Ascendant Bond'],primaryTags:['Energy 3','Combat'],secondaryTags:['Action'],tertiaryTags:['Range 7',' Focus 9'],description:'The target suffers -3 movement and takes 5 energy damage at the beginning of each of their turns. Your ascendant is destroyed.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Ascendant Charge',types:['Ascendant Bond'],primaryTags:['Energy 3','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Attack',' Range 5'],description:'A character enters a tile within range: target that character with this attack. The target character suffers the staggered ailment. Your ascendant is destroyed. ',tier:0,attack:4,energyDamage:6,scaling:''},
    {name:'Ascendant Sacrifice',types:['Ascendant Bond'],primaryTags:['Energy -','Combat'],secondaryTags:['Reaction'],tertiaryTags:[],description:'You suffer the down status: gain the stable status. Your ascendant is destroyed.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Blood-Infused Strike',types:['Charged Blood'],primaryTags:['Energy 3','Combat'],secondaryTags:['Attack Modifier'],tertiaryTags:[],description:'The attack reduces the target’s energy by 9. You suffer -1 finesse until the end of combat.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Blood Lash',types:['Charged Blood'],primaryTags:['Energy 0','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 3',' Melee'],description:'You take energy damage: the target character has their energy reduced by 6.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Blood Regeneration',types:['Charged Blood'],primaryTags:['Energy -'],secondaryTags:['Charged Action 5 minutes'],tertiaryTags:['Limited 3 Daily'],description:'Reduce your death resistance by 1 and restore energy equal to 10 plus twice your tier.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Deadly Waltz',types:['Daring Flair'],primaryTags:['Energy 2','Combat'],secondaryTags:['Reaction'],tertiaryTags:[],description:'You move into a tile adjacent to another character: swap places with that character. This ability does not end your movement, allowing you to continue moving after using it.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Exit Stage',types:['Daring Flair'],primaryTags:['Energy 0','Combat'],secondaryTags:['Reaction'],tertiaryTags:[],description:'You reduce a character’s endurance or energy to 0: move.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Frenzy',types:['Frenzied Combatant'],primaryTags:['Energy 0','Combat'],secondaryTags:['Transformation'],tertiaryTags:[],description:'You gain +1 lethality, +1 defence, and +1 resistance. At each of your turn end phases, your energy is reduced by 6.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Murderous Strike',types:['Frenzied Combatant'],primaryTags:['Energy 2','Combat'],secondaryTags:['Attack Modifier'],tertiaryTags:['Limited 1'],description:'This ability deals no energy damage and a direct hit reduces the target’s endurance by an additional point.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Identify Mark',types:['Marked Prey'],primaryTags:['Energy 0','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Range 10',' Limited 1 Daily'],description:'Global: Mark a target character until either you die or they die. If you mark a character while you already have another character marked, the previous character’s mark clears.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Consume Mark',types:['Marked Prey'],primaryTags:['Energy 0','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1'],description:'You reduce your marked character’s endurance to 0: restore energy equal to 10 plus twice your tier.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Forceful Strike',types:['Pugilism'],primaryTags:['Energy 3','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack',' Melee'],description:'',tier:0,attack:2,energyDamage:9,scaling:''},
    {name:'Lethal Strike',types:['Pugilism'],primaryTags:['Energy 3','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack',' Melee'],description:'',tier:0,attack:6,energyDamage:3,scaling:''},
    {name:'Heavy Forceful Strike',types:['Pugilism'],primaryTags:['Energy 5','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack',' Melee',' Slow'],description:'',tier:0,attack:4,energyDamage:15,scaling:''},
    {name:'Heavy Lethal Strike',types:['Pugilism'],primaryTags:['Energy 5','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack',' Melee',' Slow'],description:'',tier:0,attack:8,energyDamage:5,scaling:''},
    {name:'Taunt',types:['Street Tactics'],primaryTags:['Energy 0','Combat'],secondaryTags:['Action'],tertiaryTags:['Range 10'],description:'The target character suffers -2 finesse until the end of their next turn.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Exposing Strike',types:['Street Tactics'],primaryTags:['Energy 0','Combat'],secondaryTags:['Attack Modifier'],tertiaryTags:[],description:'The base energy cost of this ability is 0, it deals no energy damage, and it automatically fails its attack contest. The base energy cost of the next attack ability that targets the target character during this combat is changed to 0.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Divine Guidance',types:['Touched Mind'],primaryTags:['Energy -'],secondaryTags:[],tertiaryTags:['Limited 1 Daily'],description:'You are possibly granted some directive, insight, or other sort of guidance by a greater power.',tier:0,attack:0,energyDamage:0,scaling:''},


    //Weapon Abilities
    {name:'Bash',types:['Weapon','Club','Axe','Shield'],primaryTags:['Energy 3','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Melee'],description:'',tier:0,attack:2,energyDamage:9,scaling:''},
    {name:'Crush',types:['Weapon','Club'],primaryTags:['Energy 5','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Melee','Blitz'],description:'',tier:0,attack:2,energyDamage:9,scaling:''},
    {name:'Slash',types:['Weapon','Blade','Axe','Polearm'],primaryTags:['Energy 3','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Melee'],description:'',tier:0,attack:4,energyDamage:6,scaling:''},
    {name:'Thrust',types:['Weapon','Blade','Polearm'],primaryTags:['Energy 3','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Melee'],description:'',tier:0,attack:6,energyDamage:3,scaling:''},
    
    {name:'Heavy Bash',types:['Weapon','Heavy Club','Heavy Axe','Heavy Shield'],primaryTags:['Energy 5','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Melee','Slow'],description:'',tier:0,attack:4,energyDamage:15,scaling:''},
    {name:'Heavy Crush',types:['Weapon','Heavy Club'],primaryTags:['Energy 7','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Melee','Slow','Blitz'],description:'',tier:0,attack:4,energyDamage:15,scaling:''},
    {name:'Heavy Slash',types:['Weapon','Heavy Blade','Heavy Axe','Heavy Polearm'],primaryTags:['Energy 5','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Melee','Slow'],description:'',tier:0,attack:6,energyDamage:10,scaling:''},
    {name:'Heavy Thrust',types:['Weapon','Heavy Blade','Heavy Polearm'],primaryTags:['Energy 5','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Melee','Slow'],description:'',tier:0,attack:8,energyDamage:5,scaling:''},

    {name:'Arrow',types:['Weapon','Bow'],primaryTags:['Energy 3','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Range 7','Limited 4'],description:'',tier:0,attack:2,energyDamage:9,scaling:''},
    {name:'Quarrel',types:['Weapon','Crossbow'],primaryTags:['Energy 3','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Range 7','Limited 4'],description:'',tier:0,attack:4,energyDamage:6,scaling:''},
    {name:'Shot',types:['Weapon','Firearm'],primaryTags:['Energy 3','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Range 7','Limited 4'],description:'',tier:0,attack:6,energyDamage:3,scaling:''},
        
    {name:'Heavy Arrow',types:['Weapon','Heavy Bow'],primaryTags:['Energy 5','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Range 10','Slow','Limited 3'],description:'',tier:0,attack:4,energyDamage:15,scaling:''},
    {name:'Heavy Quarrel',types:['Weapon','Heavy Crossbow'],primaryTags:['Energy 5','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Range 10','Slow','Limited 3'],description:'',tier:0,attack:6,energyDamage:10,scaling:''},
    {name:'Heavy Shot',types:['Weapon','Heavy Firearm'],primaryTags:['Energy 5','Combat'],secondaryTags:['Action'],tertiaryTags:['Attack','Range 10','Slow','Limited 3'],description:'',tier:0,attack:8,energyDamage:5,scaling:''},
     
    {name:'Block',types:['Weapon','Shield'],primaryTags:['Energy 3','Combat'],secondaryTags:['Reaction'],tertiaryTags:[],description:'Counter: Gain +4 Defence during the contest of the triggering attack ability.',tier:0,attack:0,energyDamage:0,scaling:''},
    {name:'Heavy Block',types:['Weapon','Heavy Shield'],primaryTags:['Energy 5','Combat'],secondaryTags:['Reaction'],tertiaryTags:[],description:'Counter: Gain +8 Defence during the contest of the triggering attack ability.',tier:0,attack:0,energyDamage:0,scaling:''},
    
    //Gear Abilities 
        //Tier 0
        {name:'Lantern',types:['Gear','Lantern'],primaryTags:['Energy -','Combat'],secondaryTags:['Action'],tertiaryTags:['Range 5'],description:'This ability can be used to light or snuff your lantern. When lit, your lantern provides light within range.',tier:0,attack:0,energyDamage:0,scaling:''},
        {name:'Pavise Shield',types:['Gear','Pavise Shield'],primaryTags:['Energy 0','Combat'],secondaryTags:['Action'],tertiaryTags:['Limited 1'],description:'This ability can be used to plant or retrieve a pavise shield onto or from one of the faces of the tile you occupy. When planted, the pavise shield provides cover from range attack abilities.',tier:0,attack:0,energyDamage:0,scaling:''},
        {name:'Fire Bomb',types:['Gear','Fire Bomb'],primaryTags:['Energy 3','Combat'],secondaryTags:['Action'],tertiaryTags:['Limited 2','Range 7','Sphere 1'],description:'Target characters suffer the burning 1 ailment.',tier:0,attack:0,energyDamage:0,scaling:''},
        
        //Tier 1
        {name:'Caltrops',types:['Gear','Caltrops'],primaryTags:['Energy 0'],secondaryTags:['Action'],tertiaryTags:['Melee','Limited 1'],description:'Drop caltrops on a target tile that last ntil the end of this combat. Any character that enters that tile takes energy damage equal to 4 plus twice your tier.',tier:1,attack:0,energyDamage:0,scaling:''},
        {name:'Flare',types:['Gear','Flare'],primaryTags:['Energy 0','Combat'],secondaryTags:['Action'],tertiaryTags:['Range 5','Limited 2'],description:'Light and toss a flare to a tile in range, creating a bright light in a 10 tile (50 ft.) radius at that tile. This light lasts for 12 turns (1 minute).',tier:1,attack:0,energyDamage:0,scaling:''},
        {name:'Ingest Syrhja',types:['Gear','Syrjha'],primaryTags:['Energy 0','Combat'],secondaryTags:['Action'],tertiaryTags:['Limited 1 Daily'],description:'Reduce your Death Resistance by 1 and gain +2 Movement for the next hour.',tier:1,attack:0,energyDamage:0,scaling:''},
        
        //Tier 2
        {name:'Caffeinated Brew',types:['Gear','Caffeinated Brew'],primaryTags:['Energy -','Combat'],secondaryTags:['Action'],tertiaryTags:['Melee','Limited 2 Daily'],description:'Restore energy equal to 5 plus your tier to the target character.',tier:2,attack:0,energyDamage:0,scaling:''},
        {name:'Parachute',types:['Gear','Parachute'],primaryTags:['Energy 0','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1 Daily'],description:'While you are falling: Slow your fall to 25 tiles per turn (25 ft. per second). Take no energy damage when you land.',tier:2,attack:0,energyDamage:0,scaling:''},
        {name:'Smokescreen',types:['Gear','Smokescreen'],primaryTags:['Energy 0','Combat'],secondaryTags:['Reaction'],tertiaryTags:['Limited 1','Melee','Sphere 1'],description:'Global: The target area become opaque for 12 turns (1 minute).',tier:2,attack:0,energyDamage:0,scaling:''},
        
        //Tier 3
        {name:'Arcane Flare',types:['Gear','Arcane Flare'],primaryTags:['Energy 0','Combat'],secondaryTags:['Action'],tertiaryTags:['Range 5','Limited 2'],description:'Light and toss a flare to a tile in range, creating a bright light in a 20 tile (100 ft.) radius at that tile. This light lasts for 1 hour and can burn in any environments.',tier:3,attack:0,energyDamage:0,scaling:''},
        {name:'Crystal Mirror',types:['Gear','Crystal Mirror'],primaryTags:['Energy 0','Combat'],secondaryTags:['Reaction'],tertiaryTags:[],description:'Counter: Change the taret of the triggering attack to an adjacent allied character.',tier:3,attack:0,energyDamage:0,scaling:''},
        {name:'Witch-Hunter Charm',types:['Gear','Witch-Hunter Charm'],primaryTags:['Energy 5','Combat'],secondaryTags:['Attack Modifier'],tertiaryTags:[],description:'End one focus ability of your choice that the target is maintaining.',tier:3,attack:0,energyDamage:0,scaling:''},
        
        //Tier 4
        {name:'Ingest Crystalline',types:['Gear','Crystalline'],primaryTags:['Energy 0','Combat'],secondaryTags:['Action'],tertiaryTags:['Limited 1 Daily'],description:'You gain +2 focus slots and suffer -2 finesse for the next hour.',tier:4,attack:0,energyDamage:0,scaling:''},
        {name:'Lethal Toxin',types:['Gear','Lethal Toxin'],primaryTags:['Energy 0'],secondaryTags:['Charged Action 10 minutes'],tertiaryTags:['Limited 1 Daily'],description:'A target weapon gains 1 attack to its attached attack abilities until the end of the next combat or until you resolve the Rest ability.',tier:4,attack:0,energyDamage:0,scaling:''},
        {name:'Stun Bomb',types:['Gear','Stun Bomb'],primaryTags:['Energy 3','Combat'],secondaryTags:['Action'],tertiaryTags:['Range 5','Limited 1'],description:'The target character suffers the stunned ailment.',tier:4,attack:0,energyDamage:0,scaling:''},
        
        //Tier 5
        {name:'Ingest Mindbreak',types:['Gear','Mindbreak'],primaryTags:['Energy 0','Combat'],secondaryTags:['Action'],tertiaryTags:['Limited 1 Daily'],description:'You gain +1 lethality and +1 finesse and suffer -2 resistance for the next hour.',tier:3,attack:0,energyDamage:0,scaling:''},
        
    //Enchantment Abilities
        //Tier 0
        {name:'Cast Light',types:['Enchantment','Light-Casting'],primaryTags:['Energy -','Combat'],secondaryTags:['Action'],tertiaryTags:['Range 3'],description:'Set this weapon alight, providing light in a 3 tile (15 ft.) sphere. You can also use this action to extinguish the light.',tier:0,attack:0,energyDamage:0,scaling:''},
        //Tier 3
        {name:'Null Storage',types:['Enchantment','Null Storage'],primaryTags:['Energy -','Combat'],secondaryTags:['Reaction'],tertiaryTags:[],description:'Global: While wielding this item, stow it away in a personal pocket space. You can use this ability at any time to pull the item back into an empty hand.',tier:2,attack:0,energyDamage:0,scaling:''},
    
];