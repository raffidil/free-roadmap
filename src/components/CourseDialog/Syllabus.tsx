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

const Syllabus: React.FC<{ course?: Course }> = ({ course }) => {
  const colors = useColors();
  const router = useRouter();
  const [expanded, setExpanded] = useState<string | false>(false);
  const weekNo = router.query?.weekNo || undefined;

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

  return (
    <div className={styles.syllabus}>
      {lessonsGroupByWeek?.map((week, index) => (
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
                        expanded === lesson.id ? colors.grey[300] : "unset",
                    }}
                  >
                    <Typography>{lesson.name}</Typography>
                  </AccordionSummary>

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
                        <Typography>{lesson.description}</Typography>
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
                </Accordion>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Syllabus;
