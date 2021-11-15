import { Ability } from "src/app/Ability";

export const abilityData: Ability[] = [
    //Agility
    {
        name: 'Quickened Attack',
        source: ['Characteristic', 'Agility'],
        primaryTags: ['Attack Modifier'],
        secondaryTags: [],
        description: 'The modified attack ability gains the blitz tag.',
        tier: 3,
        trait: false,
        flavorText: 'Strike true and leave no room for answers.'
    },
    {
        name: 'Quick Step',
        source: ['Characteristic', 'Agility'],
        primaryTags: ['Reaction'],
        secondaryTags: [],
        description: 'A character begins or ends their turn: move up to 1 tile.',
        tier: 6,
        trait: false,
        flavorText: 'They can’t catch you if you never stop moving.'
    },
    {
        name: 'Quick Action',
        source: ['Characteristic', 'Agility'],
        primaryTags: ['Reaction'],
        secondaryTags: ['Limited 2'],
        description: 'Global: use an action ability, not including slow action abilities.',
        tier: 9,
        trait: false,
        flavorText: 'In a fight, acting out-of-turn is an exceedingly effective strategy.'
    },
    //Intelligence
    {
        name: 'Memorized Movements',
        source: ['Characteristic', 'Intelligence'],
        primaryTags: [],
        secondaryTags: [],
        description: 'You may use an additional stance ability at the beginning of the round.',
        tier: 3,
        trait: true,
        flavorText: 'You could do this with your eyes closed.'
    },
    {
        name: 'Predict',
        source: ['Characteristic', 'Intelligence'],
        primaryTags: ['Slow Action'],
        secondaryTags: ['Focused 3', ' Range 1-15'],
        description: 'The target character suffers the distracted ailment.',
        tier: 6,
        trait: false,
        flavorText: '“Yeah, saw that one coming.”'
    },
    {
        name: 'Command',
        source: ['Characteristic', 'Intelligence'],
        primaryTags: ['Action'],
        secondaryTags: ['Focused 3', ' Range 1-15'],
        description: 'The target character gains the hasted boon.',
        tier: 9,
        trait: false,
        flavorText: 'Someone’s got to keep these valiants in line.'
    },
    //Power
    {
        name: 'True Strike',
        source: ['Characteristic', 'Power'],
        primaryTags: ['Attack Modifier'],
        secondaryTags: ['Limited 2'],
        description: 'The modified attack ability results in a direct hit if it reduces the target to 0 armor.',
        tier: 3,
        trait: false,
        flavorText: 'Give it your all, and then give it a bit more for good measure.'
    },
    {
        name: 'Adrenaline',
        source: ['Characteristic', 'Power'],
        primaryTags: ['Reaction'],
        secondaryTags: ['Limited 1'],
        description: 'You suffer a direct hit: the next time you deal damage, double that damage.',
        tier: 6,
        trait: false,
        flavorText: 'Don’t get scared, get mad.'
    },
    {
        name: 'Behemoth Power',
        source: ['Characteristic', 'Power'],
        primaryTags: [],
        secondaryTags: [],
        description: 'You may use slow action attack abilities as if they were action abilities.',
        tier: 9,
        trait: true,
        flavorText: '“And did she follow you here?” asked the shrouded figure to the messenger. Before a response could come, a massive figure smashed through a nearby wall.'
    },
    //Resilience
    {
        name: 'Hardy',
        source: ['Characteristic', 'Resilience'],
        primaryTags: [],
        secondaryTags: [],
        description: 'Gain +1 resistance.',
        tier: 3,
        trait: true,
        flavorText: 'If you’re going to put yourself in harm’s way, you might as well learn to take a hit.'
    },
    {
        name: 'Resist Ailment',
        source: ['Characteristic', 'Resilience'],
        primaryTags: ['Reaction'],
        secondaryTags: ['Limited 2'],
        description: 'You suffer an ailment: remove that ailment.',
        tier: 6,
        trait: false,
        flavorText: 'And in the center of the flaming crater stood a single valiant, unsinged and unflinching.'
    },
    {
        name: 'Heroic Endurance',
        source: ['Characteristic', 'Resilience'],
        primaryTags: [],
        secondaryTags: [],
        description: 'Gain +1 endurance.',
        tier: 9,
        trait: true,
        flavorText: 'The stone guardian’s arcane beam lanced straight through the chest of the warrior, adding to the numerous holes already present. The warrior only grunted before regaining his poise.'
    },

    //Global
    {
        name: 'Drop Focus',
        source: ['Global'],
        primaryTags: ['Reaction'],
        secondaryTags: [],
        description: 'Global: Cease one or more of your currently maintained focused abilities.',
        tier: 0,
        trait: false,
        flavorText: 'Sometimes it’s best to simply cut your losses.'
    },
    {
        name: 'Equip',
        source: ['Global'],
        primaryTags: ['Action'],
        secondaryTags: [],
        description: 'Equip or unequip a single accessory or weapon, or swap an equipped accessory or weapon with an unequipped accessory or weapon. This ability can be used multiple times per act phase.',
        tier: 0,
        trait: false,
        flavorText: 'Indecision can be deadly, but refusing to correct mistakes can be just as much.'
    },
    {
        name: 'Evade',
        source: ['Global'],
        primaryTags: ['Action'],
        secondaryTags: ['Blitz', ' Range 1'],
        description: 'Move instantaneously to an unoccupied tile within range.',
        tier: 0,
        trait: false,
        flavorText: 'Thinking quickly is not nearly as valuable as acting quickly.'
    },
    {
        name: 'Grab',
        source: ['Global'],
        primaryTags: ['Action'],
        secondaryTags: ['Focused 1', ' Range 1'],
        description: 'Your target suffers the staggered ailment. You lose focus on this ability if the target becomes invalid. This ability cannot target characters that are one or more sizes larger than you. You can only use and maintain this effect if you have a free hand.',
        tier: 0,
        trait: false,
        flavorText: 'The brawler grabbed the horror from the Deep by one of its strange appendages. She has no idea what this thing was, but it sure wasn’t going to be going anywhere.'
    },
    {
        name: 'Improvised Strike',
        source: ['Global'],
        primaryTags: ['Action'],
        secondaryTags: ['Attack', ' Range 1'],
        description: 'Deal 1 damage.',
        tier: 0,
        trait: false,
        flavorText: 'The champion fell, not to bullet or blade, but to a swift kick from a disarmed soldier. '
    },
    {
        name: 'Interact',
        source: ['Global'],
        primaryTags: ['Action'],
        secondaryTags: ['Range 0-1'],
        description: 'Interact with something you’re holding or something nearby. This ability can be used for opening or closing doors or windows, picking something up off of the ground, dropping an item, flipping a switch, or any other simple interaction not covered by other abilities. This ability can be used multiple times per turn.',
        tier: 0,
        trait: false,
        flavorText: 'As she ran through dark alleys, the rogue went over her meticulous plan one last time: Through the open door coming up on her left, up the nearby rope to the rafters, and through the damaged tiling to the rooftop. She was arrested moment later, heavily concussed. The door was closed.'
    },
    {
        name: 'Mount',
        source: ['Global'],
        primaryTags: ['Action'],
        secondaryTags: ['Range 1'],
        description: 'Mount or unmount an adjacent character that is at least one size larger than you. If the target is unwilling or does not have the mount tag, its movement is reduced by 2 and its resistance is reduced by 1.',
        tier: 0,
        trait: false,
        flavorText: 'The soot-stained knight led the charge out of the burning gate, the bones of the invaders crunching under thundering hooves. '
    },
    {
        name: 'Scan',
        source: ['Global'],
        primaryTags: ['Action'],
        secondaryTags: ['Range 0-25'],
        description: 'You learn the current and maximum values of the target character’s armor and endurance attributes.',
        tier: 0,
        trait: false,
        flavorText: 'With extravagant flair the skirmisher landed what she thought was a finishing blow on the enemy general. While he celebrated his victory, the general stood back up and put a spear through his back.'
    },
    {
        name: 'Snuff Fire',
        source: ['Global'],
        primaryTags: ['Action'],
        secondaryTags: ['Range 1'],
        description: 'Remove all of the target character’s burning ailments.',
        tier: 0,
        trait: false,
        flavorText: '“Fire sure is an interesting weapon” an excited battlemage explained to an uninterested soldier, “you have to stay calm to counteract it, yet the very idea on being engulfed in flames incites panic!”'
    },
    {
        name: 'Sprint',
        source: ['Global'],
        primaryTags: ['Action'],
        secondaryTags: [],
        description: 'Move.',
        tier: 0,
        trait: false,
        flavorText: 'To be still is to be dead.'
    },

    //Weapons
    {
        name: 'Strike',
        source: ['Weapon', 'Melee Weapon'],
        primaryTags: ['Action'],
        secondaryTags: ['Attack', ' Range 1'],
        description: 'Deal 1d6 damage to the target.',
        tier: 0,
        trait: false,
        flavorText: ''
    },
    {
        name: 'Strike',
        source: ['Weapon', 'Heavy Melee Weapon'],
        primaryTags: ['Action'],
        secondaryTags: ['Attack', ' Range 1'],
        description: 'Deal 1d6 damage to the target.',
        tier: 0,
        trait: false,
        flavorText: ''
    },
    {
        name: 'Shot',
        source: ['Weapon', 'Ranged Weapon'],
        primaryTags: ['Action'],
        secondaryTags: ['Attack', ' Range 3-10'],
        description: 'Deal 1d6 damage to the target.',
        tier: 0,
        trait: false,
        flavorText: ''
    },
    {
        name: 'Heavy Shot',
        source: ['Weapon', 'Heavy Melee Weapon'],
        primaryTags: ['Slow Action'],
        secondaryTags: ['Attack', ' Range 5-15'],
        description: 'Deal 3d6 damage to the target.',
        tier: 0,
        trait: false,
        flavorText: ''
    },
    {
        name: 'Block',
        source: ['Weapon', 'Shield'],
        primaryTags: ['Reaction'],
        secondaryTags: [],
        description: 'Counter: reduce the damage you take from the triggering attack ability by 2.',
        tier: 0,
        trait: false,
        flavorText: ''
    },
    {
        name: 'Heavy Block',
        source: ['Weapon', 'Heavy Shield'],
        primaryTags: ['Reaction'],
        secondaryTags: [],
        description: 'Counter: reduce the damage you take from the triggering attack ability by 4.',
        tier: 0,
        trait: false,
        flavorText: ''
    },

    //Cossim
    {
        name: 'Cosmic Patterns',
        source: ['Lineage', 'Cossim', 'Utility'],
        primaryTags: [],
        secondaryTags: [],
        description: 'The glowing markings on your skin make it easy to pick you out of a crowd. Under close inspection, you are always uniquely identifiable as yourself. You also have a hard time hiding in the dark. Perhaps, though, they contain some deeper secrets… If you were able to discern the meaning of the patterns, you could surely learn something wondrous.',
        tier: 0,
        trait: true,
        flavorText: ''
    },
    {
        name: 'Cosmic Sight',
        source: ['Lineage', 'Cossim'],
        primaryTags: ['Action'],
        secondaryTags: ['Focused 3'],
        description: 'You gain truesight. Increase the maximum range of range abilities you use that have a maximum range greater than 1 by 1.',
        tier: 0,
        trait: false,
        flavorText: 'For brief moments you can see the world for what it truly is.'
    },
    {
        name: 'Cosmic Flash',
        source: ['Lineage', 'Cossim'],
        primaryTags: ['Action'],
        secondaryTags: ['Limited 1', ' Shape Sphere 1'],
        description: 'Characters within the area, excluding yourself, suffer the blind ailment until the end of their next turn.',
        tier: 0,
        trait: false,
        flavorText: 'The champion shone brightly at the head of the charge, a beacon to their allies and a blinding flash to their enemies.'
    },
    {
        name: 'Auto-Stabilize',
        source: ['Lineage', 'Cossim'],
        primaryTags: [],
        secondaryTags: [],
        description: 'When you are downed, there is a 1 in 2 chance that your death resistance is not reduced.',
        tier: 0,
        trait: true,
        flavorText: 'You are purpose-built to outlast. While others wither and die, you persist.'
    },
    {
        name: 'Shift',
        source: ['Lineage', 'Cossim'],
        primaryTags: ['Reaction'],
        secondaryTags: ['Limited 1', ' Range 1'],
        description: 'The round begins: move instantaneously to an unoccupied tile within range.',
        tier: 0,
        trait: false,
        flavorText: 'Cossim never seem to be able to stay in one place for too long.'
    },
    {
        name: 'Nova Counter',
        source: ['Lineage', 'Cossim'],
        primaryTags: ['Reaction'],
        secondaryTags: ['Attack', ' Range 0-10'],
        description: 'You lose endurance due to an attack ability used by the target character: deal 3d6 damage.',
        tier: 0,
        trait: false,
        flavorText: 'The last wishes of dying stars are always so violent.'
    },

    //Girt
    {
        name: 'Codified Thoughts',
        source: ['Lineage', 'Girt', 'Utility'],
        primaryTags: [],
        secondaryTags: [],
        description: 'Girt are a naturally organized people, and it’s almost impossible to catch one contradicting themselves. Other characters cannot misunderstand your intentions during conversation, given they can understand the language you speak. It is more difficult for you to obfuscate facts without outright lying.',
        tier: 0,
        trait: true,
        flavorText: ''
    },
    {
        name: 'Aspect of the Sands',
        source: ['Lineage', 'Girt'],
        primaryTags: [],
        secondaryTags: [],
        description: 'You are immune to attribute ailments that reduce your movement.',
        tier: 0,
        trait: true,
        flavorText: 'The wanderer’s movement mirrored sand blowing across dunes: effortless and meandering.'
    },
    {
        name: 'Pouch Dust',
        source: ['Lineage', 'Girt'],
        primaryTags: ['Action'],
        secondaryTags: ['Limited 1', ' Range 1'],
        description: 'Reduce the number of reactions the target character can use by 1 until the end of combat.',
        tier: 0,
        trait: false,
        flavorText: 'If an advantage is to be had, take it.'
    },
    {
        name: 'Bejeweled',
        source: ['Lineage', 'Girt'],
        primaryTags: [],
        secondaryTags: [],
        description: 'You can wear one additional combat accessory.',
        tier: 0,
        trait: true,
        flavorText: 'An accomplished person must look the part. If that means tacking on a few extra pieces of apparel, so be it.'
    },
    {
        name: 'Master of Thrift',
        source: ['Lineage', 'Girt'],
        primaryTags: [],
        secondaryTags: [],
        description: 'Your limited abilities attached to gear have their limited value increased by 1.',
        tier: 0,
        trait: true,
        flavorText: '“Where does he keep of all these?” thought the gunner as her ally threw his eighth fire bomb towards the enemy formation.'
    },

    //Derge
    {
        name: 'Derge Utility',
        source: ['Lineage', 'Derge', 'Utility'],
        primaryTags: [],
        secondaryTags: [],
        description: 'The natural physical stature of derge is equal parts impressive and off-putting to civilized folk. Commoners tend to either fear or respect you.',
        tier: 0,
        trait: true,
        flavorText: ''
    },
    {
        name: 'Bloody Resilience',
        source: ['Lineage', 'Derge'],
        primaryTags: [],
        secondaryTags: [],
        description: 'Gain +1 endurance.',
        tier: 0,
        trait: true,
        flavorText: 'When most people would lie down and bleed out, you must remain standing.'
    },
    {
        name: 'Savage Trance',
        source: ['Lineage', 'Derge'],
        primaryTags: ['Transformation'],
        secondaryTags: [],
        description: 'Your focus is reduced to 0. Increase the number of reactions you can use by 1 until the end of combat.',
        tier: 0,
        trait: false,
        flavorText: 'There is nothing more terrifying than a person wholly submitted to their base, violent instincts.'
    },
    {
        name: 'Savage Resolve',
        source: ['Lineage', 'Derge'],
        primaryTags: [],
        secondaryTags: [],
        description: 'You are immune to the distracted ailment.',
        tier: 0,
        trait: true,
        flavorText: 'The slayer stood alone against the beast, single-minded amidst the burning city.'
    },
    {
        name: 'Violent Soul',
        source: ['Lineage', 'Derge'],
        primaryTags: [],
        secondaryTags: [],
        description: 'When you reduce a character’s endurance while you are exposed, increase your armor by 5.',
        tier: 0,
        trait: true,
        flavorText: '“Aren’t you worried about him?” asked the arcanist to his ally. She responded “Of course not, he can clearly handle himself.” “Not, not that,” The arcanist whispered back, “do you think we could stop him if we had to?”'
    },

    //Hjark
    {
        name: 'Chilled Veins',
        source: ['Lineage', 'Hjark', 'Utility'],
        primaryTags: [],
        secondaryTags: [],
        description: 'You were built to thrive in the cold, and generations of further adaptation has reinforced this trait. You are only negatively affected by extremely cold temperatures.',
        tier: 0,
        trait: true,
        flavorText: ''
    },
    {
        name: 'Hasty Preparations',
        source: ['Lineage', 'Hjark'],
        primaryTags: ['Reaction'],
        secondaryTags: [],
        description: 'The first round of a combat begins: you may prepare your gear.',
        tier: 0,
        trait: false,
        flavorText: 'It’s never too late to take inventory.'
    },
    {
        name: 'Singular Strike',
        source: ['Lineage', 'Hjark'],
        primaryTags: ['Slow Action'],
        secondaryTags: ['Limited 1'],
        description: 'Use any attack ability. The attack ability deals double damage and a direct hit reduces the target’s endurance by an additional point. If the attack ability reduces the target’s armor to 0, it counts as a direct hit. You suffer the stunned ailment until the end of your next turn.',
        tier: 0,
        trait: false,
        flavorText: 'The bloodied hero gripped his axe as the horror bore down on him. If he was going to survive this, he’d have to make this next strike count…'
    },
    {
        name: 'Steady Footing',
        source: ['Lineage', 'Hjark'],
        primaryTags: [],
        secondaryTags: [],
        description: 'Ignore the effects of precarious tiles. You are immune to effects that would move you against your will. While climbing, ignore the difficult 1 and precarious tags that tiles normally get.',
        tier: 0,
        trait: true,
        flavorText: 'As the child watched the goat scale the cliffside, she thought to herself “I could probably do that.”'
    },
    {
        name: 'Winterhide',
        source: ['Lineage', 'Hjark'],
        primaryTags: [],
        secondaryTags: [],
        description: 'You are immune to the slowed ailment.',
        tier: 0,
        trait: true,
        flavorText: 'A freezing wind blew through the pass, but the sentinel stood unabated. The cold was a small discomfort to brave for the safety of her people.'
    },
    //Ingra
    {
        name: 'Failure Aversion',
        source: ['Lineage', 'Ingra', 'Utility'],
        primaryTags: [],
        secondaryTags: [],
        description: 'Your very nature directs you to be perfect, with no regard for how realistic that goal may be. When you fail a contest outside of combat, you may retry it and gain you gain +1 to the contest roll. If you fail it again, the consequences for failure become substantially more dire.',
        tier: 0,
        trait: true,
        flavorText: ''
    },
    {
        name: 'Aspect of the Vulture',
        source: ['Lineage', 'Ingra'],
        primaryTags: ['Stance 3'],
        secondaryTags: [],
        description: 'Ignore engagement.',
        tier: 0,
        trait: false,
        flavorText: 'In three quick movements the skirmisher was on top of the gunner, her dagger already plunged deeply into his abdomen.'
    },
    {
        name: 'Glassheart',
        source: ['Lineage', 'Ingra'],
        primaryTags: [],
        secondaryTags: [],
        description: 'Gain +2 lethality, +2 focus, and +2 movement. Your death resistance can never be higher than 1.',
        tier: 0,
        trait: true,
        flavorText: 'You’ve no need for second chances.'
    },
    {
        name: 'Sway',
        source: ['Lineage', 'Ingra'],
        primaryTags: ['Reaction'],
        secondaryTags: [],
        description: 'Any character ends their turn: move up to 1 tile.',
        tier: 0,
        trait: false,
        flavorText: 'Such grace on the battlefield is a rare sight.'
    },
    {
        name: 'Steady Psyche',
        source: ['Lineage', 'Ingra'],
        primaryTags: [],
        secondaryTags: [],
        description: 'While you suffer at least one ailment, increase your resistance by a number equal to the ailments you suffer.',
        tier: 0,
        trait: true,
        flavorText: 'Even in the face of impossible odds, you must press forward.'
    },
    //Marr
    {
        name: 'Adaptive',
        source: ['Lineage', 'Marr', 'Utility'],
        primaryTags: [],
        secondaryTags: [],
        description: 'While others adapt on the scale of generations, you have the peculiar ability to actively adapt to your surroundings. If you spend a season in a specific region or city, you are able to mimic the dialect, mannerisms, and other norms as if you’ve lived there your entire life. If you are away from a region you have adapted to for more than a season, you lose the adaptation.',
        tier: 0,
        trait: true,
        flavorText: ''
    },
    {
        name: 'Reposition',
        source: ['Lineage', 'Marr'],
        primaryTags: ['Reaction'],
        secondaryTags: [],
        description: 'The first round of combat begins: move.',
        tier: 0,
        trait: false,
        flavorText: '“On second thought, I’d rather start over here.”'
    },
    {
        name: 'Stumble',
        source: ['Lineage', 'Marr'],
        primaryTags: ['Reaction'],
        secondaryTags: ['Limited 1'],
        description: 'Counter: move up to 1 tile, ignoring engagement.',
        tier: 0,
        trait: false,
        flavorText: 'leave the glory for those with a shorter life expectancy.'
    },
    {
        name: 'Opportunity',
        source: ['Lineage', 'Marr'],
        primaryTags: [],
        secondaryTags: [],
        description: 'While there is an exposed enemy character you ignore engagement.',
        tier: 0,
        trait: true,
        flavorText: 'The strategist was at his wit’s end. Somehow, the newbie they brought along always managed to be in the best place at exactly the right time. Worst of all, it’s always exactly where he told her not to be.'
    },
    {
        name: 'Threatless Stride',
        source: ['Lineage', 'Marr'],
        primaryTags: [],
        secondaryTags: [],
        description: 'Enemy characters cannot use reaction abilities at any point during your move phase.',
        tier: 0,
        trait: true,
        flavorText: 'In the fever pitch of battle, people tend to lose track of you.'
    },
    //Selk
    {
        name: 'Deliberate Process',
        source: ['Lineage', 'Selk', 'Utility'],
        primaryTags: [],
        secondaryTags: [],
        description: 'You solve your problems with careful planning and exact executions. You know the target value of intelligence contests before attempting them.',
        tier: 0,
        trait: true,
        flavorText: ''
    },
    {
        name: 'Battle Planning',
        source: ['Lineage', 'Selk'],
        primaryTags: [],
        secondaryTags: [],
        description: 'When combat starts, you know all of the objectives that will occur in that combat. This allows you to know of objectives that otherwise wouldn’t be known until later in the combat.',
        tier: 0,
        trait: true,
        flavorText: 'While he and his cohorts stormed the keep, he quickly thought up several contingency plans. He hoped they wouldn’t need them.'
    },
    {
        name: 'Move Command',
        source: ['Lineage', 'Selk'],
        primaryTags: ['Action'],
        secondaryTags: ['Range 1-10'],
        description: 'The target character moves.',
        tier: 0,
        trait: false,
        flavorText: 'Not everyone likes being directed, but everyone benefits from good direction.'
    },
    {
        name: 'Longevity',
        source: ['Lineage', 'Selk'],
        primaryTags: [],
        secondaryTags: [],
        description: 'Gain +1 death resistance.',
        tier: 0,
        trait: true,
        flavorText: 'More impressive than the long lifespans of Selk is the lack of statistical outliers. Almost every Selk lives up to the natural lifespan.'
    },
    {
        name: 'Lightning Recovery',
        source: ['Lineage', 'Selk'],
        primaryTags: [],
        secondaryTags: [],
        description: 'You are immune to the stunned ailment.',
        tier: 0,
        trait: true,
        flavorText: '“How does he never miss a beat?” wondered the aspirant, watching a veteran spar. “He can’t afford to,” muttered a nearby valiant in response.'
    },
    //Vyld
    {
        name: 'Unfamiliar Form',
        source: ['Lineage', 'Vyld', 'Utility'],
        primaryTags: [],
        secondaryTags: [],
        description: 'Many folk of the Barrier Sea see you as an exotic creature rather than a person. Unless completely covered, you stand out in town and cities and are recognizable as Vyld. Common people often react to your presence in exaggerated ways that range from novel wonder to fearful hatred.',
        tier: 0,
        trait: true,
        flavorText: ''
    },
    {
        name: 'Adapted Eyes',
        source: ['Lineage', 'Vyld'],
        primaryTags: [],
        secondaryTags: [],
        description: 'You gain darksight.',
        tier: 0,
        trait: true,
        flavorText: 'Of all the Vyld mutations, the ability to see in darkness is perhaps the most coveted by the other lineages.'
    },
    {
        name: 'Natural Armor',
        source: ['Lineage', 'Vyld'],
        primaryTags: [],
        secondaryTags: [],
        description: 'You cannot wear armor sets. You gain +2 armor and +1 resistance.',
        tier: 0,
        trait: true,
        flavorText: 'The young Vyld stumbled about in frustration as. Over the clinking of her bone plates the elder assured her parents she’d grow into them in time.'
    },
    {
        name: 'Habitual Strikes',
        source: ['Lineage', 'Vyld'],
        primaryTags: [],
        secondaryTags: [],
        description: 'When you use 2 attack action abilities during your act phase, gain +1 resistance until the beginning of your next turn.',
        tier: 0,
        trait: true,
        flavorText: 'Perfection stems from habit. You would know this, as your habits are perfect.'
    },
    {
        name: 'Mutant',
        source: ['Lineage', 'Vyld'],
        primaryTags: [],
        secondaryTags: [],
        description: 'You may have an additional active transformation. You may use stance abilities as if they were transformations.',
        tier: 0,
        trait: true,
        flavorText: '“So what’s wrong with me doc?” questioned the worried valiant. “Oh, nothing really,” the doctor responded, “your genetic situation is just sort of… Excessive.”'
    },

    //Aspirant
    //Alchemist
    {
        name: 'Alchemical Bomb',
        source: ['Archetype', 'Alchemist'],
        primaryTags: ['Action'],
        secondaryTags: ['Attack', ' Limited 2', ' Range 0-5', ' Shape Sphere 1'],
        description: 'Deal 1d6 damage to characters in the area.',
        tier: 0,
        trait: false,
        flavorText: 'If the shrapnel doesn’t get them, the fumes will.'
    },
    {
        name: 'Alchemical Toxins',
        source: ['Archetype', 'Alchemist'],
        primaryTags: [],
        secondaryTags: [],
        description: 'Outside of combat, you may apply various toxins to a single weapon. Attack abilities attached to that weapon gain one of the following bonuses during the next combat (a weapon may only have one toxin effect from any source): • Coursing Toxin: The target suffers the poison 2 ailment • Paralyzing Toxin: The target’s movement is reduced by 1 until the end of their next move phase',
        tier: 0,
        trait: true,
        flavorText: '“So what’s in your poison anyways?” asked the bowman. His friend frankly answered “I have no idea.”'
    },
    {
        name: 'Reagent Identification',
        source: ['Archetype', 'Alchemist', 'Utility'],
        primaryTags: [],
        secondaryTags: [],
        description: 'You are able to identify alchemical substances and their effects. This allows you to identify various base substances and alchemical mixtures such as poisons, curatives, and explosives.',
        tier: 0,
        trait: true,
        flavorText: ''
    },
    //Arcist
    {
        name: 'Arcane Field Manipulation',
        source: ['Archetype', 'Arcist'],
        primaryTags: [],
        secondaryTags: [],
        description: 'When you use a shape ability, you may select one tile in the shape that is unaffected.',
        tier: 0,
        trait: true,
        flavorText: 'Brineflame battlemages have yet to figure out why Sunspire arcanists put so much effort into sparing their own grunts.'
    },
    {
        name: 'Arcane Fracture',
        source: ['Archetype', 'Arcist'],
        primaryTags: ['Slow Action'],
        secondaryTags: ['Attack', ' Line 7'],
        description: 'Deal 2d6 damage to characters in the area and reduce your own armor by 1d6.',
        tier: 0,
        trait: false,
        flavorText: 'The very fabric of reality tears itself apart at your command.'
    },
    {
        name: 'Arcane Sensitivity',
        source: ['Archetype', 'Arcist', 'Utility'],
        primaryTags: [],
        secondaryTags: [],
        description: 'You can sense arcane fields, and are particularly sensitive to any disruptions in arcane fields. This allows you to sense arcane spells, mechanisms, and other disturbances even if you could not otherwise perceive them.',
        tier: 0,
        trait: true,
        flavorText: ''
    },
    //Ascendant Bonded
    {
        name: 'Ascendant Link',
        source: ['Archetype', 'Ascendant Bonded'],
        primaryTags: [],
        secondaryTags: [],
        description: 'You can always sense characters within 3 tiles. This does not bypass the need for unobstructed line-of-sight for targeted abilities, but allows you to target characters that you cannot see.',
        tier: 0,
        trait: true,
        flavorText: 'The druidic sentinel stood utterly still, circled by otherworldly beasts. She’d lost her eyes decades ago, but could still count her foes exactly. Six, and one of them was much bigger than the others. They didn’t stand a chance.'
    },
    {
        name: 'Ascendant Binding',
        source: ['Archetype', 'Ascendant Bonded'],
        primaryTags: ['Reaction'],
        secondaryTags: ['Limited 1', ' Range 0-3'],
        description: 'A target character moves into a: the target character suffers the staggered ailment. The target character can remove this ailment by using the Evade ability.',
        tier: 0,
        trait: false,
        flavorText: 'The villagers left the hermit well-alone, more so out of fear than respect.'
    },
    {
        name: 'Ascendant Bond',
        source: ['Archetype', 'Ascendant Bonded', 'Utility'],
        primaryTags: [],
        secondaryTags: [],
        description: 'You share your body with an ascendant that you can communicate with telepathically. Outside of combat, this ascendant can manifest as a tiny floating creature of any form. it can sense the world around it and relay that information back to you, but cannot travel more than 100 feet from you.',
        tier: 0,
        trait: true,
        flavorText: ''
    },
    //Blood Fanatic
    {
        name: 'Blood-Infused Attack',
        source: ['Archetype', 'Blood Fanatic'],
        primaryTags: ['Attack Modifier'],
        secondaryTags: [],
        description: 'Reduce your endurance by 1. Double the damage of the modified attack ability. If the modified attack ability results in a direct hit, reduce the targets endurance by an additional point.',
        tier: 0,
        trait: false,
        flavorText: 'The cultist champion ran his blade across his palm. He was going to make sure this next strike hurt.'
    },
    {
        name: 'Blood Lash',
        source: ['Archetype', 'Blood Fanatic'],
        primaryTags: ['Reaction'],
        secondaryTags: ['Range 0-1'],
        description: 'You take damage: reduce your armor by 1 and deal 1d6 damage to the target character.',
        tier: 0,
        trait: false,
        flavorText: 'The martyr may take blows willingly, but those blows are not without consequence.'
    },
    {
        name: 'Enhanced Healing',
        source: ['Archetype', 'Blood Fanatic', 'Utility'],
        primaryTags: [],
        secondaryTags: [],
        description: 'Your body heals incredibly quickly when at rest. In between adventures, it never takes more than a few days for you to recover form even the most grievous injuries. As a consequence of this quick healing, however, you scar much more easily and visibly than most.',
        tier: 0,
        trait: true,
        flavorText: ''
    },
    //Hunter
    {
        name: 'Identify Mark',
        source: ['Archetype', 'Hunter'],
        primaryTags: ['Action'],
        secondaryTags: [],
        description: 'Mark a target character for the rest of this combat. You can apply an extra attack modifier ability to attack abilities you use that only target your marked character. You always know the position of your marked character. This does not bypass the need for unobstructed line-of-sight for targeted abilities, but allows you to target characters that you cannot see.',
        tier: 0,
        trait: false,
        flavorText: 'He\'d only grazed his quarry, but that was all he needed.'
    },
    {
        name: 'Thrill of the Hunt',
        source: ['Archetype', 'Hunter'],
        primaryTags: [],
        secondaryTags: [],
        description: 'When you down a character you gain the hasted boon until the end of your next turn.',
        tier: 0,
        trait: true,
        flavorText: 'The only fear of a true hunter is that one day there will be nothing left to hunt.'
    },
    {
        name: 'Expert Tracker',
        source: ['Archetype', 'Hunter', 'Utility'],
        primaryTags: [],
        secondaryTags: [],
        description: 'You may maintain a single quarry outside of combat. You gain a +5 to any contest to track, interrogate, or otherwise interact with your quarry, at the game master’s discretion.',
        tier: 0,
        trait: true,
        flavorText: ''
    },
    //Maniac
    {
        name: 'Frenzy',
        source: ['Archetype', 'Maniac'],
        primaryTags: ['Transformation'],
        secondaryTags: [],
        description: 'Increase the number of action abilities you can use during your act phases by 1 until the end of combat. At the end of each of your act phases, reduce your armor by 5.',
        tier: 0,
        trait: false,
        flavorText: 'Submit to the madness.'
    },
    {
        name: 'Murderous Intent',
        source: ['Archetype', 'Maniac'],
        primaryTags: ['Stance 1'],
        secondaryTags: [],
        description: 'Reduce all damage you deal to 0. Your direct hits reduce the target’s endurance by an additional point.',
        tier: 0,
        trait: false,
        flavorText: 'She charged the reeling guard with knives bared and a terrifying glint in her eyes.'
    },
    {
        name: 'Intervention',
        source: ['Archetype', 'Maniac', 'Utility'],
        primaryTags: [],
        secondaryTags: [],
        description: 'Your head swirls with different voices, all vying for your attention. You may freely give that attention, and hear what they have to say.',
        tier: 0,
        trait: true,
        flavorText: ''
    },
    //Performer
    {
        name: 'Deadly Waltz',
        source: ['Archetype', 'Performer'],
        primaryTags: ['Action'],
        secondaryTags: [],
        description: 'You and an adjacent character that is the same size as you or smaller swap positions.',
        tier: 0,
        trait: false,
        flavorText: 'A quick tumble here and a few twirls there, and she was behind enemy lines.'
    },
    {
        name: 'Exit Stage',
        source: ['Archetype', 'Performer'],
        primaryTags: ['Reaction'],
        secondaryTags: [],
        description: 'You down a character: move, ignoring engagement.',
        tier: 0,
        trait: false,
        flavorText: 'An experienced entertainer knows not to overstay their welcome.'
    },
    {
        name: 'Distracting Performance',
        source: ['Archetype', 'Performer', 'Utility'],
        primaryTags: [],
        secondaryTags: [],
        description: 'You have a thing for making scenes. Outside of combat, you are always able to stage a convincing distraction.',
        tier: 0,
        trait: true,
        flavorText: ''
    },
    //Pugilist
    {
        name: 'Unarmed Strike',
        source: ['Archetype', 'Pugilist'],
        primaryTags: ['Action'],
        secondaryTags: ['Attack', ' Range 1'],
        description: 'Deal 1d6 damage to the target. This ability can be used multiple times per act phase.',
        tier: 0,
        trait: false,
        flavorText: 'His fist struck the raider’s chest, tearing apart the muscle and shattering the ribs.'
    },
    {
        name: 'Tested Flesh',
        source: ['Archetype', 'Pugilist'],
        primaryTags: [],
        secondaryTags: [],
        description: 'If you have 0 armor and are not wearing and armor set when a round ends, increase your armor by 1.',
        tier: 0,
        trait: true,
        flavorText: 'They thought he was crazy, and they were probably right. They’re dead now, though, and he still lives.'
    },
    {
        name: 'Rugged Physique',
        source: ['Archetype', 'Pugilist', 'Utility'],
        primaryTags: [],
        secondaryTags: [],
        description: 'You find it very easy to lift, drag, or otherwise manipulate heavy objects. You are able to freely manipulate heavy items up to 250 lb.',
        tier: 0,
        trait: true,
        flavorText: ''
    },
    //Rogue
    {
        name: 'Taunt',
        source: ['Archetype', 'Rogue'],
        primaryTags: ['Action'],
        secondaryTags: ['Range 0-10'],
        description: 'The target character cannot use slow action abilities during their next act phase.',
        tier: 0,
        trait: false,
        flavorText: 'He hurled belittling insults at the warrior, hoping the ensuing rage would give way to mistakes.'
    },
    {
        name: 'Exploit Weakness',
        source: ['Archetype', 'Rogue'],
        primaryTags: ['Action'],
        secondaryTags: ['Range 0-10'],
        description: 'The target character takes double damage from the next attack ability that targets them during this round.',
        tier: 0,
        trait: false,
        flavorText: 'The gunner grinned as he chambered the round; this was just the opening he was looking for.'
    },
    {
        name: 'Trained Sneak',
        source: ['Archetype', 'Rogue', 'Utility'],
        primaryTags: [],
        secondaryTags: [],
        description: 'You have an easy time sneaking and hiding. You can choose to move silently and you gain a +5 to any contest to avoid detection.',
        tier: 0,
        trait: true,
        flavorText: ''
    },

];