-- https://node-postgres.com/features/types#uuid--json--jsonb
CREATE TABLE plots (
  id    SERIAL PRIMARY KEY,
  json  JSONB
);
