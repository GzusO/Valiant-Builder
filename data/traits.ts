import { Trait } from "src/app/adventurer";

export const traitData: Trait[] = [
    //Profession Traits
    {name: 'Art Object Crafting', types: ['Profession','Artist'], description: 'You can create art objects.'},
    {name: 'Artist Funds', types: ['Profession', 'Artist'], description: 'You start with 2,000 tins.'},
    {name: 'Weapon and Armor Crafting', types: ['Profession', 'Blacksmith'], description: 'You can create weapons and armor sets.'},
    {name: 'Blacksmith Funds', types: ['Profession', 'Blacksmith'], description: 'You start with 2,500 tins.'},
    {name: 'Gear Crafting', types: ['Profession', 'Tinkerer'], description: 'You can create gear.'},
    {name: 'Tinkerer Funds', types: ['Profession', 'Tinkerer'], description: 'You start with 2,500 tins.'},
    {name: 'Salesperson', types: ['Profession','Merchant'], description: 'You can reliably sell items to any character that can afford them, instead of just merchants.'},
    {name: 'Merchant Funds', types: ['Profession','Merchant'], description: 'You start with 3,000 tins.'},
    {name: 'Noble Air', types: ['Profession','Noble'], description: 'Your status allows you into exclusive areas and events.'},
    {name: 'Noble Funds', types: ['Profession','Noble'], description: 'You start with 3,500 tins.'},
    {name: 'Natural Explorer', types: ['Profession','Traveler'], description: 'Your travel groups gain a +1 to their range and a +3 to their provision score.'},
    {name: 'Traveler Funds', types: ['Profession','Traveler'], description: 'You start with 2,000 tins.'},
    {name: 'Peacekeeper', types: ['Profession','Guard'], description: 'You are always welcomed into neutral towns or cities.'},
    {name: 'Guard Funds', types: ['Profession','Guard'], description: 'You start with 2,000 tins.'},
    {name: 'Discipline', types: ['Profession','Soldier'], description: 'You gain a +1 to all resilience contests.'},
    {name: 'Soldier Funds', types: ['Profession','Soldier'], description: 'You start with 2,500 tins.'},
    {name: 'Tracking', types: ['Profession','Bounty Hunter'], description: 'You can pick up any creature\'s trail as long as the trail is less than 5 days old.'},
    {name: 'Bounty Hunter Funds', types: ['Profession','Bounty Hunter'], description: 'You start with 3,000 tins.'},
    {name: 'Tempered Body', types: ['Profession','Physical Laborer'], description: 'Gain +2 energy.'},
    {name: 'Physical Laborer Funds', types: ['Profession','Physical Laborer'], description: 'You start with 1,000 tins.'},
    {name: 'Submissive Demeanor', types: ['Profession','Servant'], description: 'Characters that don\'t know you will always dismiss you as unthreatening.'},
    {name: 'Servant Funds', types: ['Profession','Servant'], description: 'You start with 1,500 tins.'},
    {name: 'Assistant Funds', types: ['Profession','Assistant'], description: 'You start with 1,500 tins.'},
    {name: 'Educated', types: ['Profession','Scholar'], description: 'You are able to speak two additional languages.'},
    {name: 'Scholar Funds', types: ['Profession','Scholar'], description: 'You start with 2,000 tins.'},
    {name: 'Open Arms', types: ['Profession','Priest'], description: 'You and any characters allied with you are able to find sanctuary in any temple belonging to your religion, given you are not a known enemy of the temple.'},
    {name: 'Priest Funds', types: ['Profesion','Priest'], description: 'You start with 1,500 tins.'},
    {name: 'Disease Cure', types: ['Profession','Physician'], description: 'You are able to cure diseases. It costs you half of the usual cost to procure the treatments and cure the disease (given the reagents are available). To cure a disease, you must spend a number of days equal to 1 plus the disease\'s tier with the patient.'},
    {name: 'Physician Funds', types: ['Profession','Physician'], description: 'You start with 2,500 tins.'},
    {name: 'Criminal Funds', types: ['Profession','Criminal'], description: 'You start with 2,000 tins.'},
    
    //Lineage Traits
    
    //Cossim Traits
    {name: 'Glow',types:['Lineage','Cosmic Patterns','Cossim'], description: 'Characters can see you even while you are in an unlit area. This prevents characters from being conditionally blind to you in most cases. This effect can be negated by covering all of your exposed skin.'},
    {name: 'Unique Markings',types:['Lineage','Cosmic Patterns','Cossim'],description:'Under close inspection, you are always uniquely identifiable as yourself. If you were able to discern the meaning of the patterns, you could surely learn something wondrous.'},
    {name:'Inspired',types:['Lineage','Cossim','Cosmic Inspiration'],description:'Whenever you create an art object, there is a 1 in 6 chance of it being 1 tier higher than what it would\'ve been.'},
    {name:'Cosmic Designs',types:['Lineage','Cossim','Patience of Eons'],description:'Any plan or strategy you design cannot be found out by any other characters unless they are told directly or have this trait.'},
    {name:'Bounding Vagrant',types:['Lineage','Cossim','Solitary Wanderer'],description:'When you are in a travel group with no other characters, your travel group gains +2 range and +3 provision score.'},
    {name:'Natural Telepathy',types:['Lineage','Cossim','Cosmic Connection'],description:'You can communicate via telepathy to any character within 10 ft. of you. If you are granted telepathy by another trait or ability, increase that telepathy\'s range by 10 ft.'},
    {name:'Characteristic Sensing',types:['Lineage','Cossim','Strange Sense'],description:'When you gain this trait, select one characteristic. Whenever you are within 10 ft. of a character, you know their characteristic score for that characteristic.'},

    //Girt Traits
    {name:'Diminutive',types:['Lineage','Girt','Skin and Bones'],description:'You require 1 less provision score when travelling. You are unable to intimidate other characters, even with the use of other traits or abilities, unless they are at least 3 tiers below your tier.'},
    {name:'Resourceful',types:['Lineage','Girt','Master of Thrift'],description:'Your consumable gears and projectile weapons gain +1 use.'},
    {name:'Movement Reduction Immunity',types:['Lineage','Girt','Aspect of the Sands'],description:'You are immune to attribute ailments that reduce your movement.'},
    {name:'Gear Maintenance',types:['Lineage','Girt','Staunch Maintainer'],description:'You can prepare an additional gear item whenever you prepare gear.'},
    {name:'Bejeweled',types:['Lineage','Girt','Decorated Figure'],description:'You can wear on additional accessory.'},
    {name:'Weight Distribution',types:['Lineage','Girt','Careful Packing'],description:'Your carry weight increases by 40 lb.'},
    {name:'Caravan',types:['Lineage','Girt','Skillful Navigator'],description:'Your travel group gains +1 range and +3 provision score.'},
    {name:'Merchant Friendliness',types:['Lineage','Girt','Silver Tongue'],description:'Merchants default to being friendly with you rather than being neutral towards you.'},
    {name:'Language Expert',types:['Lineage','Girt','Well-Traveled'],description:'You learn an additional language.'},
    
    //Derge Traits
    {name:'Derge Metabolism',types:['Lineage','Derge','Savage Physique'],description:'You require 1 more provision score when in a travel group. When you rest, recover additional energy equal to 4 + twice your tier.'},
    {name:'Bloody Slaughter',types:['Lineage','Derge','Violent Soul'],description:'Gain +2 lethality and +2 force whenever you reduce a character\'s endurance. This boon lasts until combat ends.'},
    {name:'Derge Endurance',types:['Lineage','Derge','Bloody Resilience'],description:'Gain +1 endurance.'},
    {name:'Terrified Immunity',types:['Lineage','Derge','Savage Resolve'],description:'You are immune to the terrified ailment.'},
    {name:'Hunter-Gatherer',types:['Lineage','Derge','Clan Provider'],description:'Your travel group gains +6 provision socre.'},
    {name:'Dangerous Crafts',types:['Lineage','Derge','Brutal Crafting'],description:'When you create a weapon, you may halve the cost required to create the item.'},
    {name:'Intimidating',types:['Lineage','Derge','Imposing Presence'],description:'When you attempt to intimidate another character of a tier less than your own, you always succeed (as long as that character is capable of being intimidated).'},
    {name:'Wild Presence',types:['Lineage','Derge','Primal Stature'],description:'Girt, Hjark, Ingra, Marr, and Selk who are neutral towards you will avoid your presence.'},
    {name:'Trekker',types:['Lineage','Derge','Wild Travels'],description:'Your travel group may ignore the effects of difficult 1 tiles.'},

    //Hjark Traits
    {name:'Cold Resistance',types:['Lineage','Hjark','Chilled Veins'],description:'You are immune to the effects of freezing travel tiles.'},
    {name:'Resistance Reduction Immunity',types:['Lineage','Hjark','Winterhide'],description:'You are immune to attribute ailments that reduce your resistance.'},
    {name:'Steady Footing',types:['Lineage','Hjark','Highlander'],description:'Characters cannot gain a height advantage against you. Ignore effects of precarious tiles.'},
    {name:'Meticulous Crafts',types:['Lineage','Hjark','Family Business'],description:'You can create weapons and armor 1 tier higher than you normally could, paying 1.5 times the cost for that tier.'},
    {name:'Self-Reliant',types:['Lineage','Hjark','Needless'],description:'Your provision requirement is 0.'},
    {name:'Jolly',types:['Lineage','Hjark','Warmth of Winter'],description:'People will almost always converse with you at gatherings.'},
    {name:'Alcohol Resistance',types:['Lineage','Hjark','Cast-Iron Kidneys'],description:'You never pass out from alcohol consumption. You can still die from acute alcohol poisoning, but at twice the blood-alcohol content as a normal person of your height and weight.'},
    {name:'Craftsperson Friendliness',types:['Lineage','Hjark','Craftsperson Comradery'],description:'Craftspeople default to being friendly with you rather than being neutral towards you.'},

    //Ingra Traits
    {name:'Failure Aversion',types:['Lineage','Ingra','Self-Actualization'],description:'When you fail a non-attack contest, reduce your energy by 2 + your tier, and gain +1 to your next non-attack contest. This boon persists and stacks until you succeed a non-attack contest.'},
    {name:'Glass',types:['Lineage','Ingra','Glassheart'],description:'You are immune to the winded status. Your death resistance is set to 1.'},
    {name:'Steady Psyche',types:['Lineage','Ingra','Will of Stone'],description:'Whenever you suffer an ailment, gain +1 defence and +1 resistance. These attribute boons remain on you as long as the triggering ailment does.'},
    {name:'Lethality Reduction Immunity',types:['Lineage','Ingra','Honed Edge'],description:'You are immune to lethality reduction statuses.'},
    {name:'Immutable Provisions',types:['Lineage','Ingra','Fruits of the Desert'],description:'Your travel group may ignore the effects of barren tiles.'},
    {name:'Skilled Artist',types:['Lineage','Ingra','Precious Crafts'],description:'You can create art objects of 1 tier higher than you normally oculd, spending twice as long to create the art object than you normally would.'},
    {name:'Perception',types:['Lineage','Ingra','Silver Eyes'],description:'You can see twice as far as others, and can perceive hiddne items as long as they are at least partially visible.'},
    {name:'Tireless',types:['Lineage','Ingra','Tireless Sentinel'],description:'You only start incurring penalties due to lack of rest after 48 hours rather than 24 hours. After this, you incur repeating penalities as normal.'},
    {name:'Resourceful Enchanting',types:['Lineage','Ingra','Runeweaver'],description:'When you apply an enchantment to an accessory, you may halve the cost required to apply the enchantment.'},
    
    //Marr Traits
    {name:'Adapt',types:['Lineage','Marr','Adaptive Form'],description:'If you spend 1 season in a specific region or city, you are able to mimic the dialect, mannerisms, and other norms to the point of being able to be mistaken for a native of the region or city. If you are away from a region you have adapted to for more than 1 season, you lose the adaptation.'},
    {name:'Quiet Movement',types:['Lineage','Marr','Unassuming Demeanor'],description:'Enemies cannot use reaction abilities at any point during your move phase.'},
    {name:'Opportunity',types:['Lineage','Marr','Simple Opportunist'],description:'Gain +3 lethality in attacks that target a character with the winded status.'},
    {name:'Combat Adaptation',types:['Lineage','Marr','Unnatural Adaptation'],description:'At the beginning of every even round (up to and including round 10), gain your choice of +1 lethality, +1 force, +1 defence, or +1 resistance.'},
    {name:'Unassuming',types:['Lineage','Marr','Plain'],description:'Others will not suspect you of anything without direct evidence.'},
    {name:'Simple Crafts',types:['Lineage','Marr','Simple Means'],description:'You can only create items that are 1 tier lower than what you would usually be able to create. All items you create cost half as much as they normally would.'},
    {name:'Masterpiece',types:['Lineage','Marr','Flash of Brilliance'],description:'Every time you create weapons, armor sets, or art, there is a 1 in 100 chance of the result being a tier 10 item. Every time you create an art object, there is a 1 in 100 chance of the result being 100 times more valuable. This trait’s effects can only occur once per character, and the chance can only occur once per week (requiring a full 7 days between attempts). If any effect occurs, remove this trait from the character.'},
    {name:'Blissful Wanderer',types:['Lineage','Marr','Wanderlust'],description:'If your travel group could move to a tile adjacent to a point of interest tile, your travel group may instead move to the point of interest tile.'},
    {name:'Quiet Downtime',types:['Lineage','Marr','Comfortable and Quiet'],description:'Nothing will actively interrupt your downtime as long as it is not spent with other characters who do not have this trait.'},
    
    //Selk Traits
    {name:'Deliberation',types:['Lineage','Selk','Expanded Mind'],description:'You know if the characteristic contest target score for any static obstacles requiring a mental characteristic contest is possible for you to achieve in your current state.'},
    {name:'Selk Death Resistance',types:['Lineage','Selk','Fated Longevity'],description:'Gain +4 death resistance.'},
    {name:'First Impressions',types:['Lineage','Selk','Grandiosity'],description:'Regardless of your actual physical appearance, those that don\'t know you assume you are of noble status.'},
    {name:'Keen Mind',types:['Lineage','Selk','Bright Minded'],description:'You can create gear of 1 tier higher than you normally could, paying 1.5 times the cost for that tier.'},
    {name:'Social Intelligence',types:['Lineage','Selk','Natural Socialite'],description:'After you partake in a contest with another character, you learn their characteristic score for the characteristic used in that contest.'},
    {name:'Advanced Enchanting',types:['Lineage','Selk','Arcane Tinkering'],description:'You can apply enchantmnets of 1 tier higher than you normally could, paying 1.5 times the cost for that tier.'},   
    {name:'Quick Learner',types:['Lineage','Selk','Multitalented'],description:'It only takes you 6 weeks to learn a new profession or improve a learned profession.'},
    
    //Vyld Traits
    {name: 'Recognizable', types: ['Lineage','Unfamiliar Form','Vyld'], description: 'Unless completely covered, you stand out in town and cities and are recognizable as Vyld. Common people oftenreact to your presence in exaggerated ways.'},
    {name:'Vyld Lethality',types:['Lineage','Vyld','Masterful Motion'],description:'Gain +1 lethality.'},
    {name:'Natural Armor',types:['Lineage','Vyld','Bone Plating'],description:'While not wearing armor, you gain +2 defence and +1 resistance. You gain an additional +1 defence for every character tier above 0.'},
    {name:'Vyld Darksight',types:['Lineage','Vyld','Adapted Eyes'],description:'You gain darksight.'},
    {name:'Mutant',types:['Lineage','Vyld','Spontaneous Mutations'],description:'You can be affected by an additional transformation.'},
    {name:'Forced Survival',types:['Lineage','Vyld','Ancestral Instinct'],description:'Your travel group gains + 10 provisions when travelling into, travelling out of, or resting in dangerous tiles.'},
    {name:'Ocular Pat-down',types:['Lineage','Vyld','Functional Paranoia'],description:'You are aware of all of the weapons on characters within 15 ft. of you, including natural weapons.'},
    {name:'Threat Judgement',types:['Lineage','Vyld','Warrior Culture'],description:'You know the tier of all characters you interact with.'},
    {name:'Beast Bond',types:['Lineage','Vyld','Natural Aspects'],description:'You are able to more easily befriend beats, and can communicate with them to a limited degree.'},
    {name:'Warrior Impressions',types:['Lineage','Vyld','Path of the Warrior'],description:'Regardless of your actual physical appearance, those that don\'t know you assume you are a capable warrior.'},
    
    //Charactertistic Traits

    //Physical Power Traits
    {name:'Weight Threshold',types:['Characteristic','Meek Form','Physical Power'],description:'Your base weight threshold is 50 lb. Your total weight threshold is your base threshold multiplied by your Physical Power score.'},
    {name:'Strength',types:['Characteristic','Physical Training','Physical Power'],description:'Gain +2 lethality and +2 force.'},
    {name:'Improved Strength',types:['Characteristic','Powerful Build','Physical Power'],description:'Gain +2 lethality and +2 force. Gain lethality and force equal to half of your tier (rounded down, minimum 1).'},
    {name:'Improved Weight Threshold',types:['Characteristic','Perfect Form','Physical Power'],description:'Increase your base threshold by 25 lb.'},
    
    //Physical Acuity Traits
    {name:'Basic Movement',types:['Characteristic','Physical Acuity','Simple Agility'],description:'You have a base movment of 5.'},
    {name:'Movement',types:['Characteristic','Physical Acuity','Quick Feet'],description:'Gain +1 movement.'},
    {name:'Improved Movement',types:['Characteristic','Physical Acuity','Improved Dexterity'],description:'Gain +1 movement.'},
    
    //Physical Resilience Traits
    {name:'Basic Defence',types:['Characteristic','Physical Resilience','Thin Skin'],description:'You have a base defence of 7.'},
    {name:'Basic Energy',types:['Characteristic','Physical Resilience','Thin Skin'],description:'You have a base energy of 28.'},
    {name:'Hardiness',types:['Characteristic','Physical Resilience','Natural Defence'],description:'Gain +2 defence and +2 resistance.'},
    {name:'Improve Hardiness',types:['Characteristic','Physical Resilience','Reinforced Body'],description:'Gain +2 defence and +2 resistance. Gain defence and resistance equal to half of your tier (rounded down, minimum 1).'},

    //Mental Power Traits
    {name:'Basic Focus',types:['Characteristic','Mental Power','Basic Cognition'],description:'You have 1 base focus slot.'},
    {name:'Inherent Languages',types:['Characteristic','Mental Power','Basic Cognition'],description:'You know the language of your dominant lineage(s) and the language of your home nation, if you have a hom nation with its own language.'},
    {name:'Focus',types:['Characteristic','Mental Power','Deduction'],description:'Gain +1 focus slots.'},
    {name:'Improved Focus',types:['Characteristic','Mental Power','Expanded Mind'],description:'Gain +1 focus slots.'},
    
    //Mental Acuity Traits
    {name:'Speed',types:['Characteristic','Mental Acuity','Instincts'],description:'Gain +2 combat speed.'},
    {name:'Improved Speed',types:['Characteristic','Mental Acuity','Razor Instincts'],description:'Gain +2 combat speed.'},
    {name:'Relaxed',types:['Characteristic','Mental Acuity','Perfect Wit'],description:'Permanently gain the relaxed 1 boon. If you are tier 6 or higher, gain the relaxed 2 boon instead.'},
    
    //Mental Resistance
    {name:'Basic Death Resistance',types:['Characteristic','Mental Resilience','Fragile Will'],description:'You have a base death resistance of 3.'},
    {name:'Basic Endurance',types:['Characteristic','Mental Resilience','Fragile Will'],description:'You have a base endurance of 1.'},
    {name:'Conditioning',types:['Characteristic','Mental Resilience','Mental Fortitude'],description:'Gain +12 energy and +1 death resistance.'},
    {name:'Improved Conditioning',types:['Characteristic','Mental Resilience','Tested Psyche'],description:'Gain +12 energy and +1 death resistance. Gain energy equal to threee times your tier.'},
    {name:'Improved Endurance',types:['Characteristic','Mental Resilience','Perfect Will'],description:'Gain +1 endurance.'},
    
]