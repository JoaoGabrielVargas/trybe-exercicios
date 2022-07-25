const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };



const dragonDamage = (dragon) => {
  const dragonDmg = Math.floor((Math.random() * (dragon.strength - 15 + 1) + 15 ));
  console.log('dano do Dragon: ', dragonDmg);
  return dragonDmg;
}

const warriorDamage = (warrior) => {
  const warriorDmg = Math.floor((Math.random() * ((warrior.strength * warrior.weaponDmg + 1) - warrior.strength) + warrior.strength ));
  console.log ('dano do Warrior', warriorDmg);
  return warriorDmg;
}

const mageDamage = (mage) => {
  let objMage = {
    dano : 0,
    manaGasta : 'Mana insuficiente!',
  }
  if (mage.mana > 15) {
    const mageDmg = Math.floor((Math.random() * ((mage.intelligence * 2) - mage.intelligence + 1) + mage.intelligence ));
    objMage.dano = mageDmg;
    objMage.manaGasta = 15;
  }

  
  
  console.log ('Dano do Mago e Mana consumida', objMage.dano, objMage.manaGasta);
  return objMage;
  }

  const gameActions = {
    // Crie as HOFs neste objeto.
    warriorTurn : (warriorDamage) => {
      const warriorDmg = warriorDamage(warrior);
      warrior.damage = warriorDmg;
      dragon.healthPoints -= warriorDmg;
    },
    mageTurn : (mageDamage) => {
      const mageDmg = mageDamage(mage);
      mage.damage = mageDmg.dano;
      mage.mana -= mageDmg.manaGasta;
      dragon.healthPoints -= mageDmg.dano;
    },
    dragonTurn : (dragonDamage) => {
      const dragonDmg = dragonDamage(dragon);
      dragon.damage = dragonDmg;
      warrior.healthPoints -= dragonDmg;
      mage.healthPoints -= dragonDmg;
    },
    battleMembersAtt : () => {
      return battleMembers;
    }
  }

  gameActions.warriorTurn(warriorDamage);
  gameActions.mageTurn(mageDamage);
  gameActions.dragonTurn(dragonDamage);


  console.log(gameActions.battleMembersAtt());
  
