import {
  Autocomplete,
  InputAdornment,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import styles from "./Search.module.scss";
import { courses } from "../../data";
import compact from "lodash/compact";
import { useRouter } from "next/router";
import { UrlObject } from "url";
import cx from "classnames";
import SearchIcon from "@mui/icons-material/Search";
import theme from "@/theme/theme";

const lessons = compact(
  courses.map((course) =>
    course.lessons?.map((lesson) => ({
      ...lesson,
      courseName: course.name,
      courseId: course.id,
    }))
  )
).flat(2);

const lessonsResources = compact(
  lessons
    .map((lesson) =>
      lesson.resources?.map((resource) => ({
        ...resource,
        courseName: lesson.courseName,
        courseId: lesson.courseId,
        lessonName: lesson.name,
        lessonId: lesson.id,
        weekNo: lesson.weekNo,
      }))
    )
    .flat(2)
);

const coursesResources = compact(
  courses
    .map((course) =>
      course.resources?.map((resource) => ({
        ...resource,
        courseName: course.name,
        courseId: course.id,
      }))
    )
    .flat(2)
);

const lessonsExercises = compact(
  lessons
    .map((lesson) =>
      lesson.exercises?.map((exercise) => ({
        ...exercise,
        courseName: lesson.courseName,
        courseId: lesson.courseId,
        lessonName: lesson.name,
        lessonId: lesson.id,
        weekNo: lesson.weekNo,
      }))
    )
    .flat(2)
);

const coursesExercises = compact(
  courses
    .map((course) =>
      course.exercises?.map((exercise) => ({
        ...exercise,
        courseName: course.name,
        courseId: course.id,
      }))
    )
    .flat(2)
);

const coursesPresentations = compact(
  courses
    .map((course) =>
      course.presentations?.map((presentation) => ({
        ...presentation,
        courseName: course.name,
        courseId: course.id,
      }))
    )
    .flat(2)
);

export type Option = {
  title: string;
  subtitle?: string;
  type: string;
  path?: UrlObject;
};

const Search: React.FC<{
  inputClassName?: string;
  className?: string;
  visible?: boolean;
  onFocus?: () => void;
  onBlur?: (inputValue?: string) => void;
}> = ({ inputClassName, className, visible = false, onFocus, onBlur }) => {
  const [options, setOptions] = useState<Array<Option>>([]);
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (inputValue?.length === 0) {
      setOptions([]);
      return;
    }

    const filteredCoursesByName = courses
      .filter((course) =>
        course.name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
      )
      .map((course) => ({
        title: course.name,
        type: "Course",
        path: {
          query: {
            dialog: "course",
            course: course.id,
          },
        },
      }));

    const filteredLessonsByName = lessons
      .filter((lesson) =>
        lesson.name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
      )
      .map((lesson) => ({
        title: lesson.name,
        type: "Lesson",
        subtitle: lesson.courseName,
        path: {
          query: {
            dialog: "course",
            course: lesson.courseId,
            weekNo: lesson.weekNo,
            lesson: lesson.id,
          },
        },
      }));

    const filteredLessonsResourcesByLabel = lessonsResources
      .filter((resource) =>
        resource.label
          .toLocaleLowerCase()
          .includes(inputValue.toLocaleLowerCase())
      )
      .map((resource) => ({
        title: resource.label,
        type: "Resource",
        subtitle: `${resource.courseName} > ${resource.lessonName}`,
        path: {
          query: {
            dialog: "course",
            course: resource.courseId,
            weekNo: resource.weekNo,
            lesson: resource.lessonId,
          },
        },
      }));

    const filteredCoursesResourcesByLabel = coursesResources
      .filter((resource) =>
        resource.label
          .toLocaleLowerCase()
          .includes(inputValue.toLocaleLowerCase())
      )
      .map((resource) => ({
        title: resource.label,
        type: "Resource",
        subtitle: `${resource.courseName}`,
        path: {
          query: {
            dialog: "course",
            course: resource.courseId,
            resources: "1",
          },
        },
      }));

    const filteredLessonsExercisesByLabel = lessonsExercises
      .filter((exercise) =>
        exercise.label
          .toLocaleLowerCase()
          .includes(inputValue.toLocaleLowerCase())
      )
      .map((exercise) => ({
        title: exercise.label,
        type: "Exercise",
        subtitle: `${exercise.courseName} > ${exercise.lessonName}`,
        path: {
          query: {
            dialog: "course",
            course: exercise.courseId,
            weekNo: exercise.weekNo,
            lesson: exercise.weekNo + "-exercises",
          },
        },
      }));

    const filteredCoursesExercisesByLabel = coursesExercises
      .filter((exercise) =>
        exercise.label
          .toLocaleLowerCase()
          .includes(inputValue.toLocaleLowerCase())
      )
      .map((exercise) => ({
        title: exercise.label,
        type: "Exercise",
        subtitle: `${exercise.courseName} > Week ${exercise.weekNo}`,
        path: {
          query: {
            dialog: "course",
            course: exercise.courseId,
            weekNo: exercise.weekNo,
            lesson: exercise.weekNo + "-exercises",
          },
        },
      }));

    const filteredCoursesPresentationsByLabel = coursesPresentations
      .filter((presentation) =>
        presentation.label
          .toLocaleLowerCase()
          .includes(inputValue.toLocaleLowerCase())
      )
      .map((presentation) => ({
        title: presentation.label,
        type: "Presentation",
        subtitle: `${presentation.courseName} > Week ${presentation.weekNo}`,
        path: {
          query: {
            dialog: "course",
            course: presentation.courseId,
            weekNo: presentation.weekNo,
            lesson: presentation.weekNo + "-presentations",
          },
        },
      }));

    setOptions([
      ...filteredCoursesByName,
      ...filteredLessonsByName,
      ...filteredLessonsResourcesByLabel,
      ...filteredCoursesResourcesByLabel,
      ...filteredLessonsExercisesByLabel,
      ...filteredCoursesExercisesByLabel,
      ...filteredCoursesPresentationsByLabel,
    ]);
  }, [inputValue]);

  const onAutoCompleteChange = (value: any) => {
    if (!value?.path) return;
    router.push(value.path);
    setInputValue("");
  };

  return (
    <Autocomplete
      freeSolo
      id="search"
      className={cx(
        { [styles.visible]: visible, [styles.hidden]: !visible },
        className
      )}
      classes={{ groupLabel: styles.groupLabel }}
      options={options}
      groupBy={(option) => option?.type}
      getOptionLabel={(option) => (option as Option)?.title ?? ""}
      onChange={(e, value) => onAutoCompleteChange(value)}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderOption={(props, option) => (
        <ListItem {...props}>
          <ListItemText
            primary={option.title}
            secondary={option.subtitle ?? undefined}
            secondaryTypographyProps={{ style: { ...theme.typography.body2 } }}
          />
        </ListItem>
      )}
      onFocus={onFocus}
      onBlur={() => onBlur?.(inputValue)}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search"
          InputProps={{
            ...params.InputProps,
            className: inputClassName,
            startAdornment: (
              <InputAdornment position="start" sx={{ ml: "4px" }}>
                <SearchIcon
                  sx={{ fontSize: "32px" }}
                  htmlColor={visible ? "inherit" : "white"}
                />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};

export default Search;
