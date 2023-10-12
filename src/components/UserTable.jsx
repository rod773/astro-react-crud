const UserTable = () => {
  return (
    <div>
      <h1>UserTable</h1>
      <table className="border-collapse table-auto w-full text-sm">
        <thead>
          <tr>
            <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
              Name
            </th>
            <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
              Enail
            </th>
            <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
              Password
            </th>
            <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
              Edit
            </th>
            <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
              Delete
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-slate-800">
          <tr>
            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
              Malcolm Lockyer
            </td>
            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
              1961
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
