import { useColors } from "@/hooks";
import { Course } from "@/types/types";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Link,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { useState } from "react";
import styles from "./CourseDialog.module.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import max from "lodash/max";

const Syllabus: React.FC<{ course?: Course }> = ({ course }) => {
  const colors = useColors();
  const [expanded, setExpanded] = useState<string | false>(false);

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

  return (
    <div className={styles.syllabus}>
      {lessonsGroupByWeek?.map((week) => (
        <div key={week.weekNo}>
          <Typography
            color="text.secondary"
            className={styles.weekTitle}
            variant="h5"
          >
            Week {week.weekNo}
          </Typography>
          <div>
            {week.lessons?.map((lesson) => {
              const canCollapse =
                lesson.description || lesson.resources?.length;
              return (
                <Accordion
                  key={lesson.id}
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
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          className={styles.title}
                        >
                          Resources
                        </Typography>
                        <List dense>
                          {lesson?.resources?.map((resource) => (
                            <ListItem
                              key={resource.url}
                              className={styles.resourceListItem}
                            >
                              <ListItemIcon
                                className={styles.resourceListItemIcon}
                              >
                                {resource.type === "file" && (
                                  <DescriptionOutlinedIcon />
                                )}
                                {resource.type === "video" && (
                                  <PlayCircleOutlinedIcon />
                                )}
                                {(!resource.type ||
                                  resource.type === "link") && (
                                  <LinkOutlinedIcon />
                                )}
                              </ListItemIcon>
                              <Link
                                rel="noopener"
                                target="_blank"
                                href={resource.url}
                                underline="hover"
                              >
                                {resource?.label || resource.url}
                              </Link>
                            </ListItem>
                          ))}
                        </List>
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
