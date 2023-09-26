import { motion } from 'framer-motion';
import { Sliders } from '../Sliders';
import logo from '../../imgs/logoE.jpg'
import '../../styles/hero.css';

export default function Hero() {
    return (
        <>
            <Sliders />
            <div id="home" className="info">
                <div className="global">
                    <div className="textoL">
                        <motion.img className='logoss'
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 2 }}
                            src={logo}
                        />
                          
                    </div>
                    <div className="textoR">
                        <motion.span
                            initial={{ opacity: 0, scale: 0.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 3 }}
                        >
                        </motion.span>
                    </div>
                </div>
            </div>
        </>
    )
}
