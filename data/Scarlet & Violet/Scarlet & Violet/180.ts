import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Nemona",
		fr: "Menzi",
		es: "Mencía",
		it: "Nemi",
		pt: "Noêmia",
		de: "Nemila"
	},

	rarity: "Common",
	category: "Trainer",

	effect: {
		en: "Draw 3 cards.",
		fr: "Piochez 3 cartes.",
		es: "Roba 3 cartas.",
		it: "Pesca tre carte.",
		pt: "Compre 3 cartas.",
		de: "Ziehe 3 Karten."
	},

	trainerType: "Supporter",
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
			stamp: [{ stamp: 'battle-academy', detail: 28, year: 2024 }]
		},
		{
			type: 'normal',
			size: 'standard',
			stamp: [{ stamp: 'battle-academy', detail: 41, year: 2024 }]
		},
		{
			type: 'normal',
			size: 'standard',
			stamp: [{ stamp: 'battle-academy', detail: 52, year: 2024 }]
		},
		{
			type: 'normal',
			size: 'standard',
			stamp: [{ stamp: 'battle-academy', detail: 57, year: 2024 }]
		},
		{
			type: 'normal',
			size: 'standard',
			stamp: [{ stamp: 'battle-academy', year: 2024 }]
		},
		{
			type: 'normal',
			size: 'standard',
			stamp: [{ stamp: 'battle-academy', detail: 13, year: 2024 }]
		},
		{
			type: 'normal',
			size: 'standard',
			stamp: [{ stamp: 'battle-academy', detail: 33, year: 2024 }]
		},
		{
			type: 'normal',
			size: 'standard',
			stamp: [{ stamp: 'battle-academy', detail: 42, year: 2024 }]
		},
		{
			type: 'normal',
			size: 'standard',
			stamp: [{ stamp: 'battle-academy', detail: 54, year: 2024 }]
		}
	],

	illustrator: "Sanosuke Sakuma",

	thirdParty: {
		cardmarket: 702476
	}
}

export default card