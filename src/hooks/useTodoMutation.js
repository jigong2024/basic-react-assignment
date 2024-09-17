import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo, postTodo, toggleTodo } from "../api/TodoClient";

export const useCreateTodosMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (todo) => postTodo(todo),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};

export const useToggleTodoMutaiton = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id, completed) => toggleTodo(id, completed),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};
