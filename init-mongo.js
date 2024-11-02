db = db.getSiblingDB('kunaTalk');

db.createUser({
  user: 'kunatalk',
  pwd: 'kunatalk',
  roles: [{ role: 'readWrite', db: 'kunaTalk' }],
});
