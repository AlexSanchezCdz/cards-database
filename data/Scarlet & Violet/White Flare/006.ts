import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [585],
	set: Set,

	name: {
		en: "Deerling",
		fr: "Vivaldaim",
		de: "Sesokitz",
		it: "Deerling",
		pt: "Deerling",
		es: "Deerling",
		'es-mx': "Deerling"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Rear Kick",
			fr: "Ruade",
			de: "Rückwärtskick",
			it: "Retrocalcio",
			pt: "Chute Traseiro",
			es: "Patada Trasera",
			'es-mx': "Patada Trasera"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 835911
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