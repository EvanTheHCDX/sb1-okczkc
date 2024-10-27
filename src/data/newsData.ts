export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  imageUrl: string;
  source: string;
  url: string;
}

export const WOMENS_BASKETBALL_NEWS: NewsItem[] = [
  {
    id: 'wb-1',
    title: 'South Carolina Remains Undefeated, Extends Winning Streak',
    summary: 'Dawn Staley\'s Gamecocks continue their dominant run in NCAA women\'s basketball with another impressive victory.',
    date: 'March 19, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80',
    source: 'NCAA Basketball',
    url: 'https://www.ncaa.com/sports/basketball-women'
  },
  {
    id: 'wb-2',
    title: 'Caitlin Clark Breaks Another NCAA Scoring Record',
    summary: 'Iowa\'s superstar guard continues to make history with exceptional performance and leadership on the court.',
    date: 'March 18, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&q=80',
    source: 'College Sports',
    url: 'https://www.ncaa.com/sports/basketball-women'
  },
  {
    id: 'wb-3',
    title: 'March Madness: Women\'s Tournament Bracket Revealed',
    summary: 'Selection committee announces tournament field with several surprising seeds and matchups.',
    date: 'March 17, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80',
    source: 'NCAA March Madness',
    url: 'https://www.ncaa.com/sports/basketball-women'
  }
];