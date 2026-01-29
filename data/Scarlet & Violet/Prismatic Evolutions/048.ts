import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [247],
	set: Set,

	name: {
		en: "Pupitar",
		fr: "Ymphect",
		es: "Pupitar",
		pt: "Pupitar",
		it: "Pupitar",
		de: "Pupitar"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	evolveFrom: {
		en: "Larvitar",
		fr: "Embrylex",
		es: "Larvitar",
		pt: "Larvitar",
		it: "Larvitar",
		de: "Larvitar"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Sand Spray",
			fr: "Jet Sableux",
			es: "Rociado de Arena",
			pt: "Spray de Areia",
			it: "Silicospruzzo",
			de: "Sandspray"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			es: "Martillear",
			pt: "Martelada",
			it: "Martello",
			de: "Einhämmern"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Shigenori Negishi",

	thirdParty: {
		cardmarket: 805437
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