CREATE TABLE rooms (
	id SERIAL PRIMARY KEY,
	slug TEXT UNIQUE NOT NULL,
	name TEXT NOT NULL,
	description TEXT NOT NULL,
	details TEXT NOT NULL,
	price INT NOT NULL CHECK (price >= 0),
	size TEXT NOT NULL,
	guests INT NOT NULL CHECK (guests > 0),
	bed TEXT NOT NULL,
	features TEXT[] NOT NULL DEFAULT '{}',
	image TEXT NOT NULL,
	gallery TEXT[] NOT NULL DEFAULT '{}',
	created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);