export function TapCard(cards, card) {
    for (var i = 0; i < cards.length; i++) {
        if (cards[i].Name === card.Name) {
            cards[i].tapped = true;
            break;
        }
    }
    return cards;
}