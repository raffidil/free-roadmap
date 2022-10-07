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

const lessons = compact(
  courses.map((course) =>
    course.lessons?.map((lesson) => ({
      ...lesson,
      courseName: course.name,
      courseId: course.id,
    }))
  )
).flat(2);

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

  console.log({ options });

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
          },
        },
      }));

    setOptions([...filteredCoursesByName, ...filteredLessonsByName]);
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
                <SearchIcon sx={{ fontSize: "32px" }} />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};

export default Search;
