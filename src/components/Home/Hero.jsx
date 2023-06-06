import { motion } from 'framer-motion';
import { Sliders } from '../Sliders';
import '../../styles/hero.css';

export default function Hero() {
    return (
        <>
            <Sliders />
            <div className="info">
                <div className="global">
                    <div className="textoL">
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 2 }}
                        >
                            Cafeteria y Cabañas Eluney
                        </motion.h1>
                    </div>
                    <div className="textoR">
                        <motion.span
                            initial={{ opacity: 0, scale: 0.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 3 }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Autem, dolore reprehenderit eos deserunt ab laboriosam quisquam suscipit dolor repudiandae cum doloremque nostrum et facilis,
                            sit nisi quae earum voluptate eligendi.
                        </motion.span>
                        \
                    </div>
                </div>
            </div>
        </>
    )
}
