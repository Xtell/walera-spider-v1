async function makeRequest(method, endPoint, headers = {}, data = null) {
  const baseUrl = "https://waleraspider.ml/api/";
  let response = await fetch(baseUrl + endPoint, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },

    body: data ? JSON.stringify(data) : undefined,
  });
  return response;
  // .then((response) => {
  //   return response;
  // })
  // .catch((error) => {
  //   return error;
  // });
}

export async function getUserToken(nickName, password) {
  let data = {
    NickName: nickName,
    Password: password,
  };
  return await makeRequest("POST", "Authentication/token", {}, data);
  // .then((response) => {
  //   return response;
  // })
  // .catch((error) => {
  //   return error;
  // });
}
export async function getUserId(token) {
  return await makeRequest("GET", "Users/current", {
    Authorization: "Bearer " + token,
  });
}
export async function getAllUsers(token) {
  return await makeRequest("GET", "Users", {
    Authorization: "Bearer " + token,
  });
}
export async function getUserInfo(token, userId) {
  return await makeRequest("GET", `Users/${userId}`, {
    Authorization: "Bearer " + token,
  });
}
export async function getCurrentUserFriends(token) {
  return await makeRequest("GET", "Users/friends", {
    Authorization: "Bearer " + token,
  });
}
export async function getUserFriends(token, userId) {
  return await makeRequest("GET", "Users/friends", {
    Authorization: "Bearer " + token,
  });
}
export async function addFriend(token, userId, friendId) {
  const data = {
    UserId: userId,
    FriendId: friendId
  };
  return await makeRequest("POST", "Users/add_friend", {
    Authorization: "Bearer " + token, 
  }, data);
}
export async function deleteFriend(token, userId, friendId) {
  const data = {
    UserId: userId,
    FriendId: friendId
  };
  return await makeRequest("DELETE", "Users/delete_friend", {
    Authorization: "Bearer " + token, 
  }, data);
}
export async function createUser(name, lastName, nickName, password) {
  const data = {
    Name: name,
    LastName: lastName,
    Nickname: nickName,
    Password: password
  };
  return await makeRequest("POST", "Users/create",{}, data);
}
export async function updateUser(data) {
  return await makeRequest("POST", "Users/update", {
    Authorization: "Bearer " + token
  }, data);
}
