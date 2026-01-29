import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [228],
	set: Set,

	name: {
		en: "Houndour",
		fr: "Malosse",
		es: "Houndour",
		it: "Houndour",
		pt: "Houndour",
		de: "Hunduster"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			it: "Morso",
			pt: "Mordida",
			de: "Biss"
		},

		damage: 10
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			en: "Flare",
			fr: "Flamboiement",
			es: "Llama",
			it: "Fiammata",
			pt: "Chama",
			de: "Flackern"
		},

		damage: 30
	}],

	retreat: 1,
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
			stamp: [{ stamp: 'battle-academy', detail: 21, year: 2024 }]
		},
		{
			type: 'normal',
			size: 'standard',
			stamp: [{ stamp: 'battle-academy', detail: 39, year: 2024 }]
		},
		{
			type: 'normal',
			size: 'standard',
			stamp: [{ stamp: 'battle-academy', detail: 7, year: 2024 }]
		}
	],

	illustrator: "nagimiso",

	thirdParty: {
		cardmarket: 702329
	}
}

export default card