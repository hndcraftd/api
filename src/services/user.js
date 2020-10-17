export default class UserService {
  constructor() {}

  create = async (ctx) => {
    const { email, id } = ctx.state.user;
    const {
      firstName,
      lastName,
      photo = "https://randomuser.me/api/portraits/lego/0.jpg",
    } = ctx.request.body;

    ctx.body = { id };
  };

  read = async (ctx) => {
    const { id } = ctx.params;

    const user = {};
    ctx.assert(user, 404, "User not found.");

    const { _id, email, firstName, lastName, photo } = user;
    ctx.body = { id: _id, email, firstName, lastName, photo };
  };
}
