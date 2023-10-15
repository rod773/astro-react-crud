import { user, users } from "../store/user";
import { useStore } from "@nanostores/react";

const UserForm = () => {
  const $user = useStore(user);
  const $users = useStore(users);

  const createOrUpdateUser = (e) => {
    user.set({
      _id: "",
      name: "",
      email: "",
      password: "",
    });
  };

  const setUser = (e) => {
    user.set({ ...$user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>UserForm</h1>
      <div className="rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400 flex justify-center p-8">
        <form onSubmit={createOrUpdateUser} className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="name"
              >
                Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="name"
                type="text"
                placeholder="Name"
                name="name"
                onClick={setUser}
                value={$user.name}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                onClick={setUser}
                value={$user.email}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="password"
                type="password"
                placeholder="******************"
                name="password"
                onClick={setUser}
                value={$user.password}
              />
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            >
              Button
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
