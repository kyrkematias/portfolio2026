"use client";
import { motion } from "framer-motion";
import services from "../../data/services";

export default function ServiceCard() {
  return (
    <div className="relative flex flex-col items-center w-full px-4 my-12">
      {/* Línea vertical central */}
      <div className="hidden md:block absolute top-0 left-1/2 h-full w-[1px] bg-[#2c2f3a] transform -translate-x-1/2 z-0" />

      <div className="flex flex-col gap-8 w-full z-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className={`
              relative flex items-start gap-4
              bg-[#0e0f1a] text-white rounded-xl border border-[#2c2f3a]
              p-5 sm:p-6 w-full md:max-w-2xl shadow-sm
              ${index % 2 === 0 ? "self-start md:self-start" : "self-end md:self-end"}
            `}
          >
            <div className="flex-shrink-0">
              <div className="p-[2px] rounded-full bg-gradient-to-r from-pink-500 to-blue-500 inline-block">
                <div className="bg-black rounded-full p-3 sm:p-4 text-white text-2xl sm:text-3xl">
                  {service.icon}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-light mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
