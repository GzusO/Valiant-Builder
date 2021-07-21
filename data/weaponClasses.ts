export interface WeaponClass {
    name: string;
    requirements: string; //Name[x] where [] is optional and value inside modifiable.
}

export const weaponClassData: WeaponClass[] = [
   {name:'Short Blade',requirements:''},
   {name:'Long Blade',requirements:'Physical Power 2 or Physical Acuity 2'},
   {name:'Club',requirements:''},
   {name:'Maul',requirements:'Physical Power 3'},
   {name:'Axe',requirements:'Physical Power 2'},
   {name:'Great Blade',requirements:''},
   {name:'Polearm',requirements:'Physical Power 2 or Physical Acuity 2'},
   {name:'Bow',requirements:'Physical Power 2 or Physical Acuity 2'},
   {name:'Crossbow',requirements:''},
   {name:'Firearm',requirements:'Physical Acuity 2'},
   {name:'Small Shield',requirements:'Physical Acuity 2'},
   {name:'Medium Shield',requirements:'Physical Acuity 2'},
   {name:'Great Shield',requirements:'Physical Acuity 3'},
];