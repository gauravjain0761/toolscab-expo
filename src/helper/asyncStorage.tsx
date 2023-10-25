import AsyncStorage from "@react-native-async-storage/async-storage";

export const asyncKeys = {
  // clear in logout time
  token: "@token",
  user_info: "@user_info",
  notifiaction_data: "@notifiaction_data",

  // no clear in logout time
  guest: "@guest",
  fcm_token: "@fcm_token",
};

export const clearAsync = async () => {
  await AsyncStorage.multiRemove([
    asyncKeys.token,
    asyncKeys.user_info,
    asyncKeys.notifiaction_data,
  ]);
};

export const setAsyncToken = async (token: string) => {
  await AsyncStorage.setItem(asyncKeys.token, JSON.stringify(token));
};

export const getAsyncToken = async () => {
  const token = await AsyncStorage.getItem(asyncKeys.token);
  if (token) {
    return "Bearer " + JSON.parse(token);
  } else {
    return null;
  }
};
