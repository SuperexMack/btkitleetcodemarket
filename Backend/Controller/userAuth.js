import jwt from "jsonwebtoken";
import express from "express";
import zod from "zod";
import { PrismaClient } from "@prisma/client";
import axios from "axios";
import dotenv from "dotenv"
const Prisma = new PrismaClient();
const router = express.Router();

dotenv.config()

const jwtSecret = process.env.SECRET;

const userChecker = zod.object({
  username: zod.string(),
  password: zod.string(),
  gender: zod.string(),
});

router.post("/signup", async (req, res) => {
  try {
    let { success } = userChecker.safeParse(req.body);
    if (!success)
      return res.json({ msg: "The data you provided is not up to the mark" });
    let { username, password, gender } = req.body;
    let userDataEntry = await Prisma.user.create({
      data: {
        username,
        password,
        gender,
      },
    });

    if (userDataEntry) {
      let url = "https://leetcode.com/graphql/";
      const mack = "MackWalker";

      const userQuestionsData = {
        operationName: "userSessionProgress",
        query: `
                 
                query userSessionProgress($username: String!) {
            allQuestionsCount {
                difficulty
                count
            }
            matchedUser(username: $username) {
                submitStats {
                acSubmissionNum {
                    difficulty
                    count
                    submissions
                }
                totalSubmissionNum {
                    difficulty
                    count
                    submissions
                }
                }
            }
            }
    
            `,
        variables: {
          username: mack,
        },
      };

      let userData = [];

      const caller = async() => {
        const datacollection = await axios.post(url, userQuestionsData);
        datacollection.data.data.matchedUser.submitStats.acSubmissionNum.map(
          (value) => {
            userData.push({
              solved: value.count,
            });
          }
        );
      };

      await caller()

      console.log(userData)

      console.log("main")

      let easy = userData[1].solved;
      let medium = userData[2].solved;
      let hard = userData[3].solved;


      console.log(easy + " " + medium + " " + hard)

      console.log("we are here part 1")

      let createUserQuestionsData = await Prisma.userSolved.create({
        data:{
            easySolved:easy,
            mediumSolved : medium,
            hardSolved:hard,
            UserId: userDataEntry.id
        }
      });

      console.log("we are here part 2")

      if(!createUserQuestionsData) return res.json({msg:"Unable to get the users problem solved"})

      let userToken = jwt.sign({ userDataEntry }, jwtSecret);
      return res.json({
        msg: `Welcome to the BTKITleetcodemarket ${username}`,
        token: userToken,
      });
    }
    
    else return res.json({ msg: "Something went wrong while creating the data" });
  } 
  catch (err) {
    console.log(`Something went wrong while creating the user ` + err);
    return res.json({
      msg: `Something went wrong while creating the user ` + err,
    });
  }
});

const userLoginchecker = zod.object({
  username: zod.string(),
  password: zod.string(),
});

router.post("/login", async (req, res) => {
  try {
    let { success } = userLoginchecker.safeParse(req.body);
    if (!success)
      return res.json({ msg: "The data you provided is not up to the mark" });
    let { username, password } = req.body;
    let userDataEntry = await Prisma.user.findFirst({
      where: {
        username,
        password,
      },
    });

    if (userDataEntry) {
      let userToken = jwt.sign({ userDataEntry }, jwtSecret);
      return res.json({
        msg: `Welcome Back to the BTKITleetcodemarket ${username}`,
        token: userToken,
      });
    } 
    else
      return res.json({
        msg: "Something went wrong while checking the data during login",
      });
  } 
  catch (err) {
    console.log(`Something went wrong while checking the user ` + err);
    return res.json({
      msg: `Something went wrong while checking the user ` + err,
    });
  }
});

export default router