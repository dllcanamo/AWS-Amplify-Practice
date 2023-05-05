import { Auth } from "aws-amplify";

export const logout = async () => {
  try {
    await Auth.signOut();
  } catch (err) {
    console.error(err);
  }
};
