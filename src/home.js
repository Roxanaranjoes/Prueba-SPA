export function loadHome(container) {
  container.innerHTML = `
    <div class="create-event">
      <h2>Create Event</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="text" placeholder="Description" required />
        <input type="date" required />
        <input type="number" placeholder="Capacity" required />
        <button type="submit">Save</button>
      </form>
    </div>

  `;
}
