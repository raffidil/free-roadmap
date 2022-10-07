# Free RoadMap

<img src="./public/favicon.svg" width="150px" style="left: calc(50% - 75px);position: relative"/>

🧭 [free-roadmap.vercel.app](https://free-roadmap.vercel.app/weeks)

👉🏽 This is a road-map for beginners who want to learn web development from scratch. It's based on real world experiences of a group of mentors and instructors and it's being used and improved over time.

💎 We will be happy to use your experiences about syllabus and the whole road-map flow.

## How to contribute

This is a NextJS (React) project with static data written in TS, no API call and backend.

### Installation

```sh
yarn
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

### Courses data

The data of each course is placed in `src/data/courses` directory as a single `ts` file which each of them is representing a single course.

To access all courses information you can import `courses` as a named module from `src/data`.

You can find all necessary types from [here](https://github.com/raffidil/free-roadmap/blob/9b160a64230be8f83ecc9877b6af48d0ad008b7d/src/types/types.ts).
