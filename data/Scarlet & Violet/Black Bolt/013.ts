import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [554],
	set: Set,

	name: {
		en: "Darumaka",
		fr: "Darumarond",
		de: "Flampion",
		it: "Darumaka",
		pt: "Darumaka",
		es: "Darumaka",
		'es-mx': "Darumaka"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Will-O-Wisp",
			fr: "Feu Follet",
			de: "Irrlicht",
			it: "Fuocofatuo",
			pt: "Fogo Fátuo",
			es: "Fuego Fatuo",
			'es-mx': "Fuego Fatuo"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 835928
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