// import { ValidationError, useForm } from "@formspree/react";
import { motion } from 'framer-motion'
// import { useAtom } from "jotai";
// import { currentProjectAtom, projects } from './Projects'

const Section = (props) => {
  const { children, mobileTop } = props

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start
  ${mobileTop ? 'justify-start md:justify-center' : 'justify-center'}
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  )
}

export const Interface = (props) => {
  const { setSection } = props
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection setSection={setSection} />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}

const AboutSection = (props) => {
  const { setSection } = props
  return (
    <Section mobileTop>
      <h1 className="text-4xl md:text-6xl font-extrabold leading-snug mt-8 md:mt-0">
        <section className=" w-fit h-fit top-[50%] max-w-sm:left-10 md:left-1/4  ">
          <svg
            width="360"
            height="180"
            viewBox="0 0 200 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.3438 52.25C31.4062 52.25 27.9375 49.9479 27.9375 45.3438C27.9375 42.7188 29.5938 37.4792 32.9062 29.625C36.2188 21.75 37.875 16.2917 37.875 13.25C37.875 11.5417 37.2396 10.3333 35.9688 9.625C34.7188 8.89583 32.8958 8.53125 30.5 8.53125C28.125 8.53125 25.7083 8.73958 23.25 9.15625C20.7917 9.57292 19.2083 9.78125 18.5 9.78125C17.8125 9.78125 17.4688 9.46875 17.4688 8.84375C17.4688 8.03125 18.9375 6.95833 21.875 5.625C27.5208 3.04167 33.7396 1.75 40.5312 1.75C45.9062 1.75 49.9271 2.71875 52.5938 4.65625C55.2812 6.59375 56.625 9.73958 56.625 14.0938C56.625 16.6771 56.1667 19.9167 55.25 23.8125C54.3333 27.6875 53.4167 31.3333 52.5 34.75C51.6042 38.1667 51.1562 40.5104 51.1562 41.7812C51.1562 43.0521 51.3958 43.9375 51.875 44.4375C52.4792 45.0625 53.6458 45.375 55.375 45.375C56.4375 45.375 57.0312 45.4896 57.1562 45.7188C57.3021 45.9479 57.375 46.1875 57.375 46.4375C57.375 47.3958 56.9375 48.1771 56.0625 48.7812C52.75 51.0938 46.8438 52.25 38.3438 52.25ZM20.1562 29.625L28.1562 29.4375C29.6146 29.4375 30.3438 29.8646 30.3438 30.7188C30.3438 31.3229 30 31.8021 29.3125 32.1562C26.8958 33.3854 22.7292 34.1667 16.8125 34.5C15.125 37.8333 14.2812 40.7604 14.2812 43.2812C14.2812 44.4062 14.4271 45.4479 14.7188 46.4062C15.0104 47.3438 15.1562 48.0208 15.1562 48.4375C15.1562 49.5417 14.4583 50.2917 13.0625 50.6875C11.6667 51.0625 9.61458 51.25 6.90625 51.25C4.21875 51.25 2.44792 51.0104 1.59375 50.5312C0.739583 50.0312 0.3125 49.1562 0.3125 47.9062C0.3125 45.5729 0.989583 43 2.34375 40.1875C3.71875 37.375 5.46875 34.6875 7.59375 32.125C9.71875 29.5417 12.0729 27.0104 14.6562 24.5312C17.2396 22.0521 19.75 19.9167 22.1875 18.125C27.6042 14.1042 31.2917 12.0938 33.25 12.0938C34.1458 12.0938 34.5938 12.3646 34.5938 12.9062C34.5938 13.4479 34.1562 14.0521 33.2812 14.7188C31.4271 16.0729 29.2083 18.1354 26.625 20.9062C24.0417 23.6771 21.7396 26.5833 19.7188 29.625H20.1562ZM72.125 18.8438L86.9375 18.5C87.4792 18.5 87.8854 18.6667 88.1562 19C88.4271 19.3125 88.5625 19.6042 88.5625 19.875C88.5625 20.1458 88.4896 20.5938 88.3438 21.2188C88.1979 21.8438 88.0104 22.6042 87.7812 23.5C87.5521 24.375 87.4062 24.9375 87.3438 25.1875C88.9688 23.25 91 21.5417 93.4375 20.0625C95.875 18.5833 98.0208 17.8438 99.875 17.8438C103.812 17.8438 105.781 18.6979 105.781 20.4062C105.781 22.0938 105.25 24.125 104.188 26.5C103.125 28.8542 102.125 30.4062 101.188 31.1562C100.729 31.4896 100.167 31.6562 99.5 31.6562C98.8542 31.6562 98.25 31.4479 97.6875 31.0312C95.1667 29.1562 92.4167 28.2188 89.4375 28.2188C88.2917 28.2188 87.2917 28.3021 86.4375 28.4688C85.625 31.2604 84.3333 35.3646 82.5625 40.7812C80.7917 46.1771 79.8125 49.1875 79.625 49.8125C79.3125 50.7917 78.7292 51.2812 77.875 51.2812C74.8542 51.2812 71.6146 51.4375 68.1562 51.75C64.6979 52.0833 62.7083 52.25 62.1875 52.25C61.6875 52.25 61.2917 52.1042 61 51.8125C60.7292 51.5417 60.5938 51.2188 60.5938 50.8438C60.5938 50.4479 61.0312 49.0521 61.9062 46.6562C62.8021 44.2396 63.7812 41.6458 64.8438 38.875C65.9271 36.1042 66.9062 33.0625 67.7812 29.75C68.6771 26.4375 69.125 23.7188 69.125 21.5938L69.0938 20.4062C69.0938 19.3646 70.1042 18.8438 72.125 18.8438ZM135.062 6.9375C135.062 9.16667 133.823 11.1146 131.344 12.7812C128.885 14.4271 126.281 15.25 123.531 15.25C120.802 15.25 118.677 14.6979 117.156 13.5938C115.635 12.4688 114.875 11.1042 114.875 9.5C114.875 7.89583 115.458 6.4375 116.625 5.125C117.792 3.8125 119.302 2.78125 121.156 2.03125C123.031 1.28125 125.062 0.90625 127.25 0.90625C129.438 0.90625 131.281 1.48958 132.781 2.65625C134.302 3.80208 135.062 5.22917 135.062 6.9375ZM126.281 45.7188C127.698 45.7188 129.615 45.3854 132.031 44.7188C134.469 44.0312 136.24 43.4271 137.344 42.9062C138.448 42.3646 139.219 42.0938 139.656 42.0938C140.531 42.0938 140.969 42.5312 140.969 43.4062C140.969 43.8021 140.646 44.25 140 44.75C137.875 46.3333 134.052 47.9792 128.531 49.6875C123.01 51.3958 118.083 52.25 113.75 52.25C111.062 52.25 108.812 51.8229 107 50.9688C105.188 50.1146 104.281 48.8125 104.281 47.0625C104.281 46 105.188 43.3958 107 39.25C110.417 31.3958 112.125 25.4792 112.125 21.5L112.094 20.3125C112.094 19.2708 113.104 18.75 115.125 18.75L130.562 18.4062C131.104 18.4062 131.51 18.5729 131.781 18.9062C132.052 19.2188 132.188 19.5729 132.188 19.9688C132.188 21.4062 131.531 23.7812 130.219 27.0938C128.906 30.3854 127.594 33.625 126.281 36.8125C124.969 40 124.312 42.2812 124.312 43.6562C124.312 45.0312 124.969 45.7188 126.281 45.7188ZM159.531 44.3125C163.448 44.3125 166.719 41.3125 169.344 35.3125C170.552 32.5625 171.156 30.3333 171.156 28.625C171.156 26.9167 170.865 25.7396 170.281 25.0938C169.719 24.4479 168.594 24.125 166.906 24.125C165.24 24.125 163.427 24.9062 161.469 26.4688C159.531 28.0104 157.969 29.9583 156.781 32.3125C155.594 34.6667 155 36.7917 155 38.6875C155 40.5625 155.417 41.9688 156.25 42.9062C157.083 43.8438 158.177 44.3125 159.531 44.3125ZM175.781 17.8438L190.094 18.5C190.635 18.5 191.042 18.6667 191.312 19C191.583 19.3125 191.719 19.6667 191.719 20.0625C191.719 21.5833 191.083 24.0104 189.812 27.3438C188.562 30.6562 187.302 33.9479 186.031 37.2188C184.781 40.4688 184.156 42.625 184.156 43.6875C184.156 44.7292 184.312 45.3958 184.625 45.6875C184.958 45.9792 185.583 46.125 186.5 46.125C187.417 46.125 189.083 45.6875 191.5 44.8125C193.938 43.9167 195.583 43.2396 196.438 42.7812C197.312 42.3229 197.979 42.0938 198.438 42.0938C199.25 42.0938 199.656 42.4583 199.656 43.1875C199.656 44.7292 196.531 46.75 190.281 49.25C188.177 50.1042 185.635 50.8125 182.656 51.375C179.698 51.9583 176.688 52.25 173.625 52.25C168.521 52.25 165.448 50.625 164.406 47.375C161.156 50.625 156.781 52.25 151.281 52.25C147.51 52.25 144.323 51.3438 141.719 49.5312C138.885 47.5521 137.469 44.4375 137.469 40.1875C137.469 35.7083 138.792 31.5833 141.438 27.8125C144.333 23.625 148.208 20.7396 153.062 19.1562C155.75 18.2812 158.635 17.8438 161.719 17.8438C166.448 17.8438 170.125 19.0104 172.75 21.3438C172.771 21.2188 172.781 21.0208 172.781 20.75L172.75 19.4062C172.75 18.3646 173.76 17.8438 175.781 17.8438Z"
              fill="white"
            />
          </svg>
        </section>
        <br />
        <span className="bg-black/20 text-white px-2 backdrop-blur-sm rounded-md  italic">
          Mehmanparast
        </span>
      </h1>
      <motion.p
        className="text-lg text-gray-600 mt-4"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        A Professional Gamer
        <br />
        And Streamer
      </motion.p>
      <motion.button
        onClick={() => setSection(3)}
        className={`bg-indigo-600 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-4 md:mt-16`}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        Contact me
      </motion.button>
    </Section>
  )
}

const skills = [
  {
    title: 'Minecraft',
    level: 80,
  },
  {
    title: 'Grand Theft Auto V',
    level: 90,
  },
  {
    title: 'Elden Ring',
    level: 90,
  },
  {
    title: 'Call of Duty: Warzone',
    level: 60,
  },
  {
    title: 'Apex Legends',
    level: 40,
  },
]
const languages = [
  {
    title: ' Deutsch',
    level: 100,
  },
  {
    title: '🇺🇸 English',
    level: 80,
  },
  {
    title: '🇯🇵 Japanese',
    level: 20,
  },
]

const SkillsSection = () => {
  return (
    <Section>
      <motion.div className="w-full" whileInView={'visible'}>
        <h2 className="text-3xl md:text-5xl font-bold text-white">Skills</h2>
        <div className="mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-full md:w-64" key={index}>
              <motion.h3
                className="text-lg md:text-xl font-bold text-gray-100"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-indigo-500 rounded-full "
                  style={{ width: `${skill.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mt-10 text-white">
            Languages
          </h2>
          <div className="mt-8 space-y-4">
            {languages.map((lng, index) => (
              <div className="w-full md:w-64" key={index}>
                <motion.h3
                  className="text-lg md:text-xl font-bold text-gray-100"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 2 + index * 0.2,
                      },
                    },
                  }}
                >
                  {lng.title}
                </motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-indigo-500 rounded-full "
                    style={{ width: `${lng.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 2 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  )
}

const ProjectsSection = () => {
  // const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  // const nextProject = () => {
  //   setCurrentProject((currentProject + 1) % projects.length);
  // };

  // const previousProject = () => {
  //   setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  // };

  return (
    <Section>
      <div className="flex w-full h-full gap-8 items-center justify-center">
        {/* <button
          className="hover:text-indigo-600 transition-colors"
          onClick={previousProject}
        >
          ← Previous
        </button>
        <h2 className="text-3xl md:text-5xl font-bold">Projects</h2>
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={nextProject}
        >
          Next →
        </button> */}
      </div>
    </Section>
  )
}

const ContactSection = () => {
  // const [state, handleSubmit] = useForm("mayzgjbd");
  // return (
  //   <Section>
  //     <h2 className="text-3xl md:text-5xl font-bold">Contact me</h2>
  //     <div className="mt-8 p-8 rounded-md bg-white bg-opacity-50 w-96 max-w-full">
  //       {state.succeeded ? (
  //         <p className="text-gray-900 text-center">Thanks for your message !</p>
  //       ) : (
  //         <form onSubmit={handleSubmit}>
  //           <label for="name" className="font-medium text-gray-900 block mb-1">
  //             Name
  //           </label>
  //           <input
  //             type="text"
  //             name="name"
  //             id="name"
  //             className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
  //           />
  //           <label
  //             for="email"
  //             className="font-medium text-gray-900 block mb-1 mt-8"
  //           >
  //             Email
  //           </label>
  //           <input
  //             type="email"
  //             name="email"
  //             id="email"
  //             className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
  //           />
  //           <ValidationError
  //             className="mt-1 text-red-500"
  //             prefix="Email"
  //             field="email"
  //             errors={state.errors}
  //           />
  //           <label
  //             for="email"
  //             className="font-medium text-gray-900 block mb-1 mt-8"
  //           >
  //             Message
  //           </label>
  //           <textarea
  //             name="message"
  //             id="message"
  //             className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
  //           />
  //           <ValidationError
  //             className="mt-1 text-red-500"
  //             errors={state.errors}
  //           />
  //           <button
  //             disabled={state.submitting}
  //             className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 "
  //           >
  //             Submit
  //           </button>
  //         </form>
  //       )}
  //     </div>
  //   </Section>
  // );
  return <h2>Part3</h2>
}
