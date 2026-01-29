import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Potion",
		fr: "Potion",
		es: "Poción",
		it: "Pozione",
		pt: "Poção",
		de: "Trank"
	},

	rarity: "Common",
	category: "Trainer",

	effect: {
		en: "Heal 30 damage from 1 of your Pokémon.",
		fr: "Soignez 30 dégâts de l'un de vos Pokémon.",
		es: "Cura 30 puntos de daño a uno de tus Pokémon.",
		it: "Cura uno dei tuoi Pokémon da 30 danni.",
		pt: "Cure 30 pontos de dano de 1 dos seus Pokémon.",
		de: "Heile 30 Schadenspunkte bei 1 deiner Pokémon."
	},

	trainerType: "Item",
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
			stamp: [{ stamp: 'battle-academy', detail: 25, year: 2024 }]
		},
		{
			type: 'normal',
			size: 'standard',
			stamp: [{ stamp: 'battle-academy', detail: 37, year: 2024 }]
		},
		{
			type: 'normal',
			size: 'standard',
			stamp: [{ stamp: 'battle-academy', year: 2024 }]
		},
		{
			type: 'normal',
			size: 'standard',
			stamp: [{ stamp: 'battle-academy', detail: 15, year: 2024 }]
		},
		{
			type: 'normal',
			size: 'standard',
			stamp: [{ stamp: 'battle-academy', detail: 18, year: 2024 }]
		}
	],

	illustrator: "Ayaka Yoshida",

	thirdParty: {
		cardmarket: 702484
	}
}

export default card