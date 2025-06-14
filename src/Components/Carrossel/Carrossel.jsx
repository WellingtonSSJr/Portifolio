import React from 'react'
import { motion } from "motion/react"
// import t from '/src/assets/images/imagem2.jpg'

function Carrossel(props) {
    const carrosssel = React.useRef()
    const [width, setWidth] = React.useState(0)

    React.useEffect(()=>{
        // console.log(carrosssel.current?.scrollWidth, carrosssel.current?.offsetWidth);
        setWidth(carrosssel.current?.scrollWidth - carrosssel.current?.offsetWidth)
    },[])
  return (
    <div>       
                <motion.div ref={carrosssel} className="max-w-full max-sm:w-93  overflow-hidden"
                    whileTap={{cursor: "grabbing"}}
                >
                    <motion.div className="flex flex-nowrap gap-2 w-max py-2"
                        drag="x"
                        dragConstraints={{right: 0, left: -width}}
                        initial={{x: 100}}
                        animate={{x:0}}
                        transition={{duration: 0.8}}
                    >
                        {props.images?.map((item, index) => (
                            // console.log(item)
                            
                            <motion.div
                                key={index}
                                className="max-sm:h-40 h-[280px] w-fir flex-shrink-0 rounded shadow"
                            >
                                <img
                                // src={`/src${item.slice(4)}`}
                                src={item.replace('/Portifolio', '')}
                                alt="imagem de projeto"
                                className="w-full h-full object-contain rounded shadow"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>          
    </div>
  )
}

export default Carrossel