INSERT INTO rooms (slug, name, description, details, price, size, guests, bed, features, image, gallery)
VALUES (
	'heritage-room', 
	'Heritage Room', 
	'Carved wooden headboard, warm lighting and a quiet corner for tea.', 
	'Our Heritage Room is the simplest way to feel the walawwa spirit. A hand-carved headboard, polished timber floors and brass lamps set the mood, while a tea tray by the window invites a slow morning.', 
	18000, 
	'28 m²', 
	2, 
	'1 King bed', 
	ARRAY['Air conditioning', 'Tea and coffee tray', 'Rain shower', 'Writing desk'], '/images/rooms/heritage-room.png', 
	ARRAY['/images/rooms/bathroom.png', '/images/rooms/balcony.png']
);

INSERT INTO rooms (slug, name, description, details, price, size, guests, bed, features, image, gallery)
VALUES
(
  'deluxe-hill-view',
  'Deluxe Hill View',
  'Wake up to misty green hills from your own private window.',
  'A larger room with a wide window facing the hills of Kandy. Watch the mist lift over the valley with a cup of Ceylon tea, then enjoy a spacious bathroom with natural stone finishes.',
  24000,
  '36 m²',
  2,
  '1 King bed',
  ARRAY['Hill view window', 'Air conditioning', 'Tea and coffee tray', 'Bathtub'],
  '/images/rooms/deluxe-hill-view.png',
  ARRAY['/images/rooms/bathroom.png', '/images/rooms/balcony.png']
),
(
  'kandyan-suite',
  'Kandyan Suite',
  'A spacious suite with a sitting area, brass lamps and traditional furniture.',
  'Our signature suite pairs a separate sitting area with traditional Kandyan furniture and carved pillars. A private veranda looks over the garden, and the bathroom has a freestanding bathtub.',
  38000,
  '55 m²',
  3,
  '1 King bed and sofa bed',
  ARRAY['Private veranda', 'Separate sitting area', 'Freestanding bathtub', 'Complimentary minibar'],
  '/images/rooms/kandyan-suite.png',
  ARRAY['/images/rooms/bathroom.png', '/images/rooms/balcony.png']
),
(
  'family-garden-room',
  'Family Garden Room',
  'Two beds and a private door opening onto a quiet garden courtyard.',
  'Made for families, with two comfortable beds and a private door to the garden courtyard. Children can play safely outside while you relax on the veranda.',
  30000,
  '42 m²',
  4,
  '2 Queen beds',
  ARRAY['Garden courtyard', 'Air conditioning', 'Extra bedding on request', 'Rain shower'],
  '/images/rooms/family-garden-room.png',
  ARRAY['/images/rooms/bathroom.png', '/images/rooms/balcony.png']
);