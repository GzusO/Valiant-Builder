import { Trait } from "src/app/Trait";

export const traitData: Trait[] = [

    //Characteristic 
    //Physical Power
    {name:'Combat Athleticism',types:['Physical Training','Characteristic'],description:'You gain bonuses to the following global abilities: • Shove: your target is pushed away an additional tile • Grab: increase the focus threshold by 12 • Leap: increase the range by 1 • Sprint: change the base cost to 0.',tier:2},
    {name:'Strength',types:['Athletic Form','Characteristic'],description:'Gain +1 lethality.',tier:3},
    {name:'Improved Strength',types:['Perfect Form','Characteristic'],description:'Gain +1 lethality.',tier:5},

    //Physical Acuity
    {name:'Basic Movement',types:['Simple Agility'],description:'You have a base movement of 5.',tier:1},
    {name:'Movement',types:['Honed Agility'],description:'Gain +1 movement.',tier:3},
    {name:'Improved Movement',types:['Absolute Agility'],description:'Gain +1 movement.',tier:5},

    //Physical Resilience
    {name:'Hardiness',types:['Thick Skin'],description:'Gain +1 defence.',tier:3},
    {name:'Toughness',types:['Reinforced Body'],description:'Gain +1 endurance.',tier:4},
    {name:'Improved Hardiness',types:['Stone Skin'],description:'Gain +1 defence.',tier:5},

    //Mental Power
    {name:'Focus',types:['Advanced Cognition'],description:'Gain +1 focus slot.',tier:3},
    {name:'Memorized Movements',types:['Expanded Mind'],description:'Stance abilities you use no longer require a focus slot.',tier:4},
    {name:'Improved Focus',types:['Ascended Cognition'],description:'Gain +1 focus slot.',tier:5},

    //Mental Acuity
    {name:'Fast Reactions',types:['Instincts'],description:'The first non-variable cost reaction you use each combat is free.',tier:2},
    {name:'Speed',types:['Advanced Wit'],description:'Gain +1 finesse.',tier:3},
    {name:'Finesse Reduction Immunity',types:['Razor Instincts'],description:'You are immune to attribute ailments that reduce your finesse.',tier:4},
    {name:'Improved Speed',types:['Perfect Wit'],description:'Gain +1 finesse.',tier:5},

    //Mental Resilience
    {name:'Conditioning',types:['Iron Will'],description:'Gain +1 resistance and +1 death Resistance.',tier:3},
    {name:'Improved Conditioning',types:['Unbreakable Will'],description:'Gain +1 resistance and +1 death Resistance.',tier:5},

    //Lineage

    //Cossim
    {name:'Unique Markings',types:['Cosmic Patterns'],description:'Under close inspection, you are always uniquely identifiable as yourself. If you were able to discern the meaning of the patterns, you could surely learn something wondrous.',tier:0},
    {name:'Natural Telepathy',types:['Cosmic Connections'],description:'You can communicate via telepathy to any character within 10 ft. of you. If you are granted telepathy by another trait or ability, increase that telepathy’s range by 10 ft.',tier:0},
    {name:'Inspired',types:['Cosmic Inspiration'],description:'When you gain this trait, choose 1 characteristic. When you make contests using that characteristic, you gain +1 to the contest roll.',tier:0},
    {name:'Cosmic Designs',types:['Patience of Eons'],description:'Any plan or strategy you design cannot be found out by any other characters unless they are told directly or have this trait.',tier:0},
    {name:'Bounding Vagrant',types:['Solitary Wanderer'],description:'When you travel alone, you may cross 3 tiles per day instead of 2.',tier:0},
    {name:'Characteristic Sensing',types:['Strange Sense'],description:'When you gain this trait, select one characteristic. Whenever you are within 10 ft. of a character, you know their characteristic score for that characteristic.',tier:0},

    //Girt
    {name:'Movement Reduction Immunity',types:['Aspect of the Sands'],description:'You are immune to attribute ailments that reduce your movement.',tier:0},
    {name:'Bejeweled',types:['Decorated Figure'],description:'You can wear one additional combat and utility accessory.',tier:0},
    {name:'Resourceful',types:['Master of Thrift'],description:'Your gear and weapon limited abilities have their limited value increased by 1.',tier:0},
    {name:'Gear Maintenance',types:['Staunch Maintainer'],description:'You can prepare an additional gear item whenever you prepare gear.',tier:0},
    {name:'Weight Distribution',types:['Careful Packing'],description:'Your base weight threshold is increased by 10 lb.',tier:0},
    {name:'Merchant Friendliness',types:['Silver Tongue'],description:'Merchants tend to be friendly towards you.',tier:0},
    {name:'Caravanner',types:['Skillful Navigator'],description:'You count as an additional person when crewing a manual vehicle.',tier:0},
    {name:'Language Expert',types:['Well-Traveled'],description:'You learn an additional language.',tier:0},
    {name:'Exact Language',types:['Codified Thoughts'],description:'Other characters cannot misunderstand your intentions during conversation, given they can understand the language you speak. It is more difficult for you to obfuscate facts without outright lying.',tier:0},

    //Derge
    {name:'Derge Stature',types:['Savage Stature'],description:'Commoners tend to either fear or respect you.',tier:0},
    {name:'Derge Endurance',types:['Bloody Resilience'],description:'Gain +1 endurance.',tier:0},
    {name:'Terrified Immunity',types:['Savage Resolve'],description:'You are immune to the terrified ailment.',tier:0},
    {name:'Bloody Slaughter',types:['Violent Soul'],description:'When you reduce a character’s endurance, restore 5 energy.',tier:0},
    {name:'Brutality Desensitization',types:['Brutal Tradition'],description:'You are almost entirely unaffected by torture or trauma.',tier:0},
    {name:'Hunter-Gatherer',types:['Clan Provider'],description:'You are always able to find ample food in the wild, given the region is at least moderately bountiful.',tier:0},
    {name:'Intimidating',types:['Imposing Presence'],description:'When you attempt to intimidate another character of a tier less than your own, you always succeed (as long as that character is capable of being intimidated).',tier:0},
    {name:'Wild Presence',types:['Powerful Presence'],description:'Characters of your tier or lower will almost always get out of your way.',tier:0},
    {name:'Trekker',types:['Wild Travels'],description:'You always know the common types of hazards in regions your party is travelling in.',tier:0},

    //Hjark
    {name:'Cold Resistance',types:['Chilled Veins'],description:'You are only affected by extremely cold temperatures.',tier:0},
    {name:'Steady Footing',types:['Highlander'],description:'Ignore the effects of precarious tiles. You are immune to effects that would move you against your will.',tier:0},
    {name:'Climbing',types:['Highlander'],description:'You may climb one tile per movement, rather than spending two points of movement per tile climbed.',tier:0},
    {name:'Frozen Immunity',types:['Winterhide'],description:'You are immune to the frozen ailment.',tier:0},
    {name:'Alcohol Resistance',types:['Cast-Iron Kidneys'],description:'You never pass out from alcohol consumption. You can still die from acute alcohol poisoning, but at twice the blood-alcohol content as a normal person of your height and weight.',tier:0},
    {name:'Craftsperson Friendliness',types:['Craftsperson Comradery'],description:'Craftspeople default to being friendly with you rather than being neutral towards you.',tier:0},
    {name:'Tool Proficiency',types:['Handy Hands'],description:'When you make contests involving the use of tools, you gain +1 to the contest roll.',tier:0},
    {name:'Self-Reliant',types:['Needless'],description:'You are always able to provide for yourself while travelling.',tier:0},
    {name:'Jolly',types:['Warmth of Winter'],description:'People will almost always converse with you at gatherings',tier:0},

    //Ingra
    {name:'Failure Aversion',types:['Self-Actualization'],description:'When you fail a contest outside of combat, you may retry it and gain you gain +1 to the contest roll. If you fail it again, the consequences for failure become substantially more dire.',tier:0},
    {name:'Glass',types:['Glassheart'],description:'You are immune to the winded status. Your death resistance is set to 1.',tier:0},
    {name:'Lethality Reduction Immunity',types:['Honed Edge'],description:'You are immune to attribute ailments that reduce your lethality.',tier:0},
    {name:'Steady Psyche',types:['Will of Stone'],description:'Whenever you suffer an ailment, gain +1 defence and +1 resistance. These attribute boons remains on you as long as the triggering ailment does.',tier:0},
    {name:'Barrens Scavenging',types:['Fruits of the Desert'],description:'You are always able to find small amounts of food in the wild, given you are in a barren region.',tier:0},
    {name:'Natural Artist',types:['Precious Crafts'],description:'You have a natural talent for elegant artistic expression.',tier:0},
    {name:'Perception',types:['Silver Eyes'],description:'You can see twice as far as others, and can perceive hidden items as long as they are at least partially visible.',tier:0},
    {name:'Tireless',types:['Tireless Sentinel'],description:'You only start incurring penalties due to lack of rest after 48 hours rather than 24 hours. After this, you incur repeating penalties as normal.',tier:0},

    //Marr
    {name:'Adapt',types:['Adaptive Form'],description:'If you spend 1 season in a specific region or city, you are able to mimic the dialect, mannerisms, and other norms to the point of being able to be mistaken for a native of the region or city. If you are away from a region you have adapted to for more than 1 season, you lose the adaptation.',tier:0},
    {name:'Opportunity',types:['Simple Opportunist'],description:'Your attack abilities that target characters suffering the winded status gain +4 attack.',tier:0},
    {name:'Threatless Stride',types:['Unassuming Demeanor'],description:'Enemy characters cannot use reaction abilities at any point during your move phase.',tier:0},
    {name:'Quiet Downtime',types:['Comfortable and Quiet'],description:'You are always able to spend your downtime without interruptions.',tier:0},
    {name:'Unassuming',types:['Plain'],description:'Others will not suspect you of anything without direct evidence.',tier:0},
    {name:'Well-Traveled',types:['Wanderlust'],description:'You’ve met many people in your travels, and have created a loose and wide network of pleasant acquaintances.',tier:0},


    //Selk
    {name:'Deliberation',types:['Deliberate Process'],description:'You know if contests outside of combat are possible for you to succeed in.',tier:0},
    {name:'Longevity',types:['Fated Longevity'],description:'Gain +2 death resistance.',tier:0},
    {name:'Fast Recharge',types:['Lightning Recovery'],description:'The value of recharging ailments you suffer can never exceed 1.',tier:0},
    {name:'Technophile',types:['Arcane Tinkering'],description:'You are able to operate any arcane technology, assuming it’s possible for you to operate it.',tier:0},
    {name:'Keen Mind',types:['Bright Minded'],description:'You know the origin of any technology you come across, as long as it has a knowable origin.',tier:0},
    {name:'First Impressions',types:['Grandiosity'],description:'Regardless of your actual physical appearance, those that don’t know you assume you are of noble status.',tier:0},
    {name:'Quick Learner',types:['Multitalented'],description:'When presented with new information, such as an unread book, you can almost always commit the entirety of the information to memory after studying it once.',tier:0},
    {name:'Social Intelligence',types:['Natural Socialite'],description:'You know the profession of any character you converse with.',tier:0},

    //Vyld
    {name:'Bestial',types:['Unfamiliar Form'],description:'Unless completely covered, you stand out in town and cities and are recognizable as Vyld. Common people often react to your presence in exaggerated ways that range from novel wonder to fearful hatred.',tier:0},
    {name:'Vyld Darksight',types:['Adapted Eyes'],description:'You gain darksight.',tier:0},
    {name:'Natural Armor',types:['Bone Plating'],description:'You cannot wear armor sets. You gain +6 defence and +1 resistance. This defence bonus increases by 1 for every character tier above 0.',tier:0},
    {name:'Habitual Strikes',types:['Masterful Motion'],description:'Reduce the energy cost of attack modifier abilities you use by 1, down to a minimum of 1.',tier:0},
    {name:'Mutant',types:['Spontaneous Mutations'],description:'You may have an additional active transformation.',tier:0},
    {name:'Danger Sense',types:['Ancestral Instinct'],description:'When camping in the wilderness, you roughly know the odds of being attacked during the night by local wildlife.',tier:0},
    {name:'Ocular Pat-down',types:['Functional Paranoia'],description:'You are aware of all of the weapons on characters within 15 ft. of you, including natural weapons.',tier:0},
    {name:'Beast Bond',types:['Natural Aspects'],description:'You are able to more easily befriend beasts, and can communicate with them to a limited degree.',tier:0},
    {name:'Warrior Impressions',types:['Path of the Warrior'],description:'Regardless of your actual physical appearance, those that don’t know you assume you are a capable warrior.',tier:0},
    {name:'Threat Judgement',types:['Warrior Culture'],description:'You know the tier of all characters you interact with, up to characters 3 tiers above you.',tier:0},

    //Professions
    {name:'Art Supplies',types:['Artist'],description:'You always have a handful of art supplies on you, ready to capture grand vistas and visceral downfalls alike.',tier:0},
    {name:'Artist Funds',types:['Artist'],description:'You start with 1,000 Tins.',tier:0},
    {name:'Thrifty',types:['Assistant'],description:'You may purchase general items for half of their cost.',tier:0},
    {name:'Assistant Funds',types:['Assistant'],description:'You start with 750 Tins.',tier:0},
    {name:'Forging Expertise',types:['Blacksmith'],description:'You’ve always got your hammer ready, and can use it to bash, bend, or otherwise manipulate certain metal objects.',tier:0},
    {name:'Forging Expertise',types:['Blacksmith'],description:'You’ve always got your hammer ready, and can use it to bash, bend, or otherwise manipulate certain metal objects.',tier:0},
    {name:'Tracking',types:['Bounty Hunter'],description:'You can pick up any creature’s trail as long as the trail is less than 5 days old.',tier:0},
    {name:'Bounty Hunter Funds',types:['Bounty Hunter'],description:'You start with 1,250 Tins.',tier:0},
    {name:'Dark Connections',types:['Criminal'],description:'You are always able to locate safe houses given that the settlement you’re in has any.',tier:0},
    {name:'Criminal Funds',types:['Criminal'],description:'You start with 1,000 Tins.',tier:0},
    {name:'Peacekeeper',types:['Guard'],description:'You are always welcomed into neutral towns or cities.',tier:0},
    {name:'Guard Funds',types:['Guard'],description:'You start with 750 Tins.',tier:0},
    {name:'Salesperson',types:['Merchant'],description:'You can reliably sell items to any character that can afford them, instead of just merchants.',tier:0},
    {name:'Merchant Funds',types:['Merchant'],description:'You start with 1,250 Tins.',tier:0},
    {name:'Noble Air',types:['Noble'],description:'Your status allows you into exclusive areas and events.',tier:0},
    {name:'Noble Funds',types:[],description:'You start with 1,500 Tins.',tier:-1},
    {name:'Noble Funds',types:['Noble'],description:'You start with 1,500 Tins.',tier:0},
    {name:'Honest Work',types:['Physical Laborer'],description:'People trust you inherently.',tier:0},
    {name:'Physical Laborer Funds',types:['Physical Laborer'],description:'You start with 750 Tins.',tier:0},
    {name:'Physician Funds',types:['Physician'],description:'You start with 1,250 Tins.',tier:0},
    {name:'Open Arms',types:['Priest'],description:'You and any characters allied with you are able to find sanctuary in any temple belonging to your religion, given you are not a known enemy of the temple.',tier:0},
    {name:'Priest Funds',types:['Priest'],description:'You start with 1,000 Tins.',tier:0},
    {name:'Seafarer',types:['Sailor'],description:'You count as an additional person when crewing a manual aquatic vehicle.',tier:0},
    {name:'Sailor Funds',types:['Sailor'],description:'You start with 750 Tins.',tier:0},
    {name:'Educated',types:['Scholar'],description:'You are able to speak two additional languages.',tier:0},
    {name:'Scholar Funds',types:['Scholar'],description:'You start with 1,000 Tins.',tier:0},
    {name:'Submissive Demeanor',types:['Servant'],description:'Characters that don’t know you will always dismiss you as unthreatening.',tier:0},
    {name:'Servant Funds',types:['Servant'],description:'You start with 750 Tins.',tier:0},
    {name:'Discipline',types:['Soldier'],description:'You are never suspected of crimes, misdeeds, or general shenanigans without direct evidence.',tier:0},
    {name:'Discipline',types:['Soldier'],description:'You are never suspected of crimes, misdeeds, or general shenanigans without direct evidence.',tier:0},
    {name:'Tinkering Tools',types:['Tinkerer'],description:'You’ve always got a set of precise tools available, ready to tinker with whatever machinery you come across.',tier:0},
    {name:'Tinkerer Funds',types:['Tinkerer'],description:'You start with 1,000 Tins.',tier:0},
    {name:'Natural Explorer',types:['Traveler'],description:'You can always figure out your position on a map and always know which direction is North.',tier:0},
    {name:'Traveler Funds',types:['Traveler'],description:'You start with 750 Tins.',tier:0},


    //Class

    //Aspirant
    {name:'Arcane Field Manipulation',types:['Arcane Mind'],description:'You may choose up to one targeted character to be immune to the effects of any of your shape abilities.',tier:0},
    {name:'Ascendant',types:['Ascendant Bond'],description:'A small, sentient being (your ascendant) capable of flight follows you, taking a form of your choosing. Your ascendant can move up to 100 ft. away from you before its form dissipates and it is destroyed. ascendant is destroyed, it reforms in 1 hour. Your ascendant can manipulate objects no heavier than 5 lb. Your ascendant is not a character. Your ascendant must be alive to use the Ascendant Binding, Ascendant Charge, and Ascendant Sacrifice abilities.',tier:0},
    {name:'Ascendant Link',types:['Ascendant Bond'],description:'You and your Ascendant can communicate telepathically if you are within 10 ft. of each other. Due to your Ascendant’s innate senses, you cannot be blind or conditionally blind to any characters within 10 ft. of you while your Ascendant is alive. Using and maintaining the effects of any of your Ascendant abilities requires your Ascendant to be alive.',tier:0},
    {name:'Marked Assault',types:['Marked Prey'],description:'Attack modifier abilities applied to attack abilities targeting only your marked character cost 0 energy.',tier:0},
    {name:'Marked Tracking',types:['Marked Prey'],description:'You can always track your marked character given there are tracks to follow. You can identify a marked character as long as you can see them, even if they are disguised.',tier:0},
]