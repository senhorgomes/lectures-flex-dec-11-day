-- Values to insert into the students table

-- INSERT INTO students (cohort, name) VALUES ('June 26', 'Conor'); -- Add a new student with the id 1
INSERT INTO students(name) VALUES('Caleb'); -- 1

INSERT INTO pets(name, breed, type, age, student_id)
VALUES('Scout', 'West Highland Terrier', 'Dog', 10, 1);

INSERT INTO students(name) VALUES('Vesna'); -- 2
INSERT INTO pets(name, breed, type, age, student_id)
VALUES('Bella', 'Maincoon', 'Cat', 18, 2),
      ('Bree', 'Border Collie', 'Dog', 7, 2);

INSERT INTO students(name) VALUES('Sourav'); -- 3
INSERT INTO pets(name, breed, type, age, student_id)
VALUES('Shaggy', 'rottweiler', 'Dog', 3, 3);

INSERT INTO pets(name, breed, type, age, student_id)
VALUES('Skye', 'West Highland Terrier', 'Dog', 1, 1);

INSERT INTO students(name) VALUES('Camron'); -- 4
INSERT INTO pets(name, breed, type, age, student_id)
VALUES('Taco', 'parrot', 'bird', 7, 4);

INSERT INTO students(name) VALUES('Estelle'); -- 5
INSERT INTO pets(name, breed, type, age, student_id)
VALUES('Whisky', 'Tabby', 'Cat', 11, 5);

INSERT INTO students(name) VALUES('Carmelia'); -- 6
INSERT INTO pets(name, breed, type, age, student_id)
VALUES('Zuko', 'Tabby', 'Cat', 3, 6),
      ('Bumi', 'Terrier Mix', 'Dog', 2, 6);

INSERT INTO students(name) VALUES('Ryan'); -- 7
INSERT INTO pets(name, breed, type, age, student_id)
VALUES('Shache', 'Tuxedo', 'Cat', 3, 7);