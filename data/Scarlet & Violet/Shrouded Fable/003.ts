import { Card } from "../../../interfaces"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [722],
	set: Set,

	name: {
		en: "Rowlet",
		fr: "Brindibou",
		es: "Rowlet",
		it: "Rowlet",
		pt: "Rowlet",
		de: "Bauz"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Add On",
			fr: "Ajout",
			es: "Sumar",
			it: "Supplemento",
			pt: "Adicionar",
			de: "Hinzufügen"
		},

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			es: "Roba 1 carta.",
			it: "Pesca una carta.",
			pt: "Compre uma carta.",
			de: "Ziehe 1 Karte."
		}
	}, {
		cost: ["Grass"],

		name: {
			en: "Leafage",
			fr: "Feuillage",
			es: "Follaje",
			it: "Fogliame",
			pt: "Folhagem",
			de: "Blattwerk"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: 'normal',
			size: 'standard'
		},
		{
			type: 'reverse',
			size: 'standard'
		}
	],

	illustrator: "Yoshimi Miyoshi",

	thirdParty: {
		cardmarket: 780891
	}
}

export default card
