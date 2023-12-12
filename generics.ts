/**
 * Represents an item along with its associated rank.
 */
interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

/**
   * Ranks an array of items based on a provided ranking function.
   *
   * @param items - The array of items to be ranked.
   * @param rank - The ranking function that assigns a numerical rank to each item.
   * @returns An array of items sorted by their ranks in ascending order.
   *
   * @example
   * // Usage:
//    * const items = [/* your items here */ //    * const rankedItems = ranker(items, (item) => /* your ranking logic here */);
//    * console.log(rankedItems);
//    */
function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  // Assign ranks to each item
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));

  // Sort items based on their ranks
  ranks.sort((a, b) => a.rank - b.rank);

  // Return the items sorted by their ranks
  return ranks.map((rank) => rank.item);
}

interface pokemon {
  name: string;
  hp: number;
}

const pokemon: pokemon[] = [
  {
    name: "one",
    hp: 20,
  },
  {
    name: "two",
    hp: 5,
  },
];

const ranks = ranker(pokemon, ({ hp }) => hp);

console.log(ranks);
