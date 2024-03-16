import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "./homepage.module.css";
import WritingEffect from "../component/WritingEffect";
import Projects from "../component/Projects";
import skills from "../component/TechSkills";
import Card from "../component/Card";
import SmallCard from "../component/SmallCard";
import GithubCalendar from "react-github-calendar";
import {
  BsLinkedin,
  BsFillTelephoneFill,
  BsGithub,
  BsWhatsapp,
} from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import resumePDF from "../resume/Suraj_Kumar_Gupta_Resume.pdf";
import { FaDownload } from "react-icons/fa";
import ExpCard from "../component/ExpCard";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const HomePage = () => {
  const [showExp, setExp] = useState(false);

  const showExperiance = () => {
    if (!showExp) {
      setExp(true);
    }
  };

  const showAbout = () => {
    setExp(false);
  };

  function handleResumeDownload() {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Suraj_Kumar_Gupta_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // If download attribute is not supported, open the file in a new window
    setTimeout(() => {
      if (!document.querySelector(":active")) {
        window.open(resumePDF, "_blank");
      }
    }, 100);
  }

  return (
    <Box className={styles.container}>
      <Flex className={styles.sec1} id="section1">
        <Flex justify={"center"} align={"center"}>
          <Fade left>
            <Box textAlign={"start"} w={{ base: "400px", md: "600px" }}>
              <Text fontSize={{ base: "18px", md: "25px" }}>
                Hello, my name is
              </Text>
              <Text fontSize={{ base: "30px", md: "50px" }}>Rao Farhad</Text>
              <Flex
                fontSize={{ base: "20px", md: "30px" }}
                align={"center"}
                gap={2}
              >
                <Text>I'm a </Text>
                <WritingEffect text={"Full Stack Developer."} />
              </Flex>
              <Box>
                <button
                  disabled
                  className={styles.resumebtn}
                >
                  <FaDownload className={styles.downloadIcon} />
                  <span>Resume</span>
                </button>
              </Box>
            </Box>
          </Fade>
        </Flex>

        <Box className={styles.small1}>
          <Fade right>
            <img src="https://imgur.com/i43hVmb.png" alt="profile_img" />
          </Fade>
        </Box>
      </Flex>
      <Box id="section2" w={"100%"} boxSize={"border-box"}>
        <Text className={styles.secName}>
          All<span className={styles.redTxt}>About</span> Me & My{" "}
          <span className={styles.redTxt}>Experience</span>
        </Text>
        <Flex pb={"50px"} display={"flex"} justifyContent={"center"} gap={5}>
          <Button
            onClick={showAbout}
            bg={showExp ? null : "#f51720"}
            color={showExp ? "black" : "white"}
            _hover={"none"}
            fontSize={{ base: "14px", md: "16px" }}
          >
            About me
          </Button>
          <Button
            bg={showExp ? "#f51720" : null}
            color={showExp ? "white" : "black"}
            _hover={"none"}
            fontSize={{ base: "14px", md: "16px" }}
          >
            Experience
          </Button>
        </Flex>
        <Flex className={styles.sec2}>
          <Zoom>
            <Box></Box>
            <Box className={styles.aboutSec}>
              {showExp ? (
                <ExpCard />
              ) : (
                <>
                  {" "}
                  <Box>
                    <ul>
                      <li>
                        Hello! My name is Rao Farhad and I am a Full Stack
                        Developer, passionate about building digital products
                        that improve everyday experience for people. I love to
                        work on exciting projects that test what I've learnt,
                        whilst being exposed to the power and potential of the
                        ever-evolving technologies around us. I'm always looking
                        for better, more optimized, ethical and accessible ways
                        to solve the common problems that we are facing with our
                        day-to-day life.
                      </li>
                    </ul>
                  </Box>
                </>
              )}
            </Box>
          </Zoom>
        </Flex>
      </Box>
      <Box className={styles.sec3} id="section3">
        <Text className={styles.secName}>
          My <span className={styles.redTxt}>Creativity</span>And{" "}
          <span className={styles.redTxt}>Projects</span>
        </Text>
        {/* <Box className={styles.projSec}>
          <Zoom>
            {Projects.map((e) => {
              return <Card {...e} />;
            })}
          </Zoom>
        </Box> */}
      </Box>
      <Box id="section4" min-height="100vh">
        <Text className={styles.secName}>
          My
          <span className={styles.redTxt}>Technical</span>Skills
          <Zoom>
            <Box className={styles.sec4}>
              {skills.map((e) => {
                return <SmallCard {...e} />;
              })}
            </Box>
          </Zoom>
        </Text>
      </Box>
      <Box id="section5">
        <Zoom>
          <Text className={styles.secName}>
            Github <span className={styles.redTxt}>Overview</span>
          </Text>
          <Flex
            p={10}
            gap={10}
            background={"#050A30"}
            color={"white"}
            justify={"space-between"}
            flexDir={"column"}
          >
            <Flex justify={"center"}>
              <a href="https://github.com/Surajbnp/github-readme-stats">
                <img
                  alt="Rao-faarhad's Github Stats"
                  src="https://github-readme-stats.vercel.app/api?username=Rao-faarhad&show_icons=true&count_private=true&theme=react&hide_border=true&bg_color=0D1117"
                />
              </a>
            </Flex>
            <Flex justify={"center"}>
              <GithubCalendar username="Rao-faarhad" />
            </Flex>
          </Flex>
        </Zoom>
      </Box>
      <Box id="section6" bg={"#edf2f8"}>
        <Text className={styles.secName}>
          Take A<span className={styles.redTxt}>Coffee</span>And{" "}
          <span className={styles.redTxt}>Chat</span> With Me
        </Text>
        <Flex className={styles.sec6}>
          <Fade left>
            <Flex className={styles.contact}>
              <Flex>
                <Box>
                  <BsLinkedin size={20} />
                </Box>
                <Box>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/rao-fahrad-99638b1b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  >
                    Rao Farhad
                  </a>
                </Box>
              </Flex>
              <Flex>
                <Box>
                  <BsGithub size={20} />
                </Box>
                <Box>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/Rao-faarhad"
                  >
                    Rao Farhad
                  </a>
                </Box>
              </Flex>
              <Flex>
                <Box>
                  <SiGmail size={20} />
                </Box>
                <Box>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="mailto:raofarhadwebdev@gmail.com"
                  >
                    raofarhadwebdev@gmail.com
                  </a>
                </Box>
              </Flex>
              <Flex>
                <Box>
                  <BsFillTelephoneFill size={20} />
                </Box>
                <Box>
                  <a rel="noreferrer" target="_blank" href="tel:3152361460">
                  +92 315 236 1460
                  </a>
                </Box>
              </Flex>
              <Flex>
                <Box>
                  <BsWhatsapp size={20} />
                </Box>
                <Box>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=919234851174"
                  >
                    +92 315 236 1460
                  </a>
                </Box>
              </Flex>
            </Flex>
          </Fade>

          <Box display={"flex"} align="center" justifyContent="center">
            <Fade right>
              <img
                src="https://mohit-portfolio.vercel.app/assets/contact.f495edec.svg"
                alt=""
              />
            </Fade>
          </Box>
        </Flex>
      </Box>
      <Text fontWeight={400} className={styles.lastTxt}>
        Designed & Made With <span style={{ color: "red" }}>❤</span> By SRJ,
        2023 All rights reserved.
      </Text>
    </Box>
  );
};

export default HomePage;
