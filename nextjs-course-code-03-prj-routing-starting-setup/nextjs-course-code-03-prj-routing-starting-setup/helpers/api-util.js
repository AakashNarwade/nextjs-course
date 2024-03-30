export async function getAllEventsFromDb() {
  const res = await fetch(
    "https://next-course-80a15-default-rtdb.firebaseio.com/sales/events.json"
  );
  const data = await res.json();
  const events = [];
  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
}

export async function getFeaturedEvents() {
  const data = await getAllEventsFromDb();
  return data.filter((event) => event.isFeatured);
}

export async function getAllEvents() {
  const data = await getAllEventsFromDb();
  return data;
}

export async function getEventById(id) {
  const data = await getAllEventsFromDb();

  return data.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
  const data = await getAllEventsFromDb();

  const { year, month } = dateFilter;

  let filteredEvents = data.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
