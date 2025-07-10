function PokemonCard({ data, onRemove }) {
    return (
      <div className="card">
        <h3>{data.name.toUpperCase()}</h3>
        <img src={data.sprites.front_default} alt={data.name} />
        <p>Type: {data.types.map(t => t.type.name).join(', ')}</p>
        <p>HP: {data.stats[0].base_stat}</p>
        <button onClick={onRemove}>Remove</button>
      </div>
    );
  }
  
  export default PokemonCard;
  