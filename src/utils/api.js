const API_BASE = 'https://pokeapi.co/api/v2';

export async function fetchAllPokemon(limit = 151) {
    const res = await fetch(`${API_BASE}/pokemon?limit=${limit}`);
    const data = await res.json();
    return data.results;
}

export async function fetchPokemonByName(name) {
    const res = await fetch(`${API_BASE}/pokemon/${name.toLowerCase()}`);
    if (!res.ok) throw new Error('Pokemon not found');
    return res.json()
}