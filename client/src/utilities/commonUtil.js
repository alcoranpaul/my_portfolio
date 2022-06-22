import Home from "../components/Home/Home";
import aboutMe from "../components/Aboutme/aboutMe";
import resume from "../components/Resume/resume";
import contactMe from "../components/ContactMe/contactMe";
import Projects from "../components/Projects/Projects";
export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    component: Home,
  },
  {
    screen_name: "Resume",
    component: resume,
  },
  {
    screen_name: "Projects",
    component: Projects,
  },
  {
    screen_name: "About Me",
    component: aboutMe,
  },

  {
    screen_name: "Contact Me",
    component: contactMe,
  },


];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) {
    return -1;
  }
  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) {
      return i;
    }
  }
  return -1;
};
