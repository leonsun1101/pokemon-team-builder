import PokemonCard from './PokemonCard';
import SearchBar from './SearchBar';
import { useState } from 'react';
import { fetchPokemonByName } from '../utils/api';


function TeamBuilder() {
  const [team, setTeam] = useState([]);

  async function handleAdd(name) {
    if (team.length >= 6) return alert('Team is full!');
    if (team.some(p => p.name === name)) return;
    const data = await fetchPokemonByName(name);
    setTeam([...team, data]);
  }

  function removeFromTeam(index) {
    setTeam(team.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>Your Team</h2>
      <div className="team-grid">
        {team.map((p, i) => (
          <PokemonCard
            key={p.name}
            data={p}
            onRemove={() => removeFromTeam(i)}
          />
        ))}
      </div>

      <h2>Add Pokémon</h2>
      <SearchBar onSelect={handleAdd} />
    </div>
  );
}

export default TeamBuilder;
