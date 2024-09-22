import { db } from "@/db";
import { todos } from "@/db/schema";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { removeTodos } from "../action";

interface todosProps {
  id: number;
  title: string;
  status: string;
  description: string;
}

const page = async () => {
  const todosResult = await getTodos();

  console.log(todosResult);
  return (
    <div className="w-screen  h-screen flex flex-col gap-2 justify-center items-center">
      {todosResult.map((todo) => (
        <TodosItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          description={todo.description}
          status={todo.status}
        />
      ))}
      <Link href={"/"}>
        <Button color="primary">Go Back</Button>
      </Link>
    </div>
  );
};

async function getTodos() {
  return await db.select().from(todos);
}

function TodosItem(todo: todosProps) {
  const removeTodosWithId = removeTodos.bind(0, todo.id);
  return (
    <Card className={`py-4 w-1/4 flex border-4 `}>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{todo.title}</p>
        <small className="text-default-500">Status: {todo.status}</small>
        <h4 className="font-bold text-large">{todo.description}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2"></CardBody>
      <CardFooter>
        <form action={removeTodosWithId}>
          <Button color="danger" type="submit">
            Delete
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}

export default page;
