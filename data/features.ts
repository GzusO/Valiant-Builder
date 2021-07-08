import { Feature } from "src/app/adventurer";

export const featureData: Feature[] =[
    //Profesion Features
    {name:'Artist',types:['Profession','Artist'],abilities:[],traits:[], description:'You make your living creating decorative objects. Whether you create paintings, sculptures, or something more exotic, you make a reasonable amount of money.'},
    {name:'Blacksmith',types:['Profession','Blacksmith'],abilities:[],traits:[], description:'You make your living crafting equipment for soldiers, guards, and travelers.'},
    {name:'Tinkerer',types:['Profession','Tinkerer'],abilities:[],traits:[], description:'You make your living crafting useful tools. Some tinkerers focus on useful, practical tools, while others devise more experimental equipment'},
    {name:'Merchant',types:['Profession','Merchant'],abilities:[],traits:[], description:'You make your living buying and selling goods. Some merchants specialize in moving commodities where they are needed, while other peddle exotic goods.'},
    {name:'Noble',types:['Profession','Noble'],abilities:[],traits:[], description:'You don’t work for a living, instead spending your time mingling and mixing with other high-class individuals.'},
    {name:'Traveler',types:['Profession','Traveler'],abilities:[],traits:[], description:'You decided to travel the world rather than pursue a traditional career.'},
    {name:'Guard',types:['Profession','Guard'],abilities:[],traits:[], description:'You spent most of your adult life posted as a guard, whether you were keeping the wilds at bay in a small settlement or keeping the peace in a larger city.'},
    {name:'Soldier',types:['Profession','Soldier'],abilities:[],traits:[], description:'You were a professional soldier in an army. Regardless of your specific role, you have developed a strong sense of discipline.'},
    {name:'Bounty Hunter',types:['Profession','Bounty Hunter'],abilities:[],traits:[], description:'You make your living hunting bounties. Whether you bring in dangerous criminals or slay encroaching beasts, you make a reasonable amount of coin for dangerous work.'},
    {name:'Physical Laborer',types:['Profession','Physical Laborer'],abilities:[],traits:[], description:'You make your living doing manual, physical labor. It doesn’t pay much, but it has steeled your body.'},
    {name:'Servant',types:['Profession','Servant'],abilities:[],traits:[], description:'You worked under a wealthy individual or household, trading almost all of your time and autonomy for a comfortable life.'},
    {name:'Assistant',types:['Profession','Assistant'],abilities:[],traits:[], description:'Bar hands, store clerks, and other peoples employed by business owners to do simple labor. They make a meager living, but have any easy time finding odd jobs wherever they go.'},
    {name:'Scholar',types:['Profession','Scholar'],abilities:[],traits:[], description:'You are educated above the basic standards of society. In your endeavors to learn, you’ve picked up a few new languages.'},
    {name:'Priest',types:['Profession','Priest'],abilities:[],traits:[], description:'You’ve devoted yourself to some higher power. Besides some sense of inner piece, this devotion has given you access to a network of safe places, granted you’re travelling in friendly territory.'},
    {name:'Physician',types:['Profession','Physician'],abilities:[],traits:[], description:'Doctor'},
    {name:'Criminal',types:['Profession','Criminal'],abilities:[],traits:[], description:'Regardless of how you spin your tale, the truth is quite simple: you take things from people.'},
   
    //Lineage Features

    //Cossim Features
    {name:'Cosmic Patterns', types:['Lineage','Cossim','Persistent'],description:'The glowing markings on your skin make it easy to pick you out of a crowd. You also have a hard time hiding in the dark. Perhaps, though, they contain some deeper secrets…',abilities:[],traits:[]},
    {name:'Deathless Being',types:['Lineage','Cossim','Primary'],description:'You are purpose-built to outlast. While others wither and die, you persist.',abilities:[],traits:[]},
    {name:'Fitful Existence',types:['Lineage','Cossim','Primary'],description:'Cossim never seem to be able to stay in one place for too long. For you, this is true in a very literal sense.',abilities:[],traits:[]},
    {name:'Nova Rebound',types:['Lineage','Cossim','Primary'],description:'The Cossim are people of extremes. For every action, they have prepared a greater and opposite reaction.',abilities:[],traits:[]},
    {name:'Dazing Brilliance',types:['Lineage','Cossim','Primary'],description:'When you want to, you can shine bright enough to send even the most stalwart foes reeling.',abilities:[],traits:[]},
    {name:'Cosmic Visions',types:['Lineage','Cossim','Primary'],description:'For brief moments you can see the world for what it truly is.',abilities:[],traits:[]},
    {name:'Cosmic Inspiration',types:['Lineage','Cossim','Secondary'],description:'Your physical form and longevity are clearly inspired by the cosmos. The vastness of this is not lost on you, and you are able to draw upon an endless well of inspiration.',abilities:[],traits:[]},
    {name:'Patience of Eons',types:['Lineage','Cossim','Secondary'],description:'Your perception of time is stretched, and as such you have a patience far beyond another folk. This allows you to enact grand designs and imperceivable plans.',abilities:[],traits:[]},
    {name:'Solitary Wanderer',types:['Lineage','Cossim','Secondary'],description:'You\'ve always been more capable when on your own. This is especially true when travelling, and you are free of the sluggish tendencies of others.',abilities:[],traits:[]},
    {name:'Cosmic Connections',types:['Lineage','Cossim','Secondary'],description:'You can tap into an old, peculiar power not often granted to regular people.',abilities:[],traits:[]},
    {name:'Strange Sense',types:['Lineage','Cossim','Secondary'],description:'You can’t quite explain why, but you’ve got a very good sense for a very specific characteristic.',abilities:[],traits:[]},
    
    //Girt Features
    {name:'Skin and Bones', types:['Lineage','Girt','Persistent'], description:'Your stature may be meek, but that meekness confers subtle benefits.',abilities:[],traits:[]},
    {name:'Master of Thrift',types:['Lineage','Girt','Primary'],description:'You can make a little go a long way. Practically speaking, this allows you stretch your resources further.',abilities:[],traits:[]},
    {name:'Aspect of the Sands',types:['Lineage','Girt','Primary'],description:'Your movements mirror those of sand blowing across dunes: effortless and meandering.',abilities:[],traits:[]},
    {name:'Cunning Tactics',types:['Lineage','Girt','Primary'],description:'The Girt value results above some nebulous concept of honor. If an advantage is to be had, you will take it.',abilities:[],traits:[]},
    {name:'Staunch Maintainer',types:['Lineage','Girt','Primary'],description:'You know the value of well-maintained equipment. On the road, it can mean the difference between life and death.',abilities:[],traits:[]},
    {name:'Decorated Figure',types:['Lineage','Girt','Primary'],description:'An accomplished merchant must look the part. If that means tacking on a few extra pieces of apparel, so be it.',abilities:[],traits:[]},
    {name:'Careful Packing',types:['Lineage','Girt','Secondary'],description:'You are no strange to long hauls with heavy loads.',abilities:[],traits:[]},
    {name:'Skillful Navigator',types:['Lineage','Girt','Secondary'],description:'You have learned the art of optimizing routes, and those you travel with benefit greatly from this expertise.',abilities:[],traits:[]},
    {name:'Silver Tongue',types:['Lineage','Girt','Secondary'],description:'You know your way around a conversation, and put those skills to good use when making first impressions with fellow merchants.',abilities:[],traits:[]},
    {name:'The Perfect Pitch',types:['Lineage','Girt','Secondary'],description:'You are no stranger to the art of the deal. Even in the most inappropriate of times, you could sell anything to anyone.',abilities:[],traits:[]},
    {name:'Well-Traveled',types:['Lineage','Girt','Secondary'],description:'You’ve met many peoples in your travels, and have picked up a few foreign tongues.',abilities:[],traits:[]},

    //Derge Features
    {name:'Savage Physique',types:['Lineage','Derge','Persistent'],description:'The Derge physique requires a lot of fuel to maintain, but if you provide your body with what it needs it will serve you well.',abilities:[],traits:[]},
    {name:'Violent Soul',types:['Lineage','Derge','Primary'],description:'Whatever your means, you find it particularly easy to maim things.',abilities:[],traits:[]},
    {name:'Unstoppable Fury',types:['Lineage','Derge','Primary'],description:'You just don\'t know when to stop.',abilities:[],traits:[]},
    {name:'Savage Instincts',types:['Lineage','Derge','Primary'],description:'You are most effective when you give in to your base, violent tendencies.',abilities:[],traits:[]},
    {name:'Bloody Resilience',types:['Lineage','Derge','Primary'],description:'When most people would lie down and bleed out, you remain standing.',abilities:[],traits:[]},
    {name:'Savage Resolve',types:['Lineage','Derge','Primary'],description:'Nothing scares you, not even things that probably should.',abilities:[],traits:[]},
    {name:'Clan Provider',types:['Lineage','Derge','Secondary'],description:'You know how to pry the fruits of the land from its cold, dirty grasp.',abilities:[],traits:[]},
    {name:'Brutal Crafting',types:['Lineage','Derge','Secondary'],description:'You can create dangerous implements from even the crudest of materials.',abilities:[],traits:[]},
    {name:'Imposing Presence',types:['Lineage','Derge','Secondary'],description:'Whether out of respect or fear, your presence drives submission.',abilities:[],traits:[]},
    {name:'Primal Stature',types:['Lineage','Derge','Secondary'],description:'You\'ve got an air about you, some sort of aura that puts civilized folk on edge.',abilities:[],traits:[]},
    {name:'Wild Travels',types:['Lineage','Derge','Secondary'],description:'There are tricks to navigating the wild, untamed lands, and you know most of them.',abilities:[],traits:[]},

    //Hjark Features
    {name:'Chilled Veins',types:['Lineage','Hjark','Persistent'],description:'You were built to thrive in the cold, and generations of further adaptation has reinforced this trait.',abilities:[],traits:[]},
    {name:'Winterhide',types:['Lineage','Hjark','Primary'],description:'Your flesh and resolve have been hardened by generations of exposure.',abilities:[],traits:[]},
    {name:'Highlander',types:['Lineage','Hjark','Primary'],description:'You are used to fighting in extreme conditions and poor footing.',abilities:[],traits:[]},
    {name:'Martial Tradition',types:['Lineage','Hjark','Primary'],description:'You are used to fighting in extreme conditions and poor footing.',abilities:[],traits:[]},
    {name:'Legendary Strikes',types:['Lineage','Hjark','Primary'],description:'You muster all you have for a singular strike, something sure to turn the tide of battle.',abilities:[],traits:[]},
    {name:'Battlefield Maintenance',types:['Lineage','Hjark','Primary'],description:'For you, it\'s never too late to take inventory.',abilities:[],traits:[]},
    {name:'Family Business',types:['Lineage','Hjark','Secondary'],description:'You were always taught that if you put good into something, you get good out.',abilities:[],traits:[]},
    {name:'Needless',types:['Lineage','Hjark','Secondary'],description:'You\'ve always been able to take care of yourself, even in the harshest of times.',abilities:[],traits:[]},
    {name:'Warmth of Winter',types:['Lineage','Hjark','Secondary'],description:'In spite of the cold, stony peaks associated with your people, you are a warm wecloem to any social gathering.',abilities:[],traits:[]},
    {name:'Cast-Iron Kidneys',types:['Lineage','Hjark','Secondary'],description:'You\'re no strange to drink.',abilities:[],traits:[]},
    {name:'Craftsperson Comradery',types:['Lineage','Hjark','Secondary'],description:'There\s this unspoken understanding between craftspeople - a mutual respect not found in most other professions.',abilities:[],traits:[]},

    //Ingra Features
    {name:'Self-Actualization',types:['Lineage','Ingra','Persistent'],description:'Your very nature directs you to be perfect, with no regard for how realistic that goal may be.',abilities:[],traits:[]},
    {name:'Glassheart',types:['Lineage','Ingra','Primary'],description:'You are unbreakable and unyielding, always dancing on the ede of life and death.',abilities:[],traits:[]},
    {name:'Aspect of the Vulture',types:['Lineage','Ingra','Primary'],description:'When you hone in on a target, nothing short of a mortal blow can stop you from hitting your mark.',abilities:[],traits:[]},
    {name:'Graceful Form',types:['Lineage','Ingra','Primary'],description:'You are able to duck and weave effortlessly through dangerous battlefields.',abilities:[],traits:[]},
    {name:'Will of Stone',types:['Lineage','Ingra','Primary'],description:'Even in the face of impossible odds, you press forward.',abilities:[],traits:[]},
    {name:'Honed Edge',types:['Lineage','Ingra','Primary'],description:'Most forces that expect to face Ingra leave their medics at home.',abilities:[],traits:[]},
    {name:'Fruits of the Desert',types:['Lineage','Ingra','Secondary'],description:'Even the most barren of lands bear fruit, and you know how to coax said fruit from those lands.',abilities:[],traits:[]},
    {name:'Precious Crafts',types:['Linaege','Ingra','Secondary'],description:'Your people have a knack for art in all of its forms. with a focused effort, you are able to create much grander works than most.',abilities:[],traits:[]},
    {name:'Silver Eyes',types:['Lineage','Ingra','Secondary'],description:'You see what others miss, and can perceive that which is hidden.',abilities:[],traits:[]},
    {name:'Tireless Sentinel',types:['Lineage','Ingra','Secondary'],description:'Your body is tuned finer than most. You can go far longer before needing to rest.',abilities:[],traits:[]},
    {name:'Runeweaver',types:['Lineage','Ingra','Secondary'],description:'The Ingra have a knack for applying enchantments. They can make simple, cheap materials go as far as the traditional precious resources often used in the trade.',abilities:[],traits:[]},

    //Marr Features
    {name:'Adaptive Form',types:['Lineage','Marr','Persistent'],description:'While others adapt on the scale of generations, you have the peculiar ability to actively adapt to your surroundings.',abilities:[],traits:[]},
    {name:'Unassuming Demeanor',types:['Lineage','Marr','Primary'],description:'Even in the fever pitch of battle, people tend to lose track of you.',abilities:[],traits:[]},
    {name:'Simple Opportunist',types:['Lineage','Marr','Primary'],description:'You\'re not especially tactically-minded, yet you always seem to find yourself in favorable positions.',abilities:[],traits:[]},
    {name:'Practical Survival',types:['Lineage','Marr','Primary'],description:'You leave the glory for those with a shorter life expectancy.',abilities:[],traits:[]},
    {name:'Sidekick',types:['Lineage','Marr','Primary'],description:'Marr heroes are few in number, but heroes with Marr companions are as common as Marr themselves.',abilities:[],traits:[]},
    {name:'Unnatural Adaptation',types:['Lineage','Marr','Primary'],description:'It\'s uncanny how quickly you can adapt to a situation.',abilities:[],traits:[]},
    {name:'Plain',types:['Lineage','Marr','Secondary'],description:'You\'re just pretty average. This unassuming aura lets you get away with a lot.',abilities:[],traits:[]},
    {name:'Simple Means',types:['Lineage','Marr','Secondary'],description:'You don;t want for anything in particularly great, and are able to achieve "good enough" with much less effort than most.',abilities:[],traits:[]},
    {name:'Flash of Brilliance',types:['Lineage','Marr','Secondary'],description:'Every once in a while, a Marr comes up with something absolutely marvelous.',abilities:[],traits:[]},
    {name:'Wanderlust',types:['Lineage','Marr','Secondary'],description:'Most Marr tend to stay put, but some have an innate need to wander. When leveraged, this can be a powerful drive for an adventurer.',abilities:[],traits:[]},
    {name:'Comfortable and Quiet',types:['Lineage','Marr','Secondary'],description:'The greatest benefit of being a Marr adventurer is that nobody bothers you during your time off.',abilities:[],traits:[]},

    //Selk Features
    {name:'Expanded Mind',types:['Lineage','Selk','Persistent'],description:'Your mind is a powerful tool, which is good because you\'re not quite as strong, fast, or resilient as other people.',abilities:[],traits:[]},
    {name:'Combat Deduction',types:['Lineage','Selk','Primary'],description:'Your quick qits thrive in the heat of battle, allowing you to plan ahead further than others.',abilities:[],traits:[]},
    {name:'Lightning Recovery',types:['Lineage','Selk','Primary'],description:'You never miss a beat.',abilities:[],traits:[]},
    {name:'Fated Longevity',types:['Lineage','Selk','Primary'],description:'More impressive than the long lifespans of Selk is the lack of statistical outliers. Almost every Selk lives up to the natural lifespan.',abilities:[],traits:[]},
    {name:'Commanding Presence',types:['Lineage','Selk','Primary'],description:'You\'re a natural leader, born to direct and dictate.',abilities:[],traits:[]},
    {name:'Purity of Focus',types:['Lineage','Selk','Primary'],description:'With concentration and focus, you can expand your mind momentarily.',abilities:[],traits:[]},
    {name:'Grandiosity',types:['Lineage','Selk','Secondary'],description:'The Selk are known for their nobility. Even the lowliest can bear the appearance of wealth and power.',abilities:[],traits:[]},
    {name:'Bright Minded',types:['Lineage','Selk','Secondary'],description:'The Selk are more intelligent than most. When used practically, this allows them to create marvelous tools and equipment.',abilities:[],traits:[]},
    {name:'Natural Socialite',types:['Lineage','Selk','Secondary',],description:'You know others almost better than you know yourself. You\'re also no stranger to using this skill to your own advantage.',abilities:[],traits:[]},
    {name:'Arcane Tinkering',types:['Lineage','Selk','Secondary'],description:'The Selk are powerful enchanters, able to weave arcane energies into objects much more effectively than other peoples.',abilities:[],traits:[]},
    {name:'Multitalented',types:['Lineage','Selk','Secondary'],description:'You\'re not satistfied with mastery over a single skill. Forutnately, you\'re also a much faster learner than most.',abilities:[],traits:[]},

    //Vyld Features
    {name:'Unfamiliar Form', types:['Lineage','Vyld','Persistent'],description:'The softer folk of the Barrier Sea find you off-putting at best.',abilities:[],traits:[]},
    {name:'Martial Endurance', types:['Lineage','Vyld','Primary'],description:'Everything becomes tired eventually, but you can stave off exhaustion longer than most.',abilities:[],traits:[]},
    {name:'Masterful Motion',types:['Lineage','Vyld','Primary'],description:'Perfection stems from habit. You would know this, as your habits are perfect.',abilities:[],traits:[]},
    {name:'Bone Plating',types:['Lineage','Vyld','Primary'],description:'Bone plates cover your thick skin. This prevents you from fitting into conventional armor, but offers its own protection.',abilities:[],traits:[]},
    {name:'Adapted Eyes',types:['Lineage','Vyld','Primary'],description:'Of all the Vyld mutations, the ability to see in darkness is perhaps the most coveted by the other lineages.',abilities:[],traits:[]},
    {name:'Spontaneous Mutations',types:['Lineage','Vyld','Primary'],description:'Your genetic situation is excessive even for a Vyld.',abilities:[],traits:[]},
    {name:'Ancestral Instinct',types:['Lineage','Vyld','Secondary'],description:'In the most dangerous places surface the oldest instincts.',abilities:[],traits:[]},
    {name:'Functional Paranoia',types:['Lineage','Vyld','Secondary'],description:'The Vyld live dangerous lives in dangerous places. They are thus naturally inclined to some healthy paranoia.',abilities:[],traits:[]},
    {name:'Warrior Culture',types:['Lineage','Vyld','Secondary',],description:'Living amongst accomplished warriors, you have a good eye for the capabilities of others.',abilities:[],traits:[]},
    {name:'Natural Aspects',types:['Lineage','Vyld','Secondary'],description:'Vyld are undeniably closer to nature than other peoples.',abilities:[],traits:[]},
    {name:'Path of the Warrior',types:['Lineage','Vyld','Secondary'],description:'The Vyld have earned a reputation as a warrior people. While not always true, a clever Vyld can use this to their advantage.',abilities:[],traits:[]},
    
    //Characteristic Features
    {name:'Meek Form',types:['Characteristic','Physical Power','Tier 1'],description:'You are able to move your body, and maybe even lift small objects without hurting yourself.',abilities:[],traits:[]},
    {name:'Physical Training',types:['Characteristic','Physical Power','Tier 2'],description:'Through moderate physical activity, you have become slightly more than skin and bones.',abilities:[],traits:[]},
    {name:'Athletic Form',types:['Characteristic','Physical Power','Tier 3'],description:'Whether through regular training or natural gifts, you have physical capabilities beyond the average person.',abilities:[],traits:[]},
    {name:'Powerful Build',types:['Characteristic','Physical Power','Tier 4'],description:'You have trained and labored, and have become a physical force to be reckoned with.',abilities:[],traits:[]},
    {name:'Perfect Form',types:['Characteristic','Physical Power','Tier 5'],description:'You have pushed your body to its limits, and then beyond. You are nearly unmatched in physical prowess.',abilities:[],traits:[]},
    
    
]