import { Sport, Player, Team } from '../types/search';
import { NOTRE_DAME_PLAYERS } from './notreDataFootball';
import { BIG_12_TEAMS } from './conferencesData';

export const NCAA_SPORTS: Sport[] = [
  { name: 'Cross Country', gender: 'Men/Women', season: 'Fall' },
  { name: 'Field Hockey', gender: 'Women', season: 'Fall' },
  { name: 'Football', gender: 'Men', season: 'Fall' },
  { name: 'Soccer', gender: 'Men/Women', season: 'Fall' },
  { name: 'Volleyball', gender: 'Women', season: 'Fall' },
  { name: 'Basketball', gender: 'Men/Women', season: 'Winter' },
  { name: 'Bowling', gender: 'Women', season: 'Winter' },
  { name: 'Fencing', gender: 'Men/Women', season: 'Winter' },
  { name: 'Gymnastics', gender: 'Men/Women', season: 'Winter' },
  { name: 'Ice Hockey', gender: 'Men/Women', season: 'Winter' },
  { name: 'Indoor Track and Field', gender: 'Men/Women', season: 'Winter' },
  { name: 'Rifle', gender: 'Coed', season: 'Winter' },
  { name: 'Skiing', gender: 'Men/Women', season: 'Winter' },
  { name: 'Swimming and Diving', gender: 'Men/Women', season: 'Winter' },
  { name: 'Wrestling', gender: 'Men', season: 'Winter' },
  { name: 'Baseball', gender: 'Men', season: 'Spring' },
  { name: 'Beach Volleyball', gender: 'Women', season: 'Spring' },
  { name: 'Golf', gender: 'Men/Women', season: 'Spring' },
  { name: 'Lacrosse', gender: 'Men/Women', season: 'Spring' },
  { name: 'Outdoor Track and Field', gender: 'Men/Women', season: 'Spring' },
  { name: 'Rowing', gender: 'Women', season: 'Spring' },
  { name: 'Softball', gender: 'Women', season: 'Spring' },
  { name: 'Tennis', gender: 'Men/Women', season: 'Spring' },
  { name: 'Volleyball', gender: 'Men', season: 'Spring' },
  { name: 'Water Polo', gender: 'Men/Women', season: 'Spring' },
];

export const MOCK_PLAYERS: Player[] = [...NOTRE_DAME_PLAYERS];

export const MOCK_TEAMS: Team[] = [
  { id: 'nd-1', name: 'Notre Dame Fighting Irish', sport: 'Football' },
  { id: '2', name: 'Duke Blue Devils', sport: 'Basketball' },
  { id: '3', name: 'Stanford Cardinal', sport: 'Soccer' },
  ...BIG_12_TEAMS.map(team => ({
    id: team.id,
    name: team.name,
    sport: team.sport
  }))
];