import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [447],
	set: Set,

	name: {
		en: "Riolu",
		fr: "Riolu",
		es: "Riolu",
		it: "Riolu",
		pt: "Riolu",
		de: "Riolu"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Punch",
			fr: "Koud'Poing",
			es: "Puño",
			it: "Pugno",
			pt: "Soco",
			de: "Boxhieb"
		},

		damage: 30
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

	illustrator: "Souichirou Gunjima",

	thirdParty: {
		cardmarket: 785935
	}
}

export default card
