# FIFA Ticket Booking System

## Database Schema

This project uses **PostgreSQL** to manage users, teams, stadiums, matches, tickets, and bookings for a FIFA Ticket Booking System.

---

# Database Tables

## 1. Users

| Column     | Type         | Description           |
| ---------- | ------------ | --------------------- |
| id         | Primary Key  | User ID               |
| full_name  | VARCHAR(50)  | User's full name      |
| email      | VARCHAR(100) | Unique email          |
| phone      | VARCHAR(20)  | Phone number          |
| country    | VARCHAR(50)  | User's country        |
| created_at | TIMESTAMP    | Account creation time |

---

## 2. Teams

| Column    | Type         | Description  |
| --------- | ------------ | ------------ |
| id        | Primary Key  | Team ID      |
| team_name | VARCHAR(100) | Team name    |
| country   | VARCHAR(50)  | Country      |
| coach     | VARCHAR(100) | Coach name   |
| fifa_rank | INTEGER      | FIFA Ranking |

---

## 3. Stadiums

| Column       | Type         | Description      |
| ------------ | ------------ | ---------------- |
| id           | Primary Key  | Stadium ID       |
| stadium_name | VARCHAR(100) | Stadium name     |
| city         | VARCHAR(50)  | City             |
| country      | VARCHAR(50)  | Country          |
| capacity     | INTEGER      | Seating capacity |

---

## 4. Matches

| Column       | Type        | Description      |
| ------------ | ----------- | ---------------- |
| id           | Primary Key | Match ID         |
| home_team_id | Foreign Key | Home Team        |
| away_team_id | Foreign Key | Away Team        |
| stadium_id   | Foreign Key | Stadium          |
| match_date   | DATE        | Match date       |
| kickoff_time | TIME        | Kickoff time     |
| stage        | VARCHAR(30) | Tournament stage |

### Foreign Keys

* home_team_id → teams.id
* away_team_id → teams.id
* stadium_id → stadiums.id

---

## 5. Tickets

| Column      | Type        | Description        |
| ----------- | ----------- | ------------------ |
| id          | Primary Key | Ticket ID          |
| match_id    | Foreign Key | Match              |
| seat_number | VARCHAR(20) | Seat Number        |
| ticket_type | VARCHAR(30) | Ticket Category    |
| price       | INTEGER     | Ticket Price       |
| status      | VARCHAR(20) | Available / Booked |

### Foreign Key

* match_id → matches.id

---

## 6. Bookings

| Column         | Type        | Description    |
| -------------- | ----------- | -------------- |
| id             | Primary Key | Booking ID     |
| user_id        | Foreign Key | User           |
| ticket_id      | Foreign Key | Ticket         |
| payment_status | VARCHAR(20) | Payment Status |
| booking_date   | DATE        | Booking Date   |

### Foreign Keys

* user_id → users.id
* ticket_id → tickets.id

---

# Database Creation (DDL)

## Users

```sql
create table users (
  id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  full_name varchar(20) not null,
  email varchar(20) not null unique,
  phone varchar(20),
  country varchar(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Modifications

```sql
alter table users
alter column email type varchar(200);
```

---

## Teams

```sql
alter table teams
add constraint fifa_rank_positive
check (fifa_rank > 0);

alter table teams
alter column country type varchar(50);
```

---

## Stadiums

```sql
create table stadiums(
  id int GENERATED ALWAYS as IDENTITY,
  stadium_name varchar(40) not null unique,
  city varchar(30) not null unique,
  country varchar(30) not null unique,
  capacity int check (capacity > 0)
);
```

Later modifications:

* Added Primary Key
* Updated column sizes
* Added NOT NULL constraint for capacity

---

## Matches

```sql
create table matches(
  id int generated ALWAYS as IDENTITY PRIMARY key,

  home_team_id int not null,
  away_team_id int not null,
  stadium_id int not null,

  match_date date not null,
  kickoff_time time not null,
  stage varchar(50) not null,

  constraint fk_home_team
    foreign key(home_team_id)
    references teams(id),

  constraint fk_away_team
    foreign key(away_team_id)
    references teams(id),

  constraint fk_stadiums
    foreign key(stadium_id)
    references stadiums(id),

  constraint check_teams
    check(home_team_id <> away_team_id)
);
```

Rename constraint:

```sql
alter table matches
rename constraint fk_stadiums to fk_stadium;
```

---

## Tickets

```sql
create table tickets(
  id int GENERATED ALWAYS as IDENTITY PRIMARY KEY,

  match_id int not null,
  seat_number varchar(30) not null,
  ticket_type varchar(20) not null,
  price int not null,
  status varchar(20) not null,

  constraint fk_match
    foreign key(match_id)
    references matches(id),

  constraint check_price
    check(price > 0),

  constraint status_check
    check(status in ('AVAILABLE','BOOKED')),

  constraint unique_seat
    unique(match_id, seat_number)
);
```

---

## Bookings

```sql
create table bookings(
  id int generated always as identity primary key,

  user_id int not null,
  ticket_id int not null,

  payment_status varchar(20) not null,
  booking_date date not null,

  constraint fk_user
    foreign key(user_id)
    references users(id),

  constraint fk_ticket
    foreign key(ticket_id)
    references tickets(id),

  constraint unique_ticket
    unique(ticket_id),

  constraint check_payment_status
    check(payment_status in ('PAID','PENDING','CANCELLED'))
);
```

---

# Schema Inspection Queries

## Current Database

```sql
SELECT CURRENT_DATABASE();
```

## List Databases

```sql
SELECT datname
FROM pg_database
WHERE datistemplate = false;
```

## List Tables

```sql
select table_name
from information_schema.tables
where table_schema = 'public';
```

## Inspect Table Columns

```sql
select
    column_name,
    data_type,
    is_nullable,
    column_default
from information_schema.columns
where table_name = 'users';
```

The same query was also used for:

* teams
* stadiums

---

# SQL Queries

## 1. Show all matches with participating teams

```sql
select
    m.id AS match_id,
    home.team_name AS home_team,
    away.team_name AS away_team,
    m.match_date,
    m.kickoff_time,
    m.stage
from matches m
join teams home
on home.id = m.home_team_id
join teams away
on away.id = m.away_team_id;
```

---

## 2. Display users who booked more than one ticket

```sql
select
    u.id,
    u.full_name,
    count(b.user_id) as total_bookings
from users u
join bookings b
on u.id = b.user_id
group by u.full_name, u.id
having count(*) > 1;
```

---

## 3. Find the stadium holding the most matches

```sql
select
    s.stadium_name,
    s.country,
    s.city,
    count(m.id) as total_matches
from stadiums s
join matches m
on s.id = m.stadium_id
group by
    s.stadium_name,
    s.country,
    s.city
order by total_matches desc
limit 1;
```

---

## 4. Count revenue generated per match

```sql
select
    match_id,
    sum(price) as revenue
from tickets
where status = 'BOOKED'
group by match_id;
```

---

## 5. Show how many tickets have been sold for each match

```sql
select
    t.match_id,
    count(*) as tickets_sold
from tickets t
where t.status = 'BOOKED'
group by t.match_id;
```

---

## 6. Find all bookings of a particular user

```sql
select
    b.id as booking_id,
    u.full_name,
    t.seat_number,
    t.ticket_type,
    t.price,
    b.payment_status,
    b.booking_date
from bookings b
join tickets t
on b.ticket_id = t.id
join users u
on b.user_id = u.id
where u.id = 1;
```

---

## 7. Show all booked tickets

```sql
select
    t.id as ticket_id,
    t.seat_number,
    t.ticket_type,
    t.price,
    t.status,
    m.match_date,
    m.stage
from tickets t
join matches m
on t.match_id = m.id
where t.status = 'BOOKED';
```

---

## 8. Show available tickets for Match ID 1

```sql
select *
from tickets
where status = 'AVAILABLE'
and match_id = 1;
```

---

## 9. List all upcoming matches

```sql
select *
from matches
where match_date > current_date
order by match_date;
```

---

# Sample Data

## Insert Users

```sql
insert into users(full_name,email,phone,country)
values
('shyam','shyam@gmail.com',545435435,'China');
```

---

## Insert Teams

```sql
insert into teams(team_name, country, coach, fifa_rank)
values
('England', 'England', 'Thomas Tuchel', 4),
('France', 'France', 'Didier Deschamps', 3),
('Spain', 'Spain', 'Luis de la Fuente', 2);
```

---

## Insert Matches

```sql
insert into matches(
  home_team_id,
  away_team_id,
  stadium_id,
  match_date,
  kickoff_time,
  stage
)
values
(3,4,1,'2026-07-15','20:00:00','Semi-Final'),
(2,1,2,'2026-07-16','19:00:00','Semi-Final'),
(4,2,3,'2026-07-18','19:00:00','Third Place'),
(3,1,1,'2026-07-19','20:00:00','Final');
```

---

## Insert Tickets

```sql
insert into tickets(match_id, seat_number, ticket_type, price, status)
values
(4,'A1','VIP',500,'AVAILABLE'),
(4,'A2','VIP',500,'BOOKED'),
(4,'A3','VIP',500,'AVAILABLE'),
(4,'B1','REGULAR',200,'BOOKED'),
(4,'B2','REGULAR',200,'AVAILABLE');
```

---

## Insert Bookings

```sql
insert into bookings(user_id, ticket_id, payment_status, booking_date)
values
(1,5,'PAID','2026-07-10'),
(2,7,'PAID','2026-07-10'),
(3,9,'PENDING','2026-07-11'),
(1,11,'PAID','2026-07-11'),
(4,13,'CANCELLED','2026-07-11'),
(9,15,'PAID','2026-07-12'),
(10,17,'PAID','2026-07-12'),
(11,19,'PENDING','2026-07-12'),
(1,21,'PAID','2026-07-13'),
(12,23,'PAID','2026-07-13');
```
