import React from 'react'
import { motion } from "motion/react"
// import t from '/src/assets/images/imagem2.jpg'
import tt from './../../assets/images/imagem1.jpg'

function Carrossel(props) {
    console.log(props.images);
    
  return (
    <div>       
                <motion.div className=' w-dvh p-4 border-amber-300 border-1'>
                    <motion.div className="flex flex-row items-center justify-center gap-4">
                        {
                            props.images?.map((item, index) =>{
                                return(
                                    <motion.div className="overflow-clip box-content h-[280px] w-[340px] rounded shadow inline-block ">
                                        <img src={`/src${item.slice(4)}`} alt="imagens de projetos" key={index} className='w-fit h-fit'/>
                                    </motion.div>
                                )
                            })
                        }
                    </motion.div>
                </motion.div>
          
    </div>
  )
}

export default Carrossel