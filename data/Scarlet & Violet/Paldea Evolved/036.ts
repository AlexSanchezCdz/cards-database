import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [910],
	set: Set,

	name: {
		fr: "Crocogril",
		en: "Crocalor",
		es: "Crocalor",
		it: "Crocalor",
		pt: "Crocalor",
		de: "Lokroko"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	evolveFrom: {
		fr: "Chochodile",
		en: "Fuecoco",
		es: "Fuecoco",
		it: "Fuecoco",
		pt: "Fuecoco",
		de: "Krokel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			fr: "Crachage de Feu Régulier",
			en: "Steady Firebreathing",
			es: "Lanzallamas Continuo",
			it: "Soffiofuoco Mirato",
			pt: "Hálito de Fogo Constante",
			de: "Stetiger Feuerhauch"
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire"],

		name: {
			fr: "Mégaphone",
			en: "Hyper Voice",
			es: "Vozarrón",
			it: "Granvoce",
			pt: "Hipervoz",
			de: "Schallwelle"
		},

		damage: 70
	}],

	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			size: 'standard'
		},
		{
			type: 'reverse',
			size: 'standard'
		},
		{
			type: 'normal',
			size: 'standard',
			stamp: [{ stamp: 'battle-academy', detail: 15, year: 2024 }]
		},
		{
			type: 'normal',
			size: 'standard',
			stamp: [{ stamp: 'battle-academy', detail: 30, year: 2024 }]
		},
		{
			type: 'normal',
			size: 'standard',
			stamp: [{ stamp: 'battle-academy', detail: 51, year: 2024 }]
		}
	],

	illustrator: "Hitoshi Ariga",

	thirdParty: {
		cardmarket: 715510
	}
}

export default card