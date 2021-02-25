const END_POINT = "https://todo-api.roto.codes";
const DELAY_TIME = 2000;

export const fetchData = async (userName) => {
  const response = await fetch(`${END_POINT}/${userName}`);

  if (!response.ok) {
    throw new Error("api를 가져오는데 문제가 발생하였습니다.");
  }

  return await response.json();
};

export const addData = async (userName, todoText) => {
  const response = await fetch(`${END_POINT}/${userName}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: todoText,
    }),
  });

  if (!response.ok) {
    throw new Error("add api를 가져오는데 문제가 발생하였습니다.");
  }
};

export const deleteData = async (userName, dataId) => {
  const response = await fetch(`${END_POINT}/${userName}/${dataId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("delete api를 가져오는데 문제가 발생하였습니다.");
  }
};

export const deleteEveryData = async (userName) => {
  const response = await fetch(`${END_POINT}/${userName}/all`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("전체 데이터를 삭제하는데 문제가 발생하였습니다.");
  }
};

export const toggleData = async (userName, dataId) => {
  const response = await fetch(`${END_POINT}/${userName}/${dataId}/toggle`, {
    method: "PUT",
  });

  if (!response.ok) {
    throw new Error("toggle api를 가져오는데 문제가 발생하였습니다.");
  }
};

export const userData = async () => {
  const response = await fetch(`${END_POINT}/users`);

  if (!response.ok) {
    throw new Error("users api를 가져오는데 문제가 발생하였습니다.");
  }

  return await response.json();
};
