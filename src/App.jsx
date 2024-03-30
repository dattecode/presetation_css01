import {
  IconArrowRight,
  IconBrandGithubFilled,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import "./App.css";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Days02 from "./components/day02/Days02";
import Days03 from "./components/day03/Days03";
import Days04 from "./components/day04/Days04";
import Days06 from "./components/day06/Days06";
import Days07 from "./components/day07/Days07";
import Days08 from "./components/day08/Days08";

function App() {
  const [intro, setIntro] = useState(false);
  const [pageState, setPageState] = useState(false);

  const animateScrollsElement = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    if (intro) {
      const timer = setTimeout(() => {
        setPageState(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [intro]);

  return (
    <main className="containerPro">
      {!pageState ? (
        <div>
          <div className="intro">
            <h2 className={`ti1 ${intro ? "move1" : ""}`}>Bienvenidos </h2>
            <h2 className={`ti2 ${intro ? "move2" : ""}`}>a esta pequeña</h2>
            <h2 className={`ti3 ${intro ? "move3" : ""}`}>presentacion</h2>
          </div>
          <IconArrowRight
            className={`arrow ${intro ? "move4" : ""}`}
            onClick={() => setIntro(!intro)}
          />
        </div>
      ) : (
        <article className="contPage">
          <motion.section
            className="animation1"
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Days02 />
            <p>Una Buena Animacion con La Cual puedes interactuar</p>
          </motion.section>
          <section className="animation2">
            <motion.p
              variants={animateScrollsElement}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              Algunos efectos que podrian estar en una carga
            </motion.p>
            <motion.div
              variants={animateScrollsElement}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <Days03 />
            </motion.div>
          </section>
          <section className="animation3">
            <motion.div
              variants={animateScrollsElement}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <Days04 />
            </motion.div>
            <motion.p
              variants={animateScrollsElement}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              La animación fluye delicadamente, aportando un toque de magia y
              sorpresa
            </motion.p>
          </section>
          <section className="animation4">
            <motion.p
              variants={animateScrollsElement}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              La tarjeta combina diseño y tecnología para crear una experiencia
              interactiva verdaderamente innovadora.
            </motion.p>
            <motion.div
              variants={animateScrollsElement}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <Days07 />
            </motion.div>
          </section>
          <section className="animation5">
            <motion.div variants={animateScrollsElement}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}>

            <Days08 />
            </motion.div>
            <motion.p variants={animateScrollsElement}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}>
              Cada animación en la tarjeta está sincronizada a la perfección,
              creando una experiencia visual armoniosa.
            </motion.p>
          </section>
          <div className="contactCont">
            <h3> Contactame : </h3>
            <a
              href="https://www.linkedin.com/in/leonardo-v-496594274"
              target="_blank"
            >
              <IconBrandLinkedin className="iconContactLink" />
            </a>
            <a href="mailto:dattecode@gmail.com" target="_blank">
              <IconMail className="iconContact" />
            </a>
            <a href="https://github.com/dattecode" target="_blank">
              <IconBrandGithubFilled className="iconContactGit" />
            </a>
          </div>
        </article>
      )}
    </main>
  );
}

export default App;
