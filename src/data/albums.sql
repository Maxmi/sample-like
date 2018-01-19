INSERT INTO
  albums (title, artist)
VALUES
  ('Malibu', 'Anderson .Paak'),
  ('A Seat at the Table', 'Solange Knowles'),
  ('Melodrama', 'Lorde'),
  ('In Rainbows', 'Radiohead')
;

INSERT INTO
  users (name, email, password)
VALUES
  ('bob', 'bob@b.com', '123'),
  ('joe', 'joe@j.com', '123')
;

INSERT INTO
  likes (user_id, album_id)
VALUES
  ('1', '1'),
  ('2', '2'),
  ('1', '2'),
  ('2', '3')
;
