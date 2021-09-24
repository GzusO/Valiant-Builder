import { Trait } from "src/app/Trait";

export const traitData: Trait[] = [

    //Characteristic 
    //Physical Power
    {name:'Combat Athleticism',types:['Physical Training','Characteristic'],description:'You gain bonuses to the following global abilities: • Shove: your target is pushed away an additional tile • Grab: increase the focus threshold by 5 • Leap: increase the range by 1 • Sprint: change the base cost to 0.',tier:2},
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
    {name:'Fast Reactions',types:['Instincts'],description:'The first non-variable cost reaction ability you use each combat has its base energy cost changed to 0.',tier:2},
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
    {name:'Bloody Slaughter',types:['Violent Soul'],description:'When you reduce a character’s endurance to 0, restore 5 energy.',tier:0},
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
    {name:'Stunned Immunity',types:['Lightning Recovery'],description:'You are immune to the stunned ailment.',tier:0},
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
    {name:'Charlatan’s Poise',types:['Charlatan’s Poise'],description:'You are almost always able to convince others that you are wealthier than and better connected that you actually are.',tier:0},
    {name:'Simple Market Knowledge',types:['Basic Economy'],description:'You always know if a trade you are making is not in your favor.',tier:0},
    {name:'Pleasantly Disarming',types:['People Person'],description:'Characters won’t be openly hostile towards you without provocation.',tier:0},
    {name:'Slight of Mind',types:['People Person'],description:'When you make mental acuity contests outside of combat, you gain +1 to the contest roll.',tier:0},
    {name:'Able Frame',types:['Pack Mule'],description:'Your base weight threshold is increased by 10 lb.',tier:0},
    {name:'Pocket Snacks',types:['Pack Mule'],description:'You’ve always got snacks handy. Gods know where you keep them.',tier:0},

    //Warrior
    {name:'Warrior Techniques',types:['Warrior'],description:'When you gain this trait, select any two tier 1 abilities from the Warrior Techniques pool and gain access to those abilities. Whenever you invest a tier into the Warrior class path, you may replace one of your known techniques with another ability form the Warrior Techniques pool you could learn. You may only learn techniques with tiers equal to or less than your warrior class path invested tier.',tier:1},
    {name:'Improved Techniques',types:['Warrior'],description:'At invested tiers 3, 6, and 9, you gain an additional slot for Warrior Techniques. When you gain an additional slot at these tiers, you also learn a new technique alongside the optional technique replacement at every tier.',tier:1},
    {name:'Technique Retraining',types:['Warrior'],description:'You can learn new abilities from the warrior technique pool, as long as their tier is equal to or less than your warrior class invested tier. When you learn and ability this way, you must replace one of your existing warrior techniques with the new ability. You must also have access to a study amenity of a tier equal to or greater than the tier of the ability you are learning. You can retrain your Warrior Techniques by spending a week of downtime with no breaks or major interruptions. After this week concludes, the character may reselect all of their available Warrior Techniques from the Warrior Techniques abilities pool.',tier:1},
    {name:'Advantageous Attacks',types:['Martial Finesse'],description:'Attack abilities you use against winded targets gain 2 attack.',tier:1},
    {name:'Heavy Armor Training',types:['Battle Conditioning'],description:'Ignore up to 1 point of finesse reduction that comes from your worn armor.',tier:2},
    {name:'Weapon Flurry',types:['Dual-Wielding'],description:'Gain +1 lethality and +1 defence while wielding two weapons that aren’t two-handed, Shield, or Large Shield weapons.',tier:2},
    {name:'Gunslinger',types:['Dual-Wielding'],description:'Ignore the two-handed tag on Gun weapons.',tier:2},
    {name:'Rage',types:['Enraged'],description:'You gain +1 lethality and +1 resistance while you suffer the winded status.',tier:2},
    {name:'Shielded Barrage',types:['Lancer'],description:'You may wield a Shield or Large Shield weapon while wielding a Crossbow, Heavy crossbow, Gun, or Heavy Gun weapon. Ignore the unwieldly tag Heavy crossbow, or Heavy Gun weapons.',tier:5},
    {name:'Masterful Attacks',types:['Masterful Maneuvers'],description:'You may apply an additional attack modifier ability to your attack abilities.',tier:6},
    {name:'Additional Stance',types:['Masterful Stances'],description:'You may use an additional stance ability at the beginning of the round.',tier:6},
    {name:'Heavy Momentum',types:['Behemoth Momentum'],description:'Ignore the slow tag on attack abilities you use during your turn.',tier:9},
    {name:'Heavy Weapon Handling',types:['Behemoth Strength'],description:'You can use melee attack abilities attached to two-handed weapons while holding the weapon with a single hand.',tier:9},
    {name:'Eternal',types:['Eternal Body'],description:'If you would die, set your current endurance and death resistance to 1 and set your current energy to 0. Permanently suffer -5 energy.',tier:10},

    {name:'Popular',types:['Local Notoriety'],description:'You are popular among commoners, who will always offer you respite or aid if they can.',tier:1},
    {name:'Vigilance',types:['Martial Discipline'],description:'Your party cannot be ambushed while using the Rest ability.',tier:1},
    {name:'Weightless Armor',types:['Armor Training'],description:'You don’t count the weight of your worn armor against your weight threshold.',tier:2},
    {name:'Excess Energy',types:['Lingering Adrenaline'],description:'When you reduce a character’s endurance to 0, you gain +1 to the contest roll to the next contest you make outside of combat. This bonus lasts until you resolve the Rest ability.',tier:2},
    {name:'Trophy Hunter',types:['Monster Hunter'],description:'You are able to take a preserved trophy from any character you or your allies kill.',tier:2},
    {name:'Trained Dexterity',types:['Notably Quick'],description:'When you make physical acuity contests outside of combat, you gain +1 to the contest roll.',tier:3},
    {name:'Trained Strength',types:['Notably Strong'],description:'When you make physical power contests outside of combat, you gain +1 to the contest roll.',tier:3},
    {name:'Trained Toughness',types:['Notably Tough'],description:'When you make physical resilience contests outside of combat, you gain +1 to the contest roll.',tier:3},
    {name:'Pacify',types:['Pacifying Presence'],description:'You are able to pacify any character of a lower tier than your own, assuming it is possible to pacify the character.',tier:4},
    {name:'Obstacle Familiarity',types:['Sized Up'],description:'You know the characteristic contest target for any physical characteristic contest before you partake in it.',tier:4},
    //Arcanist
    {name:'Arcanist Repertoire',types:['Arcanist'],description:'When you gain this trait, select any two tier 1 abilities from the arcanist repertoire pool and gain access to those abilities. Whenever you invest a tier into the Arcanist class path, you may learn another Arcanist Repertoire ability. You may only learn abilities with tiers equal to or less than your Arcanist class path invested tier.',tier:1},
    {name:'Improved Repertoire',types:['Arcanist'],description:'At invested tiers 3, 6, and 9, you may augment a single ability in your repertoire, permanently granting it one of the following bonuses (you may augment the same ability multiple times, with the effects stacking): • Reduce its base energy cost by 1 to a minimum of 0 (cannot affect variable cost abilities) • Increase its focus threshold by 3 • Increase its limited value by 1',tier:1},
    {name:'Expanded Repertoire',types:['Arcanist'],description:'You can learn new abilities from the arcanist repertoire pool, as long as their tier is equal to or less than your arcanist class invested tier. Learning an ability this way costs Tins equal to the base item cost of the tier of the ability learned. You must also have access to a study amenity of a tier equal to or greater than the tier of the ability you are learning.',tier:1},
    {name:'Steadfast Focus',types:['Steady Mind'],description:'Increase the focus value of abilities you use by 3.',tier:1},
    {name:'Hardened Focus',types:['Steady Mind'],description:'You gain +1 resistance for each focus ability you are maintaining.',tier:1},
    {name:'Arcane Shell',types:['Arcane Armors'],description:'Gain +2 defence.',tier:2},
    {name:'Arcane Medicine',types:['Arcane Restoration'],description:'Whenever one of your effects restores a character’s energy, that effect restores an additional 5 energy.',tier:2},
    {name:'Safe Charging',types:['Stable Charge'],description:'While you have a pending charged action, gain +2 defence and +2 resistance.',tier:2},
    {name:'Passive Focus',types:['Hyperconscious'],description:'You do not lose focus when incapacitated.',tier:3},
    {name:'Experimenter',types:['Practiced Experimentation'],description:'Change the base energy cost of the Arcane Experimentation ability to 0 and increase its limited value by 1.',tier:3},
    {name:'Sculpted Abilities',types:['Arcane Sculpting'],description:'Increase the shape range of your shape abilities by 1. You may choose up to one targeted character to be immune to the effects of any of your shape abilities.',tier:9},
    {name:'Arcane Mastery',types:['Utter Mastery'],description:'Reduce the cost of all of your repertoire abilities by 1. This is applied after all other energy cost reductions and cannot reduce the cost of abilities below 0.',tier:10},
    
    {name:'Telepathy',types:['Telepathic Communication'],description:'You can communicate telepathically with any creature within 10 ft. of you. The range of this ability is multiplied by your mental power characteristic score.',tier:3},
    //Specialist

    {name:'Specialist Strategies',types:['Specialist'],description:'When you gain this trait, select two tier 1 traits from the Specialist Strategy pool. You do not normally have access to these traits (see Strategy Application). Whenever you invest a tier into the Specialist class path, you may learn another Specialist Strategy trait. You may only learn traits with tiers equal to or less than your Specialist class path invested tier.',tier:1},
    {name:'Strategy Application',types:['Specialist'],description:'When combat begins, select one of your known Specialist Strategy traits. Gain the effects of that trait for the duration of the combat as long as you are alive and not unconsious.',tier:1},
    {name:'Improved Strategies',types:['Specialist'],description:'At invested tier 6, you may apply an additional known strategy when combat begins.',tier:1},
    {name:'Stratagem Studies',types:['Specialist'],description:'You can learn new traits from the specialist strategy pool, as long as their tier is equal to or less than your specialist class invested tier. Learning an ability this way costs Tins equal to the base item cost of the tier of the ability learned. You must also have access to a study amenity of a tier equal to or greater than the tier of the ability you are learning.',tier:1},
    {name:'Embargo',types:['Specialist'],description:'When combat begins, you may select one character on another team. That character cannot be the first character to act for that team. If no characters on a team are able to go first, any characters on that team may go first.',tier:1},
    {name:'Preparedness',types:['Munition Resupply'],description:'Your gear and weapon limited abilities have their limited value increased by 1.',tier:1},
    {name:'Ego-less',types:['Ego Death'],description:'You cannot target yourself with abilities you use. Any of your abilities that would target yourself instead target any allied character you can see. Stance and transformation abilities you use affect any allied character you can see instead of yourself.',tier:9},
    {name:'Extra Turn',types:['Double-Time'],description:'You can take an extra turn during every round of combat.',tier:10},
    {name:'Unfaltering',types:['Unshakable Will'],description:'Your focus abilities cannot be ended early due to energy damage or incapacitation, unless that incapacitation is from the unconscious status.',tier:10},
    {name:'Masterful Finesse',types:['Utterly Effortless'],description:'Finesse can reduce the costs of your abilities down to 0.',tier:10},

    {name:'Organized',types:['Orderly Mind'],description:'You always know the date and time down to an hour of precision. You always know the chronological order of events you have experienced, even if you can’t remember exact times.',tier:1},
    {name:'Supplies',types:['Quartermaster'],description:'You always know if something from your party’s inventory is missing, given you had knowledge of that item to begin with.',tier:1},
    {name:'Insight',types:['Investigator’s Instinct'],description:'You know if a someone is lying to you as long as they are not a higher tier than you.',tier:2},
    {name:'Misdirection',types:['Mercurial Tongue'],description:'You are able to convincingly lie to others as long as they are not a higher tier than you.',tier:2},
    {name:'Punctual',types:['Travel Planning'],description:'You always know if a travel event could cause you to lose a day or more of travel time.',tier:2},
    {name:'Request',types:['Enthralling Speech'],description:'You are able to convince someone that is at least one tier below you to do a task, within reason.',tier:3},
    {name:'Enthrall',types:['Enthralling Speech'],description:'You are able to make someone that is at least one tier below you friendly towards you, within reason. You can only maintain this traits effects on one person at a time.',tier:3},
    {name:'Soft Steps',types:['Quiet Sneak'],description:'You make no sound while moving.',tier:3},
    {name:'Social Insights',types:['Deep Insight'],description:'You know the relations between all of characters that you know, given they have any.',tier:6},

    {name:'Bastion Formation',types:['Strategies'],description:'You and all allied characters gain +1 defence.',tier:1},
    {name:'Battle Poses',types:['Strategies'],description:'Stance abilities you and your allies use have their costs reduced by 1, down to a minimum of 1.',tier:1},
    {name:'Blitz Formation',types:['Strategies'],description:'Your party acts first this combat.',tier:1},
    {name:'Spearhead Formation',types:['Strategies'],description:'You and all allied characters gain +1 lethality.',tier:1},
    {name:'Stalwart Formation',types:['Strategies'],description:'You and your allies gain +2 death resistance. This effect increases any affected character’s current death resistance by 2 when it is applied, and reduces the uses by 2 when it expires. This effect cannot reduce death resistance below 1.',tier:1},
    {name:'Brutal Aggressions',types:['Strategies'],description:'All enemy characters suffer -1 finesse.',tier:2},
    {name:'Calm and Collected',types:['Strategies'],description:'You and all allied characters gain +1 finesse.',tier:2},
    {name:'Combat Drills',types:['Strategies'],description:'You and all allied characters gain +1 movement.',tier:2},
    {name:'Munition Packing',types:['Strategies'],description:'You and your allies’ weapon limited abilities have their limited value increased by 1.',tier:2},
    {name:'Pre-Prepared Equipment',types:['Strategies'],description:'You and your allies’ gear abilities can be used once this combat without counting towards their limited values. This allows otherwise consumed gear to be used.',tier:2},
    {name:'Last Stand',types:['Strategies'],description:'Whenever you or an allied character is reduced to 0 endurance, you and your allied characters gain +1 lethality and +1 defence until combat ends.',tier:3},
    {name:'Reckless Abandon',types:['Strategies'],description:'All characters gain +2 lethality.',tier:3},
    {name:'Rehearsed Autonomy',types:['Strategies'],description:'You and all allied characters gain +1 focus slot.',tier:3},
    {name:'Reinforced Focus',types:['Strategies'],description:'You and all allied characters increase the focus value of abilities they use by 3.',tier:3},
    {name:'Stalling Tactics',types:['Strategies'],description:'All characters gain +2 defence.',tier:3},
    {name:'Predictive Immunity',types:['Strategies'],description:'Select one non-attribute ailment when combat begins. You and your allies are immune to that ailment.',tier:4},
    {name:'Second Chances',types:['Strategies'],description:'The first time you or one of your allies would have their endurance reduced this combat, negate that endurance reduction.',tier:4},
    {name:'The Long Game',types:['Strategies'],description:'You and your allies may use stance abilities as if they were transformation abilities, doubling the ability’s base energy cost.',tier:4},
    {name:'Special Forces',types:['Strategies'],description:'You or one of your allies gain the elite tag.',tier:9},

    //Weapons
    {name:'Cover',types:['Heavy Shield'],description:'You count as in cover against ranged attack abiltiies',tier:0},
        

    //Armor
    {name:'Light Armor',types:['Light Armor'],description:'You gain +4 Defence.',tier:0},
    {name:'Medium Armor',types:['Medium Armor'],description:'You gain +6 Defence. You suffer -1 Finesse.',tier:0},
    {name:'Heavy Armor',types:['Heavy Armor'],description:'You gain +8 Defence. You suffer -1 Finesse and -1 Movement.',tier:0},

    //Combat Accessories
        //Tier 0 
        {name:'Munition Pouch',types:['Munition Pouch'],description:'Your weapon limited abilities have thier limited value increased by 1.',tier:0},
        {name:'Simple Charm',types:['Simple Charm'],description:'You gain +1 death resistance.',tier:0},
        //Tier 1
        {name:'Heart Protector',types:['Heart Protector'],description:'You gain +1 defence.',tier:1},
        {name:'Padded Cloak',types:['Padded Cloak'],description:'You gain +1 resistance.',tier:1},
        //Tier 2
        {name:'Gleaming Goggles',types:['Gleaming Goggles'],description:'You are immune to the blind ailment.',tier:2},
        {name:'Spelljammer\'s Bracer',types:['Spelljammer\'s Bracer'],description:'When you deal energy damage to a focusing character, treat it as doubled when accruing it against the focus threshold.',tier:2},
        //Tier 3
        {name:'Light Stone',types:['Light Stone'],description:'Gain +1 finesse.',tier:3},
        {name:'Quick Stone',types:['Quick Stone'],description:'Gain +1 movement.',tier:3},

    //Utility Accessories
        //Tier 0
        {name:'Arcanist\'s Mess Kit',types:['Arcanist\'s Mess Kit'],description:'Your Arcanist’s Mess Kit cleans itself after use.',tier:0},
        {name:'Backpack',types:['Backpack'],description:'Increase your base weight threshold by 10 lb. Your travel group gains +3 provision score.',tier:0},
        //Tier 1
        {name:'Seafarer\'s Compass',types:['Seafarer\'s Compass'],description:'Always points towards the Anchor.',tier:1},
        {name:'Soothe Stone',types:['Soothe Stone'],description:'Characters within 10 ft. of you are soothed, and become slightly more reasonable.',tier:1},
        //Tier 2
        {name:'Regenerative Garments',types:['Regenerative Garments'],description:'Your clothes repair and clean themselves over time, given at least half of the garment’s materials is intact.',tier:2},
        {name:'Shepard\'s Gloves',types:['Shepard\'s Gloves'],description:'Beasts of your tier or lower will not be hostile to you unless you threaten or harm them.',tier:2},
        //Tier 3
        {name:'Arcane Communicator',types:['Arcane Communicator'],description:'You may choose to transmit anything you say to all characters with paired Arcane Communicators. You can pair communicators with nearby willing characters. You can only clear pairings by clearing all existing pairings.',tier:3},
        {name:'Mindspeak Amulet',types:['Mindspeak Amulet'],description:'You can communicate telepathically with any creature within 10 ft. of you.',tier:3},
    //Combat Enchantments
        //Tier 0
        {name:'Focused',types:['Focused'],description:'Increase your focus thresholds by 6.',tier:0},
        {name:'Staunching',types:['Staunching'],description:'You gain +1 death resistance.',tier:0},
        //Tier 1
        {name:'Hardened',types:['Hardened'],description:'You gain +1 defence.',tier:1},
        {name:'Lethal',types:['Lethal'],description:'You gain +1 lethality.',tier:1},
        {name:'Resistant',types:['Resistant'],description:'You gain +1 resistance.',tier:1},
        //Tier 2
        {name:'Calming',types:['Calming'],description:'You are immune to finesse reduction statuses.',tier:2},
        {name:'Thorned',types:['Thorned'],description:'When you take energy damage due to a melee attack, the attacker takes 3 energy damage.',tier:2},
        //Tier 3
        {name:'Glasscharm',types:['Glasscharm'],description:'Gain +2 lethality. When you suffer the winded status, also suffer the stunned ailment.',tier:3},
        {name:'Invigorating',types:['Invigorating'],description:'You gain +10 energy.',tier:3},
        {name:'Reactive',types:['Reactive'],description:'When you take energy damage, gain +1 resistance until the beginning of your next turn.',tier:3},
        //Tier 4
        {name:'Arc-Powered',types:['Arc-Powered'],description:'Ignore 1 point of finesse and 1 point of movement reductions that come from your worn armor.',tier:4},
        {name:'Hyperlethal',types:['Hyperlethal'],description:'When your attack abilities attached to weapons with the Hyperlethal enchantment score a direct hit, the target’s endurance is reduced by an additional point.',tier:4},
        {name:'Mercurial',types:['Mercurial'],description:'Gain +1 movement. You are immune to attribute ailments that reduce your movement.',tier:4},

    //Utility Enchantments
    {name:'Clean',types:['Clean'],description:'This item cannot be dirtied.',tier:1},
    {name:'Light',types:['Light'],description:'This item’s weight is reduced by 2 lb.',tier:0},
    {name:'Regenerative',types:['Regenerative'],description:'This item repairs and maintains itself over time.',tier:0},

]