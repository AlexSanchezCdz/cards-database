import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [577],
	set: Set,

	name: {
		en: "Solosis",
		fr: "Nucléos",
		de: "Monozyto",
		it: "Solosis",
		pt: "Solosis",
		es: "Solosis",
		'es-mx': "Solosis"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Rollout",
			fr: "Roulade",
			de: "Walzer",
			it: "Rotolamento",
			pt: "Rolagem",
			es: "Rodar",
			'es-mx': "Rodada"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 835981
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