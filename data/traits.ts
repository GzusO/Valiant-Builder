import { Trait } from "src/app/Trait";

export const traitData: Trait[] = [
    //Profession Traits
    {name: 'Art Object Crafting', types: ['Profession','Artist'], description: 'You can create art objects.',tier:0},
    {name: 'Artist Funds', types: ['Profession', 'Artist'], description: 'You start with 1,000 tins.',tier:0},
    {name: 'Weapon and Armor Crafting', types: ['Profession', 'Blacksmith'], description: 'You can create weapons and armors.',tier:0},
    {name: 'Blacksmith Funds', types: ['Profession', 'Blacksmith'], description: 'You start with 1,000 tins.',tier:0},
    {name: 'Gear Crafting', types: ['Profession', 'Tinkerer'], description: 'You can create gear.',tier:0},
    {name: 'Tinkerer Funds', types: ['Profession', 'Tinkerer'], description: 'You start with 1,000 tins.',tier:0},
    {name: 'Salesperson', types: ['Profession','Merchant'], description: 'You can reliably sell items to any character that can afford them, instead of just merchants.',tier:0},
    {name: 'Merchant Funds', types: ['Profession','Merchant'], description: 'You start with 1,500 tins.',tier:0},
    {name: 'Noble Air', types: ['Profession','Noble'], description: 'Your status allows you into exclusive areas and events.',tier:0},
    {name: 'Noble Funds', types: ['Profession','Noble'], description: 'You start with 2,000 tins.',tier:0},
    {name: 'Natural Explorer', types: ['Profession','Traveler'], description: 'Your travel groups gain a +1 to their range and a +3 to their provision score.',tier:0},
    {name: 'Traveler Funds', types: ['Profession','Traveler'], description: 'You start with 750 tins.',tier:0},
    {name: 'Peacekeeper', types: ['Profession','Guard'], description: 'You are always welcomed into neutral towns or cities.',tier:0},
    {name: 'Guard Funds', types: ['Profession','Guard'], description: 'You start with 750 tins.',tier:0},
    {name: 'Discipline', types: ['Profession','Soldier'], description: 'You gain a +1 to all resilience contests.',tier:0},
    {name: 'Soldier Funds', types: ['Profession','Soldier'], description: 'You start with 1,000 tins.',tier:0},
    {name: 'Tracking', types: ['Profession','Bounty Hunter'], description: 'You can pick up any creature\'s trail as long as the trail is less than 5 days old.',tier:0},
    {name: 'Bounty Hunter Funds', types: ['Profession','Bounty Hunter'], description: 'You start with 1,500 tins.',tier:0},
    {name: 'Tempered Body', types: ['Profession','Physical Laborer'], description: 'Gain +2 energy.',tier:0},
    {name: 'Physical Laborer Funds', types: ['Profession','Physical Laborer'], description: 'You start with 750 tins.',tier:0},
    {name: 'Submissive Demeanor', types: ['Profession','Servant'], description: 'Characters that don\'t know you will always dismiss you as unthreatening.',tier:0},
    {name: 'Servant Funds', types: ['Profession','Servant'], description: 'You start with 750 tins.',tier:0},
    {name: 'Thrifty',types:['Profession','Assistant'],description:'You may purchase general items for half of their cost.',tier:0},
    {name: 'Assistant Funds', types: ['Profession','Assistant'], description: 'You start with 750 tins.',tier:0},
    {name: 'Educated', types: ['Profession','Scholar'], description: 'You are able to speak two additional languages.',tier:0},
    {name: 'Scholar Funds', types: ['Profession','Scholar'], description: 'You start with 1,000 tins.',tier:0},
    {name: 'Open Arms', types: ['Profession','Priest'], description: 'You and any characters allied with you are able to find sanctuary in any temple belonging to your religion, given you are not a known enemy of the temple.',tier:0},
    {name: 'Priest Funds', types: ['Profession','Priest'], description: 'You start with 1,000 tins.',tier:0},
    {name: 'Disease Cure', types: ['Profession','Physician'], description: 'You are able to cure diseases. It costs you half of the usual cost to procure the treatments and cure the disease (given the reagents are available). To cure a disease, you must spend a number of days equal to 1 plus the disease\'s tier with the patient.',tier:0},
    {name: 'Physician Funds', types: ['Profession','Physician'], description: 'You start with 1,500 tins.',tier:0},
    {name: 'Criminal Funds', types: ['Profession','Criminal'], description: 'You start with 1,000 tins.',tier:0},
    
    //Lineage Traits
    
    //Cossim Traits
    {name: 'Glow',types:['Lineage','Cosmic Patterns','Cossim'], description: 'Characters can see you even while you are in an unlit area. This prevents characters from being conditionally blind to you in most cases. This effect can be negated by covering all of your exposed skin.',tier:0},
    {name: 'Unique Markings',types:['Lineage','Cosmic Patterns','Cossim'],description:'Under close inspection, you are always uniquely identifiable as yourself. If you were able to discern the meaning of the patterns, you could surely learn something wondrous.',tier:0},
    {name:'Inspired',types:['Lineage','Cossim','Cosmic Inspiration'],description:'Whenever you create an art object, there is a 1 in 6 chance of it being 1 tier higher than what it would\'ve been.',tier:0},
    {name:'Cosmic Designs',types:['Lineage','Cossim','Patience of Eons'],description:'Any plan or strategy you design cannot be found out by any other characters unless they are told directly or have this trait.',tier:0},
    {name:'Bounding Vagrant',types:['Lineage','Cossim','Solitary Wanderer'],description:'When you are in a travel group with no other characters, your travel group gains +2 range and +3 provision score.',tier:0},
    {name:'Natural Telepathy',types:['Lineage','Cossim','Cosmic Connections'],description:'You can communicate via telepathy to any character within 10 ft. of you. If you are granted telepathy by another trait or ability, increase that telepathy\'s range by 10 ft.',tier:0},
    {name:'Characteristic Sensing',types:['Lineage','Cossim','Strange Sense'],description:'When you gain this trait, select one characteristic. Whenever you are within 10 ft. of a character, you know their characteristic score for that characteristic.',tier:0},

    //Girt Traits
    {name:'Diminutive',types:['Lineage','Girt','Skin and Bones'],description:'You require 1 less provision score when travelling. You are unable to intimidate other characters, even with the use of other traits or abilities, unless they are at least 3 tiers below your tier.',tier:0},
    {name:'Resourceful',types:['Lineage','Girt','Master of Thrift'],description:'Your gear and projectile weapons limited abilities have their limited value increased by 1.',tier:0},
    {name:'Movement Reduction Immunity',types:['Lineage','Girt','Aspect of the Sands'],description:'You are immune to attribute ailments that reduce your movement.',tier:0},
    {name:'Gear Maintenance',types:['Lineage','Girt','Staunch Maintainer'],description:'You can prepare an additional gear item whenever you prepare gear.',tier:0},
    {name:'Bejeweled',types:['Lineage','Girt','Decorated Figure'],description:'You can wear on additional accessory.',tier:0},
    {name:'Weight Distribution',types:['Lineage','Girt','Careful Packing'],description:'Your base weight threshold is increased by 10 lb.',tier:0},
    {name:'Caravan',types:['Lineage','Girt','Skillful Navigator'],description:'Your travel group gains +1 range and +3 provision score.',tier:0},
    {name:'Merchant Friendliness',types:['Lineage','Girt','Silver Tongue'],description:'Merchants default to being friendly with you rather than being neutral towards you.',tier:0},
    {name:'Language Expert',types:['Lineage','Girt','Well-Traveled'],description:'You learn an additional language.',tier:0},
    
    //Derge Traits
    {name:'Derge Metabolism',types:['Lineage','Derge','Savage Physique'],description:'You require 1 more provision score when in a travel group. When you rest, recover additional energy equal to 4 + twice your tier.',tier:0},
    {name:'Bloody Slaughter',types:['Lineage','Derge','Violent Soul'],description:'Gain +2 lethality and +2 force whenever you reduce a character\'s endurance. This boon lasts until combat ends.',tier:0},
    {name:'Derge Endurance',types:['Lineage','Derge','Bloody Resilience'],description:'Gain +1 endurance.',tier:0},
    {name:'Terrified Immunity',types:['Lineage','Derge','Savage Resolve'],description:'You are immune to the terrified ailment.',tier:0},
    {name:'Hunter-Gatherer',types:['Lineage','Derge','Clan Provider'],description:'Your travel group gains +6 provision socre.',tier:0},
    {name:'Dangerous Crafts',types:['Lineage','Derge','Brutal Crafting'],description:'When you create a weapon, you may halve the cost required to create the item.',tier:0},
    {name:'Intimidating',types:['Lineage','Derge','Imposing Presence'],description:'When you attempt to intimidate another character of a tier less than your own, you always succeed (as long as that character is capable of being intimidated).',tier:0},
    {name:'Wild Presence',types:['Lineage','Derge','Primal Stature'],description:'Girt, Hjark, Ingra, Marr, and Selk who are neutral towards you will avoid your presence.',tier:0},
    {name:'Trekker',types:['Lineage','Derge','Wild Travels'],description:'Your travel group may ignore the effects of difficult 1 tiles.',tier:0},

    //Hjark Traits
    {name:'Cold Resistance',types:['Lineage','Hjark','Chilled Veins'],description:'You are immune to the effects of freezing travel tiles.',tier:0},
    {name:'Resistance Reduction Immunity',types:['Lineage','Hjark','Winterhide'],description:'You are immune to attribute ailments that reduce your resistance.',tier:0},
    {name:'Steady Footing',types:['Lineage','Hjark','Highlander'],description:'Characters that target you with attacks do not gain height advantage bonuses on those attacks. Ignore the effects of precarious tiles.',tier:0},
    {name:'Climbing',types:['Lineage','Hjark','Highlander'],description:'You may climb one tile per movement, rather than spending two points of movement per tile climbed.',tier:0},
    
    {name:'Meticulous Crafts',types:['Lineage','Hjark','Family Business'],description:'You can create weapons and armor 1 tier higher than you normally could, paying 1.5 times the cost for that tier.',tier:0},
    {name:'Self-Reliant',types:['Lineage','Hjark','Needless'],description:'Your provision requirement is 0.',tier:0},
    {name:'Jolly',types:['Lineage','Hjark','Warmth of Winter'],description:'People will almost always converse with you at gatherings.',tier:0},
    {name:'Alcohol Resistance',types:['Lineage','Hjark','Cast-Iron Kidneys'],description:'You never pass out from alcohol consumption. You can still die from acute alcohol poisoning, but at twice the blood-alcohol content as a normal person of your height and weight.',tier:0},
    {name:'Craftsperson Friendliness',types:['Lineage','Hjark','Craftsperson Comradery'],description:'Craftspeople default to being friendly with you rather than being neutral towards you.',tier:0},

    //Ingra Traits
    {name:'Failure Aversion',types:['Lineage','Ingra','Self-Actualization'],description:'When you fail a non-attack contest, reduce your energy by 2 + your tier, and gain +1 to your next non-attack contest. This boon persists and stacks until you succeed a non-attack contest.',tier:0},
    {name:'Glass',types:['Lineage','Ingra','Glassheart'],description:'You are immune to the winded status. Your death resistance is set to 1.',tier:0},
    {name:'Steady Psyche',types:['Lineage','Ingra','Will of Stone'],description:'Whenever you suffer an ailment, gain +1 defence and +1 resistance. These attribute boons remain on you as long as the triggering ailment does.',tier:0},
    {name:'Lethality Reduction Immunity',types:['Lineage','Ingra','Honed Edge'],description:'You are immune to lethality reduction statuses.',tier:0},
    {name:'Immutable Provisions',types:['Lineage','Ingra','Fruits of the Desert'],description:'Your travel group may ignore the effects of barren tiles.',tier:0},
    {name:'Skilled Artist',types:['Lineage','Ingra','Precious Crafts'],description:'You can create art objects of 1 tier higher than you normally oculd, spending twice as long to create the art object than you normally would.',tier:0},
    {name:'Perception',types:['Lineage','Ingra','Silver Eyes'],description:'You can see twice as far as others, and can perceive hiddne items as long as they are at least partially visible.',tier:0},
    {name:'Tireless',types:['Lineage','Ingra','Tireless Sentinel'],description:'You only start incurring penalties due to lack of rest after 48 hours rather than 24 hours. After this, you incur repeating penalities as normal.',tier:0},
    {name:'Resourceful Enchanting',types:['Lineage','Ingra','Runeweaver'],description:'When you apply an enchantment to an accessory, you may halve the cost required to apply the enchantment.',tier:0},
    
    //Marr Traits
    {name:'Adapt',types:['Lineage','Marr','Adaptive Form'],description:'If you spend 1 season in a specific region or city, you are able to mimic the dialect, mannerisms, and other norms to the point of being able to be mistaken for a native of the region or city. If you are away from a region you have adapted to for more than 1 season, you lose the adaptation.',tier:0},
    {name:'Quiet Movement',types:['Lineage','Marr','Unassuming Demeanor'],description:'Enemies cannot use reaction abilities at any point during your move phase.',tier:0},
    {name:'Opportunity',types:['Lineage','Marr','Simple Opportunist'],description:'Gain +4 to the total roll of your attack contests that target characters with the winded status.',tier:0},
    {name:'Combat Adaptation',types:['Lineage','Marr','Unnatural Adaptation'],description:'At the beginning of every even round (up to and including round 10), gain your choice of +1 lethality, +1 force, +1 defence, or +1 resistance.',tier:0},
    {name:'Unassuming',types:['Lineage','Marr','Plain'],description:'Others will not suspect you of anything without direct evidence.',tier:0},
    {name:'Simple Crafts',types:['Lineage','Marr','Simple Means'],description:'You can only create items that are 1 tier lower than what you would usually be able to create. All items you create cost half as much as they normally would.',tier:0},
    {name:'Masterpiece',types:['Lineage','Marr','Flash of Brilliance'],description:'Every time you create weapons, armor sets, or art, there is a 1 in 100 chance of the result being a tier 10 item. Every time you create an art object, there is a 1 in 100 chance of the result being 100 times more valuable. This trait’s effects can only occur once per character, and the chance can only occur once per week (requiring a full 7 days between attempts). If any effect occurs, remove this trait from the character.',tier:0},
    {name:'Blissful Wanderer',types:['Lineage','Marr','Wanderlust'],description:'If your travel group could move to a tile adjacent to a point of interest tile, your travel group may instead move to the point of interest tile.',tier:0},
    {name:'Quiet Downtime',types:['Lineage','Marr','Comfortable and Quiet'],description:'Nothing will actively interrupt your downtime as long as it is not spent with other characters who do not have this trait.',tier:0},
    
    //Selk Traits
    {name:'Deliberation',types:['Lineage','Selk','Exceptional Mind'],description:'You know if the characteristic contest target score for any static obstacles requiring a mental characteristic contest is possible for you to achieve in your current state.',tier:0},
    {name:'Selk Death Resistance',types:['Lineage','Selk','Fated Longevity'],description:'Gain +4 death resistance.',tier:0},
    {name:'First Impressions',types:['Lineage','Selk','Grandiosity'],description:'Regardless of your actual physical appearance, those that don\'t know you assume you are of noble status.',tier:0},
    {name:'Keen Mind',types:['Lineage','Selk','Bright Minded'],description:'You can create gear of 1 tier higher than you normally could, paying 1.5 times the cost for that tier.',tier:0},
    {name:'Social Intelligence',types:['Lineage','Selk','Natural Socialite'],description:'After you partake in a contest with another character, you learn their characteristic score for the characteristic used in that contest.',tier:0},
    {name:'Advanced Enchanting',types:['Lineage','Selk','Arcane Tinkering'],description:'You can apply enchantmnets of 1 tier higher than you normally could, paying 1.5 times the cost for that tier.',tier:0},   
    {name:'Quick Learner',types:['Lineage','Selk','Multitalented'],description:'It only takes you 6 weeks to learn a new profession or improve a learned profession.',tier:0},
    
    //Vyld Traits
    {name: 'Recognizable', types: ['Lineage','Unfamiliar Form','Vyld'], description: 'Unless completely covered, you stand out in town and cities and are recognizable as Vyld. Common people oftenreact to your presence in exaggerated ways.',tier:0},
    {name:'Vyld Lethality',types:['Lineage','Vyld','Masterful Motion'],description:'Gain +1 lethality.',tier:0},
    {name:'Natural Armor',types:['Lineage','Vyld','Bone Plating'],description:'While not wearing armor sets, you gain +3 defence and +1 resistance. You gain an additional +2 defence for every character tier above 0.',tier:0},
    {name:'Vyld Darksight',types:['Lineage','Vyld','Adapted Eyes'],description:'You gain darksight.',tier:0},
    {name:'Mutant',types:['Lineage','Vyld','Spontaneous Mutations'],description:'You may have an additional active transformation.',tier:0},
    {name:'Forced Survival',types:['Lineage','Vyld','Ancestral Instinct'],description:'Your travel group gains + 10 provisions when travelling into, travelling out of, or resting in dangerous tiles.',tier:0},
    {name:'Ocular Pat-down',types:['Lineage','Vyld','Functional Paranoia'],description:'You are aware of all of the weapons on characters within 15 ft. of you, including natural weapons.',tier:0},
    {name:'Threat Judgement',types:['Lineage','Vyld','Warrior Culture'],description:'You know the tier of all characters you interact with.',tier:0},
    {name:'Beast Bond',types:['Lineage','Vyld','Natural Aspects'],description:'You are able to more easily befriend beats, and can communicate with them to a limited degree.',tier:0},
    {name:'Warrior Impressions',types:['Lineage','Vyld','Path of the Warrior'],description:'Regardless of your actual physical appearance, those that don\'t know you assume you are a capable warrior.',tier:0},
    
    //Charactertistic Traits

    //Physical Power Traits
    {name:'Weight Threshold',types:['Characteristic','Meek Form','Physical Power'],description:'Your base weight threshold is 75 lb. Your total weight threshold is your base threshold multiplied by your Physical Power score.',tier:0},
    {name:'Battle Bully',types:['Characteristic','Phyiscal Power','Physical Training'],description:'When you use the Shove ability, increase the distance your target is pushed by 1 tile. When you use the Grab ability, increase the focus threshold of the ability by 8.',tier:0},
    {name:'Strength',types:['Characteristic','Athletic Form','Physical Power'],description:'When you gain this trait, choose one of the following bonuses: - Gain +2 Lethality and +2 Force. - Gain +3 Lethality and +1 Force. - Gain +1 Lethality and +3 Force.',tier:0},
    {name:'Improved Strength',types:['Characteristic','Perfect Form','Physical Power'],description:'When you gain this trait, choose one of the following bonuses: - Gain +2 Lethality and +2 Force. - Gain +3 Lethality and +1 Force. - Gain +1 Lethality and +3 Force',tier:0},


    //Physical Acuity Traits
    {name:'Basic Movement',types:['Characteristic','Physical Acuity','Simple Agility'],description:'You have a base movment of 5.',tier:0},
    {name:'Movement',types:['Characteristic','Physical Acuity','Honed Agility'],description:'Gain +1 movement.',tier:0},
    {name:'Improved Movement',types:['Characteristic','Physical Acuity','Absolute Agility'],description:'Gain +1 movement.',tier:0},
    
    //Physical Resilience Traits
    {name:'Basic Defence',types:['Characteristic','Physical Resilience','Thin Skin'],description:'You have a base defence of 7.',tier:0},
    {name:'Basic Energy',types:['Characteristic','Physical Resilience','Thin Skin'],description:'You have a base energy of 28.',tier:0},
    {name:'Hardiness',types:['Characteristic','Physical Resilience','Thick Skin'],description:'When you gian this trait, choose one of the following bonuses: - Gain +2 Defence and +2 Resistance. - Gain +3 Defence and +1 Resistance. - Gain +1 Defence and +3 Resistance.',tier:0},
    {name:'Improved Hardiness',types:['Characteristic','Physical Resilience','Stone Skin'],description:'When you gian this trait, choose one of the following bonuses: - Gain +2 Defence and +2 Resistance. - Gain +3 Defence and +1 Resistance. - Gain +1 Defence and +3 Resistance.',tier:0},

    //Mental Power Traits
    {name:'Basic Focus',types:['Characteristic','Mental Power','Basic Cognition'],description:'You have 1 base focus slot.',tier:0},
    {name:'Inherent Languages',types:['Characteristic','Mental Power','Basic Cognition'],description:'You know the language of your dominant lineage(s) and the language of your home nation, if you have a hom nation with its own language.',tier:0},
    {name:'Focus',types:['Characteristic','Mental Power','Advanced Cognition'],description:'Gain +1 focus slots.',tier:0},
    {name:'Improved Focus',types:['Characteristic','Mental Power','Ascended Cognition'],description:'Gain +1 focus slots.',tier:0},
    
    //Mental Acuity Traits
    {name:'Speed',types:['Characteristic','Mental Acuity','Advanced Wit'],description:'Gain +1 Finesse',tier:0},
    {name:'Unfaltering',types:['Characteristic','Mental Acuity','Razor Instincts'],description:'Your Finesse cannot be reduced below 0.',tier:0},
    {name:'Improved Speed',types:['Characteristic','Mental Acuity','Perfect Wit'],description:'Gain +1 Finesse',tier:0},

    //Mental Resistance
    {name:'Basic Death Resistance',types:['Characteristic','Mental Resilience','Fragile Will'],description:'You have a base death resistance of 3.',tier:0},
    {name:'Basic Endurance',types:['Characteristic','Mental Resilience','Fragile Will'],description:'You have a base endurance of 1.',tier:0},
    {name:'Conditioning',types:['Characteristic','Mental Resilience','Iron Will'],description:'Gain +12 energy and +1 death resistance.',tier:0},
    {name:'Improved Conditioning',types:['Characteristic','Mental Resilience','Perfect Will'],description:'Gain +12 energy and +1 death resistance.',tier:0},

    //Class Tratis

    //Aspirant Traits
    {name:'Beginner\'s Repertoire',types:['Class','Aspirant','Arcane Basics'],description:'When you gain this trait, select any tier 1 ability from the Arcanist Repertoire pool and gain access to that ability. If you gain a repertoire by investing into the Arcanist class path, add this ability to your repertoire. See the Arcanist global feature for more information.',tier:0},
    {name:'Beginner\'s Techniques',types:['Class','Aspirant','Warfare Basics'],description:'When you gain this trait, select any tier 1 ability from the Warrior Techniques pool and gain access to that ability. If you gain access to additional techniques by investing into the Warrior class path, keep this technique and increase your Warrior Technique slots by 1 (using the additional slot for your known technique). See the Warrior global feature for more information.',tier:0},
    {name:'Beginner\'s Strategies',types:['Class','Aspirant','Tactical Basics'],description:'When you gain this trait, learn one tier 1 trait from the Specialist Strategies pool. You also gain access to the Strategy Application trait from the Specialist global feature that can be used to apply that strategy. If you gain access to additional strategies by investing into the Specialist class path, keep this strategy in your known Specialist Strategies pool. See the Specialist global feature for more information.',tier:0},
    {name:'Ascendant',types:['Class','Aspirant','Ascendant Bond'],description:'A small, sentient being (your Ascendant) capable of flight follows you, taking a form of your choosing. Your Ascendant is destroyed if it is more than 10 ft. away from you, if any attack ability targeting it resolves (it can be targeted by attack abilities as if it were a character), or if it is subjected to any environmental hazards. If your Ascendant is destroyed, it reforms in 1 hour. Your ascendant can manipulate objects no heavier than 5 lb.',tier:0},
    {name:'Ascendant Link',types:['Class','Aspirant','Ascendant Bond'],description:'You and your Ascendant can communicate telepathically. Due to your Ascendant\'s innate senses, you cannot be blind or conditionally blind to any characters within 10 ft. of you while your Ascendant is alive. Using and maintaining the effects of any of your Ascendant abilities requires your Ascendant to be alive.',tier:0},
    {name:'Marked Assault',types:['Class','Aspirant','Marked Prey'],description:'Attack modifier abilities appplied to attack abilities targeting only your marked character cost 0 energy.',tier:0},
    {name:'Marked Tracking',types:['Class','Aspirant','Marked Prey'],description:'You can always track your marked character given there are tracks to follow. You can identify a marked character as long as you can see them, even if they are disguised (excluding invisible characters).',tier:0},
    
    {name:'Thrill of Combat',types:['Class','Aspirant','Daring Flair'],description:'You gain +1 lethality and +1 defence for every enemy character that is adjacent to you.',tier:0},
    {name:'Lightened Loads',types:['Class','Aspirant','Light Traveler'],description:'Your tavel group gains +2 range.',tier:0},
    {name:'Simple Market Knowledge',types:['Class','Aspirant','Basic Economy'],description:'You always know if a trade you are making is not in your favor.',tier:0},
    {name:'Salesman',types:['Class','Aspirant','Basic Economy'],description:'When you sell items to merchants, you always get at least half of the Cost of the Item, granted the merchant is willing to buy that item and can afford it.',tier:0},
    {name:'Pleasantly Disarming',types:['Class','People Person','Aspirant'],description:'Characters won\'t be openly hostile towards without provocation.',tier:0},
    {name:'Slight of Mind',types:['Class','People Person','Aspirant'],description:'In any contests that uses your mental acuity, gain a +1 to your total.',tier:0},
    {name:'Able Frame',types:['Class','Pack Mule','Aspirant'],description:'Your base weight threshold is increased by 10 lb.',tier:0},
    {name:'Pocket Snacks',types:['Class','Pack Mule','Aspirant'],description:'Your travel group gains +1 provision score.',tier:0},
    
    //Warrior Traits
    {name:'Warrior Techniques',types:['Class','Warrior','Warriors'],description:'When you gain this trait, select any two tier 1 abilities from the Warrior Techniques pool and gain access to those abilities. Whenever you invest a tier into the Warrior class path beyond the first, you may replace one of your known techniques with another ability form the Warrior Techniques pool. You may only learn techniques with tiers equal to or less than your Warrior class path invested tier.',tier:0},
    {name:'Improved Techniques',types:['Class','Warrior','Warriors'],description:'At invested tiers 3, 6, 9, and 10, you gain an additional slot for Warrior Techniques. When you gain an additional slot at these tiers, you also learn a new technique alongside the optional technique replacement at every tier.',tier:0},
    {name:'Technique Retraining',types:['Class','Warrior','Warriors'],description:'You can retrain your Warrior Techniques by spending a week of downtime with no breaks or major interruptions. After this week concludes, the character may reselect all of their available Warrior Techniques from the Warrior Techniques abilities pool.',tier:0},
    {name:'Advantageous Attacks',types:['Class','Warrior','Martial Finesse'],description:'Gain +1 to the total roll of your attack contests that target enemies adjacent to one or more of your allies.',tier:1},
    {name:'Rage',types:['Class','Warrior','Adrenaline Rush'],description:'You gain +3 lethality and +3 force while you suffer the winded status.',tier:2},
    {name:'Heavy Armor Training',types:['Class','Warrior','Battle Conditioning'],description:'Ignore up to 1 points of Finesse reduction that come from your worn armor.',tier:2},
    {name:'Weapon Flurry',types:['Class','Warrior','Dual-Wielding'],description:'Gain +1 Lethality, +1 Force, and +2 Defence while wielding two one-handed, non-shield weapons.',tier:2},
    {name:'Gunslinger',types:['Class','Warrior','Dual-Wielding'],description:'Ignore the two-handed tag on short guns and arcane short guns.',tier:2},
    
    {name:'Force Buildup',types:['Class','Warrior','Trading Blows'],description:'Gain +1 force whenever you take energy damage. this boon lasts until combat ends.',tier:3},
    {name:'Deflecting',types:['Class','Warrior','Active Defenses'],description:'Any parry abilities you use can be triggered on any attack abilities, instead of just melee attack abilities. Additionally, all medium shields grant you cover from ranged attack abilities while wielded in at least one hand.',tier:4},
    {name:'Shielded Barrage',types:['Class','Warrior','Lancer'],description:'You may wield a shield while wielding a carbine, rifle, arcane carbine, or arcane rifle. Ignore the unwieldly tag on carbines, rifles, arcane carbines, or arcane rifles.',tier:5},
    
    {name:'Masterful Attacks',types:['Class','Warrior','Masterful Maneuvers'],description:'You may apply an additional attack modifier ability to your attack abilities.',tier:6},
    {name:'Additional Stance',types:['Class','Warrior','Masterful Stances'],description:'You may use an additional stance ability during the round begin phase.',tier:6},
    
    {name:'Eternal',types:['Class','Warrior','Eternal Body'],description:'If you would die, restore 1 endurance and permanently suffer -2 energy.',tier:10},
    
    {name:'Heavy Weapon Mastery',types:['Class','Warrior','Behemoth Momentum'],description:'Ignore the slow tag on attack abilities during your turn.',tier:9},
    
    {name:'Popular',types:['Class','Warrior','Local Notoriety'],description:'You are popular among commoners, who will always offer you respite or aid if they can.',tier:1},
    {name:'March',types:['Class','Warrior','Martial Discipline'],description:'You may treat your travel group as if it had one less character in it when calculating range.',tier:1},
    {name:'Weightless Armor',types:['Class','Warrior','Armor Training'],description:'You don\'t count the weight of your worn armor against your weight threshold.',tier:2},
    {name:'Excess Energy',types:['Class','Warrior','Lingering Adrenaline'],description:'Your travel group gains +3 range if you\'ve reduced another character\'s endurance during the same travelling day.',tier:2},
    {name:'Notable Dexterity',types:['Class','Warrior','Notably Quick'],description:'Increase all of your physical acuity contest results by 1.',tier:3},
    {name:'Notable Strength',types:['Class','Warrior','Notably Strong'],description:'Increase all of your physical power contest results by 1.',tier:3},
    {name:'Notable Toughness',types:['Class','Warrior','Notably Tough'],description:'Increase all of your physical resilience contest results by 1.',tier:3},
    {name:'Obstacle Familiarity',types:['Class','Warrior','Sized Up'],description:'You know the characteristic contest target score for any static obstacles requiring a physical characteristic contest.',tier:4},

    //Arcanist Traits
    {name:'Arcane Repertoire',types:['Class','Arcanist','Arcanists'],description:'When you gain this trait, select any two tier 1 abilities from the Arcanist Repertoire pool and gain access to those abilities. Whenever you invest a tier into the Arcanist class path beyond the first, you may learn another Arcanist Repertoire ability. You may only learn abilities with tiers equal to or less than your Arcanist class path invested tier.',tier:0},
    {name:'Improved Repertoire',types:['Class','Arcanist','Arcanists'],description:'At invested tiers 3, 6, 9, and 10, you may augment a single ability in your repertoire, permanently granting it one of the following bonuses (you may augment the same ability multiple times, with effects stacking): Reduce its energy cost by 1 (cannot reduce energy costs below 1). Increase its focus threshold by 3. When you use the ability, treat your character tier as one higher for ability scaling.',tier:0},
    {name:'Expanded Repertoire',types:['Class','Arcanist','Arcanists'],description:'You can learn new abilities from the Arcanist Repertoire pool, as long as their tier is equal to or less than your Arcanist class path invested tier. to add a new ability to your repertoire, the following requirements must be satistfied: you must spend a week of downtime per ability tier with no breaks or major interruptions. You must have uninterrupted access to a study amenity of a tier equal to or greater than the tier of the ability you are learning. You must spend 1,000t tins, where t is the ability tier, to gain access to the proper materials and facilities needed to learn the ability. After these conditions are satisfied, you gain access to the ability.',tier:0},
    {name:'Enchanter',types:['Class','Arcanist','Arcanists'],description:'You may apply and remove enchantments and craft arcane items.',tier:0},
    {name:'Energy Efficiency',types:['Class','Arcanist','Practiced Repertoire'],description:'Reduce the energy cost of your Arcanist Repertoire abilities by 1. This cannot reduce the cost of abilities below 1.',tier:1},
    {name:'Steadfast Focus',types:['Class','Arcanist','Steady Mind'],description:'Increase your focus thresholds by your Mental Resilience score.',tier:1},
    {name:'Hardened Focus',types:['Class','Arcanist','Steady Mind'],description:'You gain +1 resistance for each instance of focus you are maintaining.',tier:1},
    {name:'Arcane Medicine',types:['Class','Arcanist','Arcane Restoration'],description:'Whenever one of your effects restores a character\'s energy, that effect restores additional energy equal to your tier.',tier:2},
    {name:'Safe Recharging',types:['Class','Arcanist','Stable Recovery'],description:'While you suffer the Recharging status, gain defence and resistance equal to your tier.',tier:2},
    {name:'Arcane Shell',types:['Class','Arcanist','Arcane Armors'],description:'Gain Defence equal to your tier.',tier:2},
    
    {name:'Passive Focus',types:['Class','Arcanist','Hyperconscious'],description:'You do not lose focus when incapacitated.',tier:3},
    {name:'Experimenter',types:['Class','Arcanist','Practiced Experimentation'],description:'Change the base energy cost of the Arcane Experimentation ability to 0 and increase its limited value by 1.',tier:3},
    {name:'Telepathy',types:['Class','Arcanist','Telepathic Communication'],description:'You can communicate telepathically with any creature within 10 ft. of you. The range of this trait is multiplied by your mental power characteristic score.',tier:3},

    {name:'Remote Execution',types:['Class','Arcanist','Masterful Extensions'],description:'For all of your Range abilities not attached to weapons, you may treat a remote tile as the origin point for determining the ability range rather than the tile you inhabit. This remote tile can be any tile within a range equal to twice your mental power characteristic score.',tier:9},
    {name:'Sculpted Abilities',types:['Class','Arcanist','Arcane Sculpting'],description:'Increase the shape range of your abilities by 1. You may choose up to one targeted character to be immune to the effects of any of your shapes abilities.',tier:9},
    
    {name:'Arcane Mastery',types:['Class','Arcanist','Utter Mastery'],description:'Reduce the cost of all of your repertoire abilities by 1. This is applied after all other energy cost reductions and cannot reduce the cost of abilities below 0.',tier:10},
    
    //Specialist Traits
    {name:'Specialist Strategies',types:['Class','Specialist','Specialists'],description:'When you gain this trait, select two tier 1 traits from the Specialist Strategy pool. You do not normally have access to these traits (see Strategy Application). Whenever you invest a tier into the Specialist class path beyond the first, you may learn another Specialist Strategy trait. You may only learn traits with tiers equal to or less than your Specialist class path invested tier.',tier:0},
    {name:'Strategy Application',types:['Class','Specialist','Specialists'],description:'When combat begins, select one of your known Specialist Strategy traits. Gain the effects of that trait for the duration of the combat. A strategy can only be applied once during combat. If multiple Specialists apply the same strategy, only one has any effect.',tier:0},
    {name:'Improved Strategies',types:['Class','Specialist','Specialists'],description:'At invested tier 6, you may apply an additional known Specialist Strategy trait when combat begins.',tier:0},
    {name:'Stratagem Studies',types:['Class','Specialist','Specialists'],description:'You can acquire new Specialist Strategy traits, as long as thier tier is equal to or less than your Specialist class path invested tier. To add a new ability to your repertoire, the following requirements must be satistfied: You must spend a week of downtime per ability tier with no breaks or major interruptions. You must have uninterrupted access to at least one other cahracter or a study amenity of your tier or higher. You must spend 1000t tins, where t is the ability tier, to gain access to the proper materials needed to learn the ability. After these conditions are satisfied, you gain access to the ability.',tier:0},
    {name:'Embargo',types:['Class','Specialist','Specialists'],description:'When combat begins, you may select one character on another team. That character cannot be the first character to act for that team. If no characters on a team are able to go first, any characters on that team may go first.',tier:0},
    
    {name:'Preparedness',types:['Class','Specialist','Munition Resupply'],description:'Your consumable gears and projectile weapons gain +1 use.',tier:1},
    {name:'Unfaltering',types:['Class','Specialist','Unfaltering Will'],description:'You gain the unshakable boon.',tier:10},
    {name:'Supplies',types:['Class','Specialist','Quartermaster'],description:'Your travel group gains provision score equal to the number of characters in your travel group.',tier:1},
    {name:'Stable Travel Range',types:['Class','Specialist','Travel Planning'],description:'Your travel group gains +2 range. Your travel group\'s range cannot be reduced due to a negative total bonus.',tier:2},
    {name:'Organized',types:['Class','Specialist','Orderly Mind'],description:'You always know the date and time down to an hour of precision. You always know the chronological order of events you have experienced, even if you can\'t remember exact times.',tier:3},
    {name:'Soft Steps',types:['Class','Specialist','Quiet Sneak'],description:'You make no sound while moving.',tier:3},
    {name:'Social Insights',types:['Class','Specialist','Deep Insight'],description:'You know the relations between all of the characters that you know, given they have any.',tier:6},
    {name:'Ego-less',types:['Class','Specialist','Ego Death'],description:'You cannot target yourself with abilities you use, including Stances and Transformation. Any of your abilities that would target yourself may instead target any allied character you can see.',tier:9},
    
      
    {name:'Bastion Formation',types:['Class','Specialist','Strategies'],description:'You and all allied characters gain +2 defence and suffer -1 lethality.',tier:1},
    {name:'Blitz Formation',types:['Class','Specialist','Strategies'],description:'Your party acts first this combat.',tier:1},
    {name:'Spearhead Formation',types:['Class','Specialist','Strategies'],description:'you and all allied characters gain +2 lethality and suffer -1 defence.',tier:1},
    {name:'Stalwart Formation',types:['Class','Specialist','Strategies'],description:'You and your allies gain +2 death resistance. this effect increases any affected character\'s current death resistance by 2 when it is applied, and reduces the uses by 2 when it expires. This effect cannot reduce death resistance below 1.',tier:1},
    {name:'Brutal Aggressions',types:['Class','Specialist','Strategies'],description:'All enemy characters suffer -1 Finesse.',tier:2},
    {name:'Calm and Collected',types:['Class','Specialist','Strategies'],description:'You and all allied characters gain +1 Finesse.',tier:2},
    {name:'Combat Drills',types:['Class','Specialist','Strategies'],description:'You and all allied characters gain +1 movement.',tier:2},
    {name:'Munition Packing',types:['Class','Specialist','Strategies'],description:'You and your allies\' projectile weapons gain +2 uses. This effect increases any affected projectile weapon\'s current uses by 2 when it is applied, and reduces the current uses by 2 when it expires.',tier:2},
    {name:'Pre-Prepared Equipment',types:['Class','Specialist','Strategies'],description:'You and your allies\' gear items can be used once this combat without counting towards their Consumable values. This allows otherwise consumed gear to be used.',tier:2},
    {name:'Last Stand',types:['Class','Specialist','Strategies'],description:'Whenever you or an allied character is reduced to 0 endurance, you and your allied characters gain +2 lethality and +2 defence until combat ends.',tier:3},
    {name:'Reinforced Focus',types:['Class','Specialist','Strategies'],description:'You and all allied characters gain a bonus to their focus thresholds equal to half of their tier (rounded down).',tier:3},
    {name:'Reckless Abandon',types:['Class','Specialist','Strategies'],description:'All characters gain +3 lethality and +3 force.',tier:3},
    {name:'Rehearsed Autonomy',types:['Class','Specialist','Strategies'],description:'you an dall allied characters gain +1 focus slots.',tier:3},
    {name:'Stalling Tactics',types:['Class','Specialist','Strategies'],description:'All characters gain +3 defence and +3 resistance.',tier:3},
    {name:'Predictive Immunity',types:['Class','Specialist','Strategies'],description:'Select one non-attribute ailment when combat begins. You and your allies are immune to that ailment.',tier:4},
    {name:'The Long Game',types:['Class','Specialist','Strategies'],description:'You and your allies may use stance abilities as if they were transformation abilities, paying twice the ability\'s energy cost.',tier:4},
    
    //Weapon Traits
    {name:'Cover',types:['Weapon','Large Shield'],description:'You count as in cover against ranged attack abilities.',tier:0},

    //Armor Traits
    {name:'Light Armor',types:['Armor','Light'],description:'You gain +3 defence. Defence bonus increases by 2 for every armor tier above 0.',tier:0},
    {name:'Medium Armor',types:['Armor','Medium'],description:'you gain +5 defence and +1 resistance. You suffer -1 Finesse. Defence bonus increases by 3 for every armor tier above 0.',tier:0},
    {name:'Heavy Armor',types:['Armor','Heavy'],description:'You gain +7 defence and +2 resistance. You suffer -1 Finesse and -1 Movement. Defence bonus increases by 4 for every armor tier above 0.',tier:0},
    {name:'Ultra-Heavy Armor',types:['Armor','Ultra-Heavy'],description:'You gain +9 defence and +3 resistance. You suffer -2 Finesse and -2 Movement. Defence bonus increases by 5 for every armor tier above 0.',tier:0},
    
    //Accessory Traits
    //Tier 0
    {name:'Backpack',types:['Accessory','Backpack'],description:'Increase you base weight threshold by 10 lb. Your travel group gains +3 provision score.',tier:0},
    {name:'Munition Pouch',types:['Accessory','Munition Pouch'],description:'Your projectile weapons gain +1 use.',tier:0},
    {name:'Simple Charm',types:['Accessory','Simple Charm'],description:'You gain +1 death resistance.',tier:0},
    
    //Tier 1
    {name:'Mess Kit',types:['Accessory','Arcanist\'s Mess Kit'],description:'Your provision requirement is reduced by 1, to a minimum of 0.',tier:1},
    {name:'Shepard\'s Compass',types:['Accessory','Shepard\'s Compass'],description:'Your travel group gains +1 range.',tier:1},
    {name:'Soothe Stone',types:['Accessory','Soothe Stone'],description:'Characters within 10 ft. of you are soothed, and become slightly more reasonable.',tier:1},
    
    //Tier 2    
    {name:'Gleaming Goggles',types:['Accessory','Gleaming Goggles'],description:'You are immune to the blind ailment.',tier:2},
    {name:'Spelljammer\'s Bracer',types:['Accessory','Spelljammer\'s Bracer'],description:'When you deal energy damage to a focusing character, treat it as doubled when accruing it against the focus threshold.',tier:2},
    {name:'Quick Stone',types:['Accessory','Quick Stone'],description:'Gain +1 Finesse.',tier:2},
    
    //Tier 3
    {name:'Mindspeak Amulet',types:['Accessory','Mindspeak Amulet'],description:'You can communicate telepathically with any creature within 10 ft. of you.',tier:3},
    
    //Tier 4
    {name:'Arcane Communicator',types:['Accessory','Arcane Communicator'],description:'You may choose to transmit anything you say to all characters with paired Arcane Communicators. You cna pair communicators with nearby willing characters. You can only clear pairings by clearing all existing pairings.',tier:4},
    
    
    //Gear Traits
    //Tier 0

    //Enchantment Traits
    //Combat
    //Tier 0
    {name:'Focused',types:['Enchantment','Focused'],description:'Increase your focus thresholds by 1.',tier:0},
    {name:'Improved Focused',types:['Enchantment','Focused'],description:'Further increase your focus thresholds by 1 for every extra enchantment tier.',tier:0},
    {name:'Invigorating',types:['Enchantment','Invigorating'],description:'You gain +3 energy.',tier:0},
    {name:'Improved Invigorating',types:['Enchantment','Invigorating'],description:'You gain an additional +3 energy for every extra enchantment tier.',tier:0},
    {name:'Staunching',types:['Enchantment','Staunching'],description:'You gain +1 death resistance.',tier:0},
    {name:'Improved Staunching',types:['Enchantment','Staunching'],description:'You gain an additional +1 death resistance for every extra enchantment tier.',tier:0},
    
    //Tier 1
    {name:'Forceful',types:['Enchantment','Forceful'],description:'All attack abilities attached to this weapon have their energy damage increased by 1.',tier:1},
    {name:'Improved Forceful',types:['Enchantment','Forceful'],description:'All attack abilities attached to this weapon have their energy damage increased by 1 additional point for every 2 extra enchantment tiers.',tier:1},
    {name:'Hardened',types:['Enchantment','Hardened'],description:'You gain +1 defence.',tier:1},
    {name:'Improved Hardened',types:['Enchantment','Hardened'],description:'You gain an additional +1 defence for every 2 extra enchantment tiers.',tier:1},
    {name:'Lethal',types:['Enchantment','Lethal'],description:'All attack abilities attached to this weapon have their attack increased by 1 (if they have a non-zero attack defined).',tier:1},
    {name:'Improved Lethal',types:['Enchantment','Lethal'],description:'All attack abilities attached to this weapon have their attack increased by 1 additional point (if they have a non-zero attack defined) for every 2 extra enchantmnet tiers.',tier:1},
    {name:'Improved Cast Light',types:['Enchantment','Light-Casting'],description:'The radius of the cast light ability increases b 1 tile (5 ft.) for every 2 extra enchantment tiers.',tier:1},
    {name:'Resistant',types:['Enchantment','Resistant'],description:'You gain +1 resistance.',tier:1},
    {name:'Improved Resistant',types:['Enchantment','Resistant'],description:'You gain an additional +1 resistance for every 2 extra enchantment tiers.',tier:1},
    
    //Tier 2
    {name:'Calming',types:['Enchantment','Calming'],description:'You are immune to finesse reductions statuses.',tier:2},
    
    //Tier 3
    {name:'Glasscharm',types:['Enchantment','Glasscharm'],description:'All attack abilities attached to this weapon have their attack increased by 4 (if they have a non-zero attack defined). You suffer -4 defence.',tier:3},
    {name:'Improved Glasscharm',types:['Enchantment','Glasscharm'],description:'All attack abilities attached to this weapon have their attack increased by 1 additional point (if they have a non-zero attack defined) for every extra enchantment tier. You suffer an additional -1 defence for every extra enchantment tier.',tier:3},
    {name:'Ragecharm',types:['Enchantment','Ragecharm'],description:'All attack abilities attached to this weapon have their energy damage increase by 4. You suffer -4 resistane.',tier:3},
    {name:'Improved Ragecharm',types:['Enchantment','Ragecharm'],description:'All attack abilities attached to this weapon have their energy damage increase by 1 additional point for every extra enchantment tier. You suffer an additional -1 resistane for every extra enchantment tier.',tier:3},
    
    //Tier 4
    {name:'Hyperlethal',types:['Enchantment','Hyperlethal'],description:'Whenever abilities attached to this weapon reduce a target\'s endurance, reduce the target\'s endurance by an additional point.',tier:4},
    {name:'Mercurial',types:['Enchantment','Mecurial'],description:'You are immune to the movement reduction ailments and your minimum movement is set to 1. ',tier:4},
    
    //Utility
    //Tier 0
    {name:'Cleanliness',types:['Enchantment','Cleanliness'],description:'This item cannot become dirtied',tier:0},
    {name:'Lightness',types:['Enchantment','Lightness'],description:'This equipment\'s weight is reduced by 2 lb. This cannot reduce an item\'s weight below 0.',tier:0},
    {name:'Improved Lightness',types:['Enchantment','Lightness'],description:'This equipment\'s weight is reduced by an additional 2 lb. for every extra enchantment tier. This cannot reduce an item\'s weight below 0.',tier:0},
    {name:'Providing',types:['Enchantment','Providing'],description:'Your travel group gains +1 provision score.',tier:0},
    {name:'Improved Providing',types:['Enchantment','Providing'],description:'Your travel group gains an additional +1 provision score for every extra enchantment tier.',tier:0},
    
    //Tier 1
    
    //Tier 2
    {name:'Elegance',types:['Enchantment','Elegance'],description:'Your speech and mannerisms are masked in an aura of poise. Everything you do or say is perceived as elegant.',tier:2},
    {name:'Flight',types:['Enchantment','Flight'],description:'Your travel group gains +1 range.',tier:2},
    {name:'Improved Flight',types:['Enchantment','Flight'],description:'Your travel group gains an additional +1 range for every 2 extra enchantment tiers.',tier:2},

    //Tier 3
    
    //Tier 4       
    
]