import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [574],
	set: Set,

	name: {
		en: "Gothita",
		fr: "Scrutella",
		de: "Mollimorba",
		it: "Gothita",
		pt: "Gothita",
		es: "Gothita",
		'es-mx': "Gothita"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Super Psy Bolt",
			fr: "Super Psy",
			de: "Super-Psischlag",
			it: "Superpsico",
			pt: "Super-raio Psíquico",
			es: "Superrayo Psi",
			'es-mx': "Superpsicotrueno"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 835976
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