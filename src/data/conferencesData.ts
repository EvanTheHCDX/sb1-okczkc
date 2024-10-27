export interface ConferenceTeam {
  id: string;
  name: string;
  mascot: string;
  location: string;
  conference: string;
  colors: string[];
  imageUrl: string;
  sport?: string;
}

export const BIG_12_TEAMS: ConferenceTeam[] = [
  {
    id: 'texas',
    name: 'University of Texas',
    mascot: 'Longhorns',
    location: 'Austin, Texas',
    conference: 'Big 12',
    colors: ['#BF5700', '#FFFFFF'],
    imageUrl: 'https://images.unsplash.com/photo-1572961270604-f1eae8b1c154?auto=format&fit=crop&q=80'
  },
  {
    id: 'oklahoma',
    name: 'University of Oklahoma',
    mascot: 'Sooners',
    location: 'Norman, Oklahoma',
    conference: 'Big 12',
    colors: ['#841617', '#FDF9D8'],
    imageUrl: 'https://images.unsplash.com/photo-1580087532184-5ad84c75a064?auto=format&fit=crop&q=80'
  },
  {
    id: 'kansas',
    name: 'University of Kansas',
    mascot: 'Jayhawks',
    location: 'Lawrence, Kansas',
    conference: 'Big 12',
    colors: ['#0051BA', '#E8000D'],
    imageUrl: 'https://images.unsplash.com/photo-1567459169668-95d355371bda?auto=format&fit=crop&q=80'
  }
];