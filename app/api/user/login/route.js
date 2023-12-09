import passport from "passport";
import { withIronSession } from "next-iron-session";
import "@/utils/passport";
import { NextResponse } from "next/server";

const handler = async (req, res) => {
  const { username, password } = req.json();
  if (!username || !password) {
    NextResponse.json(
      { message: "Username and password required" },
      { status: 400 }
    );
  }
  return new Promise((resolve, reject) => {
    passport.authenticate("local", (err, user) => {
      if (err) {
        reject(err);
        return;
      }
      if (!user) {
        NextResponse.json(
          { message: "Authentication failed" },
          { status: 401 }
        );
        return;
      }
      req.logIn(user, (loginErr) => {
        if (loginErr) {
          reject(loginErr);
          return;
        }
        NextResponse.json(
          { message: "Authentication successful" },
          { status: 200 }
        );
        resolve();
      });
    })({ json: () => ({ username, password }) }, res);
  });
};

export const POST = withIronSession(handler, {
  password: "gsdhfgdf7sd6f87s6dfs7dg6s8d7g6s8d7g6sdg",
  cookieName: "session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production" ? true : false,
  },
});
