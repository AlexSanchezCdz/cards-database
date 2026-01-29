import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Switch",
		fr: "Échange",
		es: "Cambio",
		it: "Scambio",
		pt: "Substituição",
		de: "Tausch"
	},

	rarity: "Common",
	category: "Trainer",

	effect: {
		en: "Switch your Active Pokémon with 1 of your Benched Pokémon.",
		fr: "Échangez votre Pokémon Actif contre l'un de vos Pokémon de Banc.",
		es: "Cambia tu Pokémon Activo por uno de tus Pokémon en Banca.",
		it: "Scambia il tuo Pokémon attivo con uno della tua panchina.",
		pt: "Troque o seu Pokémon Ativo por 1 dos seus Pokémon no Banco.",
		de: "Tausche dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank aus."
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
			stamp: [{ stamp: 'battle-academy', detail: 40, year: 2024 }]
		},
		{
			type: 'normal',
			size: 'standard',
			stamp: [{ stamp: 'battle-academy', detail: 58, year: 2024 }]
		},
		{
			type: 'normal',
			size: 'standard',
			stamp: [{ stamp: 'battle-academy', year: 2024 }]
		},
		{
			type: 'normal',
			size: 'standard',
			stamp: [{ stamp: 'battle-academy', detail: 36, year: 2024 }]
		},
		{
			type: 'normal',
			size: 'standard',
			stamp: [{ stamp: 'battle-academy', detail: 52, year: 2024 }]
		},
		{
			type: 'holo',
			size: 'standard',
			stamp: ['player-rewards-program'],
			foil: 'cosmos'
		},
		{
			type: 'normal',
			size: 'standard',
			stamp: ['player-rewards-program']
		}
	],

	illustrator: "Studio Bora Inc.",

	thirdParty: {
		cardmarket: 702490
	}
}

export default card