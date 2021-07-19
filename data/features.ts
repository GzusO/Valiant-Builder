import { Feature } from "src/app/feature/Feature";

export const featureData: Feature[] =[
    //Profesion Features
    {name:'Artist',types:['Profession','Artist'],abilities:[],traits:[], description:'You make your living creating decorative objects. Whether you create paintings, sculptures, or something more exotic, you make a reasonable amount of money.',tier:0},
    {name:'Blacksmith',types:['Profession','Blacksmith'],abilities:[],traits:[], description:'You make your living crafting equipment for soldiers, guards, and travelers.',tier:0},
    {name:'Tinkerer',types:['Profession','Tinkerer'],abilities:[],traits:[], description:'You make your living crafting useful tools. Some tinkerers focus on useful, practical tools, while others devise more experimental equipment',tier:0},
    {name:'Merchant',types:['Profession','Merchant'],abilities:[],traits:[], description:'You make your living buying and selling goods. Some merchants specialize in moving commodities where they are needed, while other peddle exotic goods.',tier:0},
    {name:'Noble',types:['Profession','Noble'],abilities:[],traits:[], description:'You don’t work for a living, instead spending your time mingling and mixing with other high-class individuals.',tier:0},
    {name:'Traveler',types:['Profession','Traveler'],abilities:[],traits:[], description:'You decided to travel the world rather than pursue a traditional career.',tier:0},
    {name:'Guard',types:['Profession','Guard'],abilities:[],traits:[], description:'You spent most of your adult life posted as a guard, whether you were keeping the wilds at bay in a small settlement or keeping the peace in a larger city.',tier:0},
    {name:'Soldier',types:['Profession','Soldier'],abilities:[],traits:[], description:'You were a professional soldier in an army. Regardless of your specific role, you have developed a strong sense of discipline.',tier:0},
    {name:'Bounty Hunter',types:['Profession','Bounty Hunter'],abilities:[],traits:[], description:'You make your living hunting bounties. Whether you bring in dangerous criminals or slay encroaching beasts, you make a reasonable amount of coin for dangerous work.',tier:0},
    {name:'Physical Laborer',types:['Profession','Physical Laborer'],abilities:[],traits:[], description:'You make your living doing manual, physical labor. It doesn’t pay much, but it has steeled your body.',tier:0},
    {name:'Servant',types:['Profession','Servant'],abilities:[],traits:[], description:'You worked under a wealthy individual or household, trading almost all of your time and autonomy for a comfortable life.',tier:0},
    {name:'Assistant',types:['Profession','Assistant'],abilities:[],traits:[], description:'Bar hands, store clerks, and other peoples employed by business owners to do simple labor. They make a meager living, but have any easy time finding odd jobs wherever they go.',tier:0},
    {name:'Scholar',types:['Profession','Scholar'],abilities:[],traits:[], description:'You are educated above the basic standards of society. In your endeavors to learn, you’ve picked up a few new languages.',tier:0},
    {name:'Priest',types:['Profession','Priest'],abilities:[],traits:[], description:'You’ve devoted yourself to some higher power. Besides some sense of inner piece, this devotion has given you access to a network of safe places, granted you’re travelling in friendly territory.',tier:0},
    {name:'Physician',types:['Profession','Physician'],abilities:[],traits:[], description:'Doctor',tier:0},
    {name:'Criminal',types:['Profession','Criminal'],abilities:[],traits:[], description:'Regardless of how you spin your tale, the truth is quite simple: you take things from people.',tier:0},
   
    //Lineage Features

    //Cossim Features
    {name:'Cosmic Patterns', types:['Lineage','Cossim','Persistent'],description:'The glowing markings on your skin make it easy to pick you out of a crowd. You also have a hard time hiding in the dark. Perhaps, though, they contain some deeper secrets…',abilities:[],traits:[],tier:0},
    {name:'Deathless Being',types:['Lineage','Cossim','Primary'],description:'You are purpose-built to outlast. While others wither and die, you persist.',abilities:[],traits:[],tier:0},
    {name:'Fitful Existence',types:['Lineage','Cossim','Primary'],description:'Cossim never seem to be able to stay in one place for too long. For you, this is true in a very literal sense.',abilities:[],traits:[],tier:0},
    {name:'Nova Rebound',types:['Lineage','Cossim','Primary'],description:'The Cossim are people of extremes. For every action, they have prepared a greater and opposite reaction.',abilities:[],traits:[],tier:0},
    {name:'Dazing Brilliance',types:['Lineage','Cossim','Primary'],description:'When you want to, you can shine bright enough to send even the most stalwart foes reeling.',abilities:[],traits:[],tier:0},
    {name:'Cosmic Visions',types:['Lineage','Cossim','Primary'],description:'For brief moments you can see the world for what it truly is.',abilities:[],traits:[],tier:0},
    {name:'Cosmic Inspiration',types:['Lineage','Cossim','Secondary'],description:'Your physical form and longevity are clearly inspired by the cosmos. The vastness of this is not lost on you, and you are able to draw upon an endless well of inspiration.',abilities:[],traits:[],tier:0},
    {name:'Patience of Eons',types:['Lineage','Cossim','Secondary'],description:'Your perception of time is stretched, and as such you have a patience far beyond another folk. This allows you to enact grand designs and imperceivable plans.',abilities:[],traits:[],tier:0},
    {name:'Solitary Wanderer',types:['Lineage','Cossim','Secondary'],description:'You\'ve always been more capable when on your own. This is especially true when travelling, and you are free of the sluggish tendencies of others.',abilities:[],traits:[],tier:0},
    {name:'Cosmic Connections',types:['Lineage','Cossim','Secondary'],description:'You can tap into an old, peculiar power not often granted to regular people.',abilities:[],traits:[],tier:0},
    {name:'Strange Sense',types:['Lineage','Cossim','Secondary'],description:'You can’t quite explain why, but you’ve got a very good sense for a very specific characteristic.',abilities:[],traits:[],tier:0},
    
    //Girt Features
    {name:'Skin and Bones', types:['Lineage','Girt','Persistent'], description:'Your stature may be meek, but that meekness confers subtle benefits.',abilities:[],traits:[],tier:0},
    {name:'Master of Thrift',types:['Lineage','Girt','Primary'],description:'You can make a little go a long way. Practically speaking, this allows you stretch your resources further.',abilities:[],traits:[],tier:0},
    {name:'Aspect of the Sands',types:['Lineage','Girt','Primary'],description:'Your movements mirror those of sand blowing across dunes: effortless and meandering.',abilities:[],traits:[],tier:0},
    {name:'Cunning Tactics',types:['Lineage','Girt','Primary'],description:'The Girt value results above some nebulous concept of honor. If an advantage is to be had, you will take it.',abilities:[],traits:[],tier:0},
    {name:'Staunch Maintainer',types:['Lineage','Girt','Primary'],description:'You know the value of well-maintained equipment. On the road, it can mean the difference between life and death.',abilities:[],traits:[],tier:0},
    {name:'Decorated Figure',types:['Lineage','Girt','Primary'],description:'An accomplished merchant must look the part. If that means tacking on a few extra pieces of apparel, so be it.',abilities:[],traits:[],tier:0},
    {name:'Careful Packing',types:['Lineage','Girt','Secondary'],description:'You are no strange to long hauls with heavy loads.',abilities:[],traits:[],tier:0},
    {name:'Skillful Navigator',types:['Lineage','Girt','Secondary'],description:'You have learned the art of optimizing routes, and those you travel with benefit greatly from this expertise.',abilities:[],traits:[],tier:0},
    {name:'Silver Tongue',types:['Lineage','Girt','Secondary'],description:'You know your way around a conversation, and put those skills to good use when making first impressions with fellow merchants.',abilities:[],traits:[],tier:0},
    {name:'The Perfect Pitch',types:['Lineage','Girt','Secondary'],description:'You are no stranger to the art of the deal. Even in the most inappropriate of times, you could sell anything to anyone.',abilities:[],traits:[],tier:0},
    {name:'Well-Traveled',types:['Lineage','Girt','Secondary'],description:'You’ve met many peoples in your travels, and have picked up a few foreign tongues.',abilities:[],traits:[],tier:0},

    //Derge Features
    {name:'Savage Physique',types:['Lineage','Derge','Persistent'],description:'The Derge physique requires a lot of fuel to maintain, but if you provide your body with what it needs it will serve you well.',abilities:[],traits:[],tier:0},
    {name:'Violent Soul',types:['Lineage','Derge','Primary'],description:'Whatever your means, you find it particularly easy to maim things.',abilities:[],traits:[],tier:0},
    {name:'Unstoppable Fury',types:['Lineage','Derge','Primary'],description:'You just don\'t know when to stop.',abilities:[],traits:[],tier:0},
    {name:'Savage Instincts',types:['Lineage','Derge','Primary'],description:'You are most effective when you give in to your base, violent tendencies.',abilities:[],traits:[],tier:0},
    {name:'Bloody Resilience',types:['Lineage','Derge','Primary'],description:'When most people would lie down and bleed out, you remain standing.',abilities:[],traits:[],tier:0},
    {name:'Savage Resolve',types:['Lineage','Derge','Primary'],description:'Nothing scares you, not even things that probably should.',abilities:[],traits:[],tier:0},
    {name:'Clan Provider',types:['Lineage','Derge','Secondary'],description:'You know how to pry the fruits of the land from its cold, dirty grasp.',abilities:[],traits:[],tier:0},
    {name:'Brutal Crafting',types:['Lineage','Derge','Secondary'],description:'You can create dangerous implements from even the crudest of materials.',abilities:[],traits:[],tier:0},
    {name:'Imposing Presence',types:['Lineage','Derge','Secondary'],description:'Whether out of respect or fear, your presence drives submission.',abilities:[],traits:[],tier:0},
    {name:'Primal Stature',types:['Lineage','Derge','Secondary'],description:'You\'ve got an air about you, some sort of aura that puts civilized folk on edge.',abilities:[],traits:[],tier:0},
    {name:'Wild Travels',types:['Lineage','Derge','Secondary'],description:'There are tricks to navigating the wild, untamed lands, and you know most of them.',abilities:[],traits:[],tier:0},

    //Hjark Features
    {name:'Chilled Veins',types:['Lineage','Hjark','Persistent'],description:'You were built to thrive in the cold, and generations of further adaptation has reinforced this trait.',abilities:[],traits:[],tier:0},
    {name:'Winterhide',types:['Lineage','Hjark','Primary'],description:'Your flesh and resolve have been hardened by generations of exposure.',abilities:[],traits:[],tier:0},
    {name:'Highlander',types:['Lineage','Hjark','Primary'],description:'You are used to fighting in extreme conditions and poor footing.',abilities:[],traits:[],tier:0},
    {name:'Martial Tradition',types:['Lineage','Hjark','Primary'],description:'You are used to fighting in extreme conditions and poor footing.',abilities:[],traits:[],tier:0},
    {name:'Legendary Strikes',types:['Lineage','Hjark','Primary'],description:'You muster all you have for a singular strike, something sure to turn the tide of battle.',abilities:[],traits:[],tier:0},
    {name:'Battlefield Maintenance',types:['Lineage','Hjark','Primary'],description:'For you, it\'s never too late to take inventory.',abilities:[],traits:[],tier:0},
    {name:'Family Business',types:['Lineage','Hjark','Secondary'],description:'You were always taught that if you put good into something, you get good out.',abilities:[],traits:[],tier:0},
    {name:'Needless',types:['Lineage','Hjark','Secondary'],description:'You\'ve always been able to take care of yourself, even in the harshest of times.',abilities:[],traits:[],tier:0},
    {name:'Warmth of Winter',types:['Lineage','Hjark','Secondary'],description:'In spite of the cold, stony peaks associated with your people, you are a warm wecloem to any social gathering.',abilities:[],traits:[],tier:0},
    {name:'Cast-Iron Kidneys',types:['Lineage','Hjark','Secondary'],description:'You\'re no strange to drink.',abilities:[],traits:[],tier:0},
    {name:'Craftsperson Comradery',types:['Lineage','Hjark','Secondary'],description:'There\s this unspoken understanding between craftspeople - a mutual respect not found in most other professions.',abilities:[],traits:[],tier:0},

    //Ingra Features
    {name:'Self-Actualization',types:['Lineage','Ingra','Persistent'],description:'Your very nature directs you to be perfect, with no regard for how realistic that goal may be.',abilities:[],traits:[],tier:0},
    {name:'Glassheart',types:['Lineage','Ingra','Primary'],description:'You are unbreakable and unyielding, always dancing on the ede of life and death.',abilities:[],traits:[],tier:0},
    {name:'Aspect of the Vulture',types:['Lineage','Ingra','Primary'],description:'When you hone in on a target, nothing short of a mortal blow can stop you from hitting your mark.',abilities:[],traits:[],tier:0},
    {name:'Graceful Form',types:['Lineage','Ingra','Primary'],description:'You are able to duck and weave effortlessly through dangerous battlefields.',abilities:[],traits:[],tier:0},
    {name:'Will of Stone',types:['Lineage','Ingra','Primary'],description:'Even in the face of impossible odds, you press forward.',abilities:[],traits:[],tier:0},
    {name:'Honed Edge',types:['Lineage','Ingra','Primary'],description:'Most forces that expect to face Ingra leave their medics at home.',abilities:[],traits:[],tier:0},
    {name:'Fruits of the Desert',types:['Lineage','Ingra','Secondary'],description:'Even the most barren of lands bear fruit, and you know how to coax said fruit from those lands.',abilities:[],traits:[],tier:0},
    {name:'Precious Crafts',types:['Lineage','Ingra','Secondary'],description:'Your people have a knack for art in all of its forms. with a focused effort, you are able to create much grander works than most.',abilities:[],traits:[],tier:0},
    {name:'Silver Eyes',types:['Lineage','Ingra','Secondary'],description:'You see what others miss, and can perceive that which is hidden.',abilities:[],traits:[],tier:0},
    {name:'Tireless Sentinel',types:['Lineage','Ingra','Secondary'],description:'Your body is tuned finer than most. You can go far longer before needing to rest.',abilities:[],traits:[],tier:0},
    {name:'Runeweaver',types:['Lineage','Ingra','Secondary'],description:'The Ingra have a knack for applying enchantments. They can make simple, cheap materials go as far as the traditional precious resources often used in the trade.',abilities:[],traits:[],tier:0},

    //Marr Features
    {name:'Adaptive Form',types:['Lineage','Marr','Persistent'],description:'While others adapt on the scale of generations, you have the peculiar ability to actively adapt to your surroundings.',abilities:[],traits:[],tier:0},
    {name:'Unassuming Demeanor',types:['Lineage','Marr','Primary'],description:'Even in the fever pitch of battle, people tend to lose track of you.',abilities:[],traits:[],tier:0},
    {name:'Simple Opportunist',types:['Lineage','Marr','Primary'],description:'You\'re not especially tactically-minded, yet you always seem to find yourself in favorable positions.',abilities:[],traits:[],tier:0},
    {name:'Practical Survival',types:['Lineage','Marr','Primary'],description:'You leave the glory for those with a shorter life expectancy.',abilities:[],traits:[],tier:0},
    {name:'Sidekick',types:['Lineage','Marr','Primary'],description:'Marr heroes are few in number, but heroes with Marr companions are as common as Marr themselves.',abilities:[],traits:[],tier:0},
    {name:'Unnatural Adaptation',types:['Lineage','Marr','Primary'],description:'It\'s uncanny how quickly you can adapt to a situation.',abilities:[],traits:[],tier:0},
    {name:'Plain',types:['Lineage','Marr','Secondary'],description:'You\'re just pretty average. This unassuming aura lets you get away with a lot.',abilities:[],traits:[],tier:0},
    {name:'Simple Means',types:['Lineage','Marr','Secondary'],description:'You don;t want for anything in particularly great, and are able to achieve "good enough" with much less effort than most.',abilities:[],traits:[],tier:0},
    {name:'Flash of Brilliance',types:['Lineage','Marr','Secondary'],description:'Every once in a while, a Marr comes up with something absolutely marvelous.',abilities:[],traits:[],tier:0},
    {name:'Wanderlust',types:['Lineage','Marr','Secondary'],description:'Most Marr tend to stay put, but some have an innate need to wander. When leveraged, this can be a powerful drive for an adventurer.',abilities:[],traits:[],tier:0},
    {name:'Comfortable and Quiet',types:['Lineage','Marr','Secondary'],description:'The greatest benefit of being a Marr adventurer is that nobody bothers you during your time off.',abilities:[],traits:[],tier:0},

    //Selk Features
    {name:'Expanded Mind',types:['Lineage','Selk','Persistent'],description:'Your mind is a powerful tool, which is good because you\'re not quite as strong, fast, or resilient as other people.',abilities:[],traits:[],tier:0},
    {name:'Combat Deduction',types:['Lineage','Selk','Primary'],description:'Your quick qits thrive in the heat of battle, allowing you to plan ahead further than others.',abilities:[],traits:[],tier:0},
    {name:'Lightning Recovery',types:['Lineage','Selk','Primary'],description:'You never miss a beat.',abilities:[],traits:[],tier:0},
    {name:'Fated Longevity',types:['Lineage','Selk','Primary'],description:'More impressive than the long lifespans of Selk is the lack of statistical outliers. Almost every Selk lives up to the natural lifespan.',abilities:[],traits:[],tier:0},
    {name:'Commanding Presence',types:['Lineage','Selk','Primary'],description:'You\'re a natural leader, born to direct and dictate.',abilities:[],traits:[],tier:0},
    {name:'Purity of Focus',types:['Lineage','Selk','Primary'],description:'With concentration and focus, you can expand your mind momentarily.',abilities:[],traits:[],tier:0},
    {name:'Grandiosity',types:['Lineage','Selk','Secondary'],description:'The Selk are known for their nobility. Even the lowliest can bear the appearance of wealth and power.',abilities:[],traits:[],tier:0},
    {name:'Bright Minded',types:['Lineage','Selk','Secondary'],description:'The Selk are more intelligent than most. When used practically, this allows them to create marvelous tools and equipment.',abilities:[],traits:[],tier:0},
    {name:'Natural Socialite',types:['Lineage','Selk','Secondary',],description:'You know others almost better than you know yourself. You\'re also no stranger to using this skill to your own advantage.',abilities:[],traits:[],tier:0},
    {name:'Arcane Tinkering',types:['Lineage','Selk','Secondary'],description:'The Selk are powerful enchanters, able to weave arcane energies into objects much more effectively than other peoples.',abilities:[],traits:[],tier:0},
    {name:'Multitalented',types:['Lineage','Selk','Secondary'],description:'You\'re not satistfied with mastery over a single skill. Forutnately, you\'re also a much faster learner than most.',abilities:[],traits:[],tier:0},

    //Vyld Features
    {name:'Unfamiliar Form', types:['Lineage','Vyld','Persistent'],description:'The softer folk of the Barrier Sea find you off-putting at best.',abilities:[],traits:[],tier:0},
    {name:'Martial Endurance', types:['Lineage','Vyld','Primary'],description:'Everything becomes tired eventually, but you can stave off exhaustion longer than most.',abilities:[],traits:[],tier:0},
    {name:'Masterful Motion',types:['Lineage','Vyld','Primary'],description:'Perfection stems from habit. You would know this, as your habits are perfect.',abilities:[],traits:[],tier:0},
    {name:'Bone Plating',types:['Lineage','Vyld','Primary'],description:'Bone plates cover your thick skin. This prevents you from fitting into conventional armor, but offers its own protection.',abilities:[],traits:[],tier:0},
    {name:'Adapted Eyes',types:['Lineage','Vyld','Primary'],description:'Of all the Vyld mutations, the ability to see in darkness is perhaps the most coveted by the other lineages.',abilities:[],traits:[],tier:0},
    {name:'Spontaneous Mutations',types:['Lineage','Vyld','Primary'],description:'Your genetic situation is excessive even for a Vyld.',abilities:[],traits:[],tier:0},
    {name:'Ancestral Instinct',types:['Lineage','Vyld','Secondary'],description:'In the most dangerous places surface the oldest instincts.',abilities:[],traits:[],tier:0},
    {name:'Functional Paranoia',types:['Lineage','Vyld','Secondary'],description:'The Vyld live dangerous lives in dangerous places. They are thus naturally inclined to some healthy paranoia.',abilities:[],traits:[],tier:0},
    {name:'Warrior Culture',types:['Lineage','Vyld','Secondary',],description:'Living amongst accomplished warriors, you have a good eye for the capabilities of others.',abilities:[],traits:[],tier:0},
    {name:'Natural Aspects',types:['Lineage','Vyld','Secondary'],description:'Vyld are undeniably closer to nature than other peoples.',abilities:[],traits:[],tier:0},
    {name:'Path of the Warrior',types:['Lineage','Vyld','Secondary'],description:'The Vyld have earned a reputation as a warrior people. While not always true, a clever Vyld can use this to their advantage.',abilities:[],traits:[],tier:0},
    
    //Characteristic Features

    //Physical Power Features
    {name:'Meek Form',types:['Characteristic','Physical Power'],description:'You are able to move your body, and maybe even lift small objects without hurting yourself.',abilities:[],traits:[],tier:1},
    {name:'Physical Training',types:['Characteristic','Physical Power'],description:'Through moderate physical activity, you have become slightly more than skin and bones.',abilities:[],traits:[],tier:2},
    {name:'Athletic Form',types:['Characteristic','Physical Power'],description:'Whether through regular training or natural gifts, you have physical capabilities beyond the average person.',abilities:[],traits:[],tier:3},
    {name:'Powerful Build',types:['Characteristic','Physical Power'],description:'You have trained and labored, and have become a physical force to be reckoned with.',abilities:[],traits:[],tier:4},
    {name:'Perfect Form',types:['Characteristic','Physical Power'],description:'You have pushed your body to its limits, and then beyond. You are nearly unmatched in physical prowess.',abilities:[],traits:[],tier:5},
    
    //Physical Acuity Features
    {name:'Simple Agility',types:['Characteristic','Physical Acuity'],description:'You can move at appreciable speeds. Nothing special, but it gets the job done.', tier:1,abilities:[],traits:[]},
    {name:'Quick Feet',types:['Characteristic','Physical Acuity'],description:'While you won\'t win any races, you could probably run one without making a fool of yourself.', tier:2,abilities:[],traits:[]},
    {name:'Honed Agility',types:['Characteristic','Physical Acuity'],description:'You are faster than most, and your coordination and finesse are something of note.', tier:3,abilities:[],traits:[]},
    {name:'Improved Dexterity',types:['Characteristic','Physical Acuity'],description:'You have further improved your physical speed and coordination. You find that most people can no longer keep up with you.', tier:4,abilities:[],traits:[]},
    {name:'Absolute Agility',types:['Characteristic','Physical Acuity'],description:'Your body is under your total control. Every movement is clean, deliberate, and blidningly quick.', tier:5,abilities:[],traits:[]},
    
    //Physical Resilience Features
    {name:'Thin Skin',types:['Characteristic','Physical Resilience'],description:'You have some inherent barriers included in your physiology. It might keep you from dying.', tier:1,abilities:[],traits:[]},
    {name:'Natural Defence',types:['Characteristic','Physical Resilience'],description:'You are capable of protecting your vitals, pushing through minor scrapes and bruises.', tier:2,abilities:[],traits:[]},
    {name:'Thick Skin',types:['Characteristic','Physical Resilience'],description:'Your tough hide is a natural deterrent to those wishing you harm.', tier:3,abilities:[],traits:[]},
    {name:'Reinforced Body',types:['Characteristic','Physical Resilience'],description:'You leave almost no openings in your defence, and brush off light blows with ease.', tier:4,abilities:[],traits:[]},
    {name:'Stone Skin',types:['Characteristic','Physical Resilience'],description:'Your flesh is stone, and your body an immovable object.', tier:5,abilities:[],traits:[]},
    
    //Mental Power Features
    {name:'Basic Cognition',types:['Characteristic','Mental Power'],description:'You have achieved the bare minimum intelligence to be considered sentient. Congratulations!', tier:1,abilities:[],traits:[]},
    {name:'Deduction',types:['Characteristic','Mental Power'],description:'You have grasped the concepts of logic and reasoning.', tier:2,abilities:[],traits:[]},
    {name:'Advanced Cognition',types:['Characteristic','Mental Power'],description:'Plans and designs are your tools to success. Through patterns, you can predict the future.', tier:3,abilities:[],traits:[]},
    {name:'Expanded Mind',types:['Characteristic','Mental Power'],description:'Your mental prowess is exceptional, and your capability for complex tasks notable.', tier:4,abilities:[],traits:[]},
    {name:'Ascended Cognition',types:['Characteristic','Mental Power'],description:'you have reached the limits of the mind\'s capabilities. There is no problem you cannot fidn the solution to.', tier:5,abilities:[],traits:[]},
    
    //Mental Acuity Features
    {name:'Basic Wit',types:['Characteristic','Mental Acuity'],description:'You can react to external stimuli in a somewhat timely manner.', tier:1,abilities:[],traits:[]},
    {name:'Instincts',types:['Characteristic','Mental Acuity'],description:'You are able to quickly and automatically respond, giving you an edge over the sloths of the world.', tier:2,abilities:[],traits:[]},
    {name:'Advanced Wit',types:['Characteristic','Mental Acuity'],description:'You have committed to instinct what others must accomplish actively and deliberately', tier:3,abilities:[],traits:[]},
    {name:'Razor Instincts',types:['Characteristic','Mental Acuity'],description:'You have honed your instincts to a deadly edge.', tier:4,abilities:[],traits:[]},
    {name:'Perfect Wit',types:['Characteristic','Mental Acuity'],description:'You have become virtually incapable of stuttering, faltering, or stammering.', tier:5,abilities:[],traits:[]},
    
    //Mental Resilience Features
    {name:'Fragile Will',types:['Characteristic','Mental Resilience'],description:'You can almost stand up for yourself.', tier:1,abilities:[],traits:[]},
    {name:'Mental Fortitude',types:['Characteristic','Mental Resilience'],description:'You can hold yourself together well enough to avoid crubmling in the face of adversity.', tier:2,abilities:[],traits:[]},
    {name:'Iron Will',types:['Characteristic','Mental Resilience'],description:'your willis stronger than most people\'s. You stand tall against threats that other would cower from.', tier:3,abilities:[],traits:[]},
    {name:'Tested Psyche',types:['Characteristic','Mental Resilience'],description:'You are no stranger to adversary. You have trained yourself to be unflinching in the most uncertain of times, to the point of being an inspiration to others.', tier:4,abilities:[],traits:[]},
    {name:'Perfect Will',types:['Characteristic','Mental Resilience'],description:'Your will is your being, and both are neigh unbreakable.', tier:5,abilities:[],traits:[]},
    
    //Class Features

    //Aspirant Features
    {name:'Arcane Basics',types:['Class','Primary','Core','Aspirant'],description:'You\'ve got raw capability, and have already picked up a few arcane tricks. However, you\'ve got some work to do before you can consider yourself a proper arcanist.', tier:0,abilities:[],traits:[]},
    {name:'Warfare Basics',types:['Class','Primary','Core','Aspirant'],description:'You can hold your weapon correctly, and know a few simple techniques.', tier:0,abilities:[],traits:[]},
    {name:'Tactical Basics',types:['Class','Primary','Core','Aspirant'],description:'There\'s a lot of theory behind combat strategies, but you\'ve managed to pick up on a few simple ideas.', tier:0,abilities:[],traits:[]},
    {name:'Alchemical Experimentations',types:['Class','Primary','Supplmentary','Aspirant'],description:'The practice of alchemy has largely been replaced by more practical processes. However, this doesn\'t keep an eccentric few from honing the talent anyways.', tier:0,abilities:[],traits:[]},
    {name:'Pugilism',types:['Class','Primary','Supplmentary','Aspirant'],description:'Bare-knuckled brawlers are a rare sight on the battlefield. Fighting with flesh alone is not easy, but masters of the craft are well-respected', tier:0,abilities:[],traits:[]},
    {name:'Frenzied Combatant',types:['Class','Primary','Supplmentary','Aspirant'],description:'You\'ve a short temper and an animal-like savagery in battle. Once you submit to this savagery, however, it takes a fair amount of bloodshed to bring you back to your senses.', tier:0,abilities:[],traits:[]},
    {name:'Ascendant Bond',types:['Class','Primary','Supplmentary','Aspirant'],description:'There is plenty of ambient arcane energy flowing throughout the natural world. Infrequently, this energy manifests into a peculiar phenomenon known as an Ascendant. Ascendant require some sort of host to survive, else they burn up their available energy soon after forming.', tier:0,abilities:[],traits:[]},
    {name:'Marked Prey',types:['Class','Primary','Supplmentary','Aspirant'],description:'Once you\'ve got your sights set on something, it\'s only a matter of time before it meets its demise.', tier:0,abilities:[],traits:[]},
    {name:'Charged Blood',types:['Class','Primary','Supplmentary','Aspirant'],description:'Whether it\'s hereditary or a freak mutation, your blood contains a significant amount of natural arcane energy. Having most likely lived like this for most of your life, you\'ve become quite adept at making use of this stored energy.', tier:0,abilities:[],traits:[]},
    {name:'Daring Flair',types:['Class','Primary','Supplmentary','Aspirant'],description:'Many adventurers learn to fight as a grim necessity. For you, however, a good fight is a great opportunity to try out some fancy new maneuvers.', tier:0,abilities:[],traits:[]},
    {name:'Light Traveler',types:['Class','Secondary','Aspirant'],description:'You are used to travelling light, much to the delight of your travelling groups.', tier:0,abilities:[],traits:[]},
    {name:'Basic Economy',types:['Class','Secondary','Aspirant'],description:'You\'ve made a few good deals in your time. However, more importantly, you\'ve been ripped off enough times to know a bad trade.', tier:0,abilities:[],traits:[]},
    {name:'People Person',types:['Class','Secondary','Aspirant'],description:'Your pleasant demeanor may not get you far in a fight, but it can help prevent them!', tier:0,abilities:[],traits:[]},
    {name:'Pack Mule',types:['Class','Secondary','Aspirant'],description:'You\'re good at carrying things. It\'s not flashy, but by the gods it\'s useful.', tier:0,abilities:[],traits:[]},
    {name:'Touched Mind',types:['Class','Secondary','Aspirant'],description:'Whether it be a higher power, a deeper power, or just manic tendencies, your mind is not entirely under your control.', tier:0,abilities:[],traits:[]},
    
    //Warrior Features
    {name:'Warriors',types:['Class','Global','Warrior'],description:'You are a warrior, a capable combatant who relies on body and steel alone to overcome your enemies.', tier:0,abilities:[],traits:[]},
    
    {name:'Martial Stances',types:['Class','Primary','Warrior'],description:'Focus on the fundamentals.', tier:1,abilities:[],traits:[]},
    {name:'Martial Finesse',types:['Class','Primary','Warrior'],description:'Advantageous positions can be just as lethal as blades and bolts.', tier:1,abilities:[],traits:[]},
    {name:'Protector',types:['Class','Primary','Warrior'],description:'Taking additional blows is as necessary as it is unpleasant, for not everyone is as sturdy as you are.', tier:1,abilities:[],traits:[]},
    {name:'Adrenaline Rush',types:['Class','Primary','Warrior'],description:'You\'ve learned to channel your pain into a powerful rage.', tier:2,abilities:[],traits:[]},
    {name:'Battle Conditioning',types:['Class','Primary','Warrior'],description:'With rigorous conditioning, you\'re able to ignore the weight of heavy armors.', tier:2,abilities:[],traits:[]},
    {name:'Dual-Wielding',types:['Class','Primary','Warrior'],description:'Fighting with two weapons requires exceptional coordination and awareness in order to keep the sharp ends pointed towards your enemies.', tier:2,abilities:[],traits:[]},
    {name:'Bided Time',types:['Class','Primary','Warrior'],description:'Patience often precedes greatness.', tier:3,abilities:[],traits:[]},
    {name:'Stalwart Challenger',types:['Class','Primary','Warrior'],description:'In the heat of battle, none can deny your challenge.', tier:3,abilities:[],traits:[]},
    {name:'Trading Blows',types:['Class','Primary','Warrior'],description:'You\'re confident that you can take a hit, and more confident that your opponents won\'t be able to take yours.', tier:3,abilities:[],traits:[]},
    {name:'Active Defenses',types:['Class','Primary','Warrior'],description:'Heavy armor may ward off most blows, but skilled opponents require more active defensive measures.', tier:4,abilities:[],traits:[]},
    {name:'Advanced Martial Stances',types:['Class','Primary','Warrior'],description:'You\'ve mastered the fundamentals, and have delved into advanced martial arts.', tier:4,abilities:[],traits:[]},
    
    {name:'Masterful Maneuvers',types:['Class','Primary','Warrior'],description:'A single, deliberate strike is all you need.', tier:6,abilities:[],traits:[]},
    {name:'Deathless',types:['Class','Primary','Warrior'],description:'Heros often live on borrowed time.', tier:6,abilities:[],traits:[]},
    {name:'Masterful Stances',types:['Class','Primary','Warrior'],description:'You exist in a martial superposition.', tier:6,abilities:[],traits:[]},
    
    {name:'Eternal Body',types:['Class','Primary','Warrior'],description:'Your legacy may outlive your body, but not by much.', tier:10,abilities:[],traits:[]},
    
    {name:'Behemoth Momentum',types:['Class','Primary','Warrior'],description:'With masterful precision, you can turn a charge into a sundering cleave.', tier:9,abilities:[],traits:[]},
    
    {name:'Arms Connoisseur',types:['Class','Secondary','Warrior'],description:'You\'ve an appreciation of deadly implements.', tier:1,abilities:[],traits:[]},
    {name:'Local Notoriety',types:['Class','Secondary','Warrior'],description:'Your blend of martial skill and approachable demeanor make you popular among common folk.', tier:1,abilities:[],traits:[]},
    {name:'Martial Discipline',types:['Class','Secondary','Warrior'],description:'True martial mastery requries efficiency both on and off the battlefield.', tier:1,abilities:[],traits:[]},
    {name:'Armor Training',types:['Class','Secondary','Warrior'],description:'Armor doesn\'t feel nearly as heavyt when you\'re used to wearing it.', tier:2,abilities:[],traits:[]},
    {name:'Lingering Adrenaline',types:['Class','Secondary','Warrior'],description:'A good fight gets you riled up for much longer than it should.', tier:2,abilities:[],traits:[]},
    {name:'Monster Hunter',types:['Class','Secondary','Warrior'],description:'Your trophies serve as a visceral reminder of your accomplishments.', tier:2,abilities:[],traits:[]},
    {name:'Notably Quick',types:['Class','Secondary','Warrior'],description:'You\'re faster than most.', tier:3,abilities:[],traits:[]},
    {name:'Notably Strong',types:['Class','Secondary','Warrior'],description:'You\'re stronger than', tier:3,abilities:[],traits:[]},
    {name:'Notably Tough',types:['Class','Secondary','Warrior'],description:'You\'re tougher than most.', tier:3,abilities:[],traits:[]},
    {name:'Pacifying Presence',types:['Class','Secondary','Warrior'],description:'Capable warriors can establish order by their mere presence.', tier:4,abilities:[],traits:[]},
    {name:'Sized Up',types:['Class','Secondary','Warrior'],description:'Yeah, you could probably lift that.', tier:4,abilities:[],traits:[]},
    {name:'Well-Founded Threats',types:['Class','Secondary','Warrior'],description:'When you threaten harm to another, it\'s very clear that it isn\'t an empty gesture.', tier:4,abilities:[],traits:[]},

    //Arcanist Features
    {name:'Arcanists',types:['Class','Global','Arcanist'],description:'You are an arcanist, able to shape the world through your will alone.', tier:0,abilities:[],traits:[]},
    
    {name:'Practiced Repertoire',types:['Class','Primary','Arcanist'],description:'Minute optimizations accumulate into measureable improvements.', tier:1,abilities:[],traits:[]},
    {name:'Steady Mind',types:['Class','Primary','Arcanist'],description:'Many novice arcanists have fallen in battle, unable to focus over the sounds of conflict.', tier:1,abilities:[],traits:[]},
    {name:'Arcane Munitions',types:['Class','Primary','Arcanist'],description:'Certain arcanists find it useful to supplement their repertoire with projectile weaponry, and find that arcane missile can substitute mundane ones with great efficiency.', tier:1,abilities:[],traits:[]},
     
    {name:'Arcane Restoration',types:['Class','Primary','Arcanist'],description:'Very careful and exact manipulation of arcane forces can be used to mend and revitalize. Of course, this still requires a working understanding of your subject\'s physiology and some understanding of equivalent exchange.', tier:2,abilities:[],traits:[]},
    {name:'Stable Recovery',types:['Class','Primary','Arcanist'],description:'Your mastery over the fundamentals of energy conservation allow you to enter a more stable recovery state after substantial exertions.', tier:2,abilities:[],traits:[]},
    {name:'Arcane Armors',types:['Class','Primary','Arcanist'],description:'With enough practice, an arcanist can maintain a passive shell of force around themselves. This arcane shell is as effective as most light armors.', tier:2,abilities:[],traits:[]},
    

    {name:'Hyperconscious',types:['Class','Primary','Arcanist'],description:'You are able to delegate increasingly complex tasks to your passive subconscious mind.', tier:3,abilities:[],traits:[]},
    {name:'Overcharging',types:['Class','Primary','Arcanist'],description:'Your body is a conduit capable of channeling dangerous amounts of arcane energy.', tier:3,abilities:[],traits:[]},
    {name:'Practiced Experimentation',types:['Class','Primary','Arcanist'],description:'You\'re what more classical arcanist would call "dangerously adventurous".', tier:3,abilities:[],traits:[]},
    
    {name:'Masterful Extensions',types:['Class','Primary','Arcanist'],description:'Brief flashes of power are novice displays. True masters of the arcane can maintain deadly effects for extended periods of time, ravaging battlefields with deadly energies.', tier:9,abilities:[],traits:[]},
    
    {name:'Arcane Signals',types:['Class','Secondary','Arcanist'],description:'Since telepathy is difficult to learn, most voice arcanist bother their peers with crude arcane pings and flashes.', tier:1,abilities:[],traits:[]},
    {name:'Benign Runes',types:['Class','Secondary','Arcanist'],description:'Even master runebinders can appreciate an aesthetically pleasing rune, even if it doesn\'t actaully do anything.', tier:1,abilities:[],traits:[]},
    {name:'Street Tricks',types:['Class','Secondary','Arcanist'],description:'They won\'t win you any awards, but these little arcane tricks are a welcome respite from more taxing arcane spells.', tier:1,abilities:[],traits:[]},
    {name:'Improved Benign Runes',types:['Class','Secondary','Arcanist'],description:'While still useless, more masterful binding of these runes can create permanent arcane effects.', tier:2,abilities:[],traits:[]},
    {name:'Mystifying Display',types:['Class','Secondary','Arcanist'],description:'With a bit of practice under your belt, you\'re ready to entertain (or distract) the masses.', tier:2,abilities:[],traits:[]},
    {name:'Object Manipulation',types:['Class','Secondary','Arcanist'],description:'The process of moving things via arcane forces is a simple trick when working with small objects. Larger objects, however, require much more effort to manipulate.', tier:2,abilities:[],traits:[]},
    {name:'Animated Assistance',types:['Class','Secondary','Arcanist'],description:'It\'s common for young arcanists to simply instruct their chores to be done by simple animatta, or for arcane craftsmen to animate their tools for more efficiency.', tier:3,abilities:[],traits:[]},
    {name:'Remote Senses',types:['Class','Secondary','Arcanist'],description:'With careful probing of remote arcane fields, an adept arcanist can effectively see remote areas.', tier:3,abilities:[],traits:[]},
    {name:'Telepathic Communication',types:['Class','Secondary','Arcanist'],description:'You\'ve figured out telepathy, which is much more complicated than it may seem.', tier:3,abilities:[],traits:[]},
    {name:'Remote Observation',types:['Class','Secondary','Arcanist'],description:'Elite arcanist can, to an extend, exist in two places at once.', tier:6,abilities:[],traits:[]},
    
    //Specialist Features
    {name:'Specialists',types:['Class','Global','Specialist'],description:'You are a specialist, a sharp-witted agent able to manipulate others in and out of combat.', tier:0,abilities:[],traits:[]},
    
    {name:'Battlefield Distractions',types:['Class','Primary','Specialist'],description:'You have a knack for trickery, and have found that your tricks can have dire consequences if applied at an opportune time.', tier:1,abilities:[],traits:[]},
    {name:'Munitions Resupply',types:['Class','Primary','Specialist'],description:'Most would consider it reckless to carry around this much ammunition.', tier:1,abilities:[],traits:[]},
    {name:'Invigorating Brews',types:['Class','Primary','Specialist'],description:'Whatever you may have around for ingredients, you\'re always able to brew up something hearty.', tier:1,abilities:[],traits:[]},
    {name:'Battlefield Mobility',types:['Class','Primary','Specialist'],description:'Your voice can be heard above the sounds of battle, inspiring your allies.', tier:2,abilities:[],traits:[]},
    {name:'Inspiring Resolve',types:['Class','Primary','Specialist'],description:'It\'s been proven that it\'s much easier to stay alive when somebody\'s screaming at you.', tier:2,abilities:[],traits:[]},
    {name:'Good Eyes',types:['Class','Primary','Specialist'],description:'Your eyes work better than most, allowing for more precise targeting.', tier:2,abilities:[],traits:[]},
    {name:'Cognitive Cooperation',types:['Class','Primary','Specialist'],description:'With proper cooperation, two minds can be muhc more than the sum of their parts.', tier:3,abilities:[],traits:[]},
    {name:'Forward Thinking',types:['Class','Primary','Specialist'],description:'In a decisive moment, acting quickly can be the difference between life and death.', tier:3,abilities:[],traits:[]},
    {name:'Team Coordination',types:['Class','Primary','Specialist'],description:'Focused fire can make short work of even the toughest enemies.', tier:3,abilities:[],traits:[]},
    {name:'Cruel Foresight',types:['Class','Primary','Specialist'],description:'Those that cross you often think that destiny is simply unkind to them, oblivious to your subtle plans.', tier:4,abilities:[],traits:[]},
    {name:'Paralyzing Presence',types:['Class','Primary','Specialist'],description:'A cold, hard look can be as intimidating as any blade or spell.', tier:4,abilities:[],traits:[]},
    {name:'Restorative Clarity',types:['Class','Primary','Specialist'],description:'A cripplied combatant is almost always doomed to soon become a dead combatant.', tier:4,abilities:[],traits:[]},
    {name:'Target Identification',types:['Class','Primary','Specialist'],description:'Organized grunts can overcome lone heroes with frightening ease.', tier:5,abilities:[],traits:[]},
    {name:'The Perfect Moment',types:['Class','Primary','Specialist'],description:'Everything was possible, even if just for a brief moment.', tier:9,abilities:[],traits:[]},
    {name:'Careful Timing',types:['Class','Primary','Specialist'],description:'You can manage a lot in a short amount of time.', tier:9,abilities:[],traits:[]},
    {name:'Unfaltering Will',types:['Class','Primary','Specialist'],description:'At this point, nothing surprises you.', tier:10,abilities:[],traits:[]},
    
    {name:'Efficient Tinkering',types:['Class','Secondary','Specialist'],description:'Your crafts are hardier than others\', able to do much more before needing maintenance.', tier:1,abilities:[],traits:[]},
    {name:'Fledgling Investigator',types:['Class','Secondary','Specialist'],description:'You can get a good feel for a new place, even if nobody there will talk to you.', tier:1,abilities:[],traits:[]},
    {name:'Quartermaster',types:['Class','Secondary','Specialist'],description:'Provisions and supplies are critical to any operation. You take great pride in keeping strict stock of these, to the benefit of your party.', tier:1,abilities:[],traits:[]},
    {name:'Investigator\'s Instinct',types:['Class','Secondary','Specialist'],description:'Whether your catching lies or confirming truths, you\'re adept at separating fact from fiction.', tier:2,abilities:[],traits:[]},
    {name:'Mercurial Tongue',types:['Class','Secondary','Specialist'],description:'You\'re way to comfortable with this.', tier:2,abilities:[],traits:[]},
    {name:'Travel Planning',types:['Class','Secondary','Specialist'],description:'You\'ve never been late to anything, and you don\'t plan to start anytime soon.', tier:2,abilities:[],traits:[]},
    {name:'Orderly Mind',types:['Class','Secondary','Specialist'],description:'Your thoughts are naturally structured and logical, allowing you to passively keep track of things that others may easily confuse.', tier:3,abilities:[],traits:[]},
    {name:'Peddling Flourishes',types:['Class','Secondary','Specialist'],description:'Making a sale is mroe an art than a science, and you are an artist.', tier:3,abilities:[],traits:[]},
    {name:'Quiet Sneak',types:['Class','Secondary','Specialist'],description:'You find it hard to be loud even when you mean to.', tier:3,abilities:[],traits:[]},
    {name:'Enthralling Speech',types:['Class','Secondary','Specialist'],description:'Anyone can be convinced of anything if they believe it\'s in their best interest.', tier:4,abilities:[],traits:[]},
    {name:'Deep Insight',types:['Class','Secondary','Specialist'],description:'Society is a complex web of relationships, and you can see every strand.', tier:6,abilities:[],traits:[]},
    
]