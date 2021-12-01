function AddFood(props) {
  console.log(props);
  const { addMarvin } = props;
  return (
    <form onSubmit={addMarvin}>
      <h1>Add Food Here</h1>
      <label class="label">IMAGE URL</label>
      <input name="imageUrl" class="input" type="text" placeholder="img url" />
      <label class="label">FOOD NAME</label>
      <input name="name" class="input" type="text" placeholder="food name" />
      <label class="label">CALORIES</label>
      <input
        name="calories"
        class="input"
        type="text"
        placeholder="number of calories"
      />
      <button>Add this food</button>
    </form>
  );
}

export default AddFood;
