import { Role } from "./__generated__/dirty49374.schema";

export const adjustRole = (
  name: string | null | undefined,
  role: string | null | undefined,
): Role => {
  if (name === process.env.ADMIN_GITHUB_ID) {
    return Role.Admin;
  }
  return role ? role as Role : Role.Member;
};
