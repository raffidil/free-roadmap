import { useState } from "react";
import { IconButton } from "@mui/material";
import { NextPage } from "next";
import WeekColumn from "../../components/WeekColumn";
import styles from "./index.module.scss";
import { courses } from "../../data";
import max from "lodash/max";
import { Course } from "../../types/types";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import SwiperType from "swiper/types/swiper-class";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import useResponsive from "@/hooks/useResponsive";

const useUpdater = () => {
  const [value, setValue] = useState(false);
  return () => setValue((v) => !v);
};

const Dashboard: NextPage<{
  weeks: {
    weekNo: number;
    courses: (Course | null)[];
  }[];
}> = ({ weeks }) => {
  const [swiperObj, setSwiperObj] = useState<SwiperType | undefined>(undefined);
  const update = useUpdater();
  const { isMobile } = useResponsive();

  const breakpoints: SwiperProps["breakpoints"] = {
    1200: { slidesPerView: 4 },
    900: { slidesPerView: 3 },
    600: { slidesPerView: 2 },
    0: { slidesPerView: 1 },
  };

  const onSwiperNext = () => {
    swiperObj?.slideNext();
  };

  const onSwiperPrev = () => {
    swiperObj?.slidePrev();
  };

  const onSlideChange = (s: SwiperType) => {
    setSwiperObj(Object(s));
    update();
  };

  const onSwiper = (s: SwiperType) => {
    setSwiperObj(Object(s));
    update();
  };

  return (
    <div className={styles.container}>
      <IconButton onClick={onSwiperPrev} disabled={swiperObj?.isBeginning}>
        <ArrowBackIosNewIcon />
      </IconButton>
      <Swiper
        observer
        observeParents
        className={styles.swiperRoot}
        spaceBetween={16}
        breakpoints={breakpoints}
        onSlideChange={onSlideChange}
        onSwiper={onSwiper}
      >
        {weeks.map((week, i) => (
          <SwiperSlide key={week.weekNo}>
            <WeekColumn courses={week.courses} weekNo={week.weekNo} />
          </SwiperSlide>
        ))}
      </Swiper>
      <IconButton onClick={onSwiperNext} disabled={swiperObj?.isEnd}>
        <ArrowForwardIosIcon />
      </IconButton>
    </div>
  );
};

export async function getStaticProps() {
  const weekCounts = max(
    courses
      .map((course) => course.lessons?.map((lesson) => lesson.weekNo))
      .flat(2)
  );

  const weeks = Array(weekCounts)
    .fill(null)
    .map((_, index) => {
      const coursesOfThisWeek = courses.map((course) => {
        const lessonsOfThisWeek = course.lessons?.filter(
          (lesson) => lesson.weekNo === index + 1
        );
        if (!lessonsOfThisWeek?.length) return null;
        return { ...course, lessons: lessonsOfThisWeek } as Course;
      });
      return { weekNo: index + 1, courses: coursesOfThisWeek ?? [] };
    });
  return {
    props: { weeks },
  };
}

export default Dashboard;
