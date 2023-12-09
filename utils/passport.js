import passport from "passport";
import LocalStrategy from "passport-local";
import { compare } from "bcryptjs";
import { db } from "./database";

const comparePasswords = async (password, hashedPassword) => {
  try {
    return await compare(password, hashedPassword);
  } catch (error) {
    throw new Error("Error comparing passwords");
  }
};

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await db.user.findUnique({ where: { username } });

      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }

      const passwordMatch = await comparePasswords(password, user.password);

      if (!passwordMatch) {
        return done(null, false, { message: "Incorrect password." });
      }

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await db.user.findUnique({ where: { id } });
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

export default passport;
