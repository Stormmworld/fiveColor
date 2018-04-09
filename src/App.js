import React, { Component } from 'react';
import Playfield from './Components/Playfield.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: [
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/231.jpg',Name: 'Ankh of Mishra',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/278.jpg',Name: 'Badlands',Type: 'Land'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/232.jpg',Name: 'Basalt Monolith',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/233.jpg',Name: 'Black Lotus',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/279.jpg',Name: 'Bayou',Type: 'Land'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/234.jpg',Name: 'Black Vise',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/235.jpg',Name: 'Celestial Prism',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/280.jpg',Name: 'Plateau',Type: 'Land'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/236.jpg',Name: 'Chaos Orb',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/237.jpg',Name: 'Clockwork Beast',Type: 'Creature'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/237.jpg',Name: 'Clockwork Beast',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/281.jpg',Name: 'Savannah',Type: 'Land'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/238.jpg',Name: 'Conservator',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/239.jpg',Name: 'Copper Tablet',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/240.jpg',Name: 'Crystal Rod',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/282.jpg',Name: 'Scrubland',Type: 'Land'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/241.jpg',Name: 'Cyclopean Tomb',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/242.jpg',Name: 'Dingus Egg',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/243.jpg',Name: 'Disrupting Scepter',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/283.jpg',Name: 'Taiga',Type: 'Land'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/244.jpg',Name: 'Forcefield',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/245.jpg',Name: 'Gauntlet of Might',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/246.jpg',Name: 'Glasses of Urza',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/247.jpg',Name: 'Helm of Chatzuk',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/248.jpg',Name: 'Howling Mine',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/284.jpg',Name: 'Tropical Island',Type: 'Land'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/249.jpg',Name: 'Icy Manipulator',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/250.jpg',Name: 'Illusionary Mask',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/251.jpg',Name: 'Iron Star',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/252.jpg',Name: 'Ivory Cup',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/253.jpg',Name: 'Jade Monolith',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/254.jpg',Name: 'Jade Statue',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/255.jpg',Name: 'Jayemdae Tome',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/287.jpg',Name: 'Volcanic Island',Type: 'Land'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/256.jpg',Name: 'Juggernaut',Type: 'Creature'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/256.jpg',Name: 'Juggernaut',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/257.jpg',Name: 'Kormus Bell',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/258.jpg',Name: 'Library of Leng',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/259.jpg',Name: 'Living Wall',Type: 'Creature'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/259.jpg',Name: 'Living Wall',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/285.jpg',Name: 'Tundra',Type: 'Land'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/260.jpg',Name: 'Mana Vault',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/261.jpg',Name: 'Meekstone',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/262.jpg',Name: 'Mox Emerald',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/263.jpg',Name: 'Mox Jet',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/264.jpg',Name: 'Mox Pearl',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/286.jpg',Name: 'Underground Sea',Type: 'Land'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/265.jpg',Name: 'Mox Ruby',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/266.jpg',Name: 'Mox Sapphire',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/267.jpg',Name: 'Nevinyrrals Disk',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/268.jpg',Name: 'Obsianus Golem',Type: 'Creature'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/268.jpg',Name: 'Obsianus Golem',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/269.jpg',Name: 'Rod of Ruin',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/270.jpg',Name: 'Sol Ring',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/271.jpg',Name: 'Soul Net',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/272.jpg',Name: 'Sunglasses of Urza',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/273.jpg',Name: 'The Hive',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/274.jpg',Name: 'Throne of Bone',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/275.jpg',Name: 'Time Vault',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/276.jpg',Name: 'Winter Orb',Type: 'Artifact'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/294.jpg',Name: 'Swamp',Type: 'Land'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/296.jpg',Name: 'Swamp',Type: 'Land'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/295.jpg',Name: 'Swamp',Type: 'Land'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/278.jpg',Name: 'Badlands',Type: 'Land'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/279.jpg',Name: 'Bayou',Type: 'Land'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/280.jpg',Name: 'Plateau',Type: 'Land'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/281.jpg',Name: 'Savannah',Type: 'Land'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/282.jpg',Name: 'Scrubland',Type: 'Land'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/283.jpg',Name: 'Taiga',Type: 'Land'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/284.jpg',Name: 'Tropical Island',Type: 'Land'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/285.jpg',Name: 'Tundra',Type: 'Land'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/286.jpg',Name: 'Underground Sea',Type: 'Land'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/287.jpg',Name: 'Volcanic Island',Type: 'Land'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/301.jpg',Name: 'Forest',Type: 'Land'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/302.jpg',Name: 'Forest',Type: 'Land'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/300.jpg',Name: 'Forest',Type: 'Land'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/297.jpg',Name: 'Mountain',Type: 'Land'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/299.jpg',Name: 'Mountain',Type: 'Land'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/298.jpg',Name: 'Mountain',Type: 'Land'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/292.jpg',Name: 'Island',Type: 'Land'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/293.jpg',Name: 'Island',Type: 'Land'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/291.jpg',Name: 'Island',Type: 'Land'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/290.jpg',Name: 'Plains',Type: 'Land'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/289.jpg',Name: 'Plains',Type: 'Land'},
          {enabled: true, tapped: false,image : 'https://img.scryfall.com/cards/normal/en/leb/288.jpg',Name: 'Plains',Type: 'Land'},
      ]
    }
  };

  render() {
    return (
      <div>
        <Playfield deck={this.state.deck} />
      </div>
    );
  }
}

export default App;
