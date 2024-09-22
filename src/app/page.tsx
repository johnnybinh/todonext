"use server";
import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { createTodosAction } from "./action";

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <NewTodos />
    </div>
  );
};

const NewTodos = () => {
  return (
    <div className="">
      <Card>
        <CardHeader>
          <p className="text-large text-default-500">Create New Todos</p>
        </CardHeader>
        <CardBody>
          <form action={createTodosAction} className="gap-4 flex flex-col">
            <Input
              type="text"
              label="Name"
              name="title"
              placeholder="Enter task name"
            />
            <Input
              type="text"
              label="Description"
              name="description"
              placeholder="Enter task description"
            />
            <Button type="submit" color="primary">
              Submit
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};
export default page;
