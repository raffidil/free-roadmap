import { useColors } from "@/hooks";
import { Course } from "@/types/types";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import styles from "./CourseDialog.module.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import max from "lodash/max";
import ResourcesList from "../ResourcesList";
import { useRouter } from "next/router";
import theme from "../../theme/theme";
import compact from "lodash/compact";
import ExtensionIcon from "@mui/icons-material/Extension";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";

const Syllabus: React.FC<{ course?: Course }> = ({ course }) => {
  const colors = useColors();
  const router = useRouter();
  const [expanded, setExpanded] = useState<string | false>(false);
  const weekNo = router.query?.weekNo || undefined;
  const lessonIdParam = router.query?.lesson || undefined;

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const maxWeekNo =
    max(course?.lessons?.map((lesson) => lesson?.weekNo || 0)) || 0;
  const lessonsGroupByWeek = Array(maxWeekNo)
    .fill(null)
    .map((_, index) => ({
      lessons: course?.lessons?.filter(
        (lesson) => lesson?.weekNo === index + 1
      ),
      weekNo: index + 1,
    }));

  useEffect(() => {
    if (!weekNo) return;

    const removeQueryParam = (param: string) => {
      const { pathname, query } = router;
      const params = new URLSearchParams(query as any);
      params.delete(param);
      router.replace({ pathname, query: params.toString() }, undefined, {
        shallow: true,
      });
    };

    const element = document.getElementById(`week-no-${weekNo}`);
    element?.scrollIntoView({
      behavior: "smooth",
    });

    removeQueryParam("weekNo");
  }, [router, weekNo]);

  useEffect(() => {
    if (!lessonIdParam) return;

    const removeQueryParam = (param: string) => {
      const { pathname, query } = router;
      const params = new URLSearchParams(query as any);
      params.delete(param);
      router.replace({ pathname, query: params.toString() }, undefined, {
        shallow: true,
      });
    };
    setExpanded(lessonIdParam.toString());

    removeQueryParam("lesson");
  }, [lessonIdParam, router]);

  console.log({ expanded });

  return (
    <div className={styles.syllabus}>
      {lessonsGroupByWeek?.map((week, index) => {
        const weekExercises =
          course?.exercises?.filter((item) => item.weekNo === week.weekNo) ||
          [];
        const exercises = compact(
          week.lessons?.map((lesson) => lesson.exercises).flat(2)
        ).concat(weekExercises);
        const presentations =
          course?.presentations?.filter(
            (item) => item.weekNo === week.weekNo
          ) || [];
        return (
          <div key={week.weekNo + index}>
            <Typography
              id={`week-no-${week.weekNo}`}
              color="text.secondary"
              className={styles.weekTitle}
              variant="h5"
            >
              Week {week.weekNo}
            </Typography>
            <div>
              {week.lessons?.map((lesson, index) => {
                const canCollapse =
                  lesson.description || lesson.resources?.length;
                return (
                  <Accordion
                    key={lesson.id + index}
                    expanded={expanded === lesson.id}
                    onChange={canCollapse ? handleChange(lesson.id) : undefined}
                  >
                    <AccordionSummary
                      expandIcon={canCollapse ? <ExpandMoreIcon /> : undefined}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                      sx={{
                        bgcolor:
                          expanded === lesson.id
                            ? theme.palette.common.grey["200"]
                            : "unset",
                      }}
                    >
                      <Typography>{lesson.name}</Typography>
                    </AccordionSummary>

                    {canCollapse && (
                      <AccordionDetails>
                        {lesson.description && (
                          <>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              className={styles.title}
                            >
                              Description
                            </Typography>
                            <Typography sx={{ whiteSpace: "pre-wrap" }}>
                              {lesson.description}
                            </Typography>
                          </>
                        )}
                        {lesson.resources?.length && (
                          <>
                            {lesson.description?.length && (
                              <Divider className={styles.divider} />
                            )}
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              className={styles.title}
                            >
                              Resources
                            </Typography>
                            <ResourcesList resources={lesson?.resources} />
                          </>
                        )}
                      </AccordionDetails>
                    )}
                  </Accordion>
                );
              })}
              {Boolean(exercises.length) && (
                <Accordion
                  expanded={expanded === week.weekNo + "-exercises"}
                  onChange={handleChange(week.weekNo + "-exercises")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    className={styles.extra}
                    id="panel1bh-header"
                    sx={{
                      bgcolor:
                        expanded === week.weekNo + "-exercises"
                          ? theme.palette.common.grey[200]
                          : "unset",
                    }}
                  >
                    <ExtensionIcon
                      htmlColor={theme.palette.primary.main}
                      className={styles.puzzleIcon}
                    />
                    <Typography color="primary.main">Exercises</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ResourcesList resources={exercises} />
                  </AccordionDetails>
                </Accordion>
              )}
              {Boolean(presentations.length) && (
                <Accordion
                  expanded={expanded === week.weekNo + "-presentations"}
                  onChange={handleChange(week.weekNo + "-presentations")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    className={styles.extra}
                    id="panel1bh-header"
                    sx={{
                      bgcolor:
                        expanded === week.weekNo + "-presentations"
                          ? theme.palette.common.grey[200]
                          : "unset",
                    }}
                  >
                    <OndemandVideoOutlinedIcon
                      htmlColor={theme.palette.primary.main}
                      className={styles.puzzleIcon}
                    />
                    <Typography color="primary.main">Presentations</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ResourcesList resources={presentations} />
                  </AccordionDetails>
                </Accordion>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Syllabus;
