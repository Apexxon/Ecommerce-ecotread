export function ProductFilters({ category, setCategory, maxPrice, setMaxPrice }) {
  return (
    <div className="filters">
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="todos">Todas as categorias</option>
        <option value="roupas">Roupas e acessórios</option>
        <option value="beleza">Beleza e cuidados pessoais</option>
        <option value="casa">Casa</option>
        <option value="tecnologia">Tecnologia verde</option>
      </select>
      <label>
        Preço até R$ {maxPrice}
        <input
          type="range"
          min="0"
          max="500"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
      </label>
    </div>
  );
}
