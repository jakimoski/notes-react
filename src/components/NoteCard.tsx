import { Badge, Card, CardBody, Stack } from "react-bootstrap";
import { Tag } from "../types/types";
import { Link } from "react-router-dom";
import styles from "./NoteList.module.css";

type NoteCardProps = {
  id: string;
  title: string;
  tags: Tag[];
};

export default function NoteCard({ id, title, tags }: NoteCardProps) {
  return (
    <Card
      as={Link}
      to={`/${id}`}
      className={`h-100 text-reset text-decoration-none ${styles.card}`}
    >
      <CardBody>
        <Stack
          className="align-items-center justify-content-center h-100"
          gap={2}
        >
          <span className="fs-5">{title}</span>
          {tags.length > 0 && (
            <Stack
              gap={1}
              direction="horizontal"
              className="justify-content-center flex-wrap"
            >
              {tags.map((tag) => (
                <Badge className="text-truncate" key={tag.id}>
                  {tag.label}
                </Badge>
              ))}
            </Stack>
          )}
        </Stack>
      </CardBody>
    </Card>
  );
}
