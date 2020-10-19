import { firestore } from "../connections/firebase-admin.js";

export default class UserService {
  constructor() {}

  create = async ctx => {
    const { email, id } = ctx.state.user;
    const {
      firstName,
      lastName,
      photo = "https://randomuser.me/api/portraits/lego/0.jpg",
      company = ""
    } = ctx.request.body;

    const data = await firestore
      .collection("users")
      .add({ id, firstName, lastName, photo, company, email });

    ctx.body = { success: true, data: { id, firstName, lastName, photo, company, email } };
  };

  read = async ctx => {
    const { id } = ctx.params;

    const user = {};
    ctx.assert(user, 404, "User not found.");

    const { _id, email, firstName, lastName, photo } = user;
    ctx.body = { id: _id, email, firstName, lastName, photo };
  };

  update = () => {};

  delete = () => {};
}
