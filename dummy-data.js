const DUMMY_EVENTS = [
    {
      id: 'e1',
      title: 'Programming for everyone',
      description:
        'Ea esse ut tempor consectetur. Adipisicing occaecat.',
      location: 'Delhi 25, India',
      date: '2021-05-12',
      image: '/images/1.jpg',
      isFeatured: false,
    },
    {
      id: 'e2',
      title: 'Networking for introverts',
      description:
        "Culpa ad reprehenderit. Esse excepteur proident dolor tempor tempor.",
      location: 'Delhi 06, India',
      date: '2021-05-30',
      image: '/images/2.jpg',
      isFeatured: true,
    },
    {
      id: 'e3',
      title: 'Networking for extroverts',
      description:
        'Anim labore dolor laborum. Tempor aliquip commodo aute sint excepteur Duis anim qui irure consequat Lorem irure sunt.',
      location: 'Delhi 60, India',
      date: '2022-04-10',
      image: '/images/3.jpg',
      isFeatured: true,
    },
  ];
  
  export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }
  
  export function getAllEvents() {
    return DUMMY_EVENTS;
  }
  
  export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;

    let filteredEvents = DUMMY_EVENTS.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
    
    return filteredEvents;
  }
  
  export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
  }