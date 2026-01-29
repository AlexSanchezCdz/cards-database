import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Super Ball",
		en: "Great Ball",
		es: "Super Ball",
		it: "Mega Ball",
		pt: "Grande Bola",
		de: "Superball"
	},

	rarity: "Common",
	category: "Trainer",

	effect: {
		fr: "Regardez les 7 cartes du dessus de votre deck. Vous pouvez montrer un Pokémon que vous y trouvez, puis l'ajouter à votre main. Mélangez les autres cartes avec votre deck.",
		en: "Look at the top 7 cards of your deck. You may reveal a Pokémon you find there and put it into your hand. Shuffle the other cards back into your deck.",
		es: "Mira las 7 primeras cartas de tu baraja. Puedes enseñar 1 Pokémon que encuentres entre ellas y ponerlo en tu mano. Pon el resto de las cartas de nuevo en tu baraja y barájalas todas.",
		it: "Guarda le prime sette carte del tuo mazzo. Puoi mostrare un Pokémon presente tra esse e aggiungerlo alle carte che hai in mano. Poi rimischia le altre carte nel tuo mazzo.",
		pt: "Olhe as 7 cartas de cima do seu baralho. Você pode revelar um Pokémon que encontrar lá e colocá-lo na sua mão. Embaralhe as outras cartas de volta no seu baralho.",
		de: "Schau dir die obersten 7 Karten deines Decks an. Du kannst 1 Pokémon, das du dort findest, deinem Gegner zeigen und auf deine Hand nehmen. Mische die anderen Karten zurück in dein Deck."
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
			stamp: [{ stamp: 'battle-academy', detail: 33, year: 2024 }]
		},
		{
			type: 'normal',
			size: 'standard',
			stamp: [{ stamp: 'battle-academy', detail: 43, year: 2024 }]
		},
		{
			type: 'normal',
			size: 'standard',
			stamp: [{ stamp: 'battle-academy', detail: 48, year: 2024 }]
		},
		{
			type: 'normal',
			size: 'standard',
			stamp: [{ stamp: 'battle-academy', detail: 55, year: 2024 }]
		},
		{
			type: 'normal',
			size: 'standard',
			stamp: [{ stamp: 'battle-academy', year: 2024 }]
		},
		{
			type: 'normal',
			size: 'standard',
			stamp: [{ stamp: 'battle-academy', detail: 29, year: 2024 }]
		},
		{
			type: 'normal',
			size: 'standard',
			stamp: [{ stamp: 'battle-academy', detail: 38, year: 2024 }]
		},
		{
			type: 'normal',
			size: 'standard',
			stamp: [{ stamp: 'battle-academy', detail: 49, year: 2024 }]
		},
		{
			type: 'normal',
			size: 'standard',
			stamp: [{ stamp: 'battle-academy', detail: 57, year: 2024 }]
		}
	],

	illustrator: "Studio Bora Inc.",

	thirdParty: {
		cardmarket: 715658
	}
}

export default card