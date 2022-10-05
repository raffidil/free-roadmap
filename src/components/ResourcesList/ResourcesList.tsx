import { Resource } from "@/types/types";
import { Link, List, ListItem, ListItemIcon } from "@mui/material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import styles from "./ResourcesList.module.scss";

const ResourcesList: React.FC<{ resources: Array<Resource> }> = ({
  resources,
}) => {
  return (
    <List dense>
      {resources?.map((resource, index) => (
        <ListItem
          key={resource.url + index}
          className={styles.resourceListItem}
        >
          <ListItemIcon className={styles.resourceListItemIcon}>
            {resource.type === "file" && <DescriptionOutlinedIcon />}
            {resource.type === "video" && <PlayCircleOutlinedIcon />}
            {(!resource.type || resource.type === "link") && (
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
  );
};

export default ResourcesList;
