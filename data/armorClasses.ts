export interface ArmorClass {
    name: string;
    donDoff: string;
    requirements: string; 
    tierScaling: string;
}

export const armorClassData: ArmorClass[] = [
    {name:'Light',donDoff:'Takes 1 minute to don or doff.',requirements:'',tierScaling:'Light armor\'s defence bonus increases by 1 for every armor tier above 0.'},
    {name:'Medium',donDoff:'Takes 5 minutes to don or doff.',requirements:'',tierScaling:'Medium armor\'s defence bonus increases by 2 for every armor tier above 0.'},
    {name:'Heavy',donDoff:'Takes 10 minutes to don or doff.',requirements:'Physical Power 2',tierScaling:'Heavy armor\'s defence bonus increases by 2 and its resistance bonus increases by 1 for every armor tier above 0.'},
    {name:'Ultra-Heavy',donDoff:'Takes 15 minutes to don or doff.',requirements:'PHysical Power 2 and Physical Resilience 2',tierScaling:'Ultra-Heavy armor\'s defence bonus increases by 3 and its resistance bonus increases by 2 for every armor tier above 0.'},
    {name:'Accessory',donDoff:'Can be equipped or unequipped at any time as 1 action(5 seconds). A character may only wear and benefit from 3 accessories at any given time.',requirements:'',tierScaling:'Accessories cannot be upgraded.'},
];
