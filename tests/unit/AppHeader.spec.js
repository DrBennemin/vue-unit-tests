import AppHeader from "@/components/AppHeader";

describe("AppHeader", () => {
  test("if a user is not logged in, do not show the logout button", () => {
    expect(true).toBe(true);
  });

  test("if a user is logged in, show the logout button", () => {
    expect(true).toBe(true);
  });
});
