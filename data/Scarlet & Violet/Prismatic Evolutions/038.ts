import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [682],
	set: Set,

	name: {
		en: "Spritzee",
		fr: "Fluvetin",
		es: "Spritzee",
		pt: "Spritzee",
		it: "Spritzee",
		de: "Parfi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Fairy Wind",
			fr: "Vent Féérique",
			es: "Viento Feérico",
			pt: "Vento de Fada",
			it: "Vento di Fata",
			de: "Feenbrise"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "ryoma uratsuka",

	thirdParty: {
		cardmarket: 805427
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