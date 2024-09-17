import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getTodos } from "../api/TodoClient";

export const useTodoFilteredQuey = () => {
  const [searchParams] = useSearchParams();

  const filter = searchParams.get("filter");

  return useQuery({
    queryKey: ["todos", filter],
    queryFn: () => getTodos(filter),
  });
};

export const useTodoQuery = (filter) => {
  return useQuery({
    queryKey: ["todos", filter],
    queryFn: () => getTodos(filter),
  });
};
