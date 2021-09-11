import { Feature } from "src/app/feature/Feature";

export const featureData: Feature[] =[

    //Characteristic Features
    //Physical Power
    {name:'Meek Form',types:['Characteristic','Feature','Physical Power'],description:'You are able to move your body, and maybe even lift small objects without hurting yourself.', tier:1,abilities:[],traits:[]},
    {name:'Physical Training',types:['Characteristic','Feature','Physical Power'],description:'Through moderate physical activity, you have become slightly more than skin and bones.', tier:2,abilities:[],traits:[]},
    {name:'Athletic Form',types:['Characteristic','Feature','Physical Power'],description:'Whether through regular training or natural gifts, you have physical capabilities beyond the average person.', tier:3,abilities:[],traits:[]},
    {name:'Powerful Build',types:['Characteristic','Feature','Physical Power'],description:'You have trained and labored, and have an impressive physique to show for it.', tier:4,abilities:[],traits:[]},
    {name:'Perfect Form',types:['Characteristic','Feature','Physical Power'],description:'You have pushed your body to its limits, and then beyond. You are nearly unmatched in physical prowess.', tier:5,abilities:[],traits:[]},
    
    //Physical Acuity
    {name:'Simple Agility',types:['Characteristic','Feature','Physical Acuity'],description:'You can move at appreciable speeds. Nothing special, but it gets the job done.', tier:1,abilities:[],traits:[]},
    {name:'Quick Feet',types:['Characteristic','Feature','Physical Acuity'],description:'While you won’t win any races, you could probably run one without making a fool of yourself.', tier:2,abilities:[],traits:[]},
    {name:'Honed Agility',types:['Characteristic','Feature','Physical Acuity'],description:'You are faster than most, and your coordination and finesse are something of note.', tier:3,abilities:[],traits:[]},
    {name:'Improved Dexterity',types:['Characteristic','Feature','Physical Acuity'],description:'You have further improved your physical speed and coordination. You find that most people can no longer keep up with you.', tier:4,abilities:[],traits:[]},
    {name:'Absolute Agility',types:['Characteristic','Feature','Physical Acuity'],description:'Your body is under your total control. Every movement is clean, deliberate, and blindingly quick.', tier:5,abilities:[],traits:[]},

    //Physical Resilience
    {name:'Thin Skin',types:['Characteristic','Feature','Physical Resilience'],description:'You have some inherent barriers included in your physiology. It might keep you from dying.', tier:1,abilities:[],traits:[]},
    {name:'Natural Defence',types:['Characteristic','Feature','Physical Resilience'],description:'You are capable of protecting your vitals pushing through minor scrapes and bruises.', tier:2,abilities:[],traits:[]},
    {name:'Thick Skin',types:['Characteristic','Feature','Physical Resilience'],description:'Your tough hide is a natural deterrent to those wishing you harm.', tier:3,abilities:[],traits:[]},
    {name:'Reinforced Body',types:['Characteristic','Feature','Physical Resilience'],description:'You leave almost no openings in your defence, and brush off light blows with ease.', tier:4,abilities:[],traits:[]},
    {name:'Stone Skin',types:['Characteristic','Feature','Physical Resilience'],description:'Your flesh is stone, and your body an immovable object.', tier:5,abilities:[],traits:[]},

    //Mental Power
    {name:'Basic Cognition',types:['Characteristic','Feature','Mental Power'],description:'You have achieved the bare minimum intelligence to be considered sentient. Congratulations!', tier:1,abilities:[],traits:[]},
    {name:'Deduction',types:['Characteristic','Feature','Mental Power'],description:'You have grasped the concepts of logic and reasoning.', tier:2,abilities:[],traits:[]},
    {name:'Advanced Cognition',types:['Characteristic','Feature','Mental Power'],description:'Plans and designs are your tools to success. Through patterns, you can predict the future.', tier:3,abilities:[],traits:[]},
    {name:'Expanded Mind',types:['Characteristic','Feature','Mental Power'],description:'Your mental prowess is exceptional, and your capability for complex tasks notable.', tier:4,abilities:[],traits:[]},
    {name:'Ascended Cognition',types:['Characteristic','Feature','Mental Power'],description:'You have reached the limits of the mind\'s capabilities. There is no problem you cannot find the solution to.', tier:5,abilities:[],traits:[]},

    //Mental Acuity
    {name:'Basic Wit',types:['Characteristic','Feature','Mental Acuity'],description:'You can react to external stimuli in a somewhat timely manner.', tier:1,abilities:[],traits:[]},
    {name:'Instincts',types:['Characteristic','Feature','Mental Acuity'],description:'You are able to quickly and automatically respond, giving you an edge over the sloths of the world.', tier:2,abilities:[],traits:[]},
    {name:'Advanced Wit',types:['Characteristic','Feature','Mental Acuity'],description:'You have committed to instinct what others must accomplish actively and deliberately.', tier:3,abilities:[],traits:[]},
    {name:'Razor Instincts',types:['Characteristic','Feature','Mental Acuity'],description:'You have honed your instincts to a deadly edge.', tier:4,abilities:[],traits:[]},
    {name:'Perfect Wit',types:['Characteristic','Feature','Mental Acuity'],description:'You have become virtually incapable of stuttering, faltering, or stammering.', tier:5,abilities:[],traits:[]},

    //Mental Resilience
    {name:'Fragile Will',types:['Characteristic','Feature','Mental Resilience'],description:'You can almost stand up for yourself.', tier:1,abilities:[],traits:[]},
    {name:'Mental Fortitude',types:['Characteristic','Feature','Mental Resilience'],description:'You can hold yourself together well enough to avoid crumbling in the face of adversity.', tier:2,abilities:[],traits:[]},
    {name:'Iron Will',types:['Characteristic','Feature','Mental Resilience'],description:'Your will is stronger than most people’s. You stand tall against threats that other would cower from.', tier:3,abilities:[],traits:[]},
    {name:'Tested Psyche',types:['Characteristic','Feature','Mental Resilience'],description:'You are no stranger to adversary. You have trained yourself to be unflinching in the most uncertain of times, to the point of being an inspiration to others.', tier:4,abilities:[],traits:[]},
    {name:'Unbreakable Will',types:['Characteristic','Feature','Mental Resilience'],description:'Your will is your being, and both are neigh unbreakable.', tier:5,abilities:[],traits:[]},

    //Lineage

    //Cossim
    {name:'Cosmic Patterns',types:['Persistent','Lineage','Feature','Cossim'],description:'The glowing markings on your skin make it easy to pick you out of a crowd. You also have a hard time hiding in the dark. Perhaps, though, they contain some deeper secrets…', tier:0,abilities:[],traits:[]},
    {name:'Cosmic Visions',types:['Combat','Lineage','Feature','Cossim'],description:'For brief moments you can see the world for what it truly is.', tier:0,abilities:[],traits:[]},
    {name:'Dazing Brilliance',types:['Combat','Lineage','Feature','Cossim'],description:'When you want to, you can shine bright enough to send even the most stalwart foes reeling.', tier:0,abilities:[],traits:[]},
    {name:'Deathless Being',types:['Combat','Lineage','Feature','Cossim'],description:'You are purpose-built to outlast. While others wither and die, you persist.', tier:0,abilities:[],traits:[]},
    {name:'Fitful Existence',types:['Combat','Lineage','Feature','Cossim'],description:'Cossim never seem to be able to stay in one place for too long. For you, this is true in a very literal sense.', tier:0,abilities:[],traits:[]},
    {name:'Nova Rebound',types:['Combat','Lineage','Feature','Cossim'],description:'The Cossim are people of extremes. For every action, they have prepared a greater and opposite reaction.', tier:0,abilities:[],traits:[]},
    {name:'Cosmic Connections',types:['Utility','Lineage','Feature','Cossim'],description:'You can tap into an old, peculiar power not often granted to regular people.', tier:0,abilities:[],traits:[]},
    {name:'Cosmic Inspiration',types:['Utility','Lineage','Feature','Cossim'],description:'Your physical form and longevity are clearly inspired by the cosmos. The vastness of this is not lost on you, and you are able to draw upon an endless well of inspiration.', tier:0,abilities:[],traits:[]},
    {name:'Patience of Eons',types:['Utility','Lineage','Feature','Cossim'],description:'Your perception of time is stretched, and as such you have a patience far beyond another folk. This allows you to enact grand designs and imperceptible plans.', tier:0,abilities:[],traits:[]},
    {name:'Solitary Wanderer',types:['Utility','Lineage','Feature','Cossim'],description:'You\'ve always been more capable when on your own. This is especially true when travelling, and you are free of the sluggish tendencies of others.', tier:0,abilities:[],traits:[]},
    {name:'Strange Sense',types:['Utility','Lineage','Feature','Cossim'],description:'You can’t quite explain why, but you’ve got a very good sense for a very specific characteristic.', tier:0,abilities:[],traits:[]},

    //Girt
    {name:'Aspect of the Sands',types:['Combat','Lineage','Feature','Girt'],description:'Your movements mirror those of sand blowing across dunes: effortless and meandering.', tier:0,abilities:[],traits:[]},
    {name:'Cunning Tactics',types:['Combat','Lineage','Feature','Girt'],description:'The Girt value results above some nebulous concept of honor. If an advantage is to be had, you will take it.', tier:0,abilities:[],traits:[]},
    {name:'Decorated Figure',types:['Combat','Lineage','Feature','Girt'],description:'An accomplished person must look the part. If that means tacking on a few extra pieces of apparel, so be it.', tier:0,abilities:[],traits:[]},
    {name:'Master of Thrift',types:['Combat','Lineage','Feature','Girt'],description:'You can make a little go a long way. Practically speaking, this allows you stretch your resources further.', tier:0,abilities:[],traits:[]},
    {name:'Staunch Maintainer',types:['Combat','Lineage','Feature','Girt'],description:'You know the value of well-maintained equipment. On the road, it can mean the difference between life and death.', tier:0,abilities:[],traits:[]},
    {name:'Careful Packing',types:['Utility','Lineage','Feature','Girt'],description:'You are no stranger to long hauls with heavy loads.', tier:0,abilities:[],traits:[]},
    {name:'Silver Tongue',types:['Utility','Lineage','Feature','Girt'],description:'You know your way around a conversation, and put those skills to good use when making first impressions with fellow merchants.', tier:0,abilities:[],traits:[]},
    {name:'Skillful Navigator',types:['Utility','Lineage','Feature','Girt'],description:'You have learned the art of optimizing routes, and those you travel with benefit greatly from this expertise.', tier:0,abilities:[],traits:[]},
    {name:'The Perfect Pitch',types:['Utility','Lineage','Feature','Girt'],description:'You are no stranger to the art of the deal. Even in the most inappropriate of times, you could sell anything to anyone.', tier:0,abilities:[],traits:[]},
    {name:'Well-Traveled',types:['Utility','Lineage','Feature','Girt'],description:'You’ve met many peoples in your travels, and have picked up a few foreign tongues.', tier:0,abilities:[],traits:[]},
    {name:'Codified Thoughts',types:['Persistent','Lineage','Feature','Girt'],description:'Girt are a naturally organized people, and it’s almost impossible to catch one contradicting themselves.', tier:0,abilities:[],traits:[]},

    //Derge
    {name:'Savage Stature',types:['Persistent','Lineage','Feature','Derge'],description:'The natural physical stature of derge is equal parts impressive and off-putting to civilized folk.', tier:0,abilities:[],traits:[]},
    {name:'Bloody Resilience',types:['Combat','Lineage','Feature','Derge'],description:'When most people would lie down and bleed out, you remain standing.', tier:0,abilities:[],traits:[]},
    {name:'Savage Instincts',types:['Combat','Lineage','Feature','Derge'],description:'You are most effective when you give in to your base, violent tendencies.', tier:0,abilities:[],traits:[]},
    {name:'Savage Resolve',types:['Combat','Lineage','Feature','Derge'],description:'Nothing scares you, not even things that probably should.', tier:0,abilities:[],traits:[]},
    {name:'Unstoppable Fury',types:['Combat','Lineage','Feature','Derge'],description:'You just don’t know when to stop.', tier:0,abilities:[],traits:[]},
    {name:'Violent Soul',types:['Combat','Lineage','Feature','Derge'],description:'You find it worryingly refreshing to maim things.', tier:0,abilities:[],traits:[]},
    {name:'Brutal Tradition',types:['Utility','Lineage','Feature','Derge'],description:'Excessive brutality is very familiar to you, numbing you to atrocities that would traumatize others.', tier:0,abilities:[],traits:[]},
    {name:'Clan Provider',types:['Utility','Lineage','Feature','Derge'],description:'You know how to pry the fruits of the land from its cold, dirty grasp.', tier:0,abilities:[],traits:[]},
    {name:'Imposing Presence',types:['Utility','Lineage','Feature','Derge'],description:'Whether out of respect or fear, your presence drives submission.', tier:0,abilities:[],traits:[]},
    {name:'Powerful Presence',types:['Utility','Lineage','Feature','Derge'],description:'You’ve got an air about you that demands others respect your presence.', tier:0,abilities:[],traits:[]},
    {name:'Wild Travels',types:['Utility','Lineage','Feature','Derge'],description:'There are tricks to navigating the wild, untamed lands. Fortunately, you know most of them.', tier:0,abilities:[],traits:[]},
    
    //Hjark
    {name:'Chilled Veins',types:['Persistent','Lineage','Feature','Hjark'],description:'You were built to thrive in the cold, and generations of further adaptation has reinforced this trait.', tier:0,abilities:[],traits:[]},
    {name:'Battlefield Maintenance',types:['Combat','Lineage','Feature','Hjark'],description:'For you, it’s never too late to take inventory.', tier:0,abilities:[],traits:[]},
    {name:'Glory Seeker',types:['Combat','Lineage','Feature','Hjark'],description:'You muster all you have for a single, glorious strike.', tier:0,abilities:[],traits:[]},
    {name:'Highlander',types:['Combat','Lineage','Feature','Hjark'],description:'You are used to fighting in extreme conditions and poor footing.', tier:0,abilities:[],traits:[]},
    {name:'Martial Tradition',types:['Combat','Lineage','Feature','Hjark'],description:'You are the product of generations of martial prowess.', tier:0,abilities:[],traits:[]},
    {name:'Winterhide',types:['Combat','Lineage','Feature','Hjark'],description:'Your flesh and resolve have been hardened by generations of exposure.', tier:0,abilities:[],traits:[]},
    {name:'Cast-Iron Kidneys',types:['Utility','Lineage','Feature','Hjark'],description:'You’re no stranger to drink.', tier:0,abilities:[],traits:[]},
    {name:'Craftsperson Comradery',types:['Utility','Lineage','Feature','Hjark'],description:'There’s this unspoken understanding between craftspeople – a mutual respect not found in most other professions.', tier:0,abilities:[],traits:[]},
    {name:'Handy Hands',types:['Utility','Lineage','Feature','Hjark'],description:'Your handy with your hands, there’s not much else to say.', tier:0,abilities:[],traits:[]},
    {name:'Needless',types:['Utility','Lineage','Feature','Hjark'],description:'You’ve always been able to take care of yourself, even in the harshest of times.', tier:0,abilities:[],traits:[]},
    {name:'Warmth of Winter',types:['Utility','Lineage','Feature','Hjark'],description:'In spite of the cold, stony peaks associated with your people, you are a warm welcome to any social gathering.', tier:0,abilities:[],traits:[]},

    //Ingra
    {name:'Self-Actualization',types:['Persistent','Lineage','Feature','Ingra'],description:'Your very nature directs you to be perfect, with no regard for how realistic that goal may be.', tier:0,abilities:[],traits:[]},
    {name:'Aspect of the Vulture',types:['Combat','Lineage','Feature','Ingra'],description:'When you hone in on a target, nothing short of a mortal blow can stop you from hitting your mark.', tier:0,abilities:[],traits:[]},
    {name:'Glassheart',types:['Combat','Lineage','Feature','Ingra'],description:'You are unbreakable and unyielding, always dancing on the edge of life and death.', tier:0,abilities:[],traits:[]},
    {name:'Graceful Form',types:['Combat','Lineage','Feature','Ingra'],description:'You are able to duck and weave effortlessly through dangerous battlefields.', tier:0,abilities:[],traits:[]},
    {name:'Honed Edge',types:['Combat','Lineage','Feature','Ingra'],description:'Most forces that expect to face Ingra leave their medics at home.', tier:0,abilities:[],traits:[]},
    {name:'Will of Stone',types:['Combat','Lineage','Feature','Ingra'],description:'Even in the face of impossible odds, you press forward.', tier:0,abilities:[],traits:[]},
    {name:'Fruits of the Desert',types:['Utility','Lineage','Feature','Ingra'],description:'Even the most barren of lands bear fruit, and you know how to coax said fruit from those lands.', tier:0,abilities:[],traits:[]},
    {name:'Precious Crafts',types:['Utility','Lineage','Feature','Ingra'],description:'Your people have a knack for art in all of its forms. With a focused effort, you are able to create much grander works than most.', tier:0,abilities:[],traits:[]},
    {name:'Runeweaver',types:['Utility','Lineage','Feature','Ingra'],description:'Most arcane runes serve an explicit purpose on whatever they are engraved. To you, however, simple aestheticism is purpose enough for a rune.', tier:0,abilities:[],traits:[]},
    {name:'Silver Eyes',types:['Utility','Lineage','Feature','Ingra'],description:'You see what others miss, and can perceive that which is hidden.', tier:0,abilities:[],traits:[]},
    {name:'Tireless Sentinel',types:['Utility','Lineage','Feature','Ingra'],description:'Your body is tuned finer than most. You can go far longer before needing to rest.', tier:0,abilities:[],traits:[]},

    //Marr
    {name:'Adaptive Form',types:['Persistent','Lineage','Feature','Marr'],description:'While others adapt on the scale of generations, you have the peculiar ability to actively adapt to your surroundings.', tier:0,abilities:[],traits:[]},
    {name:'Malleable Reality',types:['Combat','Lineage','Feature','Marr'],description:'Marr are naturally capable of effortlessly molding themselves around their reality, to the point where it’s hard to tell whether they’re altering themselves or the world around them.', tier:0,abilities:[],traits:[]},
    {name:'Practical Survival',types:['Combat','Lineage','Feature','Marr'],description:'You leave the glory for those with a shorter life expectancy.', tier:0,abilities:[],traits:[]},
    {name:'Sidekick',types:['Combat','Lineage','Feature','Marr'],description:'Marr heroes are few in number, but heroes with Marr companions are as common as Marr themselves.', tier:0,abilities:[],traits:[]},
    {name:'Simple Opportunist',types:['Combat','Lineage','Feature','Marr'],description:'You’re not especially tactically-minded, yet you always seem to find yourself in favorable positions.', tier:0,abilities:[],traits:[]},
    {name:'Unassuming Demeanor',types:['Combat','Lineage','Feature','Marr'],description:'In the fever pitch of battle, people tend to lose track of you.', tier:0,abilities:[],traits:[]},
    {name:'Comfortable and Quiet',types:['Utility','Lineage','Feature','Marr'],description:'The greatest benefit of being a Marr adventurer is that nobody bothers you during your time off.', tier:0,abilities:[],traits:[]},
    {name:'Flash of Brilliance',types:['Utility','Lineage','Feature','Marr'],description:'Every once and a while, a Marr comes up with something absolutely marvelous.', tier:0,abilities:[],traits:[]},
    {name:'Plain',types:['Utility','Lineage','Feature','Marr'],description:'You’re just pretty average. This unassuming aura lets you get away with a lot.', tier:0,abilities:[],traits:[]},
    {name:'Simple Means',types:['Utility','Lineage','Feature','Marr'],description:'You don’t want for anything particularly great, and are able to achieve “good enough” with much less effort than most.', tier:0,abilities:[],traits:[]},
    {name:'Wanderlust',types:['Utility','Lineage','Feature','Marr'],description:'Most Marr tend to stay put, but some have an innate need to wander. When leveraged, this can be a powerful drive for an adventurer.', tier:0,abilities:[],traits:[]},

    //Selk
    {name:'Deliberate Process',types:['Persistent','Lineage','Feature','Selk'],description:'You solve your problems with careful planning and exact executions.', tier:0,abilities:[],traits:[]},
    {name:'Combat Deduction',types:['Combat','Lineage','Feature','Selk'],description:'Your quick wits thrive in the heat of battle, allowing you to plan ahead further than others.', tier:0,abilities:[],traits:[]},
    {name:'Commanding Presence',types:['Combat','Lineage','Feature','Selk'],description:'You’re a natural leader, born to direct and dictate.', tier:0,abilities:[],traits:[]},
    {name:'Fated Longevity',types:['Combat','Lineage','Feature','Selk'],description:'More impressive than the long lifespans of Selk is the lack of statistical outliers. Almost every Selk lives up to the natural lifespan.', tier:0,abilities:[],traits:[]},
    {name:'Lightning Recovery',types:['Combat','Lineage','Feature','Selk'],description:'You never miss a beat.', tier:0,abilities:[],traits:[]},
    {name:'Purity of Focus',types:['Combat','Lineage','Feature','Selk'],description:'With concentration and focus, you can expand your mind momentarily.', tier:0,abilities:[],traits:[]},
    {name:'Arcane Tinkering',types:['Utility','Lineage','Feature','Selk'],description:'Selk are most well-known for unleashing advanced arcane technologies upon the world of the Barrier Sea. Whether this is a good or a bad thing depends on who you ask.', tier:0,abilities:[],traits:[]},
    {name:'Bright Minded',types:['Utility','Lineage','Feature','Selk'],description:'The Selk are more intelligent than most. When used practically, this allows them to create marvelous tools and equipment.', tier:0,abilities:[],traits:[]},
    {name:'Grandiosity',types:['Utility','Lineage','Feature','Selk'],description:'The Selk are known for their nobility. Even the lowliest can bear the appearance of wealth and power.', tier:0,abilities:[],traits:[]},
    {name:'Multitalented',types:['Utility','Lineage','Feature','Selk'],description:'You’re not satisfied with mastery over a single skill. Fortunately, you’re also a much faster learner than most.', tier:0,abilities:[],traits:[]},
    {name:'Natural Socialite',types:['Utility','Lineage','Feature','Selk'],description:'You know others almost better than you know yourself. You’re also no stranger to using this skill to your own advantage.', tier:0,abilities:[],traits:[]},

    //Vyld
    {name:'Unfamiliar Form',types:['Persistent','Lineage','Feature','Vyld'],description:'Many folk of the Barrier Sea see you as an exotic creature rather than a person.', tier:0,abilities:[],traits:[]},
    {name:'Adapted Eyes',types:['Combat','Lineage','Feature','Vyld'],description:'Of all the Vyld mutations, the ability to see in darkness is perhaps the most coveted by the other lineages.', tier:0,abilities:[],traits:[]},
    {name:'Bone Plating',types:['Combat','Lineage','Feature','Vyld'],description:'Bone plates cover your thick skin. This prevents you from fitting into conventional armor, but offers its own protection.', tier:0,abilities:[],traits:[]},
    {name:'Martial Endurance',types:['Combat','Lineage','Feature','Vyld'],description:'Everything becomes tired eventually, but you can stave off exhaustion longer than most.', tier:0,abilities:[],traits:[]},
    {name:'Masterful Motion',types:['Combat','Lineage','Feature','Vyld'],description:'Perfection stems from habit. You would know this, as your habits are perfect.', tier:0,abilities:[],traits:[]},
    {name:'Spontaneous Mutations',types:['Combat','Lineage','Feature','Vyld'],description:'Your genetic situation is excessive, even for a Vyld.', tier:0,abilities:[],traits:[]},
    {name:'Ancestral Instinct',types:['Utility','Lineage','Feature','Vyld'],description:'In the most dangerous places surface the oldest instincts.', tier:0,abilities:[],traits:[]},
    {name:'Functional Paranoia',types:['Utility','Lineage','Feature','Vyld'],description:'The Vyld live dangerous lives in dangerous places. They are thus naturally inclined to some healthy paranoia.', tier:0,abilities:[],traits:[]},
    {name:'Natural Aspects',types:['Utility','Lineage','Feature','Vyld'],description:'Vyld are undeniably closer to nature than other peoples.', tier:0,abilities:[],traits:[]},
    {name:'Path of the Warrior',types:['Utility','Lineage','Feature','Vyld'],description:'The Vyld have earned a reputation as a warrior people. While not always true, a clever Vyld can use this to their advantage.', tier:0,abilities:[],traits:[]},
    {name:'Warrior Culture',types:['Utility','Lineage','Feature','Vyld'],description:'Living amongst accomplished warriors, you have a good eye for the capabilities of others.', tier:0,abilities:[],traits:[]},

    //Professions
    {name:'Artist',types:['Profession','Feature','Artist'],description:'You make your living creating decorative objects. Whether you create paintings, sculptures, or something more exotic, you make a reasonable amount of money.', tier:0,abilities:[],traits:[]},
    {name:'Assistant',types:['Profession','Feature','Assistant'],description:'Bar hands, store clerks, and other peoples employed by business owners to do simple labor. They make a meager living, but are adept at scraping together enough spare coins to live comfortably.', tier:0,abilities:[],traits:[]},
    {name:'Blacksmith',types:['Profession','Feature','Blacksmith'],description:'You make your living crafting equipment for commoners, soldiers, guards, and travelers alike.', tier:0,abilities:[],traits:[]},
    {name:'Bounty Hunter',types:['Profession','Feature','Bounty Hunter'],description:'You make your living hunting bounties. Whether you bring in dangerous criminals or slay encroaching beasts, you make a reasonable amount of coin for dangerous work.', tier:0,abilities:[],traits:[]},
    {name:'Criminal',types:['Profession','Feature','Criminal'],description:'Regardless of how you spin your tale, the truth is quite simple: you take things from people.', tier:0,abilities:[],traits:[]},
    {name:'Guard',types:['Profession','Feature','Guard'],description:'You spent most of your adult life posted as a guard, whether you were keeping the wilds at bay in a small settlement or keeping the peace in a larger city.', tier:0,abilities:[],traits:[]},
    {name:'Merchant',types:['Profession','Feature','Merchant'],description:'You make your living buying and selling goods. Some merchants specialize in moving commodities where they are needed, while other peddle exotic goods.', tier:0,abilities:[],traits:[]},
    {name:'Noble',types:['Profession','Feature','Noble'],description:'You don’t work for a living, instead spending your time mingling and mixing with other high-class individuals.', tier:0,abilities:[],traits:[]},
    {name:'Physical Laborer',types:['Profession','Feature','Physical Laborer'],description:'You make your living doing manual, physical labor. It doesn’t pay much, but It’s honest work.', tier:0,abilities:[],traits:[]},
    {name:'Physician',types:['Profession','Feature','Physician'],description:'There are many ailments on the Barrier Sea, and you’ve spent much of your life learning to cure them.', tier:0,abilities:[],traits:[]},
    {name:'Priest',types:['Profession','Feature','Priest'],description:'You’ve devoted yourself to some higher power. Besides some sense of inner piece, this devotion has given you access to a network of safe places, granted you’re travelling in friendly territory.', tier:0,abilities:[],traits:[]},
    {name:'Sailor',types:['Profession','Feature','Sailor'],description:'Whatever your role, you have ample experience navigating the vast oceans of the Barrier Sea.', tier:0,abilities:[],traits:[]},
    {name:'Scholar',types:['Profession','Feature','Scholar'],description:'You are educated above the basic standards of society. In your endeavors to learn, you’ve picked up a few new languages.', tier:0,abilities:[],traits:[]},
    {name:'Servant',types:['Profession','Feature','Servant'],description:'You worked under a wealthy individual or household, trading almost all of your time and autonomy for a comfortable life.', tier:0,abilities:[],traits:[]},
    {name:'Soldier',types:['Profession','Feature','Soldier'],description:'You were a professional soldier in an army. Regardless of your specific role, you have developed a strong sense of discipline.', tier:0,abilities:[],traits:[]},
    {name:'Tinkerer',types:['Profession','Feature','Tinkerer'],description:'You make your living crafting useful tools. Some tinkerers focus on useful, practical tools, while others devise more experimental equipment.', tier:0,abilities:[],traits:[]},
    {name:'Traveler',types:['Profession','Feature','Traveler'],description:'You decided to travel the world rather than pursue a traditional career.', tier:0,abilities:[],traits:[]},

]