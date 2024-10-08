import { FormEvent, useRef, useState } from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
  Stack,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import CreatableSelect from "react-select/creatable";
import { NoteFormProps, Tag } from "../types/types";
import { v4 as uuidV4 } from "uuid";

export default function NoteForm({
  onSubmit,
  onAddTag,
  availableTags,
  title = "",
  body = "",
  tags = [],
}: NoteFormProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setTags] = useState<Tag[]>(tags);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    onSubmit({
      title: titleRef.current!.value,
      body: textRef.current!.value,
      tags,
    });

    navigate("..");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Row>
          <Col>
            <FormGroup controlId="title">
              <FormLabel>Title</FormLabel>
              <FormControl ref={titleRef} required defaultValue={title} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup controlId="tags">
              <FormLabel>Tags</FormLabel>
              <CreatableSelect
                onCreateOption={(label) => {
                  const newTag = { id: uuidV4(), label };
                  onAddTag(newTag);
                  setTags((prev) => [...prev, newTag]);
                }}
                value={selectedTags.map((tag) => {
                  return { label: tag.label, value: tag.id };
                })}
                options={availableTags.map((tag) => {
                  return { label: tag.label, value: tag.id };
                })}
                onChange={(newTags) => {
                  setTags(
                    newTags.map((tag) => {
                      return { label: tag.label, id: tag.value };
                    })
                  );
                }}
                isMulti
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup controlId="body">
              <FormLabel>Body</FormLabel>
              <FormControl
                ref={textRef}
                required
                as="textarea"
                rows={15}
                defaultValue={body}
              />
            </FormGroup>
          </Col>
        </Row>
        <Stack direction="horizontal" gap={2} className="justify-content-end">
          <Button type="submit" variant="primary">
            Save
          </Button>
          <Link to="..">
            <Button type="button" variant="outline-secondary">
              Cancel
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Form>
  );
}
