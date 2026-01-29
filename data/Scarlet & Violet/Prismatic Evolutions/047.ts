import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [246],
	set: Set,

	name: {
		en: "Larvitar",
		fr: "Embrylex",
		es: "Larvitar",
		pt: "Larvitar",
		it: "Larvitar",
		de: "Larvitar"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			es: "Golpe Cabeza",
			pt: "Cabeçada",
			it: "Bottintesta",
			de: "Kopfnuss"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Shimaris Yukichi",

	thirdParty: {
		cardmarket: 805436
	}
,

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
			type: 'holo',
			size: 'standard',
			foil: 'pokeball'
		},
		{
			type: 'holo',
			size: 'standard',
			foil: 'masterball'
		}
	]
}

export default card