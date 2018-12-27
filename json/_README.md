JSON files placed in JSON folder are meant to mimic the processed JSON's that are meant to be consumed by the frontend.

JSON files in this folder shall not reflect the database structure nor reflect relations or at least limit such to mininum.

It is the responsibility of the backend software to process the relational data and generate the result JSONs that are as frontend-friendly as possible.

JSONs returned to frontend should contain as few "foreign keys" as possible. It is not frontend's job to do that kind of parsing!


